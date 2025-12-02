 const number = document.querySelectorAll("#_div>li");
 const display = document.getElementById("display");
 const moon=document.getElementById('moon')
 const _html = document.documentElement
 const bg = document.getElementById('bg')
 let curentinput = "";
      number.forEach((btn) => {
        btn.addEventListener("click", function () {
          const value = this.innerText.trim();
          if (value === "=") {
            if (curentinput) {
              try {
                let result = eval(curentinput);
                display.innerText = result;
                curentinput = String(result);
                return;
              } catch (e) {
                display.innerText = "Eror";
                curentinput = "";
              }
            }
            return;
          }
          if (value === "%") {
            curentinput = Number(String(curentinput / 100));
            display.innerText = curentinput;
            return;
          }
          if (value === "AC") {
            display.innerText = "0";
            curentinput = "";
            return;
          }
          if (value === "Del") {
            curentinput = curentinput.slice(0, -1);
            display.innerText = curentinput;
            return;
          }
          curentinput += value;
          display.innerText = curentinput;
        });
      });
      // //////////////////////////////////////////dark mode
 let status = true
 _html.classList.remove('dark');
 document.body.style.backgroundImage=' linear-gradient(to top, #ad5389, #3c1053)';
moon.style.left = '7px'; 
moon.addEventListener('click' , function(e){
  if(status){
  
    this.style.left='30px'
    this.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-white size-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
</svg>
`
    _html.classList.add('dark')
    bg.style.backgroundColor='gray';
    document.body.style.background = 'rgb(17 24 39)'; 
  } else {
    this.style.left='7px'
    this.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-white size-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
</svg>
`
    bg.style.backgroundColor='white'
    _html.classList.remove('dark')
    document.body.style.backgroundImage=' linear-gradient(to top, #ad5389, #3c1053)';

  }
 status=!status
});