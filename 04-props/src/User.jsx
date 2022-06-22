import React from "react";
import PropTypes from "prop-types";
// PropType kullanabilmek için ilk önce import etmeliyiz.

export default function User({
  name,
  age,
  isLoggedIn,
  surname,
  friends,
  address,
}) {
  // Returndan önce if yazarak loggedin olmamışsa bilgileri göstermeyiz alttaki yazıyı yazmasını sağladık.
  if (!isLoggedIn) {
    return <h1>Giriş yapmadınız</h1>;
  }

  return (
    <>
      <h1>
        {isLoggedIn
          ? `Hoşgeldin ${name} ${surname} (${age})`
          : "Giriş yapılmamış"}
      </h1>
      {address.title} {address.zip}
      <br />
      <br />
      {friends.map((friend, index) => (
        <div key={index}>
          {index}-{friend}
        </div>
      ))}
    </>
  );
}

// PropTypes, propların valuelarının tipini kontrol eder. Eğer tipi yanlış ise hata döndürür.

User.propTypes = {
  name: PropTypes.string,
  // oneOfType ile birden fazla tipi kontrol edebiliriz.
  age: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  isLoggedIn: PropTypes.bool,
  surname: PropTypes.string,
  friends: PropTypes.arrayOf(PropTypes.string),
  // PropTypes.shape, Objenin içindeki keylerin tipini kontrol eder.
  address: PropTypes.shape({
    title: PropTypes.string,
    zip: PropTypes.number,
  }),
};

// name: PropTypes.string.isRequired demek name prop unun verilmesi zorunlu demek oluyor.

// defaultProps, eğer bir propa value verilmemişse default olarak bir değer verir.

User.defaultProps = {
  isLoggedIn: false,
};
