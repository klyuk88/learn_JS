// task 1 
let week = ['sun','mon','tues','wed','thurs','fri','sat'];

for (let i = 0; i < week.length; i++) {
    if (week[i] == 'sat' || week[i] == 'sun') {
        document.write('<h2>' + week[i] + '</h2>');
    } else if (week[i] != 'mon') {
        document.write('<p>' + week[i] + '</p>');
    }
    if (week[i] == 'mon') {
        document.write('<p><em>' + week[i] + '</em></p>');
    }
}
document.write('<hr></hr>');

// task 2 
let arr = ['11','12','31','14','15','16','71'];

for (let i = 0; i < arr.length; i++) {
    if ( arr[i].indexOf('3') == 0 || arr[i].indexOf('7') == 0 ) {
        console.log(arr[i]);
    }
}