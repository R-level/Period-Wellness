const painImage = document.querySelector('.painImage');
const achingImage = document.querySelector('.achingImage');
const stigmaImage = document.querySelector('.stigmaImage');
const menstrualGraph = document.querySelector('#menstrual_graph');
const menstrualSection = document.querySelector('#MenstrualCycle div.ColumnsLeft');
const graphSlices = menstrualGraph.querySelectorAll('span');
const menstrualPage = document.querySelector('#MenstrualCycle');
const infoCard = document.querySelector(".info_card");
const infoCardType = document.querySelector(".info_card #type");
const infoCardText = document.querySelector(".info_card #text");
const infoCardMessage = document.querySelector(".info_card #message");
const DebunkingSection = document.getElementById("Debunking");
let infoType = "";
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
    if(oldParagraph.textContent!=="The average length of a menstrual cycle is 28 days. However, a cycle can range in length from 21 days to about 35 days and still be normal."){
       oldParagraph.classList.remove('fade-in');
       oldParagraph.classList.add('fade-out');
       setTimeout(()=>{
         menstrualSection.removeChild(oldParagraph);
       }, 500);
       newParagraph.classList.add('fade-in');
       setTimeout(()=>{menstrualSection.append(newParagraph);},500);
      
     }
     
      
     resetGraph();
  }
 class Info{
 constructor(type, text, message){
     this.type = type;
     this.text = text;
     this.message = message;
   }
   getType(){
    return this.type;
   }
   getText(){
    return this.text;
   }
   getMessage(){
     return this.message;
   }
 }

 const infoArray = [];
/**
 * This function will get the JSON data that contains Period Myth and Fact information.
 * The data will be collected and processed into an array
 */
async function getData(){
  const response = await fetch('https://raw.githubusercontent.com/R-level/Period-Wellness/main/data/info.json');
  const data = await response.json();
  const infoObj = JSON.stringify(data);
  const infoList = JSON.parse(infoObj);
const list = infoList.info;
console.log(infoList);
   for(const info of list)
   {
    
infoArray.push(new Info(info.type, info.text, info.message));
   }
  
let paragraphInfo = document.createElement("p");

paragraphInfo.style.font="1.5em 'Roboto', sans-serif";
paragraphInfo.style.color="#f1ecec";
const info = infoArray[0]

//paragraphInfo.innerText=info.getText();
infoCard.appendChild(paragraphInfo);

};




/** Handles the click event for the info card 
 * Changes the color of the card and changes the info in the card
*/
let i = 0; //iterator for infoArray
infoCard.addEventListener("click", ()=>{

 infoCard.style.color="red";
  let info = infoArray[Math.floor(Math.random()*(infoArray.length-1))];
  if(i<infoArray.length){
  info=infoArray[i]
  i++;
  }
  else{
    i=0;
  }
   infoType = info.getType();
 
  let paragraphInfo = document.createElement("p");
  paragraphInfo.innerText=info.getText();
  paragraphInfo.style.font="1.5em 'Roboto', sans-serif";
  paragraphInfo.style.color="#f1ecec";
  infoCard.innerHTML="";
 if(infoType==="myth"){
  if(infoCard.classList.contains("info_fact")){
    infoCard.classList.remove("info_fact");}
    infoCard.classList.add("info_myth");
    //fade out old paragraph
    infoCard.appendChild(paragraphInfo); 
  } if(infoType==="fact"){
    if(infoCard.classList.contains("info_myth")){
    infoCard.classList.remove("info_myth");}
    infoCard.classList.add("info_fact")
    infoCard.appendChild(paragraphInfo); 
  }});

  const info_btns = document.querySelectorAll(".info_btn");
  const floatingMessage = document.createElement("p");
 
  info_btns.forEach( (btn)=>{
    btn.addEventListener("click", ()=>{
      console.log(infoType);
   if(infoType!=""){
   
    //Check if the user chose correctly
    if(btn.TextContent==infoType){
      floatingMessage.textContent="True";
      DebunkingSection.append=floatingMessage;
      infoType="";
    }
    else{
      floatingMessage.textContent="False";
      DebunkingSection.append=floatingMessage;
      infoType="";
    }
   }
    })
  })
createGraphInteraction();
getData();

/** TEST for card javascript 
'use strict';*/

'use strict';

var tinderContainer = document.querySelector('.tinder');
var allCards = document.querySelectorAll('.tinder--card');
var nope = document.getElementById('nope');
var love = document.getElementById('love');

function initCards(card, index) {
  var newCards = document.querySelectorAll('.tinder--card:not(.removed)');

  newCards.forEach(function (card, index) {
    card.style.zIndex = allCards.length - index;
    card.style.transform = 'scale(' + (20 - index) / 20 + ') translateY(-' + 30 * index + 'px)';
    card.style.opacity = (10 - index) / 10;
  });
  
  tinderContainer.classList.add('loaded');
}

initCards();

allCards.forEach(function (el) {
  var hammertime = new Hammer(el);

  hammertime.on('pan', function (event) {
    el.classList.add('moving');
  });

  hammertime.on('pan', function (event) {
    if (event.deltaX === 0) return;
    if (event.center.x === 0 && event.center.y === 0) return;

    tinderContainer.classList.toggle('tinder_love', event.deltaX > 0);
    tinderContainer.classList.toggle('tinder_nope', event.deltaX < 0);

    var xMulti = event.deltaX * 0.03;
    var yMulti = event.deltaY / 80;
    var rotate = xMulti * yMulti;

    event.target.style.transform = 'translate(' + event.deltaX + 'px, ' + event.deltaY + 'px) rotate(' + rotate + 'deg)';
  });

  hammertime.on('panend', function (event) {
    el.classList.remove('moving');
    tinderContainer.classList.remove('tinder_love');
    tinderContainer.classList.remove('tinder_nope');

    var moveOutWidth = document.body.clientWidth;
    var keep = Math.abs(event.deltaX) < 80 || Math.abs(event.velocityX) < 0.5;

    event.target.classList.toggle('removed', !keep);

    if (keep) {
      event.target.style.transform = '';
    } else {
      var endX = Math.max(Math.abs(event.velocityX) * moveOutWidth, moveOutWidth);
      var toX = event.deltaX > 0 ? endX : -endX;
      var endY = Math.abs(event.velocityY) * moveOutWidth;
      var toY = event.deltaY > 0 ? endY : -endY;
      var xMulti = event.deltaX * 0.03;
      var yMulti = event.deltaY / 80;
      var rotate = xMulti * yMulti;

      event.target.style.transform = 'translate(' + toX + 'px, ' + (toY + event.deltaY) + 'px) rotate(' + rotate + 'deg)';
      initCards();
    }
  });
});

function createButtonListener(love) {
  return function (event) {
    var cards = document.querySelectorAll('.tinder--card:not(.removed)');
    var moveOutWidth = document.body.clientWidth * 1.5;

    if (!cards.length) return false;

    var card = cards[0];

    card.classList.add('removed');

    if (love) {
      card.style.transform = 'translate(' + moveOutWidth + 'px, -100px) rotate(-30deg)';
    } else {
      card.style.transform = 'translate(-' + moveOutWidth + 'px, -100px) rotate(30deg)';
    }

    initCards();

    event.preventDefault();
  };
}

var nopeListener = createButtonListener(false);
var loveListener = createButtonListener(true);
console.log(loveListener);

nope.addEventListener('click', nopeListener);
love.addEventListener('click', loveListener);


/**End of test */