console.log("--------Jack's lycanthrope History 2021--------");
let weekdays = ["first day","second day","third day","fourth day", "fifth day", "sixth day", "seventh day", "eigth day", "ninth day", "tenth day"];
let weekdayHandler = [];
let identity = prompt("----Hello, I'm Jack, what's your name?").toUpperCase();
let transformTriggers = {
    "transformTrigger1" :'blood',
    "transformTrigger2" : "animals",
    "transformTrigger3" : "hunting",
    "transformTrigger4" : "blood meal"
}
let terminateEventEntries = false;
let startEngine = true;
let allEvents = [];
let dailyEvent = [];
let dayCount = 1;

// display all events once d event entries have been terminated
const displaySummary = (handler) =>{
    // days Jack transformed to a werewolf
    let transformationDays = [];
    // days Jack did not transform to a werewolf
    let noTransformationDays = [];
    handler.forEach((item, index) => {
        if(item.dailyEvent.includes('blood') || item.dailyEvent.includes('animals') || item.dailyEvent.includes('hunting') || item.dailyEvent.includes('blood meal')){
            transformationDays.push(handler[index])
        }
        else{
            noTransformationDays.push(handler[index])
        }

    })
        // console.log(transformationDays)

    // d number of times Jack transformed to a werewolf
    let transformationCount = transformationDays.length;
    // d number of times Jack did not transform to a werewolf
    let noTransformationCount = noTransformationDays.length;
    let daysTransformed = [];
    let daysNotTransformed = [];
    console.log('');
    console.log('');
    console.log('');
    console.log('');
    console.log('YOUR TRANSFORMATION HISTORY : ');
    transformationDays.forEach((item) =>{
        daysTransformed.push(item.title);
        console.log(`You transformed to a werewolf on ${item.title} because you took in a blood content or you were engaged in activities involving blood`);
        console.log(`Here are your activities: `, item.dailyEvent)
    });
    console.log('');
    console.log('');
    console.log('');
    noTransformationDays.forEach((item) =>{
        daysNotTransformed.push(item.title);
        console.log(`You did not transform to a werewolf on ${item.title} because you did not take in a blood content and you were not engaged in activities involving blood`);
        console.log(`Here are your activities:` , item.dailyEvent)
    })
    console.log('');
    console.log('');
    console.log('=======================================');
    console.log(`No. of days you transformed : ${transformationCount}`);
    console.log(`Here are the days you transformed :`, daysTransformed);
    console.log('');
    console.log('=========================================');
    console.log(`No. of days you did not transform : ${noTransformationCount}`);
    console.log(`Here are the days you did not transform :`, daysNotTransformed);
    
}

function triggers(){
    console.log('....The following things & activities are capable of turning me into a werewolf --> ' + `${transformTriggers.transformTrigger1}` + ', ' + `${transformTriggers.transformTrigger2}` + ', ' + `${transformTriggers.transformTrigger3}` + ', ' + `${transformTriggers.transformTrigger4}`);
    console.log('Let\'s get Started');
    console.log('Wishing you a happy recording and tracking');
    console.log('=======================================');
    console.log('Please enter the events for the day. Type \'Done\' to move to the next day');

}

const promptEvent = () => {
    let event = prompt('Enter event ', '').toLowerCase();
    console.log(event)
    if(event === '' || event === null){
        console.error('Enter an event');
        promptEvent();
    }
  
    else if(event === 'done'){
        nextDay();
    }
    else if(terminateEventEntries === true) return;
    else{
        weekdayHandler.forEach(days => {
            if(Number(days.day) == dayCount){
                days.dailyEvent.push(event)
            }
            // console.log(days.dailyEvent)
        })
        promptEvent();
    }
    
    
//   e.preventDefault();
}

function nextDay(){
    let nextStageTrigger = prompt("Would you like to move on to the next day? (Enter a 'yes'or 'no')").toLowerCase()
    if(nextStageTrigger === 'yes'){
        dayCount = Number(dayCount) + 1;
        weekdayHandler.push({
            title: `Day ${dayCount}`,
            day: `${dayCount}`,
            dailyEvent: []
        })
        // console.log(weekdayHandler)
        console.log('------------------------------------')
        alert('Please enter the events of ' + weekdays[dayCount - 1] + ' ' + '(Type \'Done\' to move on to the next day')
        // console.log('Enter events for the ' + weekdays[dayCount - 1])
        promptEvent();
    }
    else if(nextStageTrigger === 'no' || nextStageTrigger === null){
        terminateEventEntries = true;
        startEngine = false;
        dayCount = 11;
        displaySummary(weekdayHandler);
    }
    else{
        return;
    }
    
}

const queryEvents = (weekdays) =>{
    if(dayCount < 11){
        weekdayHandler.push({
            title: `Day ${dayCount}`,
            day: `${dayCount}`,
            dailyEvent : []
        })
        alert('Please enter the events of ' + weekdays[dayCount - 1] + ' ' + '(Type \'Done\' to move on to the next day')
        promptEvent(dayCount)
    }
    return;
}

if(identity === ''){
  alert('Your name is required');
  identity = prompt("----Hello, I'm Jack, what's your name?");
  console.log("Hello" + " " + identity);
  getAge();
}
  
else if(isNaN(identity)){
    console.log("Hello" + " " + identity);
    getAge();
}
else{
    alert("You can't input number(s) to this");
    let identity = prompt("----Hello, I'm Jack, what's your name?");
    if(isNaN(identity)){
        console.log("Hello" + " " + identity);
        getAge();
    }
    else{
        console.log('You have reached the limit of inputting an invalid response. Reload the page for another trial')
    }
}


function getAge(){
    let age = prompt("How old are you?")
    if(age === '' ){
        console.log('Enter your age');
        age = prompt("How old are you"); 
        triggers();
        promptEvent();
    }
    else if(isNaN(age)){
        console.error('Input numbers only');
        getAge();
    }
    else if(age > 0 && age <= 16){
        alert('Uhm....Sorry, I\'m afraid you are too young to record my transformations');
    }
    else if(age > 100){
      alert('Uhm....Sorry, I\'m afraid you are too old to record my transformations');
    }
    else if(age !== '' ){
        alert('....Great, you are old enough to take record of my transformations');
        triggers();
        promptEvent();
    }

}

