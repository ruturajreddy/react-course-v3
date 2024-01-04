import React, { useEffect, useState } from "react";

const url = "https://api.github.com/users";

const FetchData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(url);
        const fetchedData = await response.json();
        setData(fetchedData);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  return (
    <>
      <h2>Fetch Data Example</h2>
      <ul className="users">
        {data.map((item) => {
          const { id, login, avatar_url, html_url } = item;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h5>{login}</h5>
                <a href={html_url}>profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default FetchData;
