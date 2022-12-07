using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using WepApp01.Models;

namespace WepApp01.Pages
{
    public class IndexModel : PageModel
    {
        public NTree home = new NTree("home");
        //consturctor
        public IndexModel()
        {
            
        }

        public void OnGet()
        {
            //append children
            home.AddChild("CTDocumentation");
            home.AddChild("Product Documentation");
            home.AddChild("Calculators");
        }
    }
}