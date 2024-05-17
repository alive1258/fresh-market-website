import React from "react";

interface CartModalProps {
  cartOpen: boolean;
}

const CartModal: React.FC<CartModalProps> = ({ cartOpen }) => {
  return (
    <>
      <div
        className={`fixed top-24 right-0 h-screen w-80 bg-gray-300 text-white transition-transform transform ${
          cartOpen
            ? "translate-x-0 duration-500 "
            : "translate-x-full duration-500"
        }`}
      >
        Cart Content Here
      </div>
    </>
  );
};

export default CartModal;
