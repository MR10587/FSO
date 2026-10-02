import ReactDOM from "react-dom/client";

import App from "./App.jsx";

const notes = [
  {
    id: 1,
    content: "Salam",
    important: true,
  },
  {
    id: 2,
    content: "Sagol",
    important: false,
  },
  {
    id: 3,
    content: "Yemis",
    important: true,
  },
];

ReactDOM.createRoot(document.getElementById("root")).render(
  <App notes={notes} />,
);
