using System;
using System.Diagnostics;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using mypos_api.Database;

namespace mypos_api.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        ILogger<AuthController> _logger;

        public AuthController(ILogger<AuthController> logger, DatabaseContext context)
        {
            _logger = logger;

            var result = context.Products.ToList();

            Console.WriteLine("Hello lotto " + result.Count);
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