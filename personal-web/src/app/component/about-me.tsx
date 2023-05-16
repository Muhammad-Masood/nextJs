import { about } from "../data/page-data"

export default function AboutMe() {
    const {title,body} = about;
    return(
        <section>
            <h2 className="mb-6">{title}</h2>
            <p className="mb-6 ">{body}</p>
        </section>
    )
}