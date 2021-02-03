import React, { useState, useEffect } from "react";

export function AllCompanies() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    
    fetch(`${process.env.REACT_APP_BACKEND_URL}/companies`)
      .then((res) => res.json())
      .then((body) => setCompanies(body));      
        console.log(companies);    
    
  }, []);

  return <h1>companies</h1>;
}

