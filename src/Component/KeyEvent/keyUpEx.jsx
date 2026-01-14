import axios from "axios";
import { useEffect, useState } from "react"

export function KeyUpEvntWithIdPwd(){

    const[users,setUsers] = useState([{username:null}]);
    const[userMgs,setUserMsg] = useState('');
    const[userClass,setUserClass] = useState('');
    const[progressWidth,setProgressWidth] = useState({width:null});
    const[strenthColor,setStrenthColor] = useState('');
    const[passwordMsg,setPasswordMsg] = useState('');

    function LoadUser(){
        axios.get('user.json').then(response=>{
            setUsers(response.data);
        })
    }
    useEffect(()=>{
        LoadUser();
    },[]);

    function varifyUser(e){
        for(var user of users){
            if(user.username===e.target.value){
                setUserMsg('User Name taken - Try Another..!!');
                setUserClass('text-danger');
                break;
            }else{
                setUserMsg('User Available');
                setUserClass('text-success');
            }
        }
    }

    function verifyPassword(e){
        if(e.target.value.match(/(?=.*[A-Z])\w{4,15}/)){
            setProgressWidth({width:'100%'})
            setStrenthColor('bg-success');
            setPasswordMsg('Strong Password');
        }else if(e.target.value.length<4){
            setProgressWidth({width:'30%'});
            setStrenthColor('bg-danger');
            setPasswordMsg('Poor Password');
        }else{
            setProgressWidth({width:'70%'});
            setStrenthColor('bg-warning');
            setPasswordMsg('Week Password');
        }
    }

    return(
        <div className="container-fluid p-4">
            <h3>Register User</h3>
            <dl className="w-25">
                <dt>User Name</dt>
                <dd>
                    <input type="text" className="form-control" onKeyUp={varifyUser}/>
                </dd>
                <dd className={userClass}>{userMgs}</dd>
                <dt>Password</dt>
                <dd>
                    <input onKeyUp={verifyPassword} className="form-control" type="password"/>
                </dd>
                <dd>
                    <div className="progress">
                        <div className={`progress-bar text-white progress-bar-striped progress-bar-animated ${strenthColor}`} style={progressWidth}>
                            {passwordMsg}
                        </div>
                    </div>
                </dd>
            </dl>
        </div>
    )
}