import "./styles/resets.scss";
import "./styles/nav.scss";
import "./styles/footer.scss";
import "./styles/style.scss";
import "./js/app.js";

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then(registration => {
        console.log("SW registered: ", registration);
      })
      .catch(registrationError => {
        console.log("SW registration failed: ", registrationError);
      });
  });
}
