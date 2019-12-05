import React, { useEffect } from 'react';
import { useRouter } from 'next/router'

const useRoutePush = (route) => {
  const router = useRouter()
  if (typeof window !== 'undefined') {
    useEffect(()=>{
      router.push(route)
    })
  }
}

export default useRoutePush