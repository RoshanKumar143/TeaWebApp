import './Filter.css'

export default function CostFilter(){

    return(
        <>
            <center><p>Filter</p></center>
            <div>

                <div className="filter-1">
                    <input type="radio" name="cuisine" value=""/>
                    <label for="username">All</label>
                </div>
                <div className="filter-1">
                    <input type="radio" name="cuisine" value="0-20"/>
                    <label for="username">0-20</label>
                </div>
                <div className="filter-1">
                    <input type="radio" name="cuisine" value="21-50"/>
                    <label for="username">21-50</label>
                </div>
                <div className="filter-1">
                    <input type="radio" name="cuisine" value="51-149"/>
                    <label for="username">51-149</label>
                </div>
                <div className="filter-1">
                    <input type="radio" name="cuisine" value="150-300"/>
                    <label for="username">150-300</label>
                </div>

            </div>
        </>
    )
}