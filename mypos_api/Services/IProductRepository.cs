using System.Collections.Generic;
using System.Threading.Tasks;
using mypos_api.Models;

namespace mypos_api.Services
{
    public interface IProductRepository
    {
        IEnumerable<Products> GetProducts();
        Products GetProduct(int id);
        Task<Products> AddProduct(Products product);
        Task<Products> EditProduct(Products product, int id);
        bool DeleteProduct(int id);
    }
}