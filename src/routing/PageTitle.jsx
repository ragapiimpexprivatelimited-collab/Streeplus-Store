import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const titles = {
  "/": "STREEPLUS™ — An Initiative by Ragapi Impex Pvt. Ltd. | IoT sanitary pad vending machine",
  "/about": "About Us | RAGAPI IMPEX",
  "/impact": "Impact | RAGAPI IMPEX",
  "/partner-with-us": "Partner with Us | RAGAPI IMPEX",
  "/products": "All Products | RAGAPI IMPEX",
  "/contact": "Contact Us | RAGAPI IMPEX",
  "/terms": "Terms & Conditions | RAGAPI IMPEX",
  "/privacy": "Privacy Policy | RAGAPI IMPEX",
  "/shipping-policy": "Shipping & Delivery Policy | RAGAPI IMPEX",
  "/refund-policy": "Cancellation & Refund Policy | RAGAPI IMPEX",
  "/cart": "Your Cart | RAGAPI IMPEX",
};

export default function PageTitle() {
  const location = useLocation();

  useEffect(() => {
    document.title = titles[location.pathname] || "RAGAPI IMPEX";
  }, [location.pathname]);

  return null;
}