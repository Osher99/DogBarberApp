using DogBarber.Data;
using DogBarber.Helpers;
using DogBarber.Infra;
using DogBarber.Models;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DogBarber.DAL
{
    public class AppointmentRepository : IAppointmentRepository
    {
        private readonly DataContext _context;
        private readonly IConfiguration _config;
        public AppointmentRepository(DataContext context, IConfiguration config)
        {
            _context = context;
            _config = config;
        }

        public async Task<IEnumerable<Appointment>> GetAppointments()
        {
            return _context.Appointments.ToList();
        }

        public async Task<IEnumerable<Appointment>> GetAppointmentsForUser(string userName)
        {
            return _context.Appointments.Where(x => x.UserName == userName).ToList();
        }

        public async Task<IEnumerable<Appointment>> GetAppointmentsByDay(DateTime date)
        {
            return _context.Appointments.Where(x => x.AppointmentDate == date).ToList();
        }

        public async Task<bool> IsAppointmentExistById(string guidId)
        {
            var appointment = _context.Appointments.FirstOrDefault(x => x.GuidID.ToString() == guidId);
            if (appointment != null)
                return true;

            return false;
        }


        public async Task<bool> IsAppointmentExist(RegisterAppointmentModel appModel)
        {
            var appList = await this.GetAppointments();

            foreach (var item in appList)
            {
                if (appModel.AppointmentDate == item.AppointmentDate && appModel.AppointmentHour == item.AppointmentHour)
                {
                    return true;
                }
            }
            return false;
        }


        public async Task<bool> EditAppointment(EditAppointmentModel appModel)
        {
            try
            {
                var appointment =_context.Appointments.FirstOrDefault(app => app.GuidID.ToString() == appModel.GuidID.ToString());

                _context.Appointments.Remove(appointment);

                var editedApp = new Appointment()
                {
                    GuidID = appModel.GuidID,
                    AppointmentDate = appModel.AppointmentDate.AddDays(1),
                    AppointmentHour = appModel.AppointmentHour,
                    CreatedOn = appModel.CreatedOn,
                    UserName = appModel.UserName
                };
                await _context.Appointments.AddAsync(editedApp);
                await _context.SaveChangesAsync();

                return true;
            }

            catch (Exception e)
            {
                throw e;
            }
        }


        public async Task<Appointment> AddAppointment(RegisterAppointmentModel appModel)
        {
            try
            {
                if (await IsAppointmentExist(appModel))
                    throw new Exception("Appointment already exists, please try another hour");

                Appointment newApp = new Appointment()
                {
                    GuidID = Guid.NewGuid(),
                    UserName = appModel.UserName,
                    CreatedOn = DateTime.Now,
                    AppointmentDate = appModel.AppointmentDate.AddDays(1),
                    AppointmentHour = appModel.AppointmentHour
                };

                await _context.Appointments.AddAsync(newApp);
                await _context.SaveChangesAsync();

                return newApp;
            }

            catch (Exception e)
            {
                throw e;
            }
        }

        public async Task<bool> DeleteAppointmentAsync(string guidID)
        {
            try
            {
                var appToDelete = _context.Appointments.FirstOrDefault(app => app.GuidID.ToString() == guidID);

                if (appToDelete != null)
                {
                    _context.Appointments.Remove(appToDelete);
                    await _context.SaveChangesAsync();
                    return true;
                }
                return false;
            }
            catch (Exception e)
            {
                throw e;
            }
        }
    }
}
