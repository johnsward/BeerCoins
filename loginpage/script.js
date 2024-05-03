const currentDate = document.querySelector('.current-date');
daysTag = document.querySelector('.days');
prevNextIcon = document.querySelectorAll('.icons span');
const currentTime = document.querySelector('.time p');
const closeSchedule = document.querySelector('.schedule-close');
const addBtn = document.querySelector('.add-event-btn');
const closeAddEvent = document.querySelector('.close');
const addEventForm = document.querySelector('.add-event .close');
const calendarWrapper = document.querySelector('.calendar-wrapper');
const closeCalendar = document.querySelector('.close-calendar');
const calendarLink = document.querySelector('a[href="#calendar-wrapper"]');

let selectedDay = null;

let date = new Date();

//Getting new year, month
currYear = date.getFullYear();
currMonth = date.getMonth();
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
    'October', 'November', 'December'];


const renderCalendar = () => {
    let firstDayOfMonth = new Date(currYear, currMonth, 1).getDay(),
        lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(),
        lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth,).getDay(),
        lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();
    let liTag = "";

    // Adjust the first day of the month calculation
    firstDayOfMonth = (firstDayOfMonth - 1 + 7) % 7;

    for (let i = firstDayOfMonth; i > 0; i--) {
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }

    for (let i = 1; i <= lastDateofMonth; i++) {
        let isToday = i === date.getDate() && currMonth === new Date().getMonth()
            && currYear === new Date().getFullYear() ? "active" : "";
        liTag += `<li class="selectable ${isToday}" data-day="${i}">${i}</li>`;
    }

    for (let i = lastDayofMonth; i <= 6; i++) {
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
    }

    currentDate.innerText = `${months[currMonth]} ${currYear}`;
    daysTag.innerHTML = liTag;
    chooseDay();
    toggleScheduleVisibility(false);
    toggleAddEventFormVisibility(false);

}


renderCalendar();


prevNextIcon.forEach(icon => {
    icon.addEventListener('click', () => {
        currMonth = icon.id == "prev" ? currMonth - 1 : currMonth + 1;

        if (currMonth < 0) {
            currMonth = 11;
            currYear--;
        } else if (currMonth > 11) {
            currMonth = 0;
            currYear++;
        }

        // Update the date object to the current date
        date = new Date(currYear, currMonth, date.getDate());
        renderCalendar();
    });
});


currentTime.innerText = date.toLocaleTimeString('EU', { hour: 'numeric', minute: 'numeric', hour12: false });
// Update current time every second
setInterval(() => {
    date = new Date();
    currentTime.innerText = date.toLocaleTimeString('EU', { hour: 'numeric', minute: 'numeric', hour12: false });
}, 1000);

function chooseDay() {
    const selectableDays = document.querySelectorAll('.selectable');

    selectableDays.forEach(day => {
        day.addEventListener('click', (event) => {
            // Remove the previous selected day class
            if (selectedDay) {
                selectedDay.classList.remove('selected');
            }

            // Update selected day and add class
            selectedDay = event.target;
            selectedDay.classList.add('selected');

            // Update the date object to the selected date
            date = new Date(currYear, currMonth, selectedDay.dataset.day);
            renderCalendar();

            // Show schedule when day is chosen
            const schedule = document.querySelector('.schedule');
            schedule.classList.add('active');
        });
    });
}


// Function to toggle the visibility of the schedule
function toggleScheduleVisibility(visible) {
    const schedule = document.querySelector('.schedule');
    schedule.style.display = visible ? 'block' : 'none';
}

// Function to toggle the visibility of the add event form
function toggleAddEventFormVisibility(visible) {
    const addEventForm = document.querySelector('.add-event');
    addEventForm.style.display = visible ? 'block' : 'none';
}


// Event listener for the days in the calendar
daysTag.addEventListener('click', (event) => {
    const selectedDayElement = event.target;
    if (selectedDayElement.classList.contains('selectable')) {
        // Update the selectedDay variable
        selectedDay = parseInt(selectedDayElement.dataset.day);

        // Remove the 'active' class from all days
        const allDays = document.querySelectorAll('.days li');
        allDays.forEach(day => day.classList.remove('active'));

        // Add the 'active' class to the selected day
        selectedDayElement.classList.add('active');

        // Toggle the visibility of the schedule
        toggleScheduleVisibility(true);
    }
});

// Event listener for the close button
closeSchedule.addEventListener('click', () => {
    toggleScheduleVisibility(false);
});


// Event listener for the add button
addBtn.addEventListener('click', () => {
   toggleAddEventFormVisibility(true);
});

// Event listener for the close button
closeAddEvent.addEventListener('click', () => {
    toggleAddEventFormVisibility(false);
});


function toggleSidebar() {
    var body = document.body;
    body.classList.toggle('sidebar-active');
}

// Event listener for the calendar link
calendarLink.addEventListener('click', () => {
    calendarWrapper.classList.add('active');
});

closeCalendar.addEventListener('click', () => {
    calendarWrapper.classList.remove('active');
});

