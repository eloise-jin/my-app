import React from 'react';
import styled from 'styled-components';
import logo from '../../Logo_ENSEA.png'

function Footer() {
  return (
    <FooterContainer className="main-footer">
      <div className="footer-middle">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <ul className="list-unstyled">
              <img src={logo} alt="Logo" width={125} height={125} />
              </ul>
            </div>
            <div className="col-md-3 col-sm-6">
              <h4>ENSEA</h4>
              <ul className="list-unstyled">
                <li>École Nationale Supérieure de l'Électronique et de ses Applications</li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6">
              <h4>Address</h4>
              <ul className="list-unstyled">
                <li>6, Avenue du Ponceau</li>
                <li>95000 Cergy-Pontoise Cedex</li>
                <li>+33 1 30 73 66 66</li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6">
              <h4>Follow us</h4>
              <ul className="list-unstyled">
                <li>LinkedIn :</li>
                <li>Instagram :</li>
                <li>Facebook :</li>
              </ul>
            </div>
          </div>
          {/* Footer Bottom */}
          <div className="footer-bottom">
            <p className="text-xs-center">
              &copy;{new Date().getFullYear()} Tranckn'Chip - All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.footer`
  .footer-middle {
    background: var(--mainGrey);
    padding-top: 1rem;
    color: var(--mainWhite);
  }
  .footer-bottom {
    padding-top: 1rem;
    padding-bottom: 0rem;
  }
`