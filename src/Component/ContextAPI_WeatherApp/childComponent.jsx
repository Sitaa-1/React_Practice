export function ChildComponent({onChildClick}){
    function handleClick(){
        let data = 'hi im child';
        onChildClick(data);
    }

    return(
        <div className="bg-success border p-3">
            <h5>Child Component</h5>
            <button onClick={handleClick}>Send to parent</button>
        </div>
    )
}