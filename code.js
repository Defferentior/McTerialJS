function McTerialLoad() {
  const elementList = document.querySelector('.Periodic_Element_List');
  for (let i = 0; i < PeriodicElements.length; i++) {
    let li = document.createElement('li');
    li.textContent = PeriodicElements[i].name;
    elementList.appendChild(li);
  }}

