using System;
using System.Diagnostics;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using mypos_api.Database;
using mypos_api.Models;
using mypos_api.Services;

namespace mypos_api.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        ILogger<AuthController> _logger;
        private readonly IAuthRepository authRepository;

        public AuthController(ILogger<AuthController> logger, IAuthRepository authRepository)
        {
            this.authRepository = authRepository;
            _logger = logger;
        }

        [HttpPost("[action]")]  // Request JSON  {"username": "xxxx" , "password" : "xxx"}
        public IActionResult Login([FromBody] Users model)
        {
            try
            {
                (Users result, String token) = authRepository.Login(model);

                if (result == null)
                {
                    return Unauthorized(new { token = "", message = "username invalid" });
                }

                if (String.IsNullOrEmpty(token))
                {
                    return Unauthorized(new { token = "", message = "password invalid" }); ;
                }

                return Ok(new { token = token, message = "login successfully" });
            }
            catch (Exception error)
            {
                return StatusCode(500, new { token = "", message = error });
            }
        }

        [HttpPost("[action]")]  // Request JSON  {"username": "xxxx" , "password" : "xxx"}
        public IActionResult Register([FromBody] Users model)
        {
            try
            {
                authRepository.Register(model);
                return Ok(new { result = "ok", message = "register successfully" });
            }
            catch (Exception error)
            {
                return StatusCode(500, new { result = "failure", message = error });
            }
        }
    }
}