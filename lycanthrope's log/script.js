console.log("--------Jack's lycanthrope History 2021--------");
let weekdays = ["first day","second day","third day","fourth day", "fifth day"];
let weekdayHandler = [];
let identity = prompt("----Hello, I'm Jack, what's your name?").toUpperCase();
let transformTriggers = {
    "transformTrigger1" :'blood',
    "transformTrigger2" : "animals",
    "transformTrigger3" : "hunting"
}
let allEvents = [];
let dailyEvent = [];
let dayCount = 1;

function triggers(){
    console.log('....The following things & activities are capable of turning me into a werewolf --> ' + `${transformTriggers.transformTrigger1}` + ', ' + `${transformTriggers.transformTrigger2}` + ', ' + `${transformTriggers.transformTrigger3}`);
    console.log('Let\'s get Started');
    console.log('Wishing you a happy recording and tracking');
    console.log('=======================================');
    console.log('Please enter the events for the day. Type \'Done\' to move to the next day');

}

const promptEvent = () => {
    let event = prompt('Enter event ', '').toLowerCase();
    // console.log(event);

    if(event === '' || event === null){
        console.error('Enter an event');
        promptEvent();
        // event = prompt('Enter event ', '').toLowerCase();
        // allEvents = [];
    }
  
    else if(event === 'done'){
        
        nextDay();

    }
    else{
        weekdayHandler.forEach(days => {
            if(Number(days.day) == dayCount){
                days.dailyEvent.push(event)
            }
            console.log(days.dailyEvent)
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
        console.log(weekdayHandler)
        console.log('------------------------------------')
        alert('Please enter the events of ' + weekdays[dayCount - 1] + ' ' + '(Type \'Done\' to move on to the next day')
        // console.log('Enter events for the ' + weekdays[dayCount - 1])
        promptEvent();
    }
    else if(nextStageTrigger === 'no' || nextStageTrigger === null){
        terminateEventEntries = true;
        startEngine = false;
        displaySummary(weekdayHandler);
    }
    else{
        return;
    }
    
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
    else if(age > 90){
      alert('Uhm....Sorry, I\'m afraid you are too old to record my transformations');
    }
    else{
        alert('....Great, you are old enough to take record of my transformations');
        triggers();
        promptEvent();
    }

}

