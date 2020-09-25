/** @jsx jsx */
/*eslint-disable-next-line no-unused-vars*/
import React from 'react';
import { Link } from '@reach/router';
import { jsx, css } from '@emotion/core';

const Header = ({ app }) => {
  return (
    <header>
      <section
        css={css`
          flex: 1;
          max-width: 25%;
          text-align: center;
        `}
      >
        <h1>
          <Link to="/">{app.name}</Link>
        </h1>
      </section>
      <section
        css={css`
          flex: 3;
          max-width: 45%;
          text-align: center;
        `}
      >
        <h2>{app.description}</h2>
      </section>
    </header>
  );
};

export default Header;
