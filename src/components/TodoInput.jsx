function TodoInput({inputValue, setInputValue}){
    return(
        <div>
        <input
        value={inputValue}
        onChange={(e) =>{ 
            setInputValue(e.target.value)}}
        />
        </div>
    );
}

export default TodoInput;