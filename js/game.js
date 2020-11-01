element = document.querySelector('.ff');
elel = document.querySelector('.ffff');

secodary_element = document.querySelector('.ss');
secodary_elel = document.querySelector('.ssss');

third_element = document.querySelector('.tt');
third_elel = document.querySelector('.tttt');

fourth_element = document.querySelector('.fo');
fourth_elel = document.querySelector('.fofo');

fifth_element = document.querySelector('.fi');
fifth_elel = document.querySelector('.fifi');

sixth_element = document.querySelector('.six');
sixth_elel = document.querySelector('.sixsix');

seventh_element = document.querySelector('.se');
seventh_elel = document.querySelector('.sese');

eighth_element = document.querySelector('.ee');
eighth_elel = document.querySelector('.eeee');

nineth_element = document.querySelector('.nn');
nineth_elel = document.querySelector('.nnnn');

element_list = [element, secodary_element, third_element, fourth_element, fifth_element, sixth_element, seventh_element, eighth_element, nineth_element]

// let playerOne = {
//     element: "X",
//     win: false,
//     win_count: 0
// }

// let playerTwo = {
//     element: "O",
//     win: false,
//     win_count: 0
// }


let count = 0





// let clearGame = () => {
//     element_list.forEach(e => {
//         elements_value = e.getAttribute("id")
//         e.innerHTML = ""
//     });
// }

// console.log(clearGame() + 'heey')


let putElement = (element) => {
    let empty = element.getAttribute("id")
    console.log(empty)
    if (count%2 == 0 && empty == null) {
        element.innerHTML = "O";
        element.setAttribute("id", "o")
        console.log(element)
    }
    else if (count%2 != 0 && empty == null) {
        element.innerHTML = "X"
        element.setAttribute("id", "x")
        console.log(element)
    }
    
}


let addEvent = (elem, innerElement) => {
    
    elem.addEventListener('click', () => {
        count+=1
        console.log(count)
        putElement(innerElement)
    })
    
}

addEvent(elel, element)
addEvent(secodary_elel, secodary_element)
addEvent(third_elel, third_element)
addEvent(fourth_elel, fourth_element)
addEvent(fifth_elel, fifth_element)
addEvent(sixth_elel, sixth_element)
addEvent(seventh_elel, seventh_element)
addEvent(eighth_elel, eighth_element)
addEvent(nineth_elel, nineth_element)


// document.querySelector(".btn").addEventListener('click', () => {
//     clearGame()
// })