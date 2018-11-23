import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import logo from '../images/logo.svg'

const HeaderWrapper = styled.div`
  background: #524763;
  margin-bottom: 0;

`;

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: .5rem;

  img {
    margin-bottom: 0;
  }
`;

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
        >
          <img
            style={{
              width: '100px'
            }}
            src={logo}
            alt="Site Logo"
          />
        </Link>
      </h1>
    </HeaderContainer>
  </HeaderWrapper>
)

export default Header
