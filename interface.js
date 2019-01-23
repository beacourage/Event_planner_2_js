let submitButton = document.getElementById('button');

let calendar = new Calendar()

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
	events = calendar.elementToDisplay();
	eventsDiv.innerHTML = "";
	eventsDiv.appendChild(events);
}


  // let eventListing = document.getElementById('eventListing');

  // let eventAdd = document.createElement("P");
  // eventAdd.innerText = `${eventNew.description} \n ${eventNew.date} \n ${eventNew.time}`;

  // eventListing.append(eventAdd);

