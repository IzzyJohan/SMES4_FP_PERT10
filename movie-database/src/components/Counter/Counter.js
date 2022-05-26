import { useEffect, useState } from "react";

function Counter() {
    // Membuat variabel state
    // Mengembalikan 2 data:
    // Nilai saat ini: 0
    // Fungsi untuk mengubah state
    const [hasil, setHasil] = useState(0);



    function Tambah() {
        // Jalankan fungsi setHasil
        // Untuk mengubah state
        setHasil(hasil + 1)
    }

    /**
     * useEffect dijalankan pada lifecycle mount dan update.
     */
    function updateDOM() {
        console.log("lifecycle: Dimount");

        // Melakukan side effect: Mengakses DOM
        document.title = `Hasil: ${hasil}`;
    }

    useEffect(updateDOM, [hasil]);

    console.log("Lifecycle: Dirender")

    return(
        <div>
            <p>Hasil: {hasil}</p>
            <button onClick={Tambah}>Tambah</button>
        </div>
    )
}

export default Counter; 