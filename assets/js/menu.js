const menuLinks = document.querySelector(".menuLinks");

function createItems(param) {
  return `
    <li class="menuLink">
      <label>
        <input type="checkbox">
        ${param.label}
      </label>
      ${param.children?.length > 0 ? '<ul class="menuLinks">' + param.children.map((x) => createItems(x)).join("") + "</ul>" : ""}
    </li>
  `;
}

async function init() {
  const response = await fetch("/assets/json/data.json").then((x) => x.json());
  menuLinks.innerHTML = response.map((x) => createItems(x) + "<hr>").join("");
}

init();
