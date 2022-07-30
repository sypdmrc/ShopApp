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
        public string Index()
        {
            return "home/index";
        }

        //localhost:5000/home/about
        public string About()
        {
            return "home/about";
        }
    }
}
