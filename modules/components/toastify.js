const toastifyElement = document.getElementById("alert");

export const toastify = (msg, options) => {
  toastifyElement.style.right = "0%";
  switch (options.type) {
    case "warn":
      toastifyElement.style.backgroundColor = "orange";
      break;
    case "error":
      toastifyElement.style.backgroundColor = "tomato";
      break;
    case "error":
      toastifyElement.style.backgroundColor = "yellowgreen";
      break;
    default:
    case "warn":
      toastifyElement.style.backgroundColor = "gainsbro";

      break;
  }
  toastifyElement.children[0].innerHTML = msg;
  toastifyElement.children[1].addEventListener("click", () => {
    toastifyElement.style.right = "-100%";
  });
  setTimeout(function () {
    toastifyElement.style.right = "-100%";
  }, options.time || 3000);
};
