jQuery.fn.svgAddClass = function (classTitle) {
    return this.each(function() {
        var oldClass = jQuery(this).attr("class");
        oldClass = oldClass ? oldClass : '';
        jQuery(this).attr("class", (oldClass+" "+classTitle).trim());
    });
}
jQuery.fn.svgRemoveClass = function (classTitle) {
    return this.each(function() {
      var oldClassString = ' '+jQuery(this).attr("class")+' ';
      var newClassString = oldClassString.replace(new RegExp(' '+classTitle+' ','g'), ' ').trim()
      if (!newClassString)
        jQuery(this).removeAttr("class");
      else
        jQuery(this).attr("class", newClassString);
    });
}