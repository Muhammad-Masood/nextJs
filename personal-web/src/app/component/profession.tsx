import { profExp } from "../data/page-data";

const Profession = () => {
    const {title,experiences} =  profExp; //destructuring
    return (
        <section>
            <h2>{title}</h2>
            <div className="flex flex-col">
                {experiences.map((item) => (
                    <div>
                        
                        <span/>
                    </div>
                ))}
            </div>
        </section>
    )

}

export default Profession;