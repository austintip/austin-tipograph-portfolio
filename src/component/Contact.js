import { useState } from 'react'

const Contact = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const onNameChange = (e) => {
        setName(e.target.value )
    }

    const onEmailChange = (e) => {
        setEmail( e.target.value )
    }

    const onMessageChange = (e) => {
        setMessage(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, message)
    }

        return (
            <div className="App">
                <form id="contact-form" onSubmit={handleSubmit.bind()} method="POST">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" value={name} onChange={onNameChange.bind()} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" aria-describedby="emailHelp" value={email} onChange={onEmailChange.bind()} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea className="form-control" rows="5" value={message} onChange={onMessageChange.bind()} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }


export default Contact