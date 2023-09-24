// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
document.addEventListener('DOMContentLoaded', function() {

  //$(function () {

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

//function to display day and time on top of page
var today = dayjs();
var currentTime = today.format('dddd, MMMM D, YYYY h:mm A');

function updateTime(){
  currentTime = dayjs().format('dddd, MMMM D, YYYY h:mm A');
  $('#currentDay').text(currentTime);
}
setInterval(updateTime, 1000);
updateTime();

// Container element for 9a-5p divs
var container = document.querySelector('.container-lg');

// Create 9 identical divs
for (i = 0; i < 9; i++) {
  // row for div
  var row = document.createElement('div');
  row.classList.add('row');
  //id for all rows
  row.id = "row-" + (i + 1);
  
  // Time block column
  var timeBlock = document.createElement('div');
  //timeBlock add classes
  timeBlock.classList.add('col-2', 'col-md-1', 'hour', 'text-center', 'py-3');
  timeBlock.textContent = dayjs().hour(i + 9).format('H');
  // Textarea column
  var textArea = document.createElement('textarea');
  textArea.classList.add('col-8', 'col-md-10', 'description');
  textArea.rows = 3;
  //TODOS add conditional for past, present, future
  var currentHour = dayjs().format('H');
  //used parseInt to properly compare variables
  if (parseInt(timeBlock.textContent) < parseInt(currentHour)) {
      textArea.classList.add('past');
    }else if(parseInt(timeBlock.textContent) === parseInt(currentHour)) {
      textArea.classList.add('present');
    }else{
      textArea.classList.add('future');
    };
  console.log('currentHour ' + currentHour, 'timeBlock ' + timeBlock.textContent);
  //convert timeblock back to am/pm format
  timeBlock.textContent = dayjs().hour(i +9).format('h A');
  // Button column
  var saveBtn = document.createElement('button');
  saveBtn.classList.add('btn', 'saveBtn', 'col-2', 'col-md-1');
  saveBtn.setAttribute('aria-label', 'save');
  // Icon element
  var icon = document.createElement('i');
  icon.classList.add('fas', 'fa-save');
  icon.setAttribute('aria-hidden', 'true');
  //Append icon to button
  saveBtn.appendChild(icon);

  // Append all in order
  row.appendChild(timeBlock);
  row.appendChild(textArea);
  row.appendChild(saveBtn);

  container.appendChild(row);
}


//Below is example div block from index.html
//<div id="hour-9" class="row time-block past">
/* <div class="col-2 col-md-1 hour text-center py-3">9AM</div>
<textarea class="col-8 col-md-10 description" rows="3"> </textarea>
<button class="btn saveBtn col-2 col-md-1" aria-label="save">
  <i class="fas fa-save" aria-hidden="true"></i>
</button>
</div> */

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
//});


});