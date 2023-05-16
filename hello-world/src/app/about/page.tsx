import Link from "next/link"

export default function Home(){
    const name = "Masood";
    return (
        <div>
            <h1>{name}</h1>
            <br/><br/>
            <Link href="/page">Home</Link>
        </div>
    )    
}