var c = new Array("00", "11", "22", "33", "44", "55",
"66", "77", "88", "99", "AA", "BB", "CC", "DD", "EE", "FF");

x = 0;

function bg_eff()
   {
   col_val = "#FFFF" + c[x];
   document.bgColor=col_val;
   x++;
   if (x == 16)
      {
      clearInterval(change_bg);
      }
   }

change_bg = setInterval("bg_eff()", 250);
