using DogBarber.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DogBarber.Infra
{
    public interface IUserRepositroy
    {
        Task<User> Register(RegisterModel userModel);
        Task<User> Login(LoginModel loginModel);
        Task<User> GetUser(string userName);

        bool CheckPasswords(string password, string hash);


    }
}
