using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using mypos_api.Models;
using mypos_api.Services;

namespace mypos_api.Controllers
{
    [Authorize]   
    [ApiController]
    [Route("api/[controller]")]
    public class ProductController : ControllerBase
    {

        ILogger<ProductController> _logger;
        private readonly IProductRepository productRepository;

        public ProductController(ILogger<ProductController> logger, IProductRepository productRepository)
        {
            _logger = logger;
            this.productRepository = productRepository;
        }

        [HttpGet]
        public IActionResult GetProducts()
        {
            try
            {
                var result = productRepository.GetProducts();

                if (result == null)
                {
                    return NotFound();
                }
                else
                {
                    return Ok(new { result = result, message = "request successfully" });
                }
            }
            catch (Exception error)
            {
                _logger.LogError($"Log GetProducts: {error}");
                return StatusCode(500, new { result = "", message = error });
            }
        }

        // localhost.../api/product/{id}
        [HttpGet("{id}")]
        public IActionResult GetProduct(int id)
        {
            try
            {
                var result = productRepository.GetProduct(id);

                if (result == null)
                {
                    return NotFound();
                }
                else
                {
                    return Ok(new { result = result, message = "request successfully" });
                }
            }
            catch (Exception error)
            {
                _logger.LogError($"Log GetProduct: {error}");
                return StatusCode(500, new { result = "", message = error });
            }
        }

        [HttpPost]                      
        public async Task<IActionResult> AddProduct([FromForm] Products model)
        {
            try
            {
                var result = await productRepository.AddProduct(model);
                return Ok(new { result = result, message = "create product successfully" });
            }
            catch (Exception error)
            {
                _logger.LogError($"Log CreateProduct: {error}");
                return StatusCode(500, new { result = "", message = error });
            }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditProduct([FromForm] Products model, int id)
        {
            try
            {
                var result = await productRepository.EditProduct(model, id);
                if (result == null)
                {
                    return NotFound();
                }
                return Ok(new { result = result, message = "update product successfully" });
            }
            catch (Exception error)
            {
                _logger.LogError($"Log UpdateProduct: {error}");
                return StatusCode(500, new { result = "", message = error });
            }
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteProduct(int id)
        {
            try
            {
                var result = productRepository.DeleteProduct(id);
                if (result == false)
                {
                    return NotFound();
                }
                return Ok(new { result = "", message = "delete product sucessfully" });
            }
            catch (Exception error)
            {
                _logger.LogError($"Log DeleteProduct: {error}");
                return StatusCode(500, new { result = "", message = error });
            }
        }

        [AllowAnonymous]
        [HttpGet("images/{name}")]
        public IActionResult ProductImage(string name)
        {
            //return File($"~/images/{name}", "image/jpg", "xxx.jpg");
            return File($"~/images/{name}", "image/jpg");
        }
    }
}