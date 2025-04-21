import Link from "next/link"
import getFormattedDate from "../../../../lib/getFormattedDate"

type Props = {
    post: BlogPost
}

export default function ListItem({ post }: Props) {
    const { id, title, date, image, desc } = post
    const formattedDate = getFormattedDate(date)

    return (
        <li className="mt-4 text-2xl dark:text-white/90">
            <article className=" group">
                <figure className="overflow-hidden rounded mb-1">
                    <img
                        src={image}
                        className="group-hover:rotate-1 group-hover:scale-110 duration-300 delay-100"
                    />
                </figure>
                <span className="md:text-md text-sm text-black">
                    Machpela | {date}
                </span>
                <h1 className="text-2xl md:text-2xl font-bold !leading-none text-brand-300 mt-2 mb-2">
                    {title}
                </h1>
                <p className="text-black text-sm">
                    {desc}
                </p>
                <div className="md:mt-2 group">
                    <a
                        href={`/blog/${id}`}
                        className="text-brand-300 hover:text-brand-150/90 transition duration-700 font-semibold text-lg underline"
                    >
                        Saiba Mais
                    </a>
                </div>
            </article>
        </li>
            
    )
}