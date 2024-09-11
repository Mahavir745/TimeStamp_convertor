let currentTimeStamp = document.querySelector("#currentTimeStamp");
let currentTime = document.querySelector("#currentTime")
let convert = document.querySelector("#convert")
let GMT = document.querySelector("#GMT-time")
let TimeZone = document.querySelector("#TimeZone")
let date_timestamp = document.querySelector("#date-timestamp")



convert.addEventListener("click",()=>{
    let Timestamp = document.querySelector("#Timestamp").value;
    let dateStamp = document.querySelector("#dateTimestamp").value;

    let count = 0;
    let value = Timestamp

    if(Timestamp != ""){
        let date = new Date(Number(Timestamp));
        GMT.innerHTML = date.toUTCString()
        TimeZone.innerHTML = date
        date_timestamp.innerHTML = value
        count ++
    }

    if(dateStamp != ""){
        let dateconvert = dateStamp.split("/").reverse().join()
        let date = new Date(dateconvert)
        date_timestamp.innerHTML = date.getTime()
        TimeZone.innerHTML = date.toString()
        GMT.innerHTML = date.toUTCString()
        count++
    }

    if(count==0){
        alert("Input Is Empty")
    }

    

})

setInterval(() => {
    let date = new Date()
    currentTimeStamp.innerHTML = date.getTime()
    currentTime.innerHTML = date.toLocaleTimeString('en-GB', {hour12:true})
}, 1000);