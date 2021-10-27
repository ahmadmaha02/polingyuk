
const RadioButton = ({name , value ,setValue}) => {
    return (
        <>
            <div className="flex items-center mr-4 mb-4">
                <input id={name} type="radio" name="radio" className="hidden" value={value} onChange={ e => setValue(e.target.value)}/>
                <label htmlFor={name} className="flex items-center cursor-pointer font-thin">
                    <span className="w-6 h-6  inline-block mr-2 rounded-full border border-grey flex-no-shrink"></span>
                    {name}
                </label>
            </div>

        </>
    )
}

export default RadioButton
