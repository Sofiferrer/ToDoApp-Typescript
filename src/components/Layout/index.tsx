
import React, { FC } from 'react';
import { Aside, Header, Footer } from './components';
import './styles.css';

const Layout: FC = ({ children, hideHeader, hideAside, hideFooter }) => {
    return (
        <div className='layout'>
            {hideAside === false && <Aside />}
            <div className="contenedor">
                {hideHeader === false && <Header />}
                {children}
                {hideFooter === false && <Footer />}
            </div>
        </div>
    );
}

Layout.defaultProps = {
    hideHeader: false,
    hideAside: false,
    hideFooter: false,
};

export { Layout }