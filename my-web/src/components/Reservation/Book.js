import React from 'react';
import '../../styles/Reservation.css'

const Book = () => {
    return (
        <div className='book'>
            <h5>Reservation</h5>
            <h1 className="text-white mb-4">Book A Table Online</h1>
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
                    <div className="col-md-6">
                        <div className="form-floating date" id="date3" data-target-input="nearest">
                            <input type="text" className="form-control datetimepicker-input" id="datetime" placeholder="Date &amp; Time" data-target="#date3" data-toggle="datetimepicker" />
                            <label for="datetime">Date &amp; Time</label>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-floating">
                            <select className="form-select" id="select1">
                                <option value="1">People 1</option>
                                <option value="2">People 2</option>
                                <option value="3">People 3</option>
                            </select>
                            <label for="select1">No Of People</label>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-floating">
                            <textarea className="form-control" placeholder="Special Request" id="message"></textarea>
                            <label for="message">Special Request</label>
                        </div>
                    </div>
                    <div className="col-12">
                        <button className="btn btn-primary w-100 py-3 book-btn" type="submit">Book Now</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Book