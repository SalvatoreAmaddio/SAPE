const DefCSS = ["css/wrapper.css",
                "css/commonStructure.css",
                "css/navbar.css",
                "MediaQuery/MQcommonStructure.css",
                "MediaQuery/MQnavBar.css"
                ];

SetSAR();
SetAuthor();
SetIcon();
SetDefaultCSS();

function SetSAR()
{
    var SARscript = document.createElement('script');
    SARscript.setAttribute('src','js/SAR.js');
    document.head.appendChild(SARscript);
}

function SetAuthor()
{
    meta = document.createElement('meta');
    meta.name = "author";
    meta.content = "Salvatore Amaddio R.";
    document.head.appendChild(meta);
}

function SetIcon()
{
    link = document.createElement('link');
    link.rel = 'icon';
    link.href = 'img/logo.ico';
    document.head.appendChild(link);
}

function SetDefaultCSS(){
    for(let i=0; i < DefCSS.length; i++) 
    {
        link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = DefCSS[i];
        document.head.appendChild(link)    
    }
}
