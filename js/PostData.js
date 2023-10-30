const endpoint = "https://reqres.in/api/users";

document.getElementById("submit").addEventListener("click", async function() {
    const email = document.getElementById("email").value;
    const first_name = document.getElementById("first_name").value;

    const datayangdikirim = {
        email: email,
        first_name: first_name,
    }

    try {
        const response = await fetch(endpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(datayangdikirim),
        });

        if (response.ok) {
            const data = await response.json();
            alert("Anda berhasil");

            // Simpan data ke localStorage
            localStorage.setItem("userData", JSON.stringify(data));

            console.log(data);
            window.location.href = "side-menu-dark-crud-data-list.html"
        } else {
            alert("Gagal mengirim data");
        }
    } catch (error) {
        console.error("Terjadi kesalahan:", error);
    }
});
