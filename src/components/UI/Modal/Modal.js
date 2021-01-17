import React from 'react'
import ReactDOM from 'react-dom'
import './modal.css'

const portalRoot = document.getElementById('portalRoot')

const UIModal = ({ children, isOpen, onClickClose }) => {

    if (!isOpen) {
        return null
    }

    return ReactDOM.createPortal(
        <div className='ui-modal__overlay'>
            <div className='ui-modal'>
                <button type='button' 
                className='ui-modal__close-button'
                onClick={onClickClose}
                
                >X</button>
                {children}
            </div>
        </div>,
        portalRoot
    )
}

export default UIModal