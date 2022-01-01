import React from "react";
import author from "../me.jpg";


function About() {
  return (
      <div className="about-wrapper">
            <div className="container py-5">
                <div className="row">
                        <h1 className="about-heading" align="center">
                            About Us
                        </h1>
                    <div className="col-lg-6 col-xm-12">
                        <div className="photo-wrap mb-3">
                            <img className="profile-img" src={author} alt="author.." />
                        </div>     
                    </div>
                    <div className="col-lg-6 col-xm-12">
                        <div className="persona1-description">
                            <h4 className="persona1-name" align = "Center">
                                Sohail Ali Farooqi
                            </h4>
                            <p>
                                Hi there! I am Sohail. I completed my undergrad in Computer Science with a majors in Software Development in 2019.
                                Since then I have been working in the software industry closely with clients. My passion and expertise have been 
                                towards (but not limited to) game development. I leverage Corona SDK/Solar 2D, Unity 2D/3D and Unreal Engine to create 
                                interactive and engaging experiences for desktops, browsers and mobile devices. Before diving into the design and development 
                                it is important for me that the idea proposed has been clearly inked, thought out and well communicated. A game design 
                                document would be ideal before we start diving into it's development. I will discuss the details of your design with
                                you and lay out a concrete plan of deliverables. Once your project is finished and is in it's deployment stage it is 
                                essential that it is properly marketed at the right target audience. I can help create an advertising campaign via 
                                social media platforms. My priority is client satisfaction so I aim to provide a week of after sales service in assisting 
                                client with the application and it's running. If you've got an idea for a game, I am your guy ! 
                        </p>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  );
}

export default About;