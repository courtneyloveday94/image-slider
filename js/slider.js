// get all of the links for the images

var allImages = document.querySelectorAll('#gallery img');

var imageSources = [];

for( var i=0; i<allImages.length; i++ ) {
	imageSources.push( allImages[i].src );
} 

// delete all the images on the page
var galleryContainer = document.querySelector('#gallery');
galleryContainer.innerHTML = '';

// create slider containter
var slider = document.createElement('div');

// attach and id to the slider
slider.id = 'slider';

// add the slider to the browser
galleryContainer.appendChild(slider);

// create some buttons
var previous = document.createElement('button');
var next = document.createElement('button');


// add some id's to the buttons
previous.id ='previous';
next.id ='next';

previous.innerHTML ='<i class="fa fa-chevron-left" aria-hidden="true"></i>';
next.innerHTML ='<i class="fa fa-chevron-right" aria-hidden="true"></i>';


// add the buttons to the slider
slider.appendChild(previous);
slider.appendChild(next);

// show the first image to the visitor
slider.style.backgroundImage = 'url('+ imageSources[0] +')';

// listen for clicks on the buttons
next.onclick = changePicture;
previous.onclick = changePicture;

function changePicture() {
	// which image is in use?
	var imageInUse = slider.style.backgroundImage;

	// extract the url
	var bits = imageInUse.split('"');
	
}