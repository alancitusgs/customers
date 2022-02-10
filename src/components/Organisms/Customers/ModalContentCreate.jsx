import React from 'react'

const ModalContentCreate = () => {
    return (
        <div>
            <div className="form-group">
                <label htmlFor="Name" className="col-form-label">Nombre: <span className="text-danger" >*</span></label>
                <input type="text" className="form-control" id="name" name="name" minLength="3" maxLength="255" required/>
            </div>
            <div className="form-group">
                <label htmlFor="lastname" className="col-form-label">Apellido:</label>
                <input type="text" className="form-control" id="lastname" name="lastname" minLength="2" maxLength="50"/>
            </div>
            <div className="form-group">
                <label htmlFor="birthdate" className="col-form-label">Fecha de nacimiento</label>
                <input type="date" className="form-control" id="birthdate" name="birthdate" />
            </div>
        </div>
    )
}

export default ModalContentCreate
