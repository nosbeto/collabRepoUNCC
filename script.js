fetch('https://www.loc.gov/?fo=json')
  .then((response) => response.json())
  .then((data) => console.log(data));