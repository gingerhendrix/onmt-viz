import Attention from './Attention'

const Results = ({ src, tgt, attn }) => {
  if (!tgt || tgt.length === 0) {
    return <div></div>;
  }
  return (
    <div>
      <div>{ tgt.join(' ') }</div>
      <Attention src={src} tgt={tgt} attn={attn} />
    </div>
  );
}

export default Results;
