
import React, { FC } from "react";
import "./styles.css";

const Main: FC = ({ children }) => {
    // Javascript

    return (
        <>
            {/* JSX */}

            <main className="main bg-light">{children}</main>
        </>
    );
};

export { Main };