import React, { useEffect, useState } from "react";

const SchemeUpdates = () => {
  const [schemes, setSchemes] = useState([]);

  useEffect(() => {
    fetch("./Schemes.json")
      .then((res) => res.json())
      .then((data) => setSchemes(data.records));
  }, []);

  if (schemes.length === 0) return <p>Loading...</p>;

  return (
    <div>
      {schemes.map((scheme, index) => (
        <div key={index} style={{ marginBottom: "20px", padding: "10px", border: "1px solid #ccc" }}>
          <h2>{scheme.scheme_name}</h2>
          <p><strong>Category:</strong> {scheme.category}</p>
          <p>{scheme.description}</p>
        </div>
      ))}
    </div>
  );
};

export default SchemeUpdates;