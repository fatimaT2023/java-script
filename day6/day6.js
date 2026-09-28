fetch("menu.json")
  .then(response => response.json())
  .then(data => {
    localStorage 
localStorage.setItem("menu", JSON.stringify(data));
// localStorage.setItem("menu", JSON.stringify(data[0].name));
// localStorage.setItem("price", JSON.stringify(data[0].price));

    let item = document.getElementById("item");

    for (let i = 0; i < data.length; i++) {

      item.innerHTML += `
        <div class="card">
          <p>${data[i].name}</p>
          <p>${data[i].price}</p>
          <p>${data[i].availability}</p>
        </div>
      `;
    };
  });