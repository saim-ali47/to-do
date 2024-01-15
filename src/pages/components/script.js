import React from 'react'

const script = () => {
    const inputtext = document.getElementById(".to-do-input");
    const list = document.getElementById(".list-cont");
    function addtask() {
      if (inputtext.value == "") {
        alert("Pleade add a task");
      } else {
        let li = document.createElement("li");
        li.innerHTML = inputtext.value;
        list.appendChild(li);
      }
    }
}

export default script