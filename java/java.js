var currentDateAndTime = Date(Date.now());
var currentHour = new Date().getHours();

$(document).ready(function () {
    loadPlans();
});

$(".current_date").text(currentDateAndTime);


if (currentHour > 9) {
    $("#9").addClass("bg-secondary")
}

else if (currentHour < 9) {
    $("#9").addClass("bg-success")
}

else if (currentHour = 9) {
    $("#9").addClass("bg-danger")
};


function savePlans() {
    localStorage.am9 = $("#9").val();
    localStorage.am10 = $("#10").val();
    localStorage.am11 = $("#11").val();
    localStorage.pm12 = $("#12").val();
    localStorage.pm1 = $("#13").val();
    localStorage.pm2 = $("#14").val();
    localStorage.pm3 = $("#15").val();
    localStorage.pm4 = $("#16").val();
    localStorage.pm5 = $("#17").val();

};

function loadPlans() {
    $("#9").val(localStorage.am9);
    $("#10").val(localStorage.am10);
    $("#11").val(localStorage.am11);
    $("#12").val(localStorage.pm12);
    $("#13").val(localStorage.pm1);
    $("#14").val(localStorage.pm2);
    $("#15").val(localStorage.pm3);
    $("#16").val(localStorage.pm4);
    $("#17").val(localStorage.pm5);
};

function clearLocalStorage() {
    $("#9").val("");
    $("#10").val("");
    $("#11").val("");
    $("#12").val("");
    $("#13").val("");
    $("#14").val("");
    $("#15").val("");
    $("#16").val("");
    $("#17").val("");
    savePlans();
    return localStorage = null;
};

console.log(new Date().getHours())




