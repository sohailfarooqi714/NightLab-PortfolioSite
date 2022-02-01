import React from 'react';

const Contacts = () => {
  return <div id="Contacts" className="contacts">

            <div className="text-center">
                <h3>Contact Me</h3>
                <p>Please fill out the form and describe your project needs and I'll contact you as soon as 
                possible.
                </p>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-xs-12">
                        {/* NAME INPUT */}
                        <div className="text-center">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Name"
                            name="name"
                        />
                        <div className="line"></div>
                        </div>
                        {/* PHONE INPUT */}
                        <div className="text-center">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Phone Number"
                            name="phone"
                        />
                        <div className="line"></div>
                        </div>
                        {/* E-MAIl INPUT */}
                        <div className="text-center">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="E-Mail"
                            name="email"
                        />
                        <div className="line"></div>
                        </div>
                        {/* SUBJECTt INPUT */}
                        <div className="text-center">
                        <input 
                            type="text"
                            className="form-control"
                            placeholder="Subject"
                            name="subject"
                        />
                        <div className="line"></div>
                        </div>
                    </div>

                    <div className="col-md-6 col-xs-12">
                        {/* DESCRIPTION */}
                        <div className="text-center">
                        <textarea
                            type="text"
                            className="form-control"
                            placeholder="Kindly provide a brief description of your project requirements..."
                            email="email"
                        ></textarea>
                        <div className="line"></div>
                        </div>
                        <div className="btn-main-offer contact-btn" type="submit"> Submit </div>
                    </div>
                </div>
            </div>
        </div>;
};

export default Contacts;
