import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from './user-service.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private fb: FormBuilder, private http: HttpClient, private userService: UserService) { }

  readonly BaseURI = environment.apiEndpoint;

  formModel = this.fb.group({
    AppointmentDate: ['', Validators.required],
    AppointmentHour: ['', Validators.required]
  });

  registerAppointment() {
    let appDate = new Date(
      this.formModel.value.AppointmentDate.year, 
      this.formModel.value.AppointmentDate.month-1, 
      this.formModel.value.AppointmentDate.day
      );

    const body = {
      AppointmentDate: appDate,
      AppointmentHour: this.formModel.value.AppointmentHour,
        UserName: this.userService.getCurrentUser().UserName
    };
    console.log(body);
    return this.http.post(this.BaseURI + '/Appointment/CreateAppointment', body);
  }

  deleteAppointment(appointment) {
    return this.http.post(this.BaseURI + '/Appointment/DeleteAppointment', appointment);
  }

  EditAppointment(appointment) {
    return this.http.post(this.BaseURI + '/Appointment/EditAppointment', appointment);
  }
 
  getAllAppointments() {
    return this.http.get(this.BaseURI + '/Appointment/GetAppointments');
  }

  getUserAppointments(userName: string) {
    let headersParams = new HttpHeaders().append('Content-Type', 'application/json');;
    let paramsValues = new HttpParams().set("UserName", userName);

    return this.http.get(this.BaseURI + '/Appointment/GetAppointmentsForUser', { headers: headersParams, params: paramsValues });
  }

  getDateAppointments(date: Date) {
    let headersParams = new HttpHeaders().append('Content-Type', 'application/json');;
    let paramsValues = new HttpParams().set("Date", date.toLocaleDateString());

    return this.http.get(this.BaseURI + '/Appointment/GetAppointmentsByDay', { headers: headersParams, params: paramsValues });
  }

  changeDone(appointmentId: number) {
    const body = {
        Id: appointmentId
    };
    return this.http.post(this.BaseURI + '/Project/ChangeDone', body);
}

}