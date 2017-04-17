const Results = ({ src, tgt, attn }) => {
  if (!tgt || tgt.length === 0) {
    return <div></div>;
  }
  return (
    <div>
      <div>{ tgt.join(' ') }</div>
      <h2>Attention</h2>

      <table>
      <tbody>
        <tr>
           <td></td>
           {src.map((word, i) => <td style={{ padding: '10px 10px' }} key={i}>{word}</td>)}
         </tr>
         {
           tgt.map(
             (tWord, tIdx) => (
              <tr key={tIdx} >
                <td>{tWord}</td>
                {
                  src.map((sWord, sIdx) => <td style={{ padding: '10px' }} key={sIdx} >{attn[tIdx][sIdx].toFixed(2)}</td>)
                }
              </tr>
            ))
           }
         </tbody>
       </table>
    </div>
  );
}

export default Results;
