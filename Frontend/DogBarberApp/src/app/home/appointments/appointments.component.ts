import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgbCalendar, NgbDatepickerConfig, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Appointment } from 'src/app/models/appointment';
import { User } from 'src/app/models/user';
import { AppointmentService } from 'src/app/shared/appointment-service.service';
import { UserService } from 'src/app/shared/user-service.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {

  constructor(
    private toastr: ToastrService, 
    private userService: UserService,
    private calendar: NgbCalendar,
    private appointmentService: AppointmentService,
    private config: NgbDatepickerConfig,
    private modalService: BsModalService
    ) {
      const current = new Date();
      config.minDate = { year: current.getFullYear(), month: 
      current.getMonth() + 1, day: current.getDate() };
        //config.maxDate = { year: 2099, month: 12, day: 31 };
      config.outsideDays = 'hidden';
     }
 
  private userDetails: User;
  private model: NgbDateStruct;
  private date: any;
  private appointmentList: Appointment[];
  private filteredList: Appointment[];
  private filterDate :any;
  private filterUserName :any;
  private modalRef: BsModalRef;
  private currentUser: User;
  private hourList: string[];
  private editDate: any;
  private editHour: string;

  ngOnInit() {
    this.hourList = ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"];
    this.currentUser = this.userService.getCurrentUser();
    this.filterDate = "";
    this.filterUserName = "";
    this.editDate = "";
    this.editHour = "";
    this.getAllAppointments();
  }

  getAllAppointments()  { 
    this.appointmentService.getAllAppointments().subscribe((res: any) => {
      if (res) {
        this.appointmentList = [];
        for (let i = 0; i<res.length; i++) {
          res[i].AppointmentDate = new Date(res[i].AppointmentDate).toLocaleDateString();
          res[i].CreatedOn = new Date(res[i].CreatedOn).toLocaleDateString();
           this.appointmentList.push(res[i]);
          }
          this.filteredList = this.appointmentList;
      }
    });
  }

  clearEditSelection() {
    this.hourList = ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"];
    this.editDate = "";
    this.editHour = "";
  }

  onEditDateSelect(){
    this.hourList = ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"];
    let appDate = new Date(
      this.editDate.year, 
      this.editDate.month-1, 
      this.editDate.day
      );
      let dateString = appDate.toLocaleDateString();
     
      if (this.appointmentList.length > 0){
    // let thisDateList = this.appointmentList.filter(x => new Date(x.appointmentDate).toLocaleDateString() == dateString);
    let thisDateList = [];
    for (let i = 0; i<this.appointmentList.length; i++){
      if (this.appointmentList[i].AppointmentDate.toString() == dateString){
        thisDateList.push(this.appointmentList[i]);
      }
    }
    for (let i = 0; i<thisDateList.length; i++){
      var index = this.hourList.indexOf(thisDateList[i].AppointmentHour);
      this.hourList.splice(index, 1);
    }
  }
  }

  
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
}
  

  clearSelection() {
    this.filterDate = "";
    this.filterUserName = "";
    this.filteredList = this.appointmentList;
  }

  onEditSubmit(appointment) {
    var confirmed = confirm("Are you sure to edit your appointment?");
    if (!confirmed) return;

    var app = new Appointment();

    let appDate = new Date(
      this.editDate.year, 
      this.editDate.month-1, 
      this.editDate.day
      );

    app.AppointmentDate = appDate;
    app.AppointmentHour = this.editHour;
    app.GuidID = appointment.GuidID;
    app.CreatedOn = appointment.CreatedOn;
    app.UserName = appointment.UserName;

    this.appointmentService.EditAppointment(app).subscribe((res: boolean) => {
    if (res) {
      this.editDate = "";
      this.editHour = "";
    this.toastr.success('Appointment edited successfully');
    this.getAllAppointments();
    this.modalRef.hide();
      }
  },
    (err: any) => {
      this.toastr.error('Our servers is down at the moment', 'Try again later');
    });
}

onRefreshList() {
  this.clearSelection();
  this.clearEditSelection();
  this.getAllAppointments();
  this.toastr.success('Appointments list refreshed successfully');
}

  onDeleteSubmit(appointment) {
    console.log(appointment);
    var confirmed = confirm("Are you sure to delete your appointment?");
    if (!confirmed) return;

    var app = new Appointment();
    app.GuidID = appointment.GuidID;

    this.appointmentService.deleteAppointment(app).subscribe((res: boolean) => {
      if (res) {
        this.editDate = "";
        this.editHour = "";
      this.getAllAppointments();
      this.modalRef.hide();
      this.toastr.success('Appointment removed successfully');
      }
    },
    (err: any) => {
        this.toastr.error('Our servers is down at the moment', 'Try again later');
    });
}

  onUserNameChange() {
    this.filteredList = this.appointmentList;
    if (this.filterUserName == "") {
      this.clearSelection();
      return;
    }
    this.filteredList = this.appointmentList.filter(x => x.UserName.toLowerCase().includes(this.filterUserName));
  }

  onDateSelect() { 
    let appDate = new Date(
      this.filterDate.year, 
      this.filterDate.month-1, 
      this.filterDate.day
      );
      let dateString = appDate.toLocaleDateString();
    this.filteredList = this.appointmentList.filter(x => x.AppointmentDate.toString() == dateString);
  }
}
