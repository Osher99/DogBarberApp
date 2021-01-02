using DogBarber.Infra;
using DogBarber.Models;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace DogBarber.Services
{
    public class UserService : IUserService
    {
        #region Fields
        public readonly IUserRepositroy _userRepository;
        private readonly IConfiguration _config;

        #endregion

        public UserService(IUserRepositroy userRepositroy, IConfiguration config)
        {
            _userRepository = userRepositroy;
            _config = config;
        }

        public async Task<object> Login(LoginModel model)
        {
            try
            {
                var user = await _userRepository.Login(model);

                if (user == null)
                    return null;

                var tokenDecsriptor = new SecurityTokenDescriptor
                {
                    Subject = new System.Security.Claims.ClaimsIdentity(new Claim[]
                    {
                        new Claim("GuidID", user.GuidID.ToString())
                    }),
                    Expires = DateTime.UtcNow.AddDays(1),
                    SigningCredentials = new SigningCredentials(new SymmetricSecurityKey
                    (
                        Encoding.UTF8.GetBytes("012345678910123456")),
                        SecurityAlgorithms.HmacSha256Signature
                    )
                };

                var tokenHandler = new JwtSecurityTokenHandler();
                var securityToken = tokenHandler.CreateToken(tokenDecsriptor);
                var token = tokenHandler.WriteToken(securityToken);

                return new UserReturnModel()
                {
                    FirstName = user.FirstName,
                    UserName = user.UserName,
                    Token = token
                };
            }
            catch (Exception e)
            {
                return null;
            }
            
        }

        public async Task<User> Register(RegisterModel model)
        {
            return await _userRepository.Register(model);
        }

        public async Task<bool> IsUserExist(string modelUserName)
        {
            return await _userRepository.GetUser(modelUserName) != null;
        }
    }
}
