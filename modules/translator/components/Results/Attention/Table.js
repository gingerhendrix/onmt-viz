
const ColHeader = ({ word }) =>
  <td style={{ padding: '10px 10px' }} >{word}</td>

const RowHeader = ({ word }) =>
  <td>{word}</td>


const toGray = (x) => {
  const norm = Math.floor(x * 255)
  return `rgba(${norm}, ${norm}, ${norm}, 1)`
}

const backgroundColor = (attn) => toGray(1 - attn)
const textColor = (attn) => attn > 0.5 ? 'white' : 'black'

const Cell = ({ attn }) =>
  <td style={{ padding: '10px', backgroundColor: backgroundColor(attn), color: textColor(attn) }} >{attn.toFixed(2)}</td>

const Table = ({ src, tgt, attn }) => (
  <table>
    <tbody>
      <tr>
        <td></td>
        { src.map((word, i) => <ColHeader word={word} key={i} /> ) }
      </tr>
      {
        tgt.map(
          (tWord, tIdx) => (
            <tr key={tIdx} >
              <RowHeader word={tWord} />
              {
                src.map((sWord, sIdx) => <Cell key={sIdx} attn={attn[tIdx][sIdx]} /> )
              }
            </tr>
         ))
      }
    </tbody>
  </table>
);

export default Table;
