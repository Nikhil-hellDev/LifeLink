/** @format */

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            LifeLink
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="/" className="page-scroll">
                Home
              </a>
            </li>
            <li>
              <a href="/#about" className="page-scroll">
                About us
              </a>
            </li>
            <li>
              <a href="/#contact" className="page-scroll">
                Contact Us
              </a>
            </li>
            <li>
              <a href="/login" className="page-scroll">
                Donar SignIn
              </a>
            </li>
            <li>
              <a href="/login" className="page-scroll">
                Donar SignUp
              </a>
            </li>
            <li>
              <a href="/login" className="page-scroll">
                Hospital SignIn
              </a>
            </li>
            <li>
              <a href="/login" className="page-scroll">
                Hospital SignUp
              </a>
            </li>
            {/* <li>
              <a href='#portfolio' className='page-scroll'>
                Seeker
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};
