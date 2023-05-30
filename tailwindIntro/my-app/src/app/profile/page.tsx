import Image from "next/image"
import profile from '../../../public/profile.jpg'

export default function Home(){
    return(
        // <div className="bg-red-500 h-screen">
        // </div>
        <div className="bg-gray-200 p-4 flex flex-row-reverse">
            <div>
            <h1 className="text-4xl font-semibold">Muhammad Masood</h1>
            <p className="text-sm mt-4 mb-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt consequuntur, eveniet dolore odit ea hic doloremque ducimus adipisci inventore exercitationem veniam similique voluptate modi aliquid, libero quo quae et sed.</p>
            <button className="bg-sky-600 px-3 py-2 rounded-3xl text-white hover:bg-sky-700">Learn More</button>
            </div>
            <div className="shrink-0">
                <Image className="rounded-r-full drop-shadow-xl mr-4" 
                src={profile} width={140} height={140} alt="profile"></Image>
            </div>
        </div>

    )
}