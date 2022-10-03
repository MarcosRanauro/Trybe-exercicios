function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  }
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  function dias(day){
    let capturandoUlDays = document.getElementById("days");
    for (let index = 0; index < day.length; index += 1) {
        let criandoTagLi = document.createElement("li");
        criandoTagLi.innerHTML = day[index];
        criandoTagLi.className = "day";
        capturandoUlDays.appendChild(criandoTagLi);
        if (day[index] === 24 || day[index] === 31) {
            criandoTagLi.className = "day holiday";
        }
        if (day[index] === 4 || day[index] === 11 || day[index] === 18) {
            criandoTagLi.className = "day friday";
        }
        if (day[index] === 25) {
            criandoTagLi.className = "day friday holiday";
        }
    }
  }
  dias([29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]);
  
  