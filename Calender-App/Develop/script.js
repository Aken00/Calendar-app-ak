// Date and time code
var tasks = $(".selected-hour")
var currentDay = $("#currentDay");
var currentTimer = $("#timer");



console.log(tasks);

// each time block is color-coded to indicate whether it is in the past, present, or future
var hourColor = function() {
    var currentHour = (moment().hour());

    for (var i = 0; i < tasks.length; i++) {
        var task = $(tasks[i])
        var blockHour = task.data("hour");


        if (blockHour < currentHour) {
            task
            .addClass("past")
        } 
        else if (task === currentHour) {
            task
            .addClass("present")
        }
        else {
            task
            .addClass("future")
    }
}
};

var updateTime = function() {

    var timeNow = moment();
    var displayTime = timeNow.format("LL");
    currentDay.text(displayTime);
};

var clocks = function() {
    var timeNow =moment();

    var clockDisplay = timeNow.format("LTS")

}


// Save button for saving to local storage
// var tasks = JSON.parse(localStorage.getItem('text-area')) || [];

// Click into a time block and enter an event

// The text for that event is saved in local storage

// The saved events persist
