// Current date & time
var todaysDate = moment().format("[Today is : ]dddd, MM/DD/YYYY");
// Targets ID currentDay and inputs the current Date
$("#currentDay").text(todaysDate);

function hourTracker() {
    // Grabs current hours & stores in variable
    var currentHour = moment().hour();

    // Grabs all elements with time-block class 
    $(".time-block").each(function() {

    // Stores all the hours into our variable hours
        var hours = parseInt($(this).attr("id").split("hour")[1]);
        // Adds "past" class to hour if hours is before current time
        if (hours < currentHour) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        } // Adds "present" class to hour if hour is the same as current time
        else if (hours === currentHour) {
            $(this).removeClass("future");
            $(this).removeClass("past");
            $(this).addClass("present");
        } // Adds "future" class to hour if hour is ahead of current time
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    });
};

hourTracker();

