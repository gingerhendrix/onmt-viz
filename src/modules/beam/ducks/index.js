import { FETCH_TRANSLATION_RESULTS, RECEIVE_TRANSLATION_RESULTS } from '../../translator/ducks';
import { createSelector } from 'reselect';

const initialState = {
  beamSearch: undefined,
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TRANSLATION_RESULTS: return {
      ...state,
      beamSearch: undefined,
    }
    case RECEIVE_TRANSLATION_RESULTS: return {
      ...state,
      beamSearch: action.results.beamSearch,
    }
    default: return state
  }
}

const normalizeData = ({ predicted_ids: predictedIds, beam_parent_ids: parentIds, scores }) => ({
  predictedIds: predictedIds[0],
  parentIds: parentIds[0],
  scores: scores[0],
})

const toTree = ({ predictedIds, parentIds, scores }) => {
  const root = {
    name: "START",
    attributes: {},
    children: [],
  }
  const nodes = [];

  for(let level=0; level < predictedIds.length; level++){
    nodes[level] = []
    for(let n=0; n < predictedIds[level].length; n++){
      const node = {
        name: predictedIds[level][n],
        attributes: {
          score: scores[level][n] ? scores[level][n].toPrecision(4) : '?'
        },
        children: [],
      }
      nodes[level][n] = node;
      const parent = level === 0 ? root : nodes[level-1][parentIds[level][n]]
      parent.children.push(node);
    }
  }

  return [root];
};

const getState = ({ beam }) => beam;
const getBeamSearch = (state) => getState(state).beamSearch

export const getBeamTree = createSelector(
  getBeamSearch,
  (beamSearch) => {
    if (!beamSearch) return null;
    return toTree(normalizeData(beamSearch))
  }
);

export default reducer;
