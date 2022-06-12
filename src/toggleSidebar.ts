import { getElement } from "./utils.js";

const toggleNav = getElement(".toggle-nav") as HTMLButtonElement;
const sidebarOverlay = getElement(".sidebar-overlay") as HTMLDivElement;
const closeBtn = getElement(".sidebar-close") as HTMLButtonElement;

toggleNav.addEventListener("click", () => {
  sidebarOverlay.classList.add("show");
});

closeBtn.addEventListener("click", () => {
  sidebarOverlay.classList.remove("show");
});
