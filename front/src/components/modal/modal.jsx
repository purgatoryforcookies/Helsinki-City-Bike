import React from 'react'
import Modal from 'react-modal';
import AddJourney from '../addJourney/addJourney';


function ModalBody({ modalState, handleState }) {

    const modalstyle = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            backgroundImage: 'linear-gradient(to right top, #191919, #1d1c1d, #212020, #252324, #292727)',
            maxHeight: '80vh',
            border: '1px solid #353434'
        },
        overlay: { zIndex: 1000,
      backgroundColor: 'rgba(69, 69, 70, 0.75)' }
    }

    return (
        <div>
            <Modal
                isOpen={modalState}
                onRequestClose={()=> handleState(false)}
                style={modalstyle}
                ariaHideApp={false}
            >
                <div className="addNew" id='addNewElement'>

            <AddJourney/>
                </div>
            </Modal>
        </div>
    )
}

export default ModalBody
