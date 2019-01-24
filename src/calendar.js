class Calendar {
  constructor() {
    this.events = [];
    // this.future = [];
    }

  add(event) {
    this.events.push(event);
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
  // displayFuture() {
  //   let future = this.future;
  //   var str = '<ul style="list-style-type:none">'
  //   future.forEach(function(event){
  //     str += '<li>' + event.description + " on " + event.date +  " at " + event.time + '</li>';
  //   });
  //   str += '</ul>';
  //   document.getElementById("eventListing").innerHTML = str;
  // }

  listEvents() {
    let events = this.events;
    let future = this.future;
    let today = new Date;
    var str = '<ul style="list-style-type:none">'

    events.forEach(function(event) {
    let userDate = new Date(event.date);
      if  (userDate >= today) {
    str += '<li>' + event.description + " on " + event.date +  " at " + event.time + '</li>';
      } });
  str += '</ul>';
  document.getElementById("eventListing").innerHTML = str;
  }
// Getting eventlisint and putting the str into it, putting our lofic into interface file



 sortedUpcomingEvents() {
   let futureevents = this.sort() ;
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
    this.sortedUpcomingEvents()/forEach((event) => {
      let eventHtml = event.elementToDisplay();
      div.appendChild(eventHtml);
    })
    return div
  }

}
