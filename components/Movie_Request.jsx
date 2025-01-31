import React, {useState,useEffect} from "react";
const MovieRequest=()=>{
    
    const [dialogues,setDialogues]=useState({});
    const [loading,setLoading]=useState(true);
    async function randomrequest(){
        try {
            console.log("Random Request");
            setLoading(true);
            const data=await fetch("http://127.0.0.1:8000/random-dialogue");
            const response=await data.json();
            setDialogues(response);
            console.log(response);
        } catch (error) {
            console.error(error);
        }
        finally{
            setLoading(false);
        }
    } 

    // useEffect(()=>{
    //     console.log("First Load.....");
    //     randomrequest();
    // },[]);

    return(
        <>
            <div className="items-center justify-center">
                <h1 className="text-center font-black mt-10">Movie Dialogues Generator</h1>
                <br />
                <div className="flex justify-center items-center">
                    <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={randomrequest}>Generate Random Dialogue</button>
                </div>
                <h3 className="text-center font-bold">Response</h3>
                <div className="justify-center items-center text-center"> 

                    {/* <p className="text-black font-bold">{dialogues.movie}</p>
                    <p>{dialogues.dialogue}</p> */}

                    {
                        loading?(
                            <p>Loading...</p>
                        ):(
                            <div>
                            <p className="text-black font-bold">{dialogues.movie}</p>
                                <p>{dialogues.dialogue}</p>
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    );
}

export default MovieRequest;