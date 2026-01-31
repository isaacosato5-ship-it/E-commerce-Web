const pageType = document.body.dataset.layout;
console.log(location);

const loader = async (id, file) => {
  const response = await fetch(file);
  const headerData = await response.text();
  document.getElementById(id).innerHTML = headerData;
};
if (pageType === "public") {
  if (location.pathname === "/" || location.pathname === "/FrontEnd/") {
    loader("header", "./Components/header.public.html");
    loader("footer", "./Components/footer.html");
    const dateSpan = document.getElementById("date");
    console.log(dateSpan);
  } else {
    loader("header", "../components/header-public.html");
    loader("footer", "../components/footer.html");
    const dateSpan = document.getElementById("date");
    console.log(dateSpan);
  }
}
if (pageType === "private") {
  loader("header", "/Components/header.private.html");
}
