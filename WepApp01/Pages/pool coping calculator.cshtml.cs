using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace WepApp01.Pages
{
    [BindProperties]
    public class pool_coping_calculatorModel : PageModel
    {
        //fields
        public int perimeter { get; set; }
        public int corners { get; set; }
        public float copingLength { get; set; }
        public int totalCopers { get; set; }


        public void OnGet()
        {
           
        }

        public IActionResult OnPost()
        {
            totalCopers = (int) (Math.Round(perimeter * (copingLength / 1000) + corners));
            return Page();
        }
    }
}
