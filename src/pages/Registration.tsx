import { Link, useNavigate } from 'react-router-dom';
import '../styles/register.css'

const Register = () => {
  const navigate = useNavigate();

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
          <form action="">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Password" />
          </form>
        </div>
        <div className='form-register'>
          <h2 className='page-subname'>Custom Fields</h2>
          <form action="">
            <input type="text" placeholder="Company Name" />
            <input type="text" placeholder="Website" />
            <button className='btn-register' type='submit'>Register Customer</button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Register;
