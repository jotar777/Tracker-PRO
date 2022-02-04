
class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
                <nav class="sidebar close"><header>

                <div class="text logo-text">
                    <span class="name">Axie Infinity</span>
                    <span class="profession">PRO TRACKER</span>
                </div>
            </div>

            <i class="bx bx-chevron-right toggle"></i>
            </header>

        <div class="menu-bar">
        <div class="menu">

            <ul class="menu-links">
                <li class="nav-link">
                    <a href="index.html">
                        <i class='bx bx-home-alt icon' ></i>
                        <span class="text nav-text">Tracker</span>
                    </a>
                </li>


                </li>

                <li class="nav-link">
                    <a href="https://axie.substack.com/p/upcoming-season-20-and-economic-balancing"target="_blank">
                        <i class='bx bxs-notepad icon' ></i>
                        <span class="text nav-text">Last Updates</span>
                    </a>
                </li>

          <li class="nav-link">
              <a href="#">
                  <i class='bx bx-smile icon'></i>
                  <span class="text nav-text">How To Use</span>
              </a>
          </li>

          <li class="nav-link">
              <a href="#">
                  <i class='bx bxl-facebook icon'></i>
                  <span class="text nav-text">Facebook</span>
              </a>
          </li>

          <li class="nav-link">
              <a href="#">
                  <i class='bx bxl-twitter icon'></i>
                  <span class="text nav-text">Twitter</span>
              </a>
          </li>
      </ul>
  </div>

      <li class="mode">
          <div class="sun-moon">
              <i class='bx bx-moon icon moon'></i>
              <i class='bx bx-sun icon sun'></i>
          </div>
          <span class="mode-text text">Dark mode</span>
      </li>
      
            </div>
            </div>
        </nav>
      `;
    }
  }
  
  customElements.define('header-component', Header);

  const body = document.querySelector('body'),
  sidebar = body.querySelector('nav'),
  toggle = body.querySelector(".toggle");
  
toggle.addEventListener("click" , () =>{
sidebar.classList.toggle("close");
})