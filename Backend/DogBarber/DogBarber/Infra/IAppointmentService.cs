using DogBarber.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DogBarber.Infra
{
    public interface IAppointmentService
    {
        Task<Appointment> AddAppointment(RegisterAppointmentModel model);
        Task<IEnumerable<Appointment>> GetAppointments();
        Task<IEnumerable<Appointment>> GetAppointmentsByName(string modelUserName);
        Task<IEnumerable<Appointment>> GetAppointmentsByDate(DateTime modelDate);
        Task<bool> IsAppointmentExist(RegisterAppointmentModel appModel);
        Task<bool> IsAppointmentExistById(string guidID);

        Task<bool> EditAppointment(EditAppointmentModel appModel);
        Task<bool> DeleteAppointment(string guidID);
    }
}
