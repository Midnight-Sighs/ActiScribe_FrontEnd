import React from 'react';

const Modal=(props)=> {
    
    const showHideClassName = props.show ? "modal display-block" :"modal display-none"

    return ( 
        <>
        <div className={showHideClassName}>
            <section className="modal-main">
                
            </section>
            <button onClick={props.close}></button>
        </div>
        </>
     );
}

export default Modal;