const painImages = document.querySelectorAll('.painImage');
const achingImages = document.querySelectorAll('.achingImage');
const stigmaImages = document.querySelectorAll('.stigmaImage');
const menstrualGraph = document.querySelector('#menstrual_graph');
const menstrualSection = document.querySelector('#MenstrualCycle div.ColumnsLeft');
const graphSlices = menstrualGraph.querySelectorAll('span');


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

    graphSlices.forEach((slice)=>{
    slice.addEventListener('click',()=>{
      const newParagraph = document.createElement('p');
      
      const oldParagraph = menstrualSection.querySelector('p')
      if(oldParagraph){
        oldParagraph.classList.add('fade-out');
        setTimeout(()=>{
          menstrualSection.removeChild(oldParagraph);
        }, 500);
      }
      if(slice.id==="menses_arc"){
        newParagraph.textContent = 'The menses phase: This phase begins on the first day of your period. It\'s when the lining of your uterus sheds through your vagina if pregnancy hasn\'t occurred. Most people bleed for three to five days, but a period lasting only three days to as many as seven days is usually not a cause for worry.';
        menstrualSection.append(newParagraph);
      }
      else if(slice.id==="follicular_arc"){
        newParagraph.textContent ='The follicular phase: This phase begins on the day you get your period and ends at ovulation (it overlaps with the menses phase and ends when you ovulate). During this time, the level of the hormone estrogen rises, which causes the lining of your uterus (the endometrium) to grow and thicken. In addition, another hormone — follicle-stimulating hormone (FSH) — causes follicles in your ovaries to grow. During days 10 to 14, one of the developing follicles will form a fully mature egg (ovum)';
        menstrualSection.append(newParagraph);
      }
      else if(slice.id==="ovulation_arc"){
        newParagraph.textContent ='Ovulation: This phase occurs roughly at about day 14 in a 28-day menstrual cycle. A sudden increase in another hormone— luteinizing hormone (LH) — causes your ovary to release its egg. This event is ovulation.'
        menstrualSection.append(newParagraph);
      }
      else if(slice.id==="luteal_arc"){
        newParagraph.textContent= 'The luteal phase: This phase lasts from about day 15 to day 28. Your egg leaves your ovary and begins to travel through your fallopian tubes to your uterus. The level of the hormone progesterone rises to help prepare your uterine lining for pregnancy. If the egg becomes fertilized by sperm and attaches itself to your uterine wall (implantation), you become pregnant. If pregnancy doesn’t occur, estrogen and progesterone levels drop and the thick lining of your uterus sheds during your period.'
        menstrualSection.append(newParagraph);
      }
      newParagraph.classList.add('fade-in');
    })
  })
  
  };


createGraphInteraction();
handleScroll();