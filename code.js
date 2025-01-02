function McTerialLoad() {
  const elementList = document.querySelector('.Periodic_Element_List');
  for (let i = 0; i < PeriodicElements.length; i++) {
    let li = document.createElement('li');
    li.className = `Element-${PeriodicElements[i].symbol}`;
    li.innerHTML = `
      <span class="position">${PeriodicElements[i].position}</span>
      <span class="symbol">${PeriodicElements[i].symbol}</span>
      <span class="name">${PeriodicElements[i].name}</span>
      <span class="weight">${PeriodicElements[i].weight}</span>
    `;
    elementList.appendChild(li);
  }}

