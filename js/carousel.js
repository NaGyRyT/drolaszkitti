let counter = 0,
    slide = document.querySelector('.carousel'),
    items = slide.querySelectorAll('.carousel-image'),
    itemsCount = items.length, 
    prevBtn = document.createElement('div'),
    nextBtn = document.createElement('div'),
    timer = 4000,
    interval = window.setInterval(showNext, timer);

prevBtn.classList.add('prev');
nextBtn.classList.add('next');
slide.appendChild(prevBtn);
slide.appendChild(nextBtn);

//---Change pictures on mobile view---
const  isDesktop = window.matchMedia("(min-width: 992px)").matches;
if (!isDesktop){
    for (let i = 0; i < itemsCount; ++i){
      let imgLink = items[i].querySelector('img').getAttribute('src');
      imgLink = imgLink.slice(0,-5)+"_phone.webp";
      items[i].querySelector('img').setAttribute('src', imgLink);
    }
  }

let showCurrent = function(){
  	let itemToShow = Math.abs(counter % itemsCount);
  	[].forEach.call( items, function(el){
    	el.classList.remove('show');
  	});
  	items[itemToShow].classList.add('show');
};

function showNext(){
	counter++; 
	showCurrent();
}
function showPrev(){
	counter--; 
	showCurrent();
}

slide.addEventListener('mouseover', function(){
	interval = clearInterval(interval);
});

slide.addEventListener('mouseout', function(){
	interval = window.setInterval(showNext, timer);
});

nextBtn.addEventListener('click', showNext, false);
prevBtn.addEventListener('click', showPrev, false);
items[0].classList.add('show');