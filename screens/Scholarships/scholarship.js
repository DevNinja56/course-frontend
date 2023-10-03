let checkInp = document.querySelector(".checkInp")

let check = true

let onCheck = () => {
    if(check){
        checkInp.style.backgroundColor="#2c79ff"
    }
    else{
        checkInp.style.backgroundColor="white"
    }

    check = !check
}