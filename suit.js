var tanya = true;
while (tanya) {
    var pilihanPlayer = prompt('Silakan masukkan pilihan\n kelingking,telunjuk,jempol');

    var pilihanComputer = Math.random();

    if (pilihanComputer < 0.40) {
        pilihanComputer = "kelingking";
    }else if (pilihanComputer >= 0.40 && pilihanComputer < 0.69){
        pilihanComputer = "telunjuk";
    }else{
        pilihanComputer = "jempol";
    }

    var hasil = "";
    if (pilihanPlayer == pilihanComputer) {
        hasil = "seri";
    }else if (pilihanPlayer == "kelingking") {
        hasil = (pilihanComputer == "jempol" ? "menang" : "kalah");
    }else if (pilihanPlayer == "jempol") {
        hasil = (pilihanComputer == "kelingking" ? "menang" : "kalah" );
    }else if (pilihanPlayer == "telunjuk") {
        hasil = (pilihanComputer == "kelingking" ? "menang" : "kalah" );
    }else {
        hasil = "pilihan yang kamu pilih tidak ada!!!";
    }
    //menampilkan hasil
    alert('Saya milih' + pilihanPlayer + " dan komputer milih" + pilihanComputer + "\n maka hasilnya saya : " + hasil);

    tanya = confirm("apakah anda ingin bermain lagi??")
}
alert('Terimakasih sudah bermain :)')