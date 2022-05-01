import React from "react";

const addressContext = React.createContext()
const AddressProvider = addressContext.Provider
const AddressConsumer = addressContext.Consumer

export { AddressProvider, AddressConsumer }
