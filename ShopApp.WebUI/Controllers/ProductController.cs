using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShopApp.WebUI.Controllers
{
    public class ProductController:Controller
    {
        //localhost:5000/product/list
        public string List()
        {
            return "product/list";
        }

        //localhost:5000/product/details
        public string Details()
        {
            return "product/details";
        }
    }
}
