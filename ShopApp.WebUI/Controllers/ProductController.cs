using Microsoft.AspNetCore.Mvc;
using ShopApp.WebUI.Models;
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
            Product product = new Product 
            { 
                Name="Iphone 13",
                Price=15000,
                Description="Güzel Telefon"
            };

            ViewData["Product"] = product;
            ViewData["Category"] = "Telefonlar";

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
            //ViewBag.Name = "Samsung S6";
            //ViewBag.Price = 3000;
            //ViewBag.Description = "İyi Telefon";

            Product p = new Product();
            p.Name = "Samsung S6";
            p.Price = 3000;
            p.Description = "İyi telefon";

            return View(p);
        }
    }
}
