function calculate() {
    // Mengambil nilai/value dari input yang dilakukan
    let berat = document.getElementById("berat").value
    let tinggi = document.getElementById("tinggi").value

    // Menggunakan logika matematika/rumus untuk menghitung nilai BMI
    let bmi = (berat)/((tinggi/100)*(tinggi/100))

    // Memunculkan pesan berupa Nilai BMI yang telah dihitung JS
    document.getElementById("pesan").innerHTML = "BMI Anda Adalah :"
    document.getElementById("bmi-output").innerHTML = bmi.toFixed(2)

    // Menggunakan IF untuk memunculkan keterangan setiap batas BMI
    if (bmi < 18.5) {
        document.getElementById("keterangan").innerHTML = "Anda Kekurangan Berat Badan"
    }
    else if (bmi >= 18.5 && bmi <= 24.9) {
        document.getElementById("keterangan").innerHTML = "Berat Badan Anda Normal"
    }
    else if (bmi >= 25 && bmi <= 29.9) {
        document.getElementById("keterangan").innerHTML = "Anda Kelebihan Berat Badan"
    }
    else {
        document.getElementById("keterangan").innerHTML = "Anda Kegemukan (Obesitas)"
    }

    // Menggunakan SWITCH untuk memunculkan penjelasan atas setiap keterangan yang ada setiap kondisi
    switch(true) {
        case bmi < 18.5:
            document.getElementById("lanjut1").innerHTML = "Anda berada dalam kategori kekurangan berat badan. Hubungi dokter lebih lanjut mengenai pola makan dan gizi yang baik untuk meningkatkan kesehatan."
            break;
        case bmi >= 18.5 && bmi <= 24.9:
            document.getElementById("lanjut1").innerHTML = "Anda berada dalam kategori berat badan yang normal. Tetap pertahankan berat badan Anda dan jaga berat badan Anda dengan mengatur keseimbangan antara pola makan dan aktivitas fisik Anda."
            break;
        case bmi >= 25 && bmi <= 29.9:
            document.getElementById("lanjut1").innerHTML = "Anda berada dalam kategori overweight atau berat badan berlebih. Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalor makanan yang dikonsumsi dan berolahraga. Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal."
            break;
        case bmi > 29.9:
            document.getElementById("lanjut1").innerHTML = "Anda berada dalam kategori obesitas. Usahakan untuk menurunkan berat badan dan menerapkan pola hidup sehat dengan menjaga makan dan aktivitas fisik. Segera kunjungi dokter untuk dilakukan pemeriksaan kesehatan lanjutan untuk mengetahui risiko yang Anda miliki terkait berat badan Anda."
    }
}

// Melakukan refresh/reload pada Window Browser ketika tombol reset ditekan
function reload() {
    window.location.reload()
}

