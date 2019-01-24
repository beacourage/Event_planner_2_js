describe('Calendar', () => {
  it('saves a user event', () => {
    const event = new Event("JAG's BBQ: Fun for everyone", "10/10/2019", "08:00")
    const calendar = new Calendar
    calendar.add(event)
    expect(calendar.events[0]).toBe(event)
  })
    it('saves a user event description', () => {
    const event = new Event("JAG's BBQ: Fun for everyone", "10/10/2019", "08:00")
    const calendar = new Calendar
    calendar.add(event)
    expect(calendar.events[0].description).toBe("JAG's BBQ: Fun for everyone")
  })
    it('saves a user event time', () => {
    const event = new Event("JAG's BBQ: Fun for everyone", "10/10/2019", "08:00")
    const calendar = new Calendar
    calendar.add(event)
    expect(calendar.events[0].time).toBe("08:00")
  })
    it('saves a user event date', () => {
    const event = new Event("JAG's BBQ: Fun for everyone", "10/10/2019", "08:00")
    const calendar = new Calendar
    calendar.add(event)
    expect(calendar.events[0].date).toBe("10/10/2019")
  })

  it('only displays upcoming events', () => {
    const testCalendar = new Calendar
    const futureEvent = new Event("JAG's BBQ: Fun for everyone", "2019/10/23", "08:00")
    const pastEvent = new Event("JAG's Lido Party", "2018/08/19", "07:00")
    const anotherfutureEvent = new Event("JAG", "2019/03/18", "06:00")
    testCalendar.add(futureEvent)
    testCalendar.add(pastEvent)
    testCalendar.sort()
    expect(testCalendar.future.length).toBe(1)
    expect(testCalendar.future[0].date).toBe("2019/10/23")
  })

  it('displays events in chronological order', () => {
    const testCalendar = new Calendar;
    const earlyevent = new Event("BMC BBQ: FUN TIMEZ", "2019/08/19", "08:00");
    const lateevent = new Event("BMC ROUND 2", "2019/09/19", "08:00");
    testCalendar.add(lateevent);
    testCalendar.add(earlyevent);
    testCalendar.sort()
    console.log(testCalendar.future)
    expect(testCalendar.future[0]).toBe(earlyevent)
  });
})
