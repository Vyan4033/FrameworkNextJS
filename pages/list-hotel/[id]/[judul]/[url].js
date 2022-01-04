import Header from "../../../../components/header";
import Link from "next/link";
import Head from "next/head";

export async function getServerSideProps(context){
    let idHotel = context.params.id;
    let judulHotel = context.params.judul;
    let urlHotel = context.params.url
    return{props : {idHotel, judulHotel, urlHotel}};
}

const List = (props) => (
    <div>
        <Head>
            <title>
                List Hotel
            </title>
        </Head>
        <Header/>
        <h1 className="display-5 fw-bold text-success text-opacity-80 justify-content-center d-flex my-5">
                List Hotel
        </h1>
        <ol>
            <li>ID : {props.idHotel}</li>
            <li>Nama Hotel : {props.judulHotel}</li>
            <li>Gambar : {props.urlHotel}</li>
            <Link href="/">Kembali</Link>
        </ol>

    </div>
)


export default List