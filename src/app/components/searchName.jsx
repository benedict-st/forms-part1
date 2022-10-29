import React from "react";
import PropTypes from "prop-types";
const SearchName = ({ searchName, onItemSearchName }) => {
    return (
        <>
            <div className="container mt-4 pb-4">
                <form className="row g-3">
                    <input
                        type="text"
                        defaultValue="search"
                        value={searchName}
                        placeholder="Search..."
                        onChange={(e) => onItemSearchName(e)}
                    />
                </form>
            </div>
        </>
    );
};
SearchName.propTypes = {
    searchName: PropTypes.string.isRequired,
    onItemSearchName: PropTypes.func
};

export default SearchName;
