// let nilai = prompt("masukkan nilai! : ", 0);
// let hasil = "";

// switch(true){
//     case nilai > 10:
//     hasil = "D";
//     break;
//     default:
//         document.write("Tidak ada");
// }
// document.write(hasil);

let nilai = prompt("masukkan nilai! : ", 0);
let hasil = "";

switch(true){
    case nilai >= 91 && nilai <= 101:
    hasil = "A";
    break;
    case nilai >= 81 && nilai <= 90:
        hasil = "B";
    break;
    case nilai >= 71 && nilai <= 80:
    hasil = "C";
    break;
    case nilai >= 61 && nilai <= 70:
        hasil = "D";
        case nilai >= 0 && nilai <= 60:
        hasil = "E";

}
document.write(hasil);




// let hadiah = prompt("silahkan pilih hadiahmu dari 1 - 5!", 0);
// let hasilHadiah = "";
// switch(hadiah){
//     case "1":
//         hasilHadiah = "iphone";
//         break;
//     case "2":
//        hasilHadiah = "Kapal api";
//         break;
//     case "3":
//          hasilHadiah = "ROG";
//          break;
//     case "4":
//          hasilHadiah = "CBR 250";
//          break;
//     case "5":
//          hasilHadiah = "Booth mixue";
//         break;
//     default:
//         hasilHadiah = "tidak ada"
//         document.write(`<h3>Oops! Pilihan anda ${hasilHadiah}</h3>`);
// }

// if(hasilHadiah === " "){
//     document.write(`<p>kamu gagal mendapatkan hadiah`);
// }else{
//     document.write(`<h2> Selamat anda mendapatkan ${hasilHadiah}`);
// }
