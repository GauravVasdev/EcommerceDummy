import React from "react";

const Home = React.lazy(() => import("./components/Home/Home"));
const Contact = React.lazy(() => import("./components/Contact/Contact"));
const About = React.lazy(() => import("./components/About/About"));
const Shirt = React.lazy(() => import("./components/Shirt/Shirt"));
const MyAccount = React.lazy(() => import("./components/MyAccount/MyAccount"));
const LostPassword = React.lazy(() => import("./components/LostPassword/LostPassword"));
const UpdatePassword = React.lazy(() => import("./components/UpdatePassword/UpdatePassword"))
const Cart = React.lazy(() => import("./components/Cart/Cart"));
const AdminForm = React.lazy(() => import("./components/AdminForm/AdminForm"));
const AdminTable = React.lazy(() => import("./components/AdminTable/AdminTable"));

const routes = [
  { path: "/", name: "Home", element: Home },
  { path: "/contact", name: "Contact", element: Contact },
  { path: "/about", name: "About", element: About },
  { path: "/shirt", name: "Shirt", element: Shirt },
  { path: "/myaccount", name: "MyAccount", element: MyAccount },
  { path: "/lostpassword", name: "LostPassword", element: LostPassword },
  { path: "/updatepassword", name: "UpdatePassword", element: UpdatePassword },
  { path: "/cart", name: "Cart", element: Cart },
];

export default routes;

