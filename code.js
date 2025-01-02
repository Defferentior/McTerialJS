function McTerialLoad() {
  const elementList = document.querySelector('.Periodic_Element_List');
  for (let i = 0; i < PeriodicElements.length; i++) {
    let li = document.createElement('li');
    li.className = `Element-${PeriodicElements[i].symbol} an-${PeriodicElements[i].atomic_number}`;
    li.innerHTML = `
      <span class="position">${PeriodicElements[i].atomic_number}</span>
      <span class="symbol">${PeriodicElements[i].symbol}</span>
      <span class="name">${PeriodicElements[i].name}</span>
      <span class="weight">${PeriodicElements[i].atomic_mass}</span>
    `;
    elementList.appendChild(li);
  }}

