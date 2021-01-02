using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DogBarber.Infra;
using DogBarber.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DogBarber.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AppointmentController : ControllerBase
    {
        #region Fields
        private readonly IAppointmentService _appService;
        #endregion

        #region Ctor
        public AppointmentController(IAppointmentService appService)
        {
            _appService = appService;
        }
        #endregion

        #region Requests
        //Post Request
        //POST : /api/Appointment/CreateAppointment
        [HttpPost]
        [Route("CreateAppointment")]
        public async Task<object> CreateAppointment(RegisterAppointmentModel model)
        {
            try
            {
                if (await _appService.IsAppointmentExist(model))
                    return BadRequest(new { message = "Appointment is already exist" });

                var newApp = await _appService.AddAppointment(model);

                if (newApp != null)
                {
                    return Ok(newApp);
                }

                return BadRequest(new { message = "Operation failed, servers are down at the moment" });
            }

            catch (Exception e)
            {
                return BadRequest(new { e.Message });
            }
        }

        //POST : /api/Appointment/EditAppointment
        [HttpPost]
        [Route("EditAppointment")]
        public async Task<object> EditAppointment(EditAppointmentModel model)
        {
            try
            {
                if (!await _appService.IsAppointmentExistById(model.GuidID.ToString()))
                    return BadRequest(new { message = "Appointment is not exist" });

                var result = await _appService.EditAppointment(model);

                if (result)
                {
                    return Ok(result);
                }

                return BadRequest(new { message = "Operation failed, servers are down at the moment" });
            }

            catch (Exception e)
            {
                return BadRequest(new { e.Message });
            }
        }


        //POST : /api/Appointment/DeleteAppointment
        [HttpPost]
        [Route("DeleteAppointment")]
        public async Task<object> DeleteAppointment(EditAppointmentModel model)
        {
            try
            {
                if (!await _appService.IsAppointmentExistById(model.GuidID.ToString()))
                    return BadRequest(new { message = "Appointment is not exist" });

                var result = await _appService.DeleteAppointment(model.GuidID.ToString());

                if (result)
                {
                    return Ok(result);
                }

                return BadRequest(new { message = "Operation failed, servers are down at the moment" });
            }

            catch (Exception e)
            {
                return BadRequest(new { e.Message });
            }
        }


        [HttpGet]
        [Route("GetAppointments")]
        public async Task<ActionResult<IEnumerable<Appointment>>> GetAppointments()
        {
            try
            {
                return Ok(await _appService.GetAppointments());
            }

            catch (Exception e)
            {
                return BadRequest(new { e.Message });
            }
        }

        [HttpGet]
        [Route("GetUserAppointments")]
        public async Task<ActionResult<IEnumerable<Appointment>>> GetUserAppointments(string userName)
        {
            try
            {
                return Ok(await _appService.GetAppointmentsByName(userName));
            }

            catch (Exception e)
            {
                return BadRequest(new { e.Message });
            }
        }

        [HttpGet]
        [Route("GetDateAppointments")]
        public async Task<ActionResult<IEnumerable<Appointment>>> GetDateAppointments(DateTime date)
        {
            try
            {
                return Ok(await _appService.GetAppointmentsByDate(date));
            }

            catch (Exception e)
            {
                return BadRequest(new { e.Message });
            }
        }

        #endregion

    }
}