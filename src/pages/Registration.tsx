import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import '../styles/register.css';
import customers from '../assets/customers';

const Register = () => {
  const [form, setForm] = useState({
    id: customers.length + 1,
    fName: "",
    lName: "",
    email: "",
    password: "",
    companyName: "",
    website: "",
    cartProduct: [],
    card: "",
  })

  const navigate = useNavigate();

  function handleChange(e: any) {
    const { name, value } = e.target;
    setForm((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      }
    });
  }

  function registerCustomer(e: any) {
    e.preventDefault();
    if (!form.fName || !form.lName || !form.email || !form.password) {
      alert("You need to add all Mandatory Fields");
    } else {
      customers.push(form);
      navigate("/select-customer");
    }
  }

  return (
    <div className='registration'>
      <header>
        <h1 className='page-name'>Connect Stripe Terminal</h1>
      </header>
      <nav className='back-menu'>
        <Link to={".."} onClick={() => {
          navigate(-1);
        }}>← Back to Menu</Link>
      </nav>
      <main>
        <div className='form-register'>
          <h2 className='page-subname'>Mandatory Fields</h2>
          <form action="POST">
            <input type="text" placeholder="First Name" value={form.fName} onChange={handleChange} name="fName" />
            <input type="text" placeholder="Last Name" value={form.lName} onChange={handleChange} name="lName" />
            <input type="email" placeholder="Email" value={form.email} onChange={handleChange} name="email" />
            <input type="text" placeholder="Password" value={form.password} onChange={handleChange} name="password" />
          </form>
        </div>
        <div className='form-register'>
          <h2 className='page-subname'>Custom Fields</h2>
          <form action="">
            <input type="text" placeholder="Company Name" value={form.companyName} onChange={handleChange} name="companyName" />
            <input type="text" placeholder="Website" value={form.website} onChange={handleChange} name="website" />
            <button onClick={registerCustomer} className='btn-register' type='submit'>Register Customer</button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Register;
