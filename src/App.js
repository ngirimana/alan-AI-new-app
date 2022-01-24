import React,{useEffect} from "react";
import alanBtn from "@alan-ai/alan-sdk-web";

const alanKey =
  "c706e12eea7a5fc570f03bd147584c052e956eca572e1d8b807a3e2338fdd0dc/stage";
  
const App = () => {
    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ({command,articles}) => {
                if (command === 'newHeadlines') {
                    console.log(articles);
                }
            }
      })  
    },[])
    return (
        <div>
            <h1>Alan AI new Application</h1>
        </div>
    )
}
export default App; 