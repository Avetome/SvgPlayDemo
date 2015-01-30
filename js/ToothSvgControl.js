var Instruments = {
    caries : "caries",
    resina: "resina",
    amalgalma: "amalgalma"
};

var ToothSvgControl = function(id) {
    this.id = id;    

    var svgobject = document.getElementById(id);                 
    if ('contentDocument' in svgobject) {
        this.svgdom = jQuery(svgobject.contentDocument);                 
    }
    else {
        console.error("Can't loading svg object");
    }

    this.currentInstrument = Instruments["caries"];

    jQuery("svg path", this.svgdom).click(jQuery.proxy(this.elementClick, this));
};

ToothSvgControl.prototype.setInstrument = function(imstrument) {
    this.currentInstrument = imstrument;
};

ToothSvgControl.prototype.elementClick = function(event) {
    var element = event.target;

    for(var key in Instruments){
        jQuery(element, this.svgdom).svgRemoveClass(Instruments[key]);    
    }                

    jQuery(element, this.svgdom).svgAddClass(this.currentInstrument);
};