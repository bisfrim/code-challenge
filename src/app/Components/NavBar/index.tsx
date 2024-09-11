'use client'
import { getName } from '@/app/data'
import { useQuery } from '@tanstack/react-query'
import React from 'react'


const NavBar = () => {
    // use react query to fetch name from api
    const { data, isLoading, isError} = useQuery({
        queryFn: async() => await getName(),
        queryKey: ['name']
    })

    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Error fetching data</div>

    return (
        <nav className="flex border-b mb-5 px-5 h-14 items-center bg-green-700">
            <div className='flex-grow text-center'>
                <h1 className='text-white text-2xl'>{data ? data : 'Loading...'}</h1>
            </div>
        </nav>
    )
}
export default NavBar