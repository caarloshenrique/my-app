import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Pass from "./pages/Pass";

export default function Routes() {
    return (
        <BrowserRouter>
            <div className="main-container">
                <Route exact path="/" component={Login} />
                <Route exact path="/sign-up" component={SignUp} />
                <Route exact path="/forgot-password" component={Pass} />
            </div>
        </BrowserRouter>
    )
}
