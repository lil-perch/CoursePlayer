strContentLocation = "linkRI.html";  //link file
strCourseLocation = "start.html"; //actual content
strGoodbyeLocation = "goodbye.html";
var id;

function loadContent(){
    window.course_content.document.location.href = strContentLocation;
}

function loadTheCourse()
{
    //console.log = "LoadTheCourse called"
    //window.course_content.document.location.href = strCourseLocation;
    window.open(strCourseLocation,"player","fullscreen=yes");
}

function closeIOSCourse()
{
    window.course_content.document.location.href = strGoodbyeLocation;
    window.close();
}

function closeTheCourse(win)
{
    win.close();
    id = window.setInterval("checkWindow()",1000);
}

function checkWindow()
{
    window.clearInterval(id);
    window.course_content.document.location.href = strGoodbyeLocation;
    window.close();
}