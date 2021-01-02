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
    public class UserRepositroy : IUserRepositroy
    {
        private readonly DataContext _context;
        private readonly IConfiguration _config;
        public UserRepositroy(DataContext context, IConfiguration config)
        {
            _context = context;
            _config = config;
        }

        public bool CheckPasswords(string password, string hash)
        {
            return Hasher.Hash.Validate(password, _config["Salt"], hash);
        }
        
        public async Task<User> GetUser(string userName)
        {
            return _context.Users.FirstOrDefault(x => x.UserName.ToLower() == userName.ToLower());
        }

        public async Task<User> Login(LoginModel loginModel)
        {
            try
            {
                var user = await GetUser(loginModel.UserName.ToString());

                if (user != null)
                    if (CheckPasswords(loginModel.Password, user.Password))
                        return user;

                        return null;
            }

            catch (Exception e)
            {
                throw e;
            }
        }

        public async Task<User> Register(RegisterModel userModel)
        {
            try
            {
                var user = await GetUser(userModel.UserName.ToString());

                if (user != null)
                    return null;

                User newUser = new User()
                {
                    GuidID = Guid.NewGuid(),
                    UserName = userModel.UserName,
                    Password = Hasher.Hash.Create(userModel.Password, _config["Salt"]),
                    FirstName = userModel.FirstName
                };

                await _context.Users.AddAsync(newUser);
                await _context.SaveChangesAsync();

                return newUser;
            }

            catch (Exception e)
            {
                throw e;
            }
        }

    }
}
