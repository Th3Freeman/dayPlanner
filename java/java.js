var currentDateAndTime = Date(Date.now());

$(".current_date").text(currentDateAndTime);

function savePlans() {
    localStorage.am9=$("#9am").val();
    localStorage.am10=$("#10am").val();
    localStorage.am11=$("#11am").val();
    localStorage.pm12=$("#12pm").val();
    localStorage.pm1=$("#1pm").val();
    localStorage.pm2=$("#2pm").val();
    localStorage.pm3=$("#3pm").val();
    localStorage.pm4=$("#4pm").val();
    localStorage.pm5=$("#5pm").val();
    
};

function loadPlans() {
    $("#9am").val(localStorage.am9);
    $("#10am").val(localStorage.am10);
    $("#11am").val(localStorage.am11);
    $("#12pm").val(localStorage.pm12);
    $("#1pm").val(localStorage.pm1);
    $("#2pm").val(localStorage.pm2);
    $("#3pm").val(localStorage.pm3);
    $("#4pm").val(localStorage.pm4);
    $("#5pm").val(localStorage.pm5);
};


loadPlans();

