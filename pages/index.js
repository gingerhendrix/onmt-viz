const src = ["Je", "mange", "les", "frites"]
const tgt = ["I", "eat", "the", "chips"]

const attn = [
  [
    0.45966103672981,
    0.19446744024754,
    0.14663769304752,
    0.19923381507397
  ],
  [
    0.13231092691422,
    0.52756553888321,
    0.24037761986256,
    0.099745899438858
  ],
  [
    0.03791831061244,
    0.047099176794291,
    0.43405139446259,
    0.48093110322952
  ],
  [
    0.027416927739978,
    0.048820752650499,
    0.096174359321594,
    0.82758796215057
  ]
]

const Index = () => (
  <div>
    <div>
      <input value="Je mange les frites" />
      <button >Translate</button>
    </div>
    <hr/>
    <div>
      <div>I eat the chips</div>
      <h2>Attention</h2>

      <table>
        <tr>
          <td></td>
          {src.map((word) => <td>{word}</td>)}
        </tr>
        {
          tgt.map(
            (tWord, tIdx) => (
              <tr>
                <td>{tWord}</td>
                {
                  src.map((sWord, sIdx) => <td>{attn[tIdx][sIdx]}</td>)
                }
              </tr>
            ))
        }
       </table>
    </div>
  </div>
)

export default Index;
