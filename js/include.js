// Injecter le header
fetch("/header.html")
  .then(r => r.text())
  .then(html => {document.querySelector("header").innerHTML = html;
                  const dropdown = document.querySelector('.dropdown');
                  const dropdownMenu = document.querySelector('.dropdown-menu');


                  dropdown.addEventListener('click' ,(e)=>{
                    e.preventDefault();
                    dropdownMenu.style.display = 'block';
                  });

                  if (window.innerWidth > 790){
                    dropdownMenu.addEventListener('mouseleave',(e)=>{
                    dropdownMenu.style.display = 'none';
                  })}

                  // Toggle menu mobile
                  const menuToggle = document.getElementById("menu-toggle");
                  const navLinks = document.querySelector('.nav-links');

                  menuToggle.addEventListener("click", () => {
                    navLinks.classList.toggle("active");
                    navLinks.classList.remove('hide-main'); 
                  });


                  const valueChainLink = dropdown.querySelector('.valuechain-link');
                  const backBtn = dropdownMenu.querySelector('.back-btn button');

                  // Show the dropdown menu and hide the main nav
                  valueChainLink.addEventListener('click', function (e) {
                    e.preventDefault();
                    navLinks.classList.add('hide-main'); // Hide main nav
                    dropdownMenu.classList.add('show-dropdown'); // Show dropdown menu
                  });

                  // Back button logic: Show the main nav and hide the dropdown menu
                  backBtn.addEventListener('click', function (e) {
                    e.preventDefault();
                    dropdownMenu.classList.remove('show-dropdown');
                    dropdownMenu.style.display = 'none';
                    navLinks.classList.remove('hide-main'); // 
                  });
    });

// Injecter le footer
fetch("/footer.html")
  .then(r => r.text())
  .then(html => document.querySelector("footer").innerHTML = html);


