import { profExp } from "../data/page-data";

const Profession = () => {
    const {title,experiences} =  profExp; //destructuring
    return (
        <section>
            <h2 className="mb-6">{title}</h2>
            <div className="flex flex-col gap-6">
                {experiences.map(({role,desc,current}) => (
                    <div key={role} className="flex flex-col rounded-lg">
                        <span className={`h-2 ${current?'bg-green':'bg-grey'}`}/> {" "}
                        <div className="bg-grey-light p-6 drop-shadow-md">
                    <h3>{role}</h3>
                    <p className="mt-2">{desc}</p>
                    </div>
                    </div>
                ))}
            </div>
        </section>
    )

}

export default Profession;