import getFormattedDate from "../../../../lib/getFormattedDate"
import { getSortedPostsData, getPostData } from "../../../../lib/posts"
import { notFound } from "next/navigation"
import Link from "next/link"
import Breadcrumb from "@/components/common/Hero/Breadcrumb"
import "../../../app/globals.css"
import Image from "next/image"


export function generateStaticParams() {
    const posts = getSortedPostsData()

    return posts.map((post) => ({
        postId: post.id
    }))
}

export function generateMetadata({ params }: { params: { postId: string } }) {

    const posts = getSortedPostsData()
    const { postId } = params

    const post = posts.find(post => post.id === postId)

    if (!post) {
        return {
            title: 'Post Not Found'
        }
    }

    return {
        title: post.title,
    }
}

export default async function Post({ params }: { params: { postId: string } }) {

    const posts = getSortedPostsData()
    const { postId } = params

    if (!posts.find(post => post.id === postId)) notFound()

    const { title, date, desc, image,  contentHtml } = await getPostData(postId)

    const pubDate = getFormattedDate(date)

    return (
        <main>
            <Breadcrumb 
            title={title}
            desc={date}
        />
            <section>
                <div className="container">
                    <div className="row">
                       <div className="grid md:grid-cols-2 grid-cols-1 gap-4">

                       <div className="">
                            <Image
                                src={image}
                                alt={title}
                                width={600}
                                height={600}
                            />
                        </div>
                        <div>
                        <p className="blog_content md:mt-0 mt-4 text-justify text-md space-y-4"  dangerouslySetInnerHTML={{ __html: contentHtml }} />

                        </div>
                       </div>

                    </div>
                </div>
            </section>
        </main>
    )
}