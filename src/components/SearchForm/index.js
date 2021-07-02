  
import React from "react";
// import "./style.css";

function SearchForm(props) {
    return (
        <form className="search">
            <div className="form-group">
                <label htmlFor="local">Location:</label>
                <input
                value={props.search}
                onChange={props.handleInputChange}
                name="location"
                list="employees"
                type="text"
                className="form-control"
                placeholder="Type in a location"
                id="location"
                />
                <datalist id="locations">
                    {props.locations.map(location => (
                        <option value={location} key={location}/>
                    ))}
                </datalist>
                <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
                    Search
                </button>
            </div>
        </form>
    )
}

export default SearchForm;