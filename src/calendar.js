class Calendar {
  constructor() {
    this.events = [];
    this.future = [];
    }

  add(event) {
    this.events.push(event);
  }

  sort() {
    let events = this.events;
    let future = this.future;
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
}
