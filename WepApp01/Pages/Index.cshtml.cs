using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using WepApp01.Models;

namespace WepApp01.Pages
{
    public class IndexModel : PageModel
    {
        public DirTree home = new DirTree("home");
        //consturctor
        public IndexModel()
        {
            
        }

        public void OnGet()
        {
        }

    }
}