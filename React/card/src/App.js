import React from "react";

export default function App() {
  //Class Based React
  const [contact, setContact] = React.useState({
    firstName: "Abhiraj",
    lastName: "Sinha",
    phone: "+91 821 033 7603",
    email: "abhirajsinha25@gmail.com",
    isFavorite: false,
  });
  /**
   * Challenge: Fill in the values in the markup
   * using the properties of our state object above
   * (Ignore `isFavorite` for now)
   */

  let starIcon = contact.isFavorite ? "star.png" : "starEmpty.png";
  function toggleFavorite() {
    setContact((prevContact) => {
      return {
        ...prevContact,
        isFavorite: !prevContact.isFavorite,
      };
    });
  }

  return (
    <main>
      <article className="card">
        <img src="./images/profile.png" className="card--image" />
        <div className="card--info">
          <img
            src={`./images/${starIcon}`}
            className="card--favorite"
            onClick={toggleFavorite}
          />
          <h2 className="card--name">
            {contact.firstName} {contact.lastName}
          </h2>
          <p className="card--contact">{contact.phone}</p>
          <p className="card--contact">{contact.email}</p>
        </div>
      </article>
    </main>
  );
}
