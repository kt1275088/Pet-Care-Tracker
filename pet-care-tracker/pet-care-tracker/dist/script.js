document.getElementById('healthForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const healthCheck = document.getElementById('healthCheck').value;
    const healthDate = document.getElementById('healthDate').value;
    if (healthCheck && healthDate) {
        addHealthCheck(healthCheck, healthDate);
        document.getElementById('healthCheck').value = '';
        document.getElementById('healthDate').value = '';
    }
});

document.getElementById('feedingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const feedingTime = document.getElementById('feedingTime').value;
    if (feedingTime) {
        addFeedingTime(feedingTime);
        document.getElementById('feedingTime').value = '';
    }
});

document.getElementById('vetForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const vetAppointment = document.getElementById('vetAppointment').value;
    const vetDate = document.getElementById('vetDate').value;
    if (vetAppointment && vetDate) {
        addVetAppointment(vetAppointment, vetDate);
        document.getElementById('vetAppointment').value = '';
        document.getElementById('vetDate').value = '';
    }
});

function addHealthCheck(check, date) {
    const healthList = document.getElementById('healthList');
    const listItem = document.createElement('li');
    listItem.textContent = `${check} - ${date}`;
    healthList.appendChild(listItem);
}

function addFeedingTime(time) {
    const feedingList = document.getElementById('feedingList');
    const listItem = document.createElement('li');
    listItem.textContent = time;
    feedingList.appendChild(listItem);
}

function addVetAppointment(appointment, date) {
    const vetList = document.getElementById('vetList');
    const listItem = document.createElement('li');
    listItem.textContent = `${appointment} - ${date}`;
    vetList.appendChild(listItem);
}