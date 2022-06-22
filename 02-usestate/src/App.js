import React, { useState } from "react";
import InputExample from "./InputExample";

// useState'i sadece fonksiyon içinde kullanabiliriz.

// useState'i bir döngünün içine koyamayız. Nest edilemezler.

function App() {
  // count, şuandaki state'imizi saklar.
  // setCount, count'i değiştirme işlemi yapar.
  // useState(0) bizim default değerimizdir.

  const [count, setCount] = useState(0);
  const [friends, setFriends] = useState(["Ahmet", "Murat", "Mehmet"]);
  const [address, setAddress] = useState({
    city: "İstanbul",
    street: "Üsküdar",
  });

  // azalt fonksiyonu ile setCount'i çağırır ve count'i azaltır.
  // prevCount, count'ın önceki değerini saklar.
  function azalt() {
    setCount((prevCount) => prevCount - 1);
  }

  function arttir() {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    // onClick eventinde azalt fonksiyonunu çalıştır demek oluyor bu.
    <>
      <button onClick={azalt}>-</button>
      <span> {count} </span>
      <button onClick={arttir}>+</button>
      <br />
      <h2>Friends</h2>
      {friends.map((friend) => (
        <div key={friend}>{friend}</div>
      ))}{" "}
      <br />
      <button onClick={() => setFriends([...friends, "Ayşe"])}>
        Add a friend
      </button>
      <br />
      <h2>Address</h2>
      <div>
        {address.city} / {address.street}
      </div>
      <button onClick={() => setAddress({ ...address, city: "Ankara" })}>
        Change Address
      </button>
      <br />
      <br />
      {/* Input State */}
      <InputExample />
    </>
  );
}

export default App;
