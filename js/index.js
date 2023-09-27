class TextSlider 
{
    words = ["compliance","equity","fairness","respect"];
    container = document.getElementsByClassName("TextCarouselContainer")[0];
    text = document.getElementsByClassName("TextCarousel")[0];
    i = 0;

    run()
    {
        this.text.innerHTML = this.words[this.i];
        this.i++;
        window.setInterval(
            ()=>{this.wording();},3500);
            
    }

    wording()
    {
        this.i = (this.i >= this.words.length) ? 0 : this.i;
        this.text.innerHTML = this.words[this.i];
        this.i++;
    }
    
}

class ResponsiveHelper {
    #introduction = document.querySelector("#introduction");
    #profitProtection = document.querySelector("#profitProtection");
    #element = document.getElementsByClassName("ImgRoundBorder");
    #lighthouse = document.getElementById("lightHouse");
    #banner = document.getElementById("banner");
    #windowWidth=0;

    #lightHouseResponsiveWidth(responsiveWidth) {             
        if (responsiveWidth>40) 
            responsiveWidth=40;
        
        if (responsiveWidth>0) 
            responsiveWidth =`${responsiveWidth}vw`;
        
            this.#lighthouse.style.width = responsiveWidth;
            this.#lighthouse.style.height = responsiveWidth;
    }

    #adjustTheResponsiveWidth(responsiveWidth) 
    {
        if (responsiveWidth>50) responsiveWidth=50;
        if (responsiveWidth>0) 
            responsiveWidth =`${responsiveWidth}vw`;
        
        for(let i=0; i < this.#element.length; i++) 
            {
                this.#element[i].style.width=responsiveWidth;
                this.#element[i].style.height=responsiveWidth;
            }
    }

    #adjustResponsiveBanner(windowWidth) {
        let init="50%";

        if (windowWidth<=700) 
        {
            init=Math.trunc(windowWidth/100);

            switch(true) 
            {
                case init>=6:
                init=6;
                break;
                case init<=5:
                init=8;
                break;
                default:
                init++;                    
            }
            init=`${init}0%`;
        }

        this.#banner.style.maxWidth=init;
    }

    #isMultipleOf(num, of)
    {
        return (num/of) % 2==0;
    }

    #equalProfitProtectionAndIntroductionHeight() {   

        this.#windowWidth = window.innerWidth;
        if (this.#windowWidth<=600.5) 
        {
            let responsiveWidth = this.#windowWidth / 10;
            this.#adjustTheResponsiveWidth(responsiveWidth);
            this.#lightHouseResponsiveWidth(responsiveWidth);
        } 
        else 
        {
            this.#adjustTheResponsiveWidth("");
            this.#lightHouseResponsiveWidth("");
        }

        this.#adjustResponsiveBanner(this.#windowWidth);            
        this.#profitProtection.style.height = (this.#windowWidth<=756.5) ? `auto`:
        `${this.#introduction.offsetHeight}px`;
    }

    run()
    {
        document.body.onload = ()=>{this.#equalProfitProtectionAndIntroductionHeight();};
        window.onresize = ()=>{this.#equalProfitProtectionAndIntroductionHeight();};
    }
}

class StoreListGenerator 
{
    #storeList = document.getElementById("storeList");
    #storeArray;
    
    constructor(storeArray) 
    {
        this.#storeArray=storeArray;
    }

    generate()
    {
        for(let i=0; i < this.#storeArray.length; i++) 
        {
            this.#append(this.#storeArray[i]);
        }
    }

    #append(storeName)
    {
        let storeBorder=document.createElement("div");
        let span = document.createElement("span");    
        storeBorder.classList.add("storeBorder");
        span.classList.add("verticallyCentered");
        storeBorder.appendChild(span);
        span.innerHTML=storeName;
        this.#storeList.appendChild(storeBorder);
    }
}

let storeList = [
"harringay arena",
"ponders end",
"camdem",
"tottenham hale",
"tottenham",
"swiss cottage",
"palmers green",
"hoxton",
"dalston",
"north finchley",
"big holloway road",
"borehamwood",
"stratford",
"turnpike lane"
];

const storeListGenerator = new StoreListGenerator(storeList);
storeListGenerator.generate();