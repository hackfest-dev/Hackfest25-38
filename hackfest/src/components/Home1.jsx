import React, { useState, useEffect } from "react";



const home= () => {
    const [location, setLocation] = useState("");
    const [data, setData] = useState({});
    const [user, setUser] = useState({
      username: "",
      name: "",
      email: "",
    });
    const api_key = `e3c956ab07660d21379180255cb41a28`;


    const userId = localStorage.getItem("userId");


    const search = async () => {
      if (!location) return;
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}&units=metric`;
      const res = await fetch(url);
      const searchData = await res.json();
      setData(searchData);
      setLocation("");
    };

    return (
      <div classname="welcome" >
        <h1>HOME</h1>
      </div>
    );
};

export default home;