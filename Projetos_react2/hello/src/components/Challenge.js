const Challenge = () => {

    function Somar (x, y){
        x = 1;
        y = 1;
        return console.log(x + y);
    }

    return (
        <div>
            <button onClick={Somar}>Somar</button>
        </div>
    );

}

export default Challenge;