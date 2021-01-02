using DogBarber.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DogBarber.Infra
{
    public interface IAppointmentRepository
    {
        Task<IEnumerable<Appointment>> GetAppointments();
        Task<IEnumerable<Appointment>> GetAppointmentsForUser(string userName);
        Task<IEnumerable<Appointment>> GetAppointmentsByDay(DateTime date);
        Task<Appointment> AddAppointment(RegisterAppointmentModel appModel);
        Task<bool> IsAppointmentExist(RegisterAppointmentModel appModel);
        Task<bool> IsAppointmentExistById(string guidId);
        Task<bool> EditAppointment(EditAppointmentModel appModel);
        Task<bool> DeleteAppointmentAsync(string guidID);

    }
}
