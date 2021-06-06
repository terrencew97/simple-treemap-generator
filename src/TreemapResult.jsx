const generateDisplayData = (data, rowNumber) => {
    if (data.length < 1 || rowNumber < 1) return []
    data.sort((a, b) => b.weight - a.weight)
    let result = []
    for (let i = 0; i < rowNumber; i++) {
        result[i] = {
            totalWeight: 0,
            data: []
        }
    }
    for (let i = 0; i < data.length; i++) {
        result[0].data.push(data[i])
        result[0].totalWeight += data[i].weight
        result.sort((a, b) => a.totalWeight - b.totalWeight)
    }
    return result
}

const TreemapResult = (props) => {
    const { data, rowNumber } = props
    const displayData = generateDisplayData(data, rowNumber)
    const maxWeight = displayData.length > 0 ? displayData[displayData.length - 1].totalWeight : 0
    return (
        <div>
            <div>Treemap</div>
            {
                displayData.map((row, rowIndex) => (
                    <div
                        className="row"
                        style={{ width: '100%' }}
                        key={`row${rowIndex}`}
                    >
                        {
                            row.data.map((col, colIndex) => (
                                <div
                                    key={`row${rowIndex}col${colIndex}`}
                                    className={"col " + (col.value > 0 ? 'positive' : 'negative')}
                                    style={{ width: (col.weight / maxWeight * 100) + '%' }}>
                                    <span>{col.name}</span>
                                    <span>{Math.ceil(col.value * 10000) / 100}%</span>
                                </div>
                            ))
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default TreemapResult