import React, { useState, useEffect } from "react";
import Modal from "react-modal";
const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "white",
        width: 400,
    },
};

function Contactmodal({ isOpen, setmodalVisible }) {
    // const [modalOpen, setModalOpen] = useState(isOpen);
    return (
        <div className="Contactmodal">
            <Modal ariaHideApp={false}
                isOpen={isOpen}
                onRequestClose={() => setmodalVisible(false)}
                style={customStyles}
            >
                <div className='contactForm'>
                    <form action='https://formsubmit.co/e1mandalsoft@gmail.com' method='post'>
                        <h2>Send Message</h2>
                        <div className='inputBox'>
                            <input type='text' name='full_name' required="required" />
                            <span>Full Name</span>
                        </div>
                        <div className='inputBox'>
                            <input type='eamil' name='email' required="required" />
                            <span>Email</span>
                        </div>
                        <div className='inputBox'>
                            <textarea name='message' required="required"></textarea>
                            <span>Type Your Message...</span>
                        </div>
                        <div className='inputBox'>
                            <input type="submit" value="Send" />
                        </div>
                    </form>
                </div>

            </Modal>
        </div>
    );
}

export default Contactmodal;
