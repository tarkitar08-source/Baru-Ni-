// Atur tanggal tujuan di sini (Format: Tahun, Bulan-1, Tanggal, Jam, Menit)
// Contoh: 1 Juni 2026 jam 08:00
const targetDate = new Date("Maret 2, 2026 08:00:00").getTime();

const countdownFunction = setInterval(function() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // Kalkulasi waktu
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Tampilkan hasil ke elemen HTML
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // Jika waktu habis
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("timer").innerHTML = "HARI H TELAH TIBA! 🎉";
    }
}, 1000);