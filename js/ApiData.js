const endpoint = "https://reqres.in/api/users";
const DataPengguna = document.getElementById("dataPengguna");

// Ambil data dari API
fetch(endpoint)
    .then((result) => result.json())
    .then((data) => {
        data.data.forEach((user) => {
            // const dataMember = data.getItem(user);
            // if (userDataJSON) {
            //     const userData = JSON.parse(dataMember);
            //     // Tampilkan data dalam elemen HTML dengan ID yang sesuai
            //     document.getElementById("id").textContent = userData.id;
            //     document.getElementById("first_name").textContent = userData.first_name;
            //     document.getElementById("avatar").textContent = userData.avatar;
            // } else {
            //     console.log("Data tidak ditemukan di localStorage");
            // }
            const layout = `

                <div id="id">${user.id}</div>
                    <div id="first_name">${user.first_name} ${user.last_name}</div>
                <div id="avatar">${user.avatar}</div>
            `;

            DataPengguna.innerHTML += layout; // Menambahkan data pengguna ke tabel
        });
    })
    .catch((error) => console.error(error));


