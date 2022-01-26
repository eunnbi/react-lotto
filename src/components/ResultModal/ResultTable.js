const ResultTable = ({matchedLotto, winningResult}) => {
    return (
        <table className="result-table">
        <caption className="modal__title">당첨 결과</caption>
        <colgroup>
            <col span="1" className="result-col"/>
            <col span="6" className="numbers-col"/>
        </colgroup>
        <thead>
            <tr>
                <th scope="col" className="result">결과</th>
                <th colSpan="6" scope="col">번호</th> 
            </tr>
        </thead>
        <tbody>
            {matchedLotto.map((lotto, index) => (
                <tr key={index}>
                    <td className="result">{winningResult[index].result}</td>
                    {lotto.map((number, index) => {
                        let className = "table__number";
                        if (number.correct){
                            className = "table__number correct";
                        }
                        if (number.bonus){
                            className = "table__number bonus";
                        }
                        return (
                            <td key={index}>
                                <div className={className}>{number.value}</div>
                            </td>    
                        );
                    })}
                </tr>
            ))}
        </tbody>
    </table>
    )
}
export default ResultTable;