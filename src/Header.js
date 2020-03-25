import React from 'react';

export default function Header({title, children}){
    return(
        <header>
            <h1>Be the hero!</h1>
            <p>{title}</p>
            <h2>{children}</h2>
        </header>
    );
}

// export default Header; outra opção

