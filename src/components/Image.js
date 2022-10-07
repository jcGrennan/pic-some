import {useState} from "react"

function Image({className, img}) {

    const [hover, setCover] = useState(false)

    function getClassName(i) {
        if(i % 5 === 0) {
            return "big"
        }
        else if(i % 6 === 0) {
            return "wide"
        }
    } 

    return (
        <div className={`${getClassName(className)} image-container`}>
            <img alt="product photos" src={img.url} className="image-grid" />
        </div>
    )
}

export default Image