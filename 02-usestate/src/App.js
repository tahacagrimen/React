import React, { useState } from "react";

// useState'i sadece fonksiyon içinde kullanabiliriz.

// useState'i bir döngünün içine koyamayız. Nest edilemezler.

function App() {
  // count, şuandaki state'imizi saklar.
  // setCount, count'i değiştirme işlemi yapar.
  // useState(0) bizim default değerimizdir.

  const [count, setCount] = useState(0);

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
      <span>{count}</span>
      <button onClick={arttir}>+</button>
    </>
  );
}

export default App;
