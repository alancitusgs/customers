import React from 'react'

const Modal = ({
                idModal, 
                classWidth = '', 
                callback = null, 
                title = null, 
                inputs, 
                submitId = 'submitId', 
                textPrincipalButton = 'Guardar',
                modalStyle = null,
                modalBodyStyle = null,
                modalFooterStyle = null,
                showFooter = true
                }) => {

                    
    return (
        <div className="modal fade" 
            id={idModal} 
            tabIndex="-1" 
            role="dialog" 
            aria-labelledby={idModal+"Title"} 
            aria-hidden="true"
            data-backdrop="false"
        >
            <div 
                className={"modal-dialog modal-dialog-centered "+classWidth} 
                style={modalStyle}
                role="document"
            >
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">{title}</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <form onSubmit={callback ? callback.bind() : () => {}} autoComplete="off">
                    <div 
                        className="modal-body"
                        style={modalBodyStyle}
                    >
                        {
                            inputs
                        }
                    </div>
                    {
                        showFooter ? <div className="modal-footer" style={modalFooterStyle}>
                                        {
                                            callback ? <button type="submit" id={submitId} className="btn btn-customer" >{textPrincipalButton}</button> : null
                                        }
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                                    </div> : null
                    }
                    
                </form>
            </div>
            </div>
        </div>
    )
}

export default Modal
