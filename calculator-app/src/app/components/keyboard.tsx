
const buttons = [
    ["C","%","/"],
    [7,8,9,"x"],
    [4,5,6,"-"],
    [1,2,3,"+"],
    [0,".","="]
]

const Keyboard  = () => {
    return(
        <div className="flex mt-20">
            {buttons.map((row,rowIndex) => (
                <div key ={rowIndex} className="row">
                {row.map((button,buttonIndex) => (
                    <div>
                        <button className="m-5 bg-zinc-200">
                        {button}
                        </button>
                    </div>
                ))}    
                </div>
            )
            )}
        </div>
    );
};

export default Keyboard;