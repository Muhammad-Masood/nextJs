

// ye function sirf 3 pages banarha hai
export const generateStaticParams = () => {
    return [
        {name:"Muhammad"},
        {name: "Masood"},
        {name: "Waheed"}
    ]
}

export default function dynamicSegment(props:any) {
    console.log(props);
    console.log(props.params.name);
    let customName = props.params.name;
    return(
        <div>
            Hello <b> {customName} </b>
        </div>
    )
}