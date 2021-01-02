using DogBarber.Infra;
using DogBarber.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DogBarber.Services
{
    public class AppointmentService : IAppointmentService
    {
        #region Fields
        public readonly IAppointmentRepository _appointmentRepository;
        #endregion

        public AppointmentService(IAppointmentRepository appointmentRepository)
        {
            _appointmentRepository = appointmentRepository;
        }

        public async Task<Appointment> AddAppointment(RegisterAppointmentModel model)
        {
            return await _appointmentRepository.AddAppointment(model);
        }

        public async Task<IEnumerable<Appointment>> GetAppointments()
        {
            return await _appointmentRepository.GetAppointments();
        }

        public async Task<IEnumerable<Appointment>> GetAppointmentsByName(string modelUserName)
        {
            return await _appointmentRepository.GetAppointmentsForUser(modelUserName);
        }

        public async Task<IEnumerable<Appointment>> GetAppointmentsByDate(DateTime modelDate)
        {
            return await _appointmentRepository.GetAppointmentsByDay(modelDate);
        }

        public async Task<bool> IsAppointmentExist(RegisterAppointmentModel appModel)
        {
            return await _appointmentRepository.IsAppointmentExist(appModel);
        }
        public async Task<bool> IsAppointmentExistById(string guidID)
        {
            return await _appointmentRepository.IsAppointmentExistById(guidID);
        }

        public async Task<bool> EditAppointment(EditAppointmentModel model)
        {
            return await _appointmentRepository.EditAppointment(model);
        }

        public async Task<bool> DeleteAppointment(string guidID)
        {
            return await _appointmentRepository.DeleteAppointmentAsync(guidID);
        }
    }
}
