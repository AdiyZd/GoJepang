document.getElementById('wa').addEventListener('click', function(i) {
    i.preventDefault();

    // tahun, bulan, hari, menit, detik 
    const hari = new Date();
    const waktu = hari.getHours()

    // data
    const admin = '6288216796297'; // nomor admin
    const textPagi = "Selamat pagi kak, Biyaya tour kejepang berapa ya kak?";
    const textSiang = "Selamat siang kak, Biyaya tour kejepang berapa ya kak?";
    const textSore = 'Selamat sore kak, Biyaya tour kejepang berapa ya kak?';
    const textMalam = "Selamat malam kak, Biyaya tour kejepang berapa ya kak?";

    let pesan = ''

    if (waktu >=5 && waktu < 9) {
        pesan = textPagi;
    } else if (waktu >= 9 && waktu < 13) {
        pesan = textSiang;
    } else if (waktu >= 13 && waktu < 18) {
        pesan = textSore;
    } else {
        pesan = textMalam
    };

    const encode = encodeURIComponent(pesan)

    const URL = `https://wa.me/${admin}?text=${encode}`;

    window.open(URL, '_blank')
});

// untuk chat di facebook 
document.getElementById("fb").addEventListener("click", function(f) {
    f.preventDefault();

    // waktu 
    const hari = new Date();
    const waktu = hari.getHours();

    const userame = 'AdiyZd'; // userame facebook
    
    const textPagi = "Selamat pagi kak, Biyaya tour kejepang berapa ya kak?";
    const textSiang = "Selamat siang kak, Biyaya tour kejepang berapa ya kak?";
    const textSore = 'Selamat sore kak, Biyaya tour kejepang berapa ya kak?';
    const textMalam = "Selamat malam kak, Biyaya tour kejepang berapa ya kak?";
    
    let pesan = '';

    if (waktu >= 5 && waktu < 9) {
        pesan = textPagi;
    } else if (waktu >= 9 && waktu < 13) {
        pesan = textSiang;
    } else if (waktu >= 13 && waktu < 18) {
        pesan = textSore;
    } else {
        pesan = textMalam
    };

    const encodePesan = encodeURIComponent(pesan)

    const URL = `https://m.me/${userame}?ref=${encodePesan}`;

    window.open(URL, '_blank')
})