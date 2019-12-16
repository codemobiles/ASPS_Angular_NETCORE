using System;
using System.Collections.Generic;

namespace mypos_api.Models
{
    public partial class Users
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string Position { get; set; }
        public DateTime Created { get; set; }
    }
}
