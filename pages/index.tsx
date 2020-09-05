import {useRouter} from 'next/router'
import { NextPage } from 'next'
import { useEffect } from 'react'

const Index : NextPage = () => {
    const router = useRouter();

    useEffect(() => {
        router.push('/home')
    }, []);
    
    return null;

}

export default Index
