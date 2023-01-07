using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace WepApp01.Pages
{
    public class pool_coping_calculatorModel : PageModel
    {
        //fields
        [BindProperty]
        float perimeter { get; set; }
        [BindProperty]
        int corners { get; set; }
        [BindProperty]
        float copingLength { get; set; }

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
