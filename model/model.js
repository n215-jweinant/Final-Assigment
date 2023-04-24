export var NavAarry =["Home", "About","Tours","Special-offers", "Blog", "Contact"];


export function changeRoute() {
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#","");

  if (pageID !=""){
$.get(`pages/${pageID}/${pageID}.html`, function (data){
 $("#app").html(data);
})
    }else{
     $.get(`pages/Home/Home.html`,function (data){
      $("#app").html(data);
  })

}

}


