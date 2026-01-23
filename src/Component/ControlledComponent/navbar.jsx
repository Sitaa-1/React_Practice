export function NavbarComponent(props){
    if(props.orientation==='horizontal')
    {
        return(
            <div>
                <nav className={`d-flex ${props.theme} justify-content-between align-items-center p-2 border border-secondary`}>
                    <div>
                        <span className={props.logo}></span>
                        <span className="fw-bold">{props.brand}</span>
                    </div>
                    <div>
                        {
                            props.menu.map(item=><span className="mx-3" key={item}>{item}</span>)
                        }
                    </div>
                    <div>
                        <span className="bi bi-heart"></span>
                        <span className="bi bi-person mx-4"></span>
                        <span className="bi bi-gift"></span>
                    </div>
                </nav>
            </div>
        )
    }else{
         return(
            <div>
                <nav className={`d-flex flex-column ${props.theme} mt-2 justify-content-between align-items-center text-center pt-1 pb-1 border border-secondary`} style={{height:'25rem',width:'135px'}}>
                    <div>
                        <span className={props.logo}></span>
                        <span className="fw-bold">{props.brand}</span>
                    </div>
                    <div className="d-flex flex-column gap-3 align-items-center">
                        {
                            props.menu.map(item=><span className="btn btn-warning text-dark justify-content-center d-flex" style={{width:'80%'}} key={item}>{item}</span>)
                        }
                    </div>
                    <div>
                        <span className="bi bi-heart mx-2"></span>
                        <span className="bi bi-person mx-1"></span>
                        <span className="bi bi-gift mx-2"></span>
                    </div>
                </nav>
            </div>
        )
    }
}