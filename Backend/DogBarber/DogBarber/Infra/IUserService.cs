using DogBarber.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DogBarber.Infra
{
    public interface IUserService
    {
        Task<User> Register(RegisterModel model);
        Task<object> Login(LoginModel model);
        Task<bool> IsUserExist(string modelUserName);
    }
}
