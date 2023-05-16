import Link from "next/link";

export default function Home(){
  return(
  <div>
    My First Website <br/>
    Hello Worldddd!!!
    <br/>
    <br/>
    
    {/* agr anchor lagao gy to page refresh krega */}
    {/* Link aik component hai jisse resources bar bar download nhi hongy */}

    <Link href="/about">About Us</Link> 
    <br/>
    <br/>
    <Link href="/contact">Contact Us </Link>
    <br/>
    {/* <Link href="/home">Home</Link> */}
  </div>
  )
}

//creating Button component
export const Button = () => {
  return(
  <button></button>
  )
}