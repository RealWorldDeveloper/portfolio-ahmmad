import React from "react";
import "./footer.css";
import { FaFacebook ,FaInstagram,FaGithub,FaTwitter,FaLinkedin  } from "react-icons/fa";
function Footer() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "3c569081-fd1c-4e29-83f2-73c9acc4a449");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message)
    }
  };


  return (
    <div className="footer" id="footer">
      <div className="container container-contact py-3">
        <h1 className=" footerText py-3" id="contact-text">
          Get in Touch
        </h1>
        <div className="row-contact border-bottom p-2">
          <div className="left-contact mb-3">
            <div class="card" style={{ width: "23rem" }} id="card-contact">
              <div class="card-body">
                <h2 className="contact-title">Lets talk</h2>
                <p className="text-info fs-4">I’d love to hear from you</p>
                <h5 class="card-title fs-6 py-2 text-primary">
                  Email: real.world.developer@gmail.com
                </h5>
                <h5 class="card-title fs-6 py-2 text-light">Phone: +4407770737686</h5>
                <h5 class="card-title fs-6 py-2 text-light">
                  London, United Kingdom
                </h5>
              </div>
            </div>
          </div>
          <form className="right-contact" action="submit" onSubmit={onSubmit}>
            <div class="mb-3">
              <label htmlFor="" class="form-label text-dark">
                Your Name
              </label>
              <input
                type="text"
                class="form-control py-2"
                name="name"
                id="exampleFormControlInput1"
                placeholder="Enter Your name"
              />
              <label htmlFor="" class="form-label text-dark">
                Email address
              </label>
              <input
                type="email"
                class="form-control py-2"
                name="email"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div class="mb-3">
              <label htmlFor="" class="form-label text-dark">
                Write Message here
              </label>
              <textarea
                class="form-control"
                name="message"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <div class="d-grid gap-2 col-6 mx-auto">
              <button class="btn btn-info p-2" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="icons mt-4">
          <FaLinkedin className="mx-1" style={{color:'#0b65c2'}}/>
          <FaFacebook className="mx-1" style={{color: '#0a65ff'}}/>
          <FaInstagram className="mx-1"/>
          <FaGithub className="mx-1"/>
          <FaTwitter className="mx-1" style={{color: '#1fa0f1'}}/>
        </div>
      </div>
    </div>
  );
}

export default Footer;
