import React, { Component } from 'react';
import './BookNow.css'

class Appointment extends Component {
    constructor(props) {
        super(props);
        this.state = {
        appointment: {
            startTime: new Date(),
            endTime: new Date(),
            subject: '',
        },
        };
    }
    
    createAppointment() {
        const appointment = {
        startTime: this.state.appointment.startTime,
        endTime: this.state.appointment.endTime,
        subject: this.state.appointment.subject,
        };
    
        // Save the appointment to the database or other storage.
    
        this.setState({
        appointment: 
        {},
        });
    }
    
    render() {
        return (
        <div className='book-now'>
            <h1 className='start'>Day Start</h1>
            <input
            type="datetime-local"
            name="startTime"
            value={this.state.appointment.startTime}
            onChange={(event) => this.setState({ appointment: { ...this.state.appointment, startTime: event.target.value } })}
            />
            <h1 className='end'>Day End</h1>
            <input
            type="datetime-local"
            name="endTime"
            value={this.state.appointment.endTime}
            onChange={(event) => this.setState({ appointment: { ...this.state.appointment, endTime: event.target.value } })}
            />
            <input
            className='txt'
            type="text"
            name="subject"
            value={this.state.appointment.subject}
            onChange={(event) => this.setState({ appointment: { ...this.state.appointment, subject: event.target.value } })}
            />
            <button className="appointment" onClick={this.createAppointment}>Book Appointment</button>
        </div>
    );
}
}

export default Appointment;