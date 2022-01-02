import Head from 'next/head'
import Card from '../components/card'
import Header from '../components/header'
import IsiIndex from '../components/isi'

export default function Home() {
    let Isi = {
        Name : "Hotel Di Kota Banyuwangi",
        Name2 : "TEMUKAN INFORMASI HOTEL YANG TERDAPAT DI KOTA BANYUWANGI"

    }
    let Hotel1 = {
        Judul : "Hotel",
        Url : "https://beritalima.com/wp-content/uploads/2018/05/IMG_20180509_5756.jpg",
        NamaHotel : "Hotel Aston Banyuwangi",
        Deskripsi : "Aston Banyuwangi Hotel & Conference Center juga merupakan pilihan utama untuk mengakomodasi para wisatawan yang akan mengagumi keindahan pemandangan alam Indonesia di Banyuwangi..."
    }
    let Hotel2 = {
        Url2 : "https://www.constructionplusasia.com/wp-content/uploads/2019/07/1-HOTEL-DIALOOG-810x470.jpg",
        NamaHotel2 : "Hotel Dialoog Banyuwangi",
        Deskripsi2 : "Dialoog Hotels memperkenalkan generasi baru kecanggihan sederhana yang dihargai di kalangan pelancong milenial yang mencari akomodasi bergaya yang cerdas dan tidak rumit..."
    }
    let Hotel3 = {
        Url3 : "https://banyuwangiijentravel.com/upload/post/besar/illira-hotel-banyuwangi-32531.jpg",
        NamaHotel3 : "Hotel Illira Banyuwangi",
        Deskripsi3 : "Tampilan dan nuansa kamar yang modern menawarkan beragam pilihan akomodasi di Eager Rooms, Adorable Room dan Fabulous Rooms, membuat pelanggan merasa bahwa menginap di Illira Hotel Banyuwangi..."
    }
  return (
    <div>
      <Head>
        <title>Selamat Datang</title>
      </Head>
        <Header/>
        <IsiIndex
          Name = {Isi.Name}
          Name2 = {Isi.Name2}
        />
        <Card
            Judul = {Hotel1.Judul} 
            Url = {Hotel1.Url}
            NamaHotel = {Hotel1.NamaHotel}
            Deskripsi = {Hotel1.Deskripsi}

            Url2 = {Hotel2.Url2}
            NamaHotel2 = {Hotel2.NamaHotel2}
            Deskripsi2 = {Hotel2.Deskripsi2}

            Url3 = {Hotel3.Url3}
            NamaHotel3 = {Hotel3.NamaHotel3}
            Deskripsi3 = {Hotel3.Deskripsi3}          
        />
    </div>
  )
}
