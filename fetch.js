const grid = document.getElementById("gridBase");

async function getUser() {
  const response = await fetch("https://dummyjson.com/users");
  const data = await response.json();

  const users = data.users;
  console.log(users);

  users.forEach((item) => {
    const element = document.createElement("div");
    element.classList.add("item");

    element.innerHTML = `<img src=${item.image} />
    <div class="column">
    <span style="font-weight: 700; font-size:18px">${item.firstName}</span>
    <span style="font-sie: 14px">${item.email}</span>
    </div>`;
    grid.appendChild(element);
  });
}
getUser();
