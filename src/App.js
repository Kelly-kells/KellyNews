import React, {useEffect} from 'react'
import alanBtn from "@alan-ai/alan-sdk-web"



const alanKey='0bfa95d4d552d4459b78fc0ee3cfc7342e956eca572e1d8b807a3e2338fdd0dc/stage';
const App = () => {

    useEffect(() => {
        alanBtn ({
            key:alanKey,
            onCommand: (command )=>{
                if (command === 'testCommand') {
                    alert ('This cod works');
                }
            }

        })
    }, [])
  return (
    <div>
        <h1>
            happy
        </h1>
    </div>
  )
}

export default App