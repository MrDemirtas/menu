async function init() {
  const response = await fetch("/assets/json/data.json").then((x) => x.json());
}

init();
