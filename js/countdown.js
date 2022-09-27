// const days = {
//     sunday: 0,
//     monday: 1,
//     tuesday: 2,
//     wednesday: 3,
//     thursday: 4,
//     friday: 5,
//     saturday: 6
// }

// function CountDown(id, date) {
//     var countDownDate = new Date().setHours(12, 0, 0, 0)
//     var today = new Date();

//     var diff = date - today.getDay()

//     if (diff > 0) {
//         // Jun 25, 2022 12:00:00
//         // countDownDate = new Date(`tuesday 12:00:00`)
//         countDownDate = today.setDate(today.getDate() + diff)
//             // countDownDate = today + new Date(`tuesday 12:00:00`)
//     } else {
//         countDownDate = today.setDate(today.getDate() + diff + 7)
//     }
//     console.log(countDownDate);

//     // Update the count down every 1 second
//     var x = setInterval(function() {
//         // Get today's date and time
//         var now = new Date().getTime();

//         // Find the distance between now and the count down date
//         var distance = countDownDate - now;

//         // Time calculations for days, hours, minutes and seconds
//         var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//         var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//         var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//         var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//         // Display the result in the element with id="demo"
//         document.getElementById(id).innerHTML = days + "<span class='c-name'> <strong>DAYS</strong></span> " + hours + "<span class='c-name'> <strong>HOURS</strong></span> " +
//             minutes + "<span class='c-name'> <strong>MINUTES</strong></span> " + seconds + "<span class='c-name'> <strong>SECONDS</strong></span> ";

//         // If the count down is finished, write some text
//         if (distance < 0) {
//             clearInterval(x);
//             document.getElementById(id).innerHTML = "EXPIRED";
//         }
//     }, 1000);
// }



function CountDown(id, day, time) {

    function update() {

        // Get current date and time
        var today = new Date();

        // Get number of days to Friday
        var dayNum = today.getDay();
        var daysToFri = day - (dayNum < day ? dayNum : dayNum - 7);

        // Get milliseconds to noon friday
        var fridayNoon = new Date(+today);
        fridayNoon.setDate(fridayNoon.getDate() + daysToFri);
        fridayNoon.setHours(
            time.split(':')[0],
            time.split(':')[1],
            time.split(':')[2],
            time.split(':')[3]
        );
        // Round up ms remaining so seconds remaining matches clock
        var ms = Math.ceil((fridayNoon - today) / 1000) * 1000;
        var d = ms / 8.64e7 | 0;
        var h = (ms % 8.64e7) / 3.6e6 | 0;
        var m = (ms % 3.6e6) / 6e4 | 0;
        var s = (ms % 6e4) / 1e3 | 0;

        // Display the result in the element with id="demo"
        // document.getElementById(id).innerHTML = d   , h  , m  , s ;style='display:flex; flex-direction:column;'
        // document.getElementById(id).innerHTML = h;
        d = d<10? "0"+d: d;
        h = h<10? "0"+h: h;
        m = m<10? "0"+m: m;
        s = s<10? "0"+s: s;
        document.getElementById(id).innerHTML =  "<div class='clabel'> <p class='countertext'> DAYS </p><h1 class='cnumber days' > "+  d +"</h1></div>" + "<div class='clabel'> <p class='countertext'>HOURS</p><h1 class='cnumber hours'>"+ h +"</h1></div>" + "<div class='clabel'> <P class='countertext'>MINUTES</P><h1 class='cnumber'>"+ m +"</h1></div>"  + "<div class='clabel'><P class='countertext'>SECONDS</p><h1 class='cnumber'>"+ s +"</h1></div>";
        // document.getElementById(id).innerHTML =  "<span  class='c-name'><strong>DAYS</strong></span> " + "<h1 style='font-size:10rem; '>"+ d +"</h1>" + "<span  class='c-name'> <strong>HOURS</strong></span> "
        // + "<h1 style='font-size:10rem;'>"+ h +"</h1>" + "<span class='c-name'> <strong>MINUTES</strong></span> " + "<h1 style='font-size:10rem;'>"+ m +"</h1>" +"<span class='c-name'> <strong>SECONDS</strong></span> " + "<h1 style='font-size:10rem;'>"+ s +"</h1>";

    }

    // Run update just after next full second
    function runUpdate() {
        update();
        setTimeout(runUpdate, 1020 - (Date.now() % 1000));
    }

    runUpdate();

}