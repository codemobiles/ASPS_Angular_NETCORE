using System.Linq;
using mypos_api.Database;
using mypos_api.Models;
using System;
using System.Security.Cryptography;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;
using System.Security.Claims;
using Microsoft.Extensions.Configuration;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Tokens;
using System.Text;


namespace mypos_api.Services
{
    public class AuthRepository : IAuthRepository
    {
        private readonly DatabaseContext context;
        private readonly IConfiguration configuration;

        public AuthRepository(DatabaseContext context, IConfiguration configuration)
        {
            this.configuration = configuration;
            this.context = context;
        }

        public (Users, string) Login(Users user)
        {
            var result = context.Users.SingleOrDefault(u => u.Username == user.Username);
            var token = "";

            if (result != null)
            {
                if (VerifyPassword(result.Password, user.Password)) ;
                {
                    token = "safkjfasjhkfsa";
                }
            }

            return (result, token);
        }

        public void Register(Users user)
        {
            user.Password = CreatePasswordHash(user.Password);
            context.Users.Add(user);
            context.SaveChanges();
        }


        private string CreatePasswordHash(string password)
        {
            byte[] salt = new byte[128 / 8];
            using (var rng = RandomNumberGenerator.Create())
            {
                rng.GetBytes(salt);
            }
            string hashed = Convert.ToBase64String(KeyDerivation.Pbkdf2(
                password: password,
                salt: salt,
                prf: KeyDerivationPrf.HMACSHA512,
                iterationCount: 10000,
                numBytesRequested: 256 / 8));
            return $"{Convert.ToBase64String(salt)}.{hashed}";
        }

        public bool VerifyPassword(string hash, string password)
        {
            var parts = hash.Split('.', 2);

            if (parts.Length != 2)
            {
                return false;
            }

            var salt = Convert.FromBase64String(parts[0]);
            var passwordHash = parts[1];

            string hashed = Convert.ToBase64String(KeyDerivation.Pbkdf2(
                password: password,
                salt: salt,
                prf: KeyDerivationPrf.HMACSHA512,
                iterationCount: 10000,
                numBytesRequested: 256 / 8));

            return passwordHash == hashed;
        }

        private string BuildToken(Users user)
        {
            // key is case-sensitive
            var claims = new[] {
                new Claim(JwtRegisteredClaimNames.Sub, "For Testing"),
                new Claim("id", user.Id.ToString()),
                new Claim("username", user.Username),
                new Claim(ClaimTypes.Role, user.Position)
            };

            var expires = DateTime.Now.AddDays(Convert.ToDouble(configuration["Jwt:Expire"]));
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration["Jwt:Key"]));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(
                issuer: configuration["Jwt:Issuer"],
                audience: configuration["Jwt:Audience"],
                claims: claims,
                expires: expires,
                signingCredentials: creds
            );   

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

    }
}