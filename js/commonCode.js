class DefaultPage 
{
    pageTitle=document.title;
    hamburgerDropDown;
    hamburger;
    footer;
    websiteName;
    showNavBarAt = 0;

    constructor(websiteName, showNavBarAt)
    {
        this.websiteName=websiteName;
        this.showNavBarAt=showNavBarAt;
        this.hamburgerDropDown = document.getElementById("HamburgerDropDown");
        this.hamburger = document.getElementById("Hamburger");
        this.footer=document.getElementById("footer").children[0];
        window.addEventListener('click', (e)=>this.ClickOutsideBurgerDropdown(e));
        window.addEventListener('resize', ()=>this.hamburgerDropDown.style.display= (window.innerWidth > this.showNavBarAt) ? "block" : "none");
        this.hamburger.addEventListener("click",
            ()=>
            this.hamburgerDropDown.style.display 
            = (this.hamburgerDropDown.style.display=="block") ? "none" : "block"
        );

        this.UpdateCopirightYear();
    }

    ClickOutsideBurgerDropdown(e)
    {
    switch(true) 
    {
        case IsNull(this.hamburgerDropDown):
        case IsNull(this.hamburger):
//        case e.target.innerHTML=="Projects":
        return;
    }

    switch(false) 
    {
        case IsDisplayed(this.hamburgerDropDown):
        case IsDisplayed(this.hamburger):
        return;    
    }

    let ClickedOnHamburger=this.hamburger.contains(e.target);
    if (!ClickedOnHamburger)
        Hide(this.hamburgerDropDown);
    }

    UpdateCopirightYear() 
    {
        footer.textContent =`Copyright © ${new Date().getFullYear()} ${this.websiteName} All rights reserved.`;
    }
}

const defaultPage = new DefaultPage("Secret Association of Poundland Employees.",793.5);
