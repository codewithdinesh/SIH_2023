import { useRouter } from 'next/router';
import React from 'react'

// show particular article based on  article id

const Page = () => {
    const router = useRouter();



    return (
        <div>
            article_name/ID:
            {
                router.query.id
            }

        </div>
    )
}

export default Page;