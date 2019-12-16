using mypos_api.Models;

namespace mypos_api.Services
{
    public interface IAuthRepository
    {
        (Users, string) Login(Users user);
        void Register(Users user);
    }
}