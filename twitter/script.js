$(document).ready(function() {


  for (var photo in mesPhotos) {
    fadePhoto(mesPhotos[photo]);
  }


});


var mesPhotos = [{
  url: "Ecosse-100.jpg",
  tweet: "Higlands Games, music et jupes a carreaux. par @atomicfrog83",
  signe: "19:27 PM - 15 juil 2013"
}, {
  url: "shanghai05-17.jpg",
  tweet: "Nouvel an au temple de Qi bao. par @atomicfrog83",
  signe: "12:05 PM - 4 fev 2013"
}, {
  url: "IMG_9984.JPG",
  tweet: "Statuette de Jizoa a Nokogiri Yama. par @atomicfrog83",
  signe: "16:05 PM - 5 juil 2012"
}, {
  url: "DSCF2915.jpg",
  tweet: "Petit loulou et noeud papillon. par @atomicfrog83",
  signe: "11:23 PM - 1 janv 2016"
}];

function fadePhoto(data) {

  $('body').fadeTo('slow', 0.3, function() {
    $(this).css('background-image', 'url(' + data.url + ')');
  }).delay(2000).fadeTo('slow', 1);

}
