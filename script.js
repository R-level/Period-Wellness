const painImage = document.querySelector('.painImage');
const achingImage = document.querySelector('.achingImage');
const stigmaImage = document.querySelector('.stigmaImage');
const menstrualGraph = document.querySelector('#menstrual_graph');
const menstrualSection = document.querySelector('#MenstrualCycle div.ColumnsLeft');
const graphSlices = menstrualGraph.querySelectorAll('span');
const menstrualPage = document.querySelector('#MenstrualCycle');

// Add event listeners to the images
achingImage.addEventListener('click', ()=>{
  achingImage.classList.add('achingImage_click');

  setTimeout(() => {
    achingImage.classList.remove('achingImage_click');
  }, 2500);
});

painImage.addEventListener('click', ()=>{
  painImage.classList.add('painImage_click');
  setTimeout(() =>{
    painImage.classList.remove('painImage_click');
  },2500);
});

stigmaImage.addEventListener('click', ()=>{
  stigmaImage.classList.add('stigmaImage_click');
  setTimeout(() =>{
    stigmaImage.classList.remove('stigmaImage_click');
  },2500);
});
menstrualPage.addEventListener('mouseleave', ()=>{
  resetMenstrualInfo();
 });
const resetGraph = () => {
  graphSlices.forEach((slice)=>{
        
    if(slice.classList.contains("selected_menses_arc")){
      slice.classList.remove("selected_menses_arc");
      slice.classList.add("menses_hover");
    }
    else if(slice.classList.contains("selected_follicular_arc")){
      slice.classList.remove("selected_follicular_arc");
      slice.classList.add("follicular_hover");
    }
    else if(slice.classList.contains("selected_ovulation_arc")){
      slice.classList.remove("selected_ovulation_arc");
      slice.classList.add("ovulation_hover");
    }
    else if(slice.classList.contains("selected_luteal_arc")){
      slice.classList.remove("selected_luteal_arc");
      slice.classList.add("luteal_hover");
    }
  })
}
const createGraphInteraction = () => {

    graphSlices.forEach((slice)=>{

    slice.addEventListener('click',()=>{
     const newParagraph = document.createElement('p');

     resetGraph();
     
      const oldParagraph = menstrualSection.querySelector('p');
   
     if(slice.id==="menses_arc"){
      if(!slice.classList.contains("selected_menses_arc")){
        slice.classList.add("selected_menses_arc");
        
      }
      slice.classList.remove("menses_hover");
      newParagraph.textContent = 'The menses phase: This phase begins on the first day of your period. It\'s when the lining of your uterus sheds through your vagina if pregnancy hasn\'t occurred. Most people bleed for three to five days, but a period lasting only three days to as many as seven days is usually not a cause for worry.';
      
    }
    else if(slice.id==="follicular_arc"){
      if(!slice.classList.contains("selected_follicular_arc")){
        slice.classList.add("selected_follicular_arc");
        
      }
      slice.classList.remove("follicular_hover");
      newParagraph.textContent ='The follicular phase: This phase begins on the day you get your period and ends at ovulation (it overlaps with the menses phase and ends when you ovulate). During this time, the level of the hormone estrogen rises, which causes the lining of your uterus (the endometrium) to grow and thicken. In addition, another hormone — follicle-stimulating hormone (FSH) — causes follicles in your ovaries to grow. During days 10 to 14, one of the developing follicles will form a fully mature egg (ovum).';
    }
    else if(slice.id==="ovulation_arc"){
      if(!slice.classList.contains("selected_ovulation_arc")){
        slice.classList.add("selected_ovulation_arc");
      }
      slice.classList.remove("ovulation_hover");
      newParagraph.textContent ='Ovulation: This phase occurs roughly at about day 14 in a 28-day menstrual cycle. A sudden increase in another hormone— luteinizing hormone (LH) — causes your ovary to release its egg. This event is ovulation.'
      
    }else if(slice.id==="luteal_arc"){
      if(!slice.classList.contains("selected_luteal_arc")){
        slice.classList.add("selected_luteal_arc");
      }
      slice.classList.remove("luteal_hover");
      newParagraph.textContent= 'The luteal phase: This phase lasts from about day 15 to day 28. Your egg leaves your ovary and begins to travel through your fallopian tubes to your uterus. The level of the hormone progesterone rises to help prepare your uterine lining for pregnancy. If the egg becomes fertilized by sperm and attaches itself to your uterine wall (implantation), you become pregnant. If pregnancy doesn’t occur, estrogen and progesterone levels drop and the thick lining of your uterus sheds during your period.'
      
    }
  
      
      if(oldParagraph){
        oldParagraph.classList.remove('fade-in');
        oldParagraph.classList.add('fade-out');
        setTimeout(()=>{
          menstrualSection.removeChild(oldParagraph);
        }, 500);
      }

     newParagraph.classList.add('fade-in');
     setTimeout(()=>{menstrualSection.append(newParagraph);},500);
      
    })})
  
  
   
};

  function resetMenstrualInfo(){
    const newParagraph = document.createElement('p');
    newParagraph.textContent="The average length of a menstrual cycle is 28 days. However, a cycle can range in length from 21 days to about 35 days and still be normal."
   const oldParagraph = menstrualSection.querySelector('p');
    if(oldParagraph){
       oldParagraph.classList.remove('fade-in');
       oldParagraph.classList.add('fade-out');
       setTimeout(()=>{
         menstrualSection.removeChild(oldParagraph);
       }, 500);
      
     }
     
      newParagraph.classList.add('fade-in');
      setTimeout(()=>{menstrualSection.append(newParagraph);},500);
     
     resetGraph();
  }
//  class Info{
//  constructor(type, text, message){
//      this.type = type;
//      this.text = text;
//      this.message = message;
//    }
//  }
//const infoArray = [];
//JSON.parse(info).forEach((info)=>{
//  const newInfo = new Info(info.type, info.text, info.message);
//  infoArray.push(newInfo);
//})
async function getData(){
  const response = await fetch('https://raw.githubusercontent.com/R-level/Period-Wellness/main/data/info.json');
  const data = await response.json();
  const info = JSON.stringify(data);
  const infoList = JSON.parse(info);
const infoArray = infoList.info;
console.log(infoArray);  
   
}
createGraphInteraction();
getData();