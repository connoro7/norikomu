// let today = new Date()
// let dd = String(today.getDate()).padStart(2, '0') //?
// let mm = String(today.getMonth() + 1).padStart(2, '0') //?
// let yyyy = today.getFullYear() //?

// console.log(today.getMonth());

/**
 * @name Pretty Date Formatter
 * @description Gets the date and time from the Date() constructor and formats a prettier version of the current date and time.
 * @returns Hour:Minute:Second AM/PM, Day-of-Week, Month, Day-of-Month, Year
 */
function setDateAndTime() {
  var objToday = new Date(),
    weekday = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'),
    dayOfWeek = weekday[objToday.getDay()],
    domEnder = (function () {
      var a = objToday
      if (/1/.test(parseInt((a + '').charAt(0)))) return 'th'
      a = parseInt((a + '').charAt(1))
      return 1 == a ? 'st' : 2 == a ? 'nd' : 3 == a ? 'rd' : 'th'
    })(),
    dayOfMonth = today + (objToday.getDate() < 10) ? '0' + objToday.getDate() + domEnder : objToday.getDate() + domEnder,
    months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'),
    curMonth = months[objToday.getMonth()],
    curYear = objToday.getFullYear(),
    curHour = objToday.getHours() > 12 ? objToday.getHours() - 12 : objToday.getHours() < 10 ? '0' + objToday.getHours() : objToday.getHours(),
    curMinute = objToday.getMinutes() < 10 ? '0' + objToday.getMinutes() : objToday.getMinutes(),
    curSeconds = objToday.getSeconds() < 10 ? '0' + objToday.getSeconds() : objToday.getSeconds(),
    curMeridiem = objToday.getHours() > 12 ? 'PM' : 'AM'
  //   var today = curHour + ':' + curMinute + ':' + curSeconds + ' ' + curMeridiem + ', ' + dayOfWeek + ', ' + dayOfMonth + ' of ' + curMonth + ', ' + curYear //?
  var today = curHour + ':' + curMinute + ':' + curSeconds + ' ' + curMeridiem + ', ' + dayOfWeek + ', ' + curMonth + ' ' + dayOfMonth + ' ' + curYear //?
  document.getElementById('date').innerHTML = today
}

window.addEventListener('DOMContentLoaded', setDateAndTime) /*?*/
