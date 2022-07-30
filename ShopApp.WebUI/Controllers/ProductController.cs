using Microsoft.AspNetCore.Mvc;
using ShopApp.WebUI.Models;
using ShopApp.WebUI.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShopApp.WebUI.Controllers
{
    public class ProductController : Controller
    {
        //localhost:5000/product/index
        public IActionResult Index()
        {
            Product product = new Product
            {
                Name = "Iphone 13",
                Price = 15000,
                Description = "Güzel Telefon"
            };

            //ViewData["Product"] = product;
            //ViewData["Category"] = "Telefonlar";

            //ViewBag.Category = "Kategoriler";
            //ViewBag.Product = product;

            return View(product);
        }

        //localhost:5000/product/list
        public IActionResult List()
        {
            var products = new List<Product>()
            {
                new Product{Name="Iphone 8",Price=3000,Description="İyi Telefon",IsApproved=true},
                new Product{Name="Iphone 5",Price=2000,Description="Fena Değil"},
                new Product{Name="Iphone 7",Price=3000,Description="İyi Telefon",IsApproved=true},
                new Product{Name="Iphone 6",Price=4000,Description="Fena Değil",IsApproved=true},
                new Product{Name="Iphone 9",Price=9000,Description="İyi Telefon"},
                new Product{Name="Iphone 10",Price=12000,Description="Fena Değil"},
                new Product{Name="Iphone 8+",Price=13000,Description="İyi Telefon",IsApproved=true},
                new Product{Name="Iphone 11",Price=12500,Description="Fena Değil"},
                new Product{Name="Iphone 12",Price=13500,Description="İyi Telefon"},
                new Product{Name="Iphone 13",Price=18000,Description="Fena Değil",IsApproved=true},
                new Product{Name="Iphone X",Price=30000,Description="İyi Telefon"},
                new Product{Name="Iphone 5+",Price=2800,Description="Fena Değil",IsApproved=true},
            };

            var category = new Category
            {
                Name = "Telefonlar",
                Description = "Telefon Kategorisi"
            };

            var productViewModel = new ProductViewModel()
            {
                Category = category,
                Products = products
            };

            return View(productViewModel);
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
