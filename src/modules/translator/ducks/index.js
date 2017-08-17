import { translationUrl } from '../../../config';

const UPDATE_SOURCE_TEXT = 'UPDATE_SOURCE_TEXT';
const TOGGLE_ATTENTION = 'TOGGLE_ATTENTION';
const TOGGLE_BEAM = 'TOGGLE_BEAM';
export const FETCH_TRANSLATION_RESULTS = 'FETCH_TRANSLATION_RESULTS';
export const RECEIVE_TRANSLATION_RESULTS = 'RECEIVE_TRANSLATION_RESULTS';

const initialState = {
  sourceText: 'Je mange les frites',
  targetText: null,
  attentionVisible: false,
  beamVisible: false,
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SOURCE_TEXT: return { ...state, sourceText: action.value }
    case RECEIVE_TRANSLATION_RESULTS: return {
      ...state,
      targetText: action.results.tgt,
      targetTokens: action.results.tgtTokens ? action.results.tgtTokens.words : action.results.tgt.split(' '),
      sourceTokens: action.results.srcTokens ? action.results.srcTokens.words : action.results.src.split(' '),
      attention: action.results.attn,
    }
    case TOGGLE_ATTENTION: return {
      ...state,
      attentionVisible: !state.attentionVisible,
    }
    case TOGGLE_BEAM: return {
      ...state,
      beamVisible: !state.beamVisible,
    }
    default: return state
  }
}

const getState = ({ translator }) => translator;
export const getSourceText = (state) => getState(state).sourceText

export const getSourceTokens = (state) => getState(state).sourceTokens

export const getTargetText = (state) => getState(state).targetText

export const getTargetTokens = (state) => getState(state).targetTokens

export const getAttention = (state) =>  getState(state).attention

export const isAttentionVisible = (state) =>  getState(state).attentionVisible

export const isBeamVisible = (state) =>  getState(state).beamVisible

export const updateSourceText = (value) => ({
  type: UPDATE_SOURCE_TEXT,
  value
});

export const receiveTranslationResults = (results) => ({
  type: RECEIVE_TRANSLATION_RESULTS,
  results
});

export const toggleAttention = () => ({
  type: TOGGLE_ATTENTION,
});

export const toggleBeam = () => ({
  type: TOGGLE_BEAM,
});

export const fetchResults = () => ({
  type: FETCH_TRANSLATION_RESULTS,
});

export const translate = () =>  (dispatch, getState) => {
  dispatch(fetchResults());
  return  fetch(translationUrl, {
    method: 'POST',
    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify([{
      src: getSourceText(getState())
    }]),
  }).then((response) => response.json()).then((data) => data[0][0]).then((results) => {
    dispatch(receiveTranslationResults(results))
  });
}


