import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useMutation, useQueryClient } from "@tanstack/react-query";
import customers from '../assets/customers';
import '../styles/register.css';


const Register = () => {
  const navigate = useNavigate();
  const queryCustomer = useQueryClient();

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
    notes: [],
  })

  const newCustomerMutation = useMutation({
    mutationFn: async (newCustomer: any) => {
      // Simulate a network request with a delay (e.g., using fetch or axios in a real application)
      await new Promise((resolve) => setTimeout(resolve, 1000));
      customers.push(newCustomer);
      return newCustomer;
    },
    onSuccess: () => {
      queryCustomer.invalidateQueries(["customer"])
      navigate("/select-customer");
    }
  })
  if (newCustomerMutation.isLoading) return <h1>Loading...</h1>
  if (newCustomerMutation.isError) return <pre>{JSON.stringify(newCustomerMutation.error)}</pre>

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
      newCustomerMutation.mutate(form);
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
          <form onSubmit={registerCustomer}>
            <input type="text" placeholder="First Name" value={form.fName} onChange={handleChange} name="fName" />
            <input type="text" placeholder="Last Name" value={form.lName} onChange={handleChange} name="lName" />
            <input type="email" placeholder="Email" value={form.email} onChange={handleChange} name="email" />
            <input type="text" placeholder="Password" value={form.password} onChange={handleChange} name="password" />
          </form>
        </div>
        <div className='form-register'>
          <h2 className='page-subname'>Custom Fields</h2>
          <form onSubmit={registerCustomer}>
            <input type="text" placeholder="Company Name" value={form.companyName} onChange={handleChange} name="companyName" />
            <input type="text" placeholder="Website" value={form.website} onChange={handleChange} name="website" />
            <button disabled={newCustomerMutation.isLoading} className='btn-register' type='submit'>{newCustomerMutation.isLoading ? "Loading..." : "Register Customer"}</button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Register;
