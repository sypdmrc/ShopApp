using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShopApp.WebUI.Controllers
{
    public class ProductController:Controller
    {
        //localhost:5000/product/index
        public IActionResult Index()
        {
            return View();
        }

        //localhost:5000/product/list
        public IActionResult List()
        {
            return View();
        }

        //localhost:5000/product/details
        public IActionResult Details()
        {
            return View();
        }
    }
}
