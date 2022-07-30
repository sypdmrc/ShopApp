using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShopApp.WebUI.Controllers
{
    //localhost:5000/home
    public class HomeController:Controller
    {
        //localhost:5000/home/index
        public IActionResult Index()
        {
            int saat=DateTime.Now.Hour;

            string mesaj=saat > 12 ? "İyi Günler" : "Günaydın";
            ViewBag.Greeting = mesaj;
            ViewBag.Username = "Şuayip Demirci";

            return View();
        }

        //localhost:5000/home/about
        public IActionResult About()
        {
            return View();
        }

        public IActionResult Contact()
        {
            return View("Deneme");
        }
    }
}
