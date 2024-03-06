const painImages = document.querySelectorAll('.painImage');
const achingImages = document.querySelectorAll('.achingImage');
const stigmaImages = document.querySelectorAll('.stigmaImage');
const menstrualGraph = document.getElementById('#menstrual_graph');
//const graphSlices = menstrualGraph.querySelectorAll('span');

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

const createGraphInteraction = () => {

 /* graphSlices.forEach((slice)=>{
    slice.addEventListener('click',()=>{
      const newParagraph = document.createElement('p');
      if(slice.id==="menses_arc"){
        newParagraph.textContent = 'The menses phase: This phase begins on the first day of your period. It\'s when the lining of your uterus sheds through your vagina if pregnancy hasn\'t occurred. Most people bleed for three to five days, but a period lasting only three days to as many as seven days is usually not a cause for worry.';
        menstrualSection.append(newParagraph);
      }
      else if(slice.id==="follicular_arc"){

      }
      else if(slice.id==="ovulation_arc"){

      }
      else if(slice.id==="luteal_arc"){

      }

    })
  })*/
  const button = document.querySelector('press');
  button.addEventListener('click',()=>{
   
      
       
      button.textContent='The menses phase';
  }
)  };
createGraphInteraction();
handleScroll();