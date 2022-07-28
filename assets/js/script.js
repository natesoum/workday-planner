// Current date & time
var todaysDate = moment().format("[Today is : ]dddd, MM/DD/YYYY");
// Targets ID currentDay and inputs the current Date
$("#currentDay").text(todaysDate);

$(document).ready(function(){
    // Listens for click on save button
    $(".saveBtn").on("click", function(){
        // Grabs the parent of saveBtn attribute to save the hour 
        var time = $(this).parent().attr("id");
        // Grabs the siblings of saveBtn with the description class value to save plans
        var plans = $(this).siblings(".description").val().trim();
        // If user leaves text are blank, they will be alerted
        if (plans === ""){
            alert("You must type in the text area, please don't leave it blank. ");
        }
        else { // Saves both time and plans in local storage
            localStorage.setItem(time, plans);
            var approved = $("#stored");
            approved.removeClass("d-none");
        }
    })
});

// Targets the description value for each hour
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));

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

// Calls hourTracker function
hourTracker();

