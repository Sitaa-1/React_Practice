import { useState } from "react"

export function EMICalculator(){

    const [loanAmount,setLoanAmount] = useState(25000);
    const[year,setYear] = useState(1);
    const[rate,setRate] = useState(10.45);
    const[emi,setEmi] = useState(0);

    function CalculateEMI(){
        var p = parseInt(loanAmount);
        var r = parseFloat(rate)/12/100;
        var n = parseInt(year) * 12;
        var emi = p*r*(Math.pow(1+r,n))/(Math.pow(1+r,n))-1;
        setEmi(emi);
    }

    function handleAmountChange(e){
        setLoanAmount(e.target.value);
        CalculateEMI();
    }
    function handleYearChange(e){
        setYear(e.target.value);
        CalculateEMI();
    }
    function handleRateChange(e){
        setRate(e.target.value);
        CalculateEMI();
    }
    function handleCalculateClick(){
        var p = parseInt(loanAmount);
        var r = parseFloat(rate)/12/100;
        var n = parseInt(year) * 12;
        var emi = p*r*(Math.pow(1+r,n))/(Math.pow(1+r,n))-1;
        setEmi(emi);
    }

    return(
        <div className="container-fluid" style={{height:'100vh'}}>
            <div className="p-4 bg-light row mt-4">
                <div className="col-6">
                    <div className="row">
                        <div className="d-flex justify-content-between">
                            <div><label className="form-label fw-bold">Loan Amount</label></div>
                            <div><input type="text" onChange={handleAmountChange} className="form-control" value={loanAmount}/></div>
                        </div>
                        <div>
                            <input type="range" onChange={handleAmountChange} min="25000" max="1000000" className="form-range"/>
                            <div>
                                <span>&#8377; 25,000/-</span>
                                <span className="float-end">&#8377; 10,00,000/-</span>
                            </div>
                        </div>
                    </div>
                    <div className="row my-3">
                        <div className="d-flex justify-content-between">
                            <div><label className="form-label fw-bold">Loan Tenure</label></div>
                            <div><input type="text" onChange={handleYearChange} style={{width:'50px'}} className="form-control" value={year}/></div>
                        </div>
                        <div>
                            <input type="range" onChange={handleYearChange} min="1" max="7" className="form-range"/>
                            <div>
                                <span>1 year</span>
                                <span className="float-end">7 year</span>
                            </div>
                        </div>
                    </div>
                    <div className="row my-3">
                        <div className="d-flex justify-content-between">
                            <div><label className="form-label fw-bold">Loan Interest</label></div>
                            <div><input type="text" onChange={handleRateChange} style={{width:'100px'}} className="form-control" value={rate}/></div>
                        </div>
                        <div>
                            <input type="range" onChange={handleRateChange} min="10.45" step="0.01" max="18.45" className="form-range"/>
                            <div>
                                <span>10.45%</span>
                                <span className="float-end">18.45%</span>
                            </div>
                        </div>
                    </div>
                    <div  className="text-center">
                        <button onClick={handleCalculateClick} className="btn btn-primary">Calculate</button>
                    </div>
                </div>
                <div className="col-6 ps-4">
                    <h3>Loan Instalment Amount</h3>
                    <div className="fw-bold fs-5">
                        {emi.toLocaleString('en-in',{style:'currency', currency:'INR',minimumFractionDigits:0,maximumFractionDigits:0})}
                    </div>
                </div>
            </div>
        </div>
    )
}