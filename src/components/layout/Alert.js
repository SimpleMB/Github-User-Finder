import React, { useContext } from 'react'
import AlertContext from '../../context/alerts/alertContext';

const Alert = () => {
  
  const { alert } = useContext(AlertContext);
  return (
    alert !== null && (
      <div className={`alert-${alert.type}`}> 
        <i className="fas fa-info-circle"> {alert.msg}</i>
      </div>
    )
  )
}


export default Alert
