import React, { useState } from "react";

const App = () => {
    const [steps, setSteps] = useState(0);
    return (
        <>
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