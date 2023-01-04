const Filter = ({inputFilter, handleInputFilter}) => {
    return(
        <div>
            filter shown with <input value={inputFilter} 
                                onChange={handleInputFilter}/>
        </div>
    )
}

export default Filter