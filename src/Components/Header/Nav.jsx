{/*import DropDown from './DropDown';*/}
import { Link } from 'react-router-dom';

export default function Nav({ setMobileToggle }) {
  return (
    <ul className="cs_nav_list fw-medium">
      <li>
        <Link to="/" onClick={() => setMobileToggle(false)}>
        Home
        </Link>
      </li>
      
      <li>
        <a href='#about' onClick={() => setMobileToggle(false)}>
        About
        </a>
      </li>

      <li>
        <a href='#services' onClick={() => setMobileToggle(false)}>
        Services
        </a>
      </li>

      <li>
        <a href='#process' onClick={() => setMobileToggle(false)}>
        Process
        </a>
      </li>

      <li>
        <a href='#team' onClick={() => setMobileToggle(false)}>
        Our Team
        </a>
      </li>

      <li>
        <a href='#price' onClick={() => setMobileToggle(false)}>
        Plans
        </a>
      </li>

      <li>
        <a href='#contact' onClick={() => setMobileToggle(false)}>
        Contact Us
        </a>
      </li>

      {/*<li className="menu-item-has-children">
        <Link to="#">Pages</Link>
        <DropDown>
          <ul>
            <li>
              <a href='#about'onClick={() => setMobileToggle(false)}>
                About Us
              </a>
            </li>
            <li>
              <Link to="/team" onClick={() => setMobileToggle(false)}>
               Our Team
              </Link>
            </li>            
            <li>
              <Link to="/team/team-details" onClick={() => setMobileToggle(false)}>
                Team Details
              </Link>
            </li>             
            <li>
              <Link to="/pricing" onClick={() => setMobileToggle(false)}>
              Pricing
              </Link>
            </li> 
            <li>
              <Link to="/faq" onClick={() => setMobileToggle(false)}>
              Faq
              </Link>
            </li> 
            <li>
              <Link to="/contact" onClick={() => setMobileToggle(false)}>
              Contact
              </Link>
            </li>                         
          </ul>
        </DropDown>
      </li> */} 

      {/*<li className="menu-item-has-children">
        <Link to="/service" onClick={() => setMobileToggle(false)}>
          Services
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link to="/service" onClick={() => setMobileToggle(false)}>
                Services
              </Link>
            </li>
            <li>
              <Link to="/service/service-details" onClick={() => setMobileToggle(false)}>
                Service Details
              </Link>
            </li>
          </ul>
        </DropDown>
      </li>*/}

      {/*<li className="menu-item-has-children">
        <Link to="/project" onClick={() => setMobileToggle(false)}>
        Project
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link to="/project" onClick={() => setMobileToggle(false)}>
              Project
              </Link>
            </li>          
            <li>
              <Link to="/project/project-details" onClick={() => setMobileToggle(false)}>
              Project Details
              </Link>
            </li>
          </ul>
        </DropDown>
      </li>*/} 
      
      {/*<li className="menu-item-has-children">
        <Link to="/blog" onClick={() => setMobileToggle(false)}>
          Blog
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link to="/blog" onClick={() => setMobileToggle(false)}>
                Blog
              </Link>
            </li>
            <li>
              <Link to="/blog-sidebar" onClick={() => setMobileToggle(false)}>
                Blog With Sidebar
              </Link>
            </li>                         
            <li>
              <Link
                to="/blog/blog-details"
                onClick={() => setMobileToggle(false)}
              >
                Blog Details
              </Link>
            </li>
          </ul>
        </DropDown>
      </li>*/}
      {/*<*li>
        <Link to="/contact" onClick={() => setMobileToggle(false)}>
          Contact
        </Link>
      </li>*/}
    </ul>
  );
}
