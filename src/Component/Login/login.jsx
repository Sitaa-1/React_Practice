import './login.css'
export function Login(){
    return(
        <div className='login-container'>
            <form className="form-container">
                <h3>User Login</h3>
                <dl>
                    <dt>User Name</dt>
                    <dd>
                        <input type="text" />
                    </dd>
                    <dt>Password</dt>
                    <dd>
                        <input type="password"></input>
                    </dd>
                </dl>
                <button>Login</button>
            </form>
        </div>
    )
}