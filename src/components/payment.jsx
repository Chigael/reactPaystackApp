
import React, {useState} from "react";
import axios from "axios";

const Payment = () => {

   // STATE SECTION
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [payresult, setPayresult] = useState(""); 

const url=`https://paystackpayment.ornan.repl.co/paystack?amount=${amount*100}&email=${email}`;

  // const form = new FormData();
  // form.append('email',email)
  // form.append('amount',amount)
  // form.append('firstname',firstname)
  // form.append('lastname',lastname)

  async function paystackpay(e){
    e.preventDefault();
    await axios.get(url,{
      headers:{
        'X-Requested-With':"XMLHttpRequest"
      }
    }).then(response=>{
      let data = response.data;
      console.log(data.data.authorization_url)
      setPayresult(data.data.authorization_url)
      window.location.href=data.data.authorization_url
      return null
      
    }).catch(function(error){
      console.log(error)
    })
  }
  
return(
  <div>
<div className="w3-container w3-row">
<div className="w3-conatiner w3-green">
  <h3 className="w3-center">Make Payment</h3>

  <pre>
    {payresult}
  </pre>
</div>

<div className="w3-container w3-quarter"></div>
  <div className="w3-container w3-half">
        <div className="w3-container w3-card-4 w3-margin-top"></div>
          {/* FORM STARTS HERE   */}
          <form>
          <div className="form-group w3-margin">
          <label htmlFor="email">Email</label>
            <input type="email" className="w3-input w3-border w3-round-large"
              onChange={(e)=>setEmail(e.target.value)} value={email} id="email" />
          </div>

             <div className="form-group w3-margin">
          <label htmlFor="amount">Amount</label>
            <input type="text" className="w3-input w3-border w3-round-large" onChange={(e)=>setAmount(e.target.value)} value={amount} id="amount" />
          </div>

            <div className="form-group w3-margin">
              <label htmlFor=""or="first-name">First Name</label>
              <input
                type="text"
                className="w3-input w3-border w3-round-large" onChange={(e)=>setFirstname(e.target.value)} value={firstname}
                id="first-name"
              />
            </div>
            <div className="form-group w3-margin">
              <label htmlFor="last-name">Last Name</label>
              <input
                type="text"
                className="w3-input w3-border w3-round-large" onChange={(e)=>setLastname(e.target.value)} value={lastname}
                id="last-na me"
              />
            </div>

            <div className="form-submit w3-margin">
              <button className="w3-btn w3-block w3-green"
                type="submit" value="Pay with paystack" onClick={paystackpay}>
                {" "}
                Pay{" "}
              </button>
            </div>
          
          </form>
  </div>  
</div>
    </div>
)

  
}

export default Payment;