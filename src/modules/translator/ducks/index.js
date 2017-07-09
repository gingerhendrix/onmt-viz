import { translationUrl } from '../../../config';

const UPDATE_SOURCE_TEXT = 'UPDATE_SOURCE_TEXT';
const RECEIVE_TRANSLATION_RESULTS = 'RECEIVE_TRANSLATION_RESULTS';

const initialState = {
  sourceText: 'Je mange les frites',
  targetText: null,
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SOURCE_TEXT: return { ...state, sourceText: action.value }
    case RECEIVE_TRANSLATION_RESULTS: return {
      ...state,
      targetText: action.results.tgt,
      targetTokens: action.results.tgt.split(' '), //action.results.tgtTokens.words,
      sourceTokens: action.results.src.split(' '), //action.results.srcTokens.words,
      attention: action.results.attn,
    }
    default: return state
  }
}

export const getSourceText = (state) => state.sourceText

export const getSourceTokens = (state) => state.sourceTokens

export const getTargetText = (state) => state.targetText

export const getTargetTokens = (state) => state.targetTokens

export const getAttention = (state) =>  state.attention

export const updateSourceText = (value) => ({
  type: UPDATE_SOURCE_TEXT,
  value
});

export const receiveTranslationResults = (results) => ({
  type: RECEIVE_TRANSLATION_RESULTS,
  results
});

export const translate = () => (dispatch, getState) => fetch(translationUrl, {
  method: 'POST',
  headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
  body: JSON.stringify([{
    src: getSourceText(getState())
  }]),
}).then((response) => response.json()).then((data) => data[0][0]).then((results) => {
  dispatch(receiveTranslationResults(results))
});


