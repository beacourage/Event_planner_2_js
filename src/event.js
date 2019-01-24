class Event {
  constructor(description, date, time) {
    this.description = description;
    this.date = date;
    this.time = time;
  }

  elementToDisplay() {
  	let div = document.createElement('div')
  	div.innerText = `${this.description} on ${this.date} at ${this.time}`
  	return div;
  }

  getDateObject() {
    return Date.parse(this.date)
  }

}
