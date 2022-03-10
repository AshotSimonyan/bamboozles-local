import { FooterStyle } from "./Footer.style"
import { Button, Icon } from "../UIKit"

const Footer = () => {
  return (
    <FooterStyle>
      <div className="container">
        <ul className="social">
          <li>
            <a target="_blank" href="#" rel="noreferrer" className="social-btn">
              <Icon name="twitter" size={24} />
            </a>
          </li>
          <li>
            <Button
              target="_blank"
              rel="noreferrer"
              href="#"
              variant="outlined"
            >
              DISCORD
            </Button>
          </li>
        </ul>
        <p className="copyright">
          ©All rights reserved. {new Date().getFullYear()}
        </p>
      </div>
    </FooterStyle>
  )
}

export default Footer
