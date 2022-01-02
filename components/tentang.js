export default function About(props){
    return(
        <div className='container'>
            <h1 className="display-5 fw-bold text-success text-opacity-80 justify-content-center d-flex my-4">
                {props.Judul}
            </h1>
            <p className="card-text d-flex justify-content-center">
                {props.Motto}
            </p>
            <div className="row align-item-start">
                <div className="col">
                    <h1 className="card-text display-4 fw-bold text-success text-opacity-80">
                        {props.Layanan}
                    </h1>
                </div>
                <div className="col">
                    <p className="display-7">
                        {props.Deskripsi}
                    </p>
                </div>
            </div>
            
        </div>
    )
}