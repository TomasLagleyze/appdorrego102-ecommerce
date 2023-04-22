import { useState, createContext, useContext } from 'react';

const Notification = ({type, message}) =>{
    const notificationStyle = {
  position: 'absolute',
  top: 750,
  right: 575,
  backgroundColor: type === 'success' ? 'green' : 'red',
  color: 'white',
  padding: '10px 20px 10px 20px',
  borderRadius: 10
    }
  
  
    if (!message) return
  
    return (
      <div style={notificationStyle}>
        {message}
      </div>
    )
  }
  
  const NotificationContext = createContext ()

export const NotificationProvider = ({children}) =>{

    const [notificationData, setNotificationData] = useState({
        type: 'error',
        text: ''
          })

    const setNotification = (type, text, time) =>{
        setNotificationData ({type, text})
        setTimeout(() => {
          setNotification ({type, text: ''})
        }, time ? time * 1000: 2000);
    
      }
    return (
                <NotificationContext.Provider value={{setNotification}}>
                <Notification type={notificationData.type} message ={notificationData.text}/>
                {children}
                </NotificationContext.Provider>
    )
}




export const useNotification = () => {
  return useContext(NotificationContext)
}