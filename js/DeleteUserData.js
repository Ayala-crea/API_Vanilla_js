import DataPengguna from './ApiData';

function deleteData(DataPengguna, DataId) {
  const requestOptions = {
    method: "DELETE",
    headers: {
        "Content-Type": "application/json", // Sesuaikan dengan header yang diperlukan
        // "Authorization": "Bearer YourAccessToken" // Tambahkan header otorisasi jika diperlukan
    }
};

fetch(`${apiEndpoint}/${dataId}`, requestOptions)
    .then((response) => {
        if (!response.ok) {
            throw new Error(`Gagal menghapus data dengan kode status: ${response.status}`);
        }
        return response.json();
    })
    .then((data) => {
        console.log("Data berhasil dihapus:", data);
        // Di sini Anda bisa menambahkan tindakan lain setelah data dihapus
    })
    .catch((error) => {
        console.error("Terjadi kesalahan:", error);
    });
}

// Contoh penggunaan fungsi deleteData:
const apiEndpoint = "https://example.com/api/resource"; // Ganti dengan URL API yang sesuai
const dataIdToDelete = 123; // Ganti dengan ID data yang akan dihapus

deleteData(apiEndpoint, dataIdToDelete);