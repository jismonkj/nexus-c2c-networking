using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace DatabaseMVCx.Models
{
    public class Customer
    {
        public int CustomerID { get; set; }

        [Required]
        [DataType(DataType.Text)]
        public string name { get; set; }

        [Required]
        [DataType(DataType.MultilineText)]
        public string address { get; set; }


        [Required]
        [DataType(DataType.EmailAddress)]
        public string email { get; set; }

        [Required]
        [DataType(DataType.Text)]
        public string uname { get; set; }

        [Required]
        [DataType(DataType.Password)]
        public string password { get; set; }

    }
}