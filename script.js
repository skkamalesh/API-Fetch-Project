async function APIfetch() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonData = await response.json();
    const rowdata = document.createElement("div");
    const container = document.createElement("div");
    container.className = "fluid-container";
    rowdata.className =
      "row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-2";
    for (let i = 0; i < jsonData.length; i++) {
      const col = document.createElement("div");
      const div = document.createElement("div");
      div.className = "card";
      div.innerHTML = `
                <div class="card-part">
                    <p id="name" class="card-title mb-3">Name: ${jsonData[i].name}</p>
                    <p class="card-text">Email: ${jsonData[i].email}</p>
                    <p class="card-text">Street: ${jsonData[i].address.street}</p>
                    <p class="card-text">City: ${jsonData[i].address.city}</p>
                    <p class="card-text">Phone: ${jsonData[i].phone}</p>
                </div>
            `;
      col.appendChild(div);
      rowdata.appendChild(col);
    }
    container.appendChild(rowdata);
    document.body.appendChild(container);
  } catch (error) {
    console.log(response.status(404));
  }
}
APIfetch();
