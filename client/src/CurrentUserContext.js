import React from 'react';

export const CurrentUserContext = React.createContext(null);

export const CurrentUserProvider = ({children}) => {
  const [currentUser, setCurrentUser] = React.useState(null);
  const [status, setStatus] = React.useState('loading');

  //Fetching user data
  React.useEffect(() => {
    fetch('/api/me/profile')
    .then(res => {
        if(!res.ok){
            throw Error(res.statusText);
        }
        return res;
    })
    .then(res => res.json())
    .then(data => {
        setCurrentUser(data);
        setStatus('idle');
    })
    .catch(err => console.log(err));
}, [])

  return (
    <CurrentUserContext.Provider value={{
      currentUser,
      status,
    }}>
      {children}
    </CurrentUserContext.Provider>
  );
};