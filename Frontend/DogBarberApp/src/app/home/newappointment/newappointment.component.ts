import { Component, OnInit } from '@angular/core';
import { NgbCalendar, NgbDateStruct, NgbDatepickerConfig } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Appointment } from 'src/app/models/appointment';
import { User } from 'src/app/models/user';
import { AppointmentService } from 'src/app/shared/appointment-service.service';
import { UserService } from 'src/app/shared/user-service.service';

@Component({
  selector: 'app-newappointment',
  templateUrl: './newappointment.component.html',
  styleUrls: ['./newappointment.component.css']
})
export class NewappointmentComponent implements OnInit {
  constructor(
    private toastr: ToastrService, 
    private userService: UserService,
    private calendar: NgbCalendar,
    private appointmentService: AppointmentService,
    private config: NgbDatepickerConfig
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
  private hourList: string[];
  private appointmentList: Appointment[];

  ngOnInit() {
    this.appointmentService.formModel.reset();
    this.userDetails = this.userService.getCurrentUser();
    this.hourList = ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"];
    this.appointmentService.getAllAppointments().subscribe((res: any) => {
      if (res) {
        console.log(res);
        this.appointmentList = res;
        console.log(this.appointmentList);
      }
    });
  }

  onDateSelect(date){
    this.hourList = ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"];
    let appDate = new Date(
      this.appointmentService.formModel.value.AppointmentDate.year, 
      this.appointmentService.formModel.value.AppointmentDate.month-1, 
      this.appointmentService.formModel.value.AppointmentDate.day
      );
      let dateString = appDate.toLocaleDateString();
     
      if (this.appointmentList.length > 0){
    // let thisDateList = this.appointmentList.filter(x => new Date(x.appointmentDate).toLocaleDateString() == dateString);
    let thisDateList = [];
    for (let i = 0; i<this.appointmentList.length; i++){
      if (new Date(this.appointmentList[i].AppointmentDate).toLocaleDateString() == dateString){
        thisDateList.push(this.appointmentList[i]);
      }
    }

    for (let i = 0; i<thisDateList.length; i++){
      var index = this.hourList.indexOf(thisDateList[i].AppointmentHour);
      this.hourList.splice(index, 1);
    }
  }
}
  onSubmit() {
    let appDate = new Date(
      this.appointmentService.formModel.value.AppointmentDate.year, 
      this.appointmentService.formModel.value.AppointmentDate.month-1, 
      this.appointmentService.formModel.value.AppointmentDate.day
      );

    for (let i = 0; i<this.appointmentList.length; i++){

      if (this.appointmentList[i].AppointmentDate == appDate &&
        this.appointmentList[i].AppointmentHour == this.appointmentService.formModel.value.AppointmentHour) {
          this.toastr.error('Another appointment already exists in this hour, please choose another hour', 'Date Error');
          return;
        }
    }
    
    this.appointmentService.registerAppointment().subscribe(
      (result: any) => {
        if (result) {
        this.toastr.success('New Appointment created at !' + (new Date(result.AppointmentDate).toLocaleDateString()) +
         ' ' + result.AppointmentHour, 'Appointment Creation Process Successful');
        this.appointmentService.formModel.reset();
        } else {
          this.appointmentService.formModel.reset();
                  this.toastr.error('Appointment Creation Process failed!', 'Validation Error');
            }
          },
      err => {
        this.toastr.error(err.message, 'Server Error');
        this.appointmentService.formModel.reset();
        console.log(err);
      });
    }
  }