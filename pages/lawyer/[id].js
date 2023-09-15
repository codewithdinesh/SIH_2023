import { useRouter } from 'next/router'
import React from 'react'

const LawyerPage = () => {
    
    const router = useRouter();

    return (
        <div>Lawyer ID :
            {
                router.query.id
            }
        </div>
    )
}

export default LawyerPage