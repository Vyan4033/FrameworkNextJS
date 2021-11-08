import Link from "next/link"
export default function Card(props){
    return(
        <div className="container">
            <h1 className="display-5 fw-bold text-success text-opacity-80 justify-content-center d-flex my-5">
                {props.Judul}
            </h1>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                <div className="col">
                <div className="card shadow-sm">
                    <img src={props.Url} width="100%" height="225"/>
                    <div className="card-body">
                    <h4>{props.NamaHotel}</h4>
                    <p className="card-text">{props.Deskripsi}</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <Link href="/list-hotel/1/Hotel-Aston/Aston.jpg">
                                <button type="button" className="btn btn-sm btn-outline-secondary">Lihat</button>
                            </Link>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col">
                <div className="card shadow-sm">
                    <img src={props.Url2} width="100%" height="225"/>
                    <div className="card-body">
                    <h4>{props.NamaHotel2}</h4>
                    <p className="card-text">{props.Deskripsi2}</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <Link href="/list-hotel/2/Hotel-Dialoog-Banyuwangi/Dialoog.jpg">
                                <button type="button" className="btn btn-sm btn-outline-secondary">Lihat</button>
                            </Link>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col">
                <div className="card shadow-sm">
                    <img src={props.Url3} width="100%" height="225"/>
                    <div className="card-body">
                    <h4>{props.NamaHotel3}</h4>
                    <p className="card-text">{props.Deskripsi3}</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <Link href="/list-hotel/3/Hotel-Illira-Banyuwangi/Illira.jpg">
                                <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                            </Link>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}