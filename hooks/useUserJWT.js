import React, { useState, useEffect } from 'react';

const useUserJWT = () => {
  const [userJWT, setUserJWT] = useState(null)

  if (typeof window !== 'undefined') {
    if (localStorage) {
      useEffect(() =>
        setUserJWT(localStorage.getItem("podcasterUserJWT"))
      )
    }
  }
  return userJWT
}

export default useUserJWT