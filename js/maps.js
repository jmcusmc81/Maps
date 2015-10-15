/**
 * Created by Josh on 10/15/15.
 */

jQuery(document).ready(function(){
    jQuery.get("http://ipinfo.io/202.88.237.138", function (response)
    {
        var lats = response.loc.split(',')[0];
        var lngs = response.loc.split(',')[1];
        map = new GMaps({
            el: '#map',
            lat: lats, //latitude
            lng: lngs //longitude
        });

    }, "jsonp");
});