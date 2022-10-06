function Image({className}) {

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
            <img src={""} className="image-grid" />
        </div>
    )
}

export default Image