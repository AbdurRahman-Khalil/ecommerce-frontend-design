import { Toaster } from "react-hot-toast";

import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { Main } from "./components/main/Main";


export const App = () => {

  const customToastsStyles = {
    success: {
      style: {
        fontFamily: "inherit",
        color: "#064e3b",
        background: "#d1fae5",
        border: "2px solid #34d399",
      },
      iconTheme: {
        primary: "#35e392",
        secondary: "#ffffff",
      },
    },
    error: {
      style: {
        fontFamily: "inherit",
        color: "#7f1d1d",
        background: "#fee2e2",
        border: "2px solid #f87171",
      },
    },
    loading: {
      style: {
        fontFamily: "inherit",
        color: "#374151",
        background: "#e5e7eb",
        border: "2px solid #9ca3af",
      },
    },
  }

  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={customToastsStyles}
      />

      <div className="wrapper">
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
};
