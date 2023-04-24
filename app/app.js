
import * as Model from "../model/model.js";


function initURLListener(){
    $(window).on("hashchange", Model.changeRoute);
    Model.changeRoute();
}


$(document).ready(function(){
Model.changeRoute(Model.Home)
  console.log(Model.NavAarry)
initURLListener()
});

