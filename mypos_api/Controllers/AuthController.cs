using System;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace mypos_api.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        ILogger<AuthController> _logger;

        public AuthController(ILogger<AuthController> logger)
        {
            _logger = logger;
        }

        // localhost:../api/auth
        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok("tanakorn"); 
            }
            catch (Exception)
            {
                _logger.LogError("Failed to execute GET");
                return BadRequest();  // 400
            }
        }
        

     
    }
}