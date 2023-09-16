import { useRouter } from 'next/router';
import React from 'react'
import { Stack, Card } from "@mantine/core"
// show particular article based on  article id

const Page = () => {
    const router = useRouter();



    return (
        <Stack>
            <div>
                article_name/ID:
                {
                    router.query.id
                }
                <Card pl={"md"} pr={"md"}>
                    { }
                </Card>
            </div>
        </Stack>
    )
}

export default Page;