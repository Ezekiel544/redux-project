import { createRoot } from "react-dom/client";
import Jokeone from "./jokeone";
const root = createRoot(document.getElementById('root'))
root.render(
    <>
    <Jokeone
    setup = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, necessite'
    punchline = 'the first punchline prop'
    />

<Jokeone
    setup = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, necessite'
    punchline = 'the second punchline prop'
    />
     <Jokeone
    setup = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, necessite'
    punchline = 'the third punchline prop'
    />
  
    </>
)