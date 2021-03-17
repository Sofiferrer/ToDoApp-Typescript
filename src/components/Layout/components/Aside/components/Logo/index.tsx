import React, { FC } from "react";


const Logo: FC = () => {
    return (
        <a href="/" className="logo d-flex justify-content-center mb-4">
            <img src={LogoFucsia} alt="ADA admin logo" height="30" />
        </a>
    );
};

export { Logo };