export default function IsiIndex(props){
    return(
        <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center">
            <div className="col-md-6 p-lg-6 mx-auto my-2">
                <h1 className="display-5 fw-bold text-success text-opacity-80 d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                        {props.Name}
                </h1>
                <p className="lead fw-normal">{props.Name2}</p>
            </div>
        </div>
    )
}   