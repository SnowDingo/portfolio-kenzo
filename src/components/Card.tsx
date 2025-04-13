
import { useState } from "react";
import "../style/global.css";

export default function Card(){
    const [hover, setHoverStatus] = useState<boolean>(false);    


    return(
        <div onMouseEnter={() => {setHoverStatus(!hover)}}  className="card  px-4 shadow-md w-40 aspect-[2/3]">
            {hover?<div >
            <div>
                <h3>Card Title</h3>
                <p>Card description</p>
            </div>
            </div>
            :<div >
                <h3>Not hovered</h3>
                </div>
        }

        </div>
    )
}
