import React, { useEffect, useState } from 'react'
import styles from './Register.module.css'
// import RegisterImage from '../../assets/images/RegisterImage.png'
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button'

export default function Register() {
  const navigate = useNavigate();
  // name, email, mobile, userName, isAgreementChecked

  //we can also create individual usetate for each formdata( const [name, setName] = useState()....... ), 
  //but as shown below creating them using obj would be easier
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    userName: "",
    isAgreed: false,
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    userName: "",
    mobile: "",
  });
  const [nameError, setNameError] = useState(false);
  const [userNameError, setUserNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [mobileError, setMobileError] = useState(false);
  const [isAgreedError, setIsAgreedError] = useState(false);

  const handleChange = (event) => {
    // 'Event' works like a parameter
    // console.log(event.target.name);
    // console.log(event.target.value);
    if (event.target.name == "check") {
      setFormData({ ...formData, [event.target.name]: event.target.checked });
      // console.log(formData);
    } else {
      setFormData({ ...formData, [event.target.name]: event.target.value });
      // console.log(formData);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = {};
    if (!formData.name.trim().length) {
      setNameError(true);
      errors.name = "Name Rquired";
      
    }
    if (!formData.email.trim().length) {
      setEmailError(true);
      errors.email = "Email is Rquired";
      

    }
    if (!formData.userName.trim().length) {
      setUserNameError(true);
      errors.userName = "UserName is Rquired";
      

    }
    if (!formData.mobile.trim().length) {
      setMobileError(true);
      errors.mobile = "Mobile Number is Rquired";
      
    }
    if (!formData.isAgreed) {
      setIsAgreedError(true);
      errors.isAgreed = "Check this box if you want to proceed";
  
    }
  

    setErrors(errors);

    if (!Object.keys(errors).length) {
      localStorage.setItem("userData", JSON.stringify(formData));
      navigate("/genre");
    }
  };
  useEffect(() => {
    // console.log(errors);
  }, [errors]);
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        {/* <img src={RegisterImage} alt='Cover of register page' id={styles.img1}></img> */}
        <div className={styles.para}><p>Discover new things on Superapp</p></div>
      </div>

      {/* right- part in register page */}
      <div className={styles.right}>
        <form>
          <div className={styles.right_inner}>
            <div className={styles.title}><h1 >Super app</h1></div>
            <div className={styles.create}><p>Create your new account</p></div>

            <input type='text' name='name' placeholder='Enter your name' onChange={(event) => handleChange(event)} className={styles.name} id={styles.name_input}></input>
            {nameError ? (
              <p className={styles.error}>{errors.name}</p>
            ) : (<></>)}

            <input type='text' name='userName' placeholder='Username' onChange={(event) => handleChange(event)} className={styles.name}></input>
            {userNameError ? (
              <p className={styles.error}>{errors.userName}</p>
            ) : (<></>)}

            <input type='Email' name='email' placeholder='Email' onChange={(event) => handleChange(event)} className={styles.name}></input>
            {emailError ? (
              <p className={styles.error}>{errors.email}</p>
            ) : (<></>)}

            <input type='text' name='mobile' placeholder='Mobile' onChange={(event) => handleChange(event)} className={styles.name} minLength={10} maxLength={10}></input>
            {mobileError ? (
              <p className={styles.error}>{errors.mobile}</p>
            ) : (<></>)}

            <label className={styles.check}>
              <input
                onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.checked })}
                type='checkbox'
                name='isAgreed'
              />&nbsp;
              Share my registration data with Superapp
            </label>
            {isAgreedError ? (<p className={styles.error}>{errors.isAgreed}</p>) : (<></>)}

            <Button onClick={handleSubmit}>SIGN UP</Button>
            <div className={styles.agree}>By clicking on Sign up. you agree to Superapp <span className={styles.terms}> <a href='#'>Terms and Conditions of Use</a></span></div>
            <div className={styles.agree1}>To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp <span className={styles.terms}> <a href='#'>Privacy Policy</a></span></div>
          </div>
        </form>



      </div>
    </div>

  )
}
