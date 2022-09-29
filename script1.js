var select = document.getElementById('site');

document.getElementById("button").onclick = function(){
    var value = select.value
    var homeworkOff = false;
 if (homeworkOff == true)
    {
        window.location.href = "/index.html";
        alert("Currently Offline :/");
    } 
    else if (value == "A1")
    {
        window.location.href = "/Sections/Classes/A1.html";
        }
    else if (value == "A2")
    {
        window.location.href = "/sections/Classes/A2.html";
    }
    else if (value == "A3")
    {
        window.location.href = "/sections/Classes/A3.html";
    }
    else if (value == "A4")
    {
        window.location.href = "/sections/Classes/A4.html";
    }
    else if (value == "A5")
    {
        window.location.href = "/sections/Classes/A5.html";
    }
    else if (value == "A6")
    {
        window.location.href = "/sections/Classes/A6.html";
    }
};