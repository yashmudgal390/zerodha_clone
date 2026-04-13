import React, { useState } from "react";
import GeneralContext from "./GeneralContext";
import BuyActionWindow from "./BuyActionWindow";

export const GeneralContextProvider = (props) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");
  const [actionType, setActionType] = useState("BUY");

  const handleOpenBuyWindow = (uid, action = "BUY") => {
    setIsBuyWindowOpen(true);
    setSelectedStockUID(uid);
    setActionType(action);
  };

  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,
      }}
    >
      {props.children}
      {isBuyWindowOpen && (
        <BuyActionWindow uid={selectedStockUID} action={actionType} />
      )}
    </GeneralContext.Provider>
  );
};
