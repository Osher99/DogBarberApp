using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DogBarber.Infra;
using DogBarber.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DogBarber.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        #region Fields
        private readonly IUserService _userService;
        #endregion

        #region Ctor

        public UserController(IUserService userService)
        {
            _userService = userService;
        }
        #endregion

        #region Requests
        //Post Request
        //POST : /api/AppUser/Register
        [HttpPost]
        [Route("Register")]
        public async Task<object> RegisterUser(RegisterModel model)
        {
            try
            {
                if (await _userService.IsUserExist(model.UserName))
                    return BadRequest(new { message = "Username is already exist" });

                var newUser = await _userService.Register(model);

                if (newUser != null)
                {
                    return Ok(new UserReturnModel()
                    {
                        UserName = newUser.UserName,
                        FirstName = newUser.FirstName
                    }
                  );
                }

                    return BadRequest(new { message = "Register failed! Please try again later" });
            }

            catch (Exception e)
            {
                return BadRequest(new { e.Message });
            }
        }
        //Post Request
        //POST : /api/AppUser/Login
        [HttpPost]
        [Route("Login")]
        public async Task<IActionResult> Login(LoginModel model)
        {
            var loggedUser = await _userService.Login(model);

            if (loggedUser != null)
            {
                return Ok(loggedUser);
            }            
            else
                return BadRequest(new { message = "Username or password is incorrect! Try again please" });
        }

        #endregion
    }
}