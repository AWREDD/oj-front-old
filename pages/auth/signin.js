
import React from 'react'
import Header from '../../components/Header'
import { getProviders } from 'next-auth/react'
import { Button } from "@arco-design/web-react";
import "@arco-design/web-react/dist/css/arco.css";

export default function signIn({providers}) {
  return (
    <>
        <Header/>
        <div className=''>
            {Object.values(providers).map(provider => (
                <div key={provider.name}> 
                    <Button type="primary">signIn with {provider.name}</Button>
                    
                </div>
            ))}
        </div>
    </>
  )
}

export async function getServerSideProps( ) {
    const providers = await getProviders()

    return{
        props: { providers },
    }
}