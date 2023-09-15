import { useRouter } from 'next/router';
import React from 'react'

// Show all Articles list of a act along with description of act

const Page = () => {

    const router = useRouter();
    return (
        <div>
            Act Name:
            {
                router.query.act
            }
        </div>
    )
}

export default Page;