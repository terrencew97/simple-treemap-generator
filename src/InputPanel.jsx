const InputPanel = ({ onDataInputChanged, onRowNumberInputChanged }) => {
    return (
        <div>
            <div>data</div>
            <textarea onChange={e => onDataInputChanged(e.target.value)} />
            <div>Row Number</div>
            <input type="number" onChange={e => onRowNumberInputChanged(e.target.value)} />
        </div>
    )
}

export default InputPanel