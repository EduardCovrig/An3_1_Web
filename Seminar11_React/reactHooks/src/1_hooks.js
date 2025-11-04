import React, { useState , useEffect} from "react";

const App = () => {
    const [steps, setSteps] = useState(0);
    useEffect(()=>
        {
            document.title=`You clicked ${steps} times`;
        });

        //implementați un efect care se rulează
        // doar la prima desenare a componentei.
    useEffect( () => 
    {
        document.title="Welcome, please take a step";
    },[]); //doar la mount
    // pot scrie si [count] de exemplu, si se face doar
    //la mount si cand se schimba count


    return (
        <> {/* pentru ca in react se poate returna un singur element parinte,
        deci incorporam ambele div-uri intr-un tag gol*/}
            <div className="container">
                <p>Today you've taken {steps} steps!</p>
                <button onClick={() => setSteps(steps + 1)}>Click me</button>
                {/*daca puneam direct functia, se apela instant, de aceea
                am facut o functie lambda care o trimit*/}
            </div>
            <div className="new-container"></div>
                {
                    steps===0 ? 
                    (
                        <p>Hai sa mergem!</p>
                    )
                    :
                    <p>Bravo, ai inceput sa mergi!</p>
                }

        </>

    );
}

export default App;