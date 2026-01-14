export function ButtonDemo(){

    function handleDobleClick(){
        window.open('mb1.jpg','iPhone','width=100','height=100');
    }
    function handleRightClick(){
        document.oncontextmenu=()=>{
            alert('right click not allowed');
            return false;
        }
    }

    return(
        <div onContextMenu={handleRightClick} className="container-fluid p-4">
            <h3>Highly Confidential Detail</h3>
            <p>right click not allowed</p>
            <img src="./mb1.jpg" onDoubleClick={handleDobleClick} width='50px' height='50px'/>
        </div>
    )
}