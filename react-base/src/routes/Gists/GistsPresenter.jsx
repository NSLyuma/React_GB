import React from "react";

export const GistsPresenter = ({ error, isLoading, gists, onClick }) => {
  return (
    <div>
      <h1>Laureates</h1>
      {error && <p>Error</p>}
      {isLoading && <p>Loading...</p>}
      <ul>
        {gists.laureates.map((item) => (
          <li key={item.id}>
            {item.id}: {item.familyName.en}
          </li>
        ))}
      </ul>
      <button onClick={onClick}>Get data</button>
    </div>
  );
};
