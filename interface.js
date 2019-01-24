let submitButton = document.getElementById('button');

let calendar = new Calendar()

submitButton.addEventListener('click', function(){

  let eventDescription = document.getElementById('desc').value;
  let eventDate = document.getElementById('date').value;
  let eventTime = document.getElementById('time').value;

  let eventNew = new Event(eventDescription, eventDate, eventTime);

  calendar.add(eventNew);

  display() = () => {
    let eventsDiv = doctument.getElementbyId('eventListing');
    events = calendar.elementToDisplay();
    eventsDiv.innerHTML = '',
    eventsDiv.appendChild(events);
  }
  // calendar.sort()
  calendar.listEvents()

});
