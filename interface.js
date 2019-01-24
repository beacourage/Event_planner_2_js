window.addEventListener('load', function (){

let calendar = new Calendar();
window.cal = calendar;

let submitButton = document.getElementById('button');

submitButton.addEventListener('click', function(){

  let eventDescription = document.getElementById('desc').value;
  let eventDate = document.getElementById('date').value;
  let eventTime = document.getElementById('time').value;

  let eventNew = new Event(eventDescription, eventDate, eventTime);

  calendar.add(eventNew);
  display() ;

});

const display = () => {
  let eventsDiv = document.getElementById('eventListing');
  console.log(eventsDiv)
  events = calendar.elementToDisplay();
  eventsDiv.innerHTML = '';
  eventsDiv.appendChild(events);
  }
  // calendar.sort()
  // calendar.sortedUpcomingEvents()

});
