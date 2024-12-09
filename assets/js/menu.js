const contents = document.querySelector(".contents");

function childElemets(param) {
  return `
    <ul class="menuLinks">
      <li class="menuLink"><span onclick="clickLink(this)">${param.label}</span>
        ${param.children?.length > 0 ? param.children.map((x) => childElemets(x)).join("") : ""}
      </li>
    </ul>
  `;
}

async function init() {
  const response = await fetch("/assets/json/data.json").then((x) => x.json());
  contents.innerHTML = response
    .map((x) => {
      return `
      <ul class="menuLinks">
        <li class="menuLink"><span onclick="clickLink(this)">${x.label}</span>
        ${x.children?.length > 0 ? x.children.map((y) => childElemets(y)).join("") : ""}
        </li>
      </ul>
      <hr>
    `;
    })
    .join("");
}

function clickLink(p) {
  const treeElements = p.parentElement.parentElement.querySelectorAll(".menuLinks");
  treeElements.forEach((treeElement) => {
    if (treeElement != null) {
      treeElement.querySelectorAll("*").forEach((element) => {
        element.classList.toggle("hidden");
      });
    }
  });
}

init();
