import React from 'react';

const ContextName = React.createContext()
const ContextProvider= ContextName.Provider;
const ContextConsumer= ContextName.Consumer;

export { ContextConsumer, ContextProvider };
