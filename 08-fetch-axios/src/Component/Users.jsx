import React, { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);
  // Users componenti mount edildiği anda veriyi göstermek istiyoruz. Bu yüzden useEffect kullanıyoruz. useEffect kullanımında 2 parametre alır.
  // 1. parametre: componentDidMount ve componentDidUpdate için
  // 2. parametre: componentWillUnmount için
  // Bu yüzden ikinci veriyi boş array olarak bırakıyoruz.

  const [isLoading, setIsLoading] = useState(true);

  // Yukarıdaki variable loading olurken çıkması için.

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      // json() methodu ile veriyi json formatına çeviriyoruz.
      .then((data) => setUsers(data))
      // setUsers ile user variablini data yapıyoruz.
      .catch((err) => console.log(err))
      // catch() methodu ile hata alırsak console loglarını gösteriyoruz.
      .finally(() => setIsLoading(false));
    // finally() methodu ile loading işlemi bitince loading işlemi kapatıyoruz.
  }, []);

  return (
    <div>
      <h1>Users</h1>
      {/* Bir obje döndürüyor. Bu yüzden user.id gibi yazıyoruz */}
      {isLoading && <p>Loading...</p>}

      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
          <p>{user.phone}</p>
          <p>{user.website}</p>
        </div>
      ))}
    </div>
  );
}

export default Users;
