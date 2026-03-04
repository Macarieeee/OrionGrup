import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename="/OrionGrup">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
import { supabase } from "./lib/supabaseClient";

supabase
  .from("shop_products")
  .select("id")
  .limit(1)
  .then(({ data, error }) => {
    console.log("SUPABASE TEST:", { data, error });
  });

  supabase.from("shop_products").select("id,name").limit(5)
  .then(({data,error}) => console.log({data,error}));