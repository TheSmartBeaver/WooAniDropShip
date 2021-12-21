import Link from "next/link"

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Menu
        </a>

        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link href="/LOL">
                <a className="nav-link">
                  Beaver Shop
                  <span className="visually-hidden">(current)</span>
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Categories
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                My Account
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  Separated link
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav
