class Calendar {
  constructor() {
    this.events = [];
    // this.future = [];
    }

  add(event) {
    this.events.push(event);
    let eventString = JSON.stringify(this.sortedUpcomingEvents())
    console.log(eventString)
    console.log(`testing` + this.sortedUpcomingEvents())
    localStorage.setItem("Events", eventString)

  }

inStorage() {
  if (!localStorage.getItem('Events')){
    return []
  } else {
    return this.inflateEvents(JSON.parse(localStorage.getItem('Events')))
  }
}

inflateEvents(jsonObject) {
  let tempArray = [] ;
  jsonObject.forEach((event) => {
    var event = new Event(event.description, event.date, event.time)
    tempArray.push(event)
  })
  return tempArray
}

sort() {
    let events = this.events;
    let future = [];
    let today = new Date;

    events.forEach(function(event) {
      let userDate = new Date(event.date);
        if (userDate >= today) {
          future.push(event);
        }
    })
    return future;
  }
    
sortedUpcomingEvents() {
   let futureEvents = this.sort()
   
   futureevents.sort((event1, event2) => {
     let date1 = event1.getDateObject()
     let date2 = event2.getDateObject()

      // if date1<date2{
      //   return -1;
      // }
      // if date1>date2{
      //   return 1;
      // }
      // return 0;
     return date1 - date2;
   });
   return futureevents;
 }

  elementToDisplay() {
    let div = document.createElement('div');
    this.sortedUpcomingEvents().forEach((event) => {
      let eventHtml = event.elementToDisplay();
      div.appendChild(eventHtml);
    })
    return div
  }

}
