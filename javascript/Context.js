import React from 'react';

const Ctxt = React.createContext('trust')

const CtxtPr = Ctxt.Provider;

export {Ctxt, CtxtPr}