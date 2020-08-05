import React from "react";



import './form-input.styles.css'


class FormInput extends React.Component {
    render()
    {
        const {handleChange, label, ...otherProps} = this.props;
        return (
           <div className="group">
               <input 
               className="form-input"
               onChange={handleChange}
               {...otherProps}
               />
               {
                   label?
                   (<label className={`label-name`}>
                      <span className="content-name">{label}</span>
                   </label>)
                   : null
               }

           </div>
            
        );
    }
}

export default FormInput;