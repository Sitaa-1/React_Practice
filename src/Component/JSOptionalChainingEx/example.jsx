export function OptionalChaing(){
    var product = {name:"tv",rating:{rate:3.5}};
    console.log(product.name);
    console.log(product.rating.rate);
    console.log(product.rating.review);
    
    return(
        <div className="p-4">
            <h3>jksdh</h3>
            <form className="">
                <dl>
                    <dt>UserName</dt>
                    <dd><input type="text" name="UserName" /></dd>
                    <dt>Mobile</dt>
                    <dd><input type="text" name="Mobile" /></dd>
                </dl>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}