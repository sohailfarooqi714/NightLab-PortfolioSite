import React,{useState, useEffect} from "react";
import emailjs from "@emailjs/browser";


const Contacts = () => {

    const initialValues = {name: "", phone: "", email: "", subject: "", description: ""};
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState(initialValues);
    const [isSubmit, setIsSubmit] = useState(false);


    const serviceID = "service_ID";
    const templateID = "template_ID";
    const userID = "user_Qd6dPtg9fz7LlkEwLKzYq";

    const handleChange = (e) => 
    {
        const {name, value} = e.target;
        setFormValues({...formValues, [name]: value});
        console.log(formValues);
    }

    const handleSubmit = (e) =>
    {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);

        emailjs.sendForm(serviceID, templateID, e.target, userID)
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
    };

    useEffect(()=>{
        console.log(formErrors);
        if(Object.keys(formErrors).length === 0 && isSubmit)
        {
            console.log(formValues);
        }
    },[formErrors])

    const validate = (values) =>
    {

        const errors ={}
        const regex  = /^[^\s@]+@[^\s@]{2,}$/i;
        if(!values.name)
        {
            errors.name = "Name is required !";
        }
        if(!values.phone)
        {
            errors.phone = "Phone number is required !";
        }
        if(!values.email)
        {
            errors.email = "A valid e-mail address is required !";
        } 
            else if(!regex.test(values.email))
            {
                errors.email = "Not a valid email address !";
            }
        if(!values.subject)
        {
            errors.subject = "Subject is required !";
        }
        if(!values.description)
        {
            errors.description = "Breif description is required !";
        }

        return errors;
    }

   /* const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm(serviceID, templateID, e.target, userID)
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };*/

  return  <div id="Contacts" className="contacts">

            <div className="text-center">
                <h3>Contact Me</h3>
                <p>Please fill out the form and describe your project needs and I'll contact you as soon as 
                possible.
                </p>
            </div>

            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="row">

                        <div className="col-md-6 col-xs-12">
                            {/* NAME INPUT */}
                            <div className="text-center">
                            <p>{formErrors.name}</p>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Name"
                                name="name"
                                value={ formValues.name }
                                onChange={handleChange}
                            />
                            <div className="line"></div>
                            </div>
                            {/* PHONE INPUT */}
                            <div className="text-center">
                            <p>{formErrors.phone}</p>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Phone Number"
                                name="phone"
                                value={ formValues.phone }
                                onChange={handleChange}
                            />
                            <div className="line"></div>
                            </div>
                            {/* E-MAIl INPUT */}
                            <div className="text-center">
                            <p>{formErrors.email}</p>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="E-Mail"
                                name="email"
                                value={ formValues.email }
                                onChange={handleChange}
                            />
                            <div className="line"></div>
                            </div>
                            {/* SUBJECTt INPUT */}
                            <div className="text-center">
                            <p>{formErrors.subject}</p>
                            <input 
                                type="text"
                                className="form-control"
                                placeholder="Subject"
                                name="subject"
                                value={ formValues.subject }
                                onChange={handleChange}
                            />
                            <div className="line"></div>
                            </div>
                        </div>

                        <div className="col-md-6 col-xs-12">
                            {/* DESCRIPTION */}
                            <div className="text-center">
                            <p>{formErrors.description}</p>
                            <textarea
                                type="text"
                                className="form-control"
                                placeholder="Kindly provide a brief description of your project requirements..."
                                name="description"
                                value={ formValues.description }
                                onChange={handleChange}
                            ></textarea>
                            <div className="line"></div>
                            </div>
                        </div>
                    </div>
                        <div className="text-center">
                            <button className="btn-main-offer contact-btn" type="submit"> Submit </button>
                        </div>
                        <br/>
                        <div className="text-center">
                              {Object.keys(formErrors).length === 0 && isSubmit ? (<div className="ui-message-success">Message recieved ! I will follow up with you shortly.</div>
                                ) : (         
                                    <pre>{JSON.stringify( undefined, 2)}</pre>
                                )}
                            </div>
            </form>
            </div>
        </div>;

};

export default Contacts;
