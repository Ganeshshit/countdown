const endDate = "30 November 2022 "

document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input")
// const clock =()=>{

// }1 type of function
function clock() {
    const end = new Date(endDate)
    const now = new Date()
    // console.log(end)
    // console.log(now)
    const diff = (end - now) / 1000
    if (diff < 0) {


        return
    }
    console.log(diff)
    // convert into days
    inputs[0].value = Math.floor(diff / 3600 / 24)
    // conver into houers
    inputs[1].value = Math.floor(diff / 3600) % 24
    console.log(Math.floor(diff / 3600) % 24)
    console.log(Math.floor(diff / 60) % 60)
    inputs[2].value = Math.floor(diff / 60) % 60
    inputs[3].value = Math.floor(diff) % 60





}
// 
clock()