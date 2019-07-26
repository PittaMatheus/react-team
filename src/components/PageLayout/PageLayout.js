import React from "react";

import AppBar from "../AppBar/AppBar";


const PageLayout = ({
    children
}) => (
    <div>
        <AppBar/>
        <div className="container">{children}</div>
    </div>
);

export default PageLayout;