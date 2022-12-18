import React, { useEffect, useState } from 'react'
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
            // backgroundColor: 'rgba(69, 69, 70, 1)',
            maxHeight: '80vh',
            

        },
        overlay: { zIndex: 1000,
      backgroundColor: 'rgba(69, 69, 70, 0.75)' }
    }

    return (
        <div>
            <Modal
                isOpen={modalState}
                // onAfterOpen={afterOpenModal}
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
