import React from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function ToastMessage() {
  const notify = () => toast("Wow so easy!");

  return (
    <div>
      <ToastContainer limit={1} />
    </div>
  );
}
