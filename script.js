const painImages = document.querySelectorAll('.painImage');
const achingImages = document.querySelectorAll('.achingImage');
const stigmaImages = document.querySelectorAll('.stigmaImage');


const isElementInViewport = (el) => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

const handleScroll = () => {
    achingImages.forEach((image)=>{
        if(isElementInViewport(image)){
            image.classList.add('jiggle');
        }else{
            image.classList.remove('jiggle')
        }
      });
  painImages.forEach((image) => {
    if (isElementInViewport(image)) {
      image.classList.add('wobble');
    } else {
      image.classList.remove('wobble');
    }
  });
  stigmaImages.forEach((image)=>{
    if(isElementInViewport(image)){
        image.classList.add('shrink');}
        else{
            image.classList.remove('shrink');
        }
    }
  );

};

window.addEventListener('scroll', handleScroll);
window.addEventListener('resize', handleScroll);
handleScroll();