import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCountries } from "../services/country-service";

const NavBar = (props) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    setCountries(getCountries());
  }, []);

  let country = getCountries().map((c) => c.name);

  // let country = [
  //   "Argentina",
  //   "Belgium",
  //   "Brazil",
  //   "France",
  //   "Germany",
  //   "Netherlands",
  //   "United Kingdom",
  //   "United States",
  // ];

  // const isoCountries = {
  //   ar: { name: "Argentina" },
  //   be: { name: "Belgium" },
  //   br: { name: "Brazil" },
  //   fe: { name: "France" },
  //   de: { name: "Germany" },
  //   nl: { name: "Netherlands" },
  //   gb: { name: "United Kingdom" },
  //   us: { name: "United States" },
  // };

  // let isoCountries = [
  //   { name: "Argentina", code: "ar" },
  //   { name: "Belgium", code: "be" },
  //   { name: "Brazil", code: "br" },
  //   { name: "France", code: "fr" },
  //   { name: "Germany", code: "de" },
  //   { name: "Netherlands", code: "nl" },
  //   { name: "United Kingdom", code: "gb" },
  //   { name: "United States", code: "us" },
  // ];

  // { Argentina: { code: "ar" } },
  // { Belgium: { code: "be" } },
  // { Brazil: { code: "br" } },
  // { France: { code: "fe" } },
  // { Germany: { code: "de" } },
  // { Netherlands: { code: "nl" } },
  // { UnitedKingdom: { code: "gb" } },
  // { UnitedStates: { code: "us" } },

  // const getCountryCode = (name) => {
  //   return isoCountries[name].code;
  // };

  // function getCountryCode(countryName) {
  //   if (isoCountries.hasOwnProperty(countryName)) {
  //     return isoCountries[countryName];
  //   } else {
  //     return countryName;
  //   }
  // }

  const handleSelectCountry = (country) => {
    props.setCountry(country);
  };

  const handleFootball = () => {
    props.setKeyWordEnable(true);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Baily Dugle
          </Link>
          {/* <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button> */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/general">
                  General
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/business">
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/entertainment">
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/health">
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/science">
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-info"
                  to="/sports"
                  onClick={handleFootball}
                >
                  Football
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/technology">
                  Technology
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle text-warning"
                  to="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Select Country
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  {countries.map((c) => {
                    return (
                      <>
                        <li key={c.name}>
                          <Link
                            className="dropdown-item"
                            to="/"
                            onClick={() => {
                              handleSelectCountry(c);
                            }}
                          >
                            {c.name}
                          </Link>
                        </li>
                      </>
                    );
                  })}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
