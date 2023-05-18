const Cell = ({ id, cell, setCells, playerGo, setPlayerGo, cells, winMessage}) => {

const handleClick = (e) => {
    {/* sets a variable 'taken' to see if a square is taken (has a circle or cross in it)*/}
    const taken = e.target.firstChild.classList.contains("circle") || e.target.firstChild.classList.contains("cross")

                        
{/* if the cell(square) is not taken(empty) then add an element with the class name circle or cross into it depending on the players go)*/}
        if (taken === false) {
            if (playerGo === "circle") {
                e.target.firstChild.classList.add("circle")
                boardChange("circle")
                setPlayerGo("cross")
            }
            if (taken === false) {
            if (playerGo === "cross") {
                e.target.firstChild.classList.add("cross")
                boardChange("cross")
                setPlayerGo("circle")
            }
        }
    }
}

const boardChange = (className) => {
    {/* maps thru the orginal gameboard array(cells) checks to see if the index is the same as the id passed thru the Cell component */}
    const newBoard = cells.map((cell, index) => {
        if (index === id) {
            return className 
            {/* if the index matches the id then adds the className in this case (circle or cross) to the newBoard array*/}
        } else return cell
        {/* else returns an empty string to the array*/}
    })
    setCells(newBoard)

    console.log(cells, id)
}

    return (
        <div className="square" id={id} onClick={!winMessage && handleClick}>
            <div className={cell}></div> {/* first child div*/}
        </div>
        
    )
}

export default Cell