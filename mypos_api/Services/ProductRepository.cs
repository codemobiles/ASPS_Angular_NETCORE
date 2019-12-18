using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using mypos_api.Database;
using mypos_api.Models;

namespace mypos_api.Services
{
    public class ProductRepository : IProductRepository
    {
        private readonly DatabaseContext databaseContext;
        private readonly IHttpContextAccessor _httpContextAccessor;
        private readonly IWebHostEnvironment _webHostEnvironment;

        public ProductRepository(
            DatabaseContext databaseContext,
            IHttpContextAccessor _httpContextAccessor,
            IWebHostEnvironment _webHostEnvironment)
        {
            this._httpContextAccessor = _httpContextAccessor;
            this._webHostEnvironment = _webHostEnvironment;
            this.databaseContext = databaseContext;
        }

        public async Task<Products> AddProduct(Products product)
        {
            String imageName = await UploadProductImages();
            if (!String.IsNullOrEmpty(imageName))
            {
                product.Image = imageName;
            }

            databaseContext.Add(product);
            databaseContext.SaveChanges();

            return product;
        }

        public bool DeleteProduct(int id)
        {
            var result = GetProduct(id);
            if (result != null)
            {
                databaseContext.Remove(result);
                databaseContext.SaveChanges();

                return true;
            }
            return false;
        }

        public async Task<Products> EditProduct(Products product, int id)
        {
            var result = GetProduct(id);
            if (result != null)
            {
                String imageName = await UploadProductImages();
                if (!String.IsNullOrEmpty(imageName))
                {
                    result.Image = imageName;
                }
                // auto mapper
                result.Name = product.Name;
                result.Price = product.Price;
                result.Stock = product.Stock;

                databaseContext.Update(result);
                databaseContext.SaveChanges();
            }
            return result;
        }

        public Products GetProduct(int id)
        {
            return databaseContext.Products.SingleOrDefault(p => p.ProductId == id);
        }

        public IEnumerable<Products> GetProducts()
        {
            return databaseContext.Products.ToList();
        }

        // Note: recommended used async Task
        public async Task<String> UploadProductImages()
        {
            var files = _httpContextAccessor.HttpContext.Request.Form.Files;

            if (files.Count > 0)
            {
                const string folder = "/images/";
                string filePath = _webHostEnvironment.WebRootPath + folder;

                string fileName = "";
                //var fileNameArray = new List<String>(); // multiple images case

                if (!Directory.Exists(filePath))
                {
                    Directory.CreateDirectory(filePath);
                }

                foreach (var formFile in files)
                {
                    fileName = Guid.NewGuid().ToString() + System.IO.Path.GetExtension(formFile.FileName); // unique name
                    string fullPath = filePath + fileName;

                    if (formFile.Length > 0)
                    {
                        using (var stream = new FileStream(fullPath, FileMode.Create))
                        {
                            await formFile.CopyToAsync(stream);
                        }
                    }

                    // fileNameArray.Add(fileName); // multiple images case
                }

                return fileName;
                //return fileNameArray; // multiple images case
            }
            return String.Empty;
            //return null;      // multiple images case
        }
    }
}