import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export const toaster = async (type, comment) => {
  debugger
  if (type === "error") {
    return await toast.error(comment, {
      position: "top-right",

      autoClose: 2000,
    });
  } else if (type === "warn") {
    return await toast.warn(comment, {
      position: "top-right",

      autoClose: 2000,
    });
  } else if (type === "success") {
    return await toast.success(comment, {
      position: "top-right",

      autoClose: 2000,
    });
  } else if (type === "dark") {
    return await toast.dark(comment, {
      position: "top-right",

      autoClose: 2000,
    });
  }
};
