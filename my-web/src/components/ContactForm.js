import React from 'react'

const ContactForm = () => {
    return (
        <div>
            <form>
                <div className="row g-3">
                    <div className="col-md-6">
                        <div className="form-floating">
                            <input type="text" className="form-control" id="name" placeholder="Your Name" />
                            <label for="name">Your Name</label>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-floating">
                            <input type="email" className="form-control" id="email" placeholder="Your Email" />
                            <label for="email">Your Email</label>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-floating">
                            <input type="text" className="form-control" id="subject" placeholder="Subject" />
                            <label for="subject">Subject</label>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-floating">
                            <textarea className="form-control" placeholder="Leave a message here" id="message"></textarea>
                            <label for="message">Message</label>
                        </div>
                    </div>
                    <div className="col-12">
                        <button className="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ContactForm;