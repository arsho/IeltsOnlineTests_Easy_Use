/*
App Details
================
Name: IeltsOnlineTests_Easy_Use
Desciption: Use IeltsOnlineTests easily.

Author Details
================
Name: Ahmedur Rahman Shovon
Website: http://datamate.ws/ 
Github: https://github.com/arsho
*/

/*Hide all ads, iframes and facebook comments*/
iframe = document.getElementsByTagName("iframe");
for(i=0;i<iframe.length;i++){
  try{
    iframe[i].closest("li").style.display = 'none';
  }  
  catch(err){
    iframe[i].style.display = 'none';
  }
}

body_ads = document.getElementsByClassName("ads");
for(i=0;i<body_ads.length;i++){
  body_ads[i].style.display = 'none';
}

footer_ads = document.getElementsByClassName("ads-float-bottom");
for(i=0;i<footer_ads.length;i++){
  footer_ads[i].style.display = 'none';
}

fb_comments = document.getElementsByClassName("fb-comments");
for(i=0;i<fb_comments.length;i++){
  fb_comments[i].style.display = 'none';
}