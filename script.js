function showResult(action) {
    if (action === 'attendance') {
        alert("Your Attendance: 88% - You are eligible for exams!"); 
    } else if (action === 'assignment') {
        alert("Uploading Assignment... Done! Teacher will review soon."); 
    } else if (action === 'download') {
        alert("Starting download of Previous Year Question Paper (PDF)..."); 
    } else if (action === 'notice') {
        alert("Notice: College will be closed this Friday for the Cultural Fest."); 
    } else if (action === 'contact') {
        alert("Request sent to Administration. Check your portal for updates."); 
    }
}

function switchRole() {
    let role = document.getElementById("roleSelect").value;
    alert("Switching to " + role + " view... (Layout updated)");
}