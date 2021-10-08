import React from 'react';
import Input from './input';

class ContactUs extends React.Component {
    render() {
        return(
            <div>
                <h2 className="contactUsTitle">CONTACT US</h2>
                <form>
                    <Input inputClass="inputClass input1" type="string" placeholder="FIRST NAME" />
                    <Input inputClass="inputClass input2" type="string" placeholder="LAST NAME" /><br />
                    <Input inputClass="inputClass input3" type="email" placeholder="MAIL ADRESS" /><br />
                    <textarea className="textareaClass" placeholder="MESSAGE">
                    </textarea>
                </form>
            </div>
            
        )
    }
}

export default ContactUs;