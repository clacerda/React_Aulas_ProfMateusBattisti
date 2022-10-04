const Events = () => {


    const handleMyEvent = (e) => {
        console.log(e)
        console.log("Ativou evento")
    }


    const renderSomething = (x) => {
        if(x){
            <h1>Se verdadeiro renderiza isto</h1>;
        }else{
            <h1>Senão isto</h1>;
        }
    };

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui</button>
            </div>

            <div>
                <button onClick={() => console.log("Clicou")}>Clique também</button>
            </div>
            
            {renderSomething(true)}
        </div>
    );

};

export default Events;