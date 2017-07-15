import { translationUrl } from '../../../config';

const UPDATE_SOURCE_TEXT = 'UPDATE_SOURCE_TEXT';
export const RECEIVE_TRANSLATION_RESULTS = 'RECEIVE_TRANSLATION_RESULTS';

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

const getState = ({ translator }) => translator;
export const getSourceText = (state) => getState(state).sourceText

export const getSourceTokens = (state) => getState(state).sourceTokens

export const getTargetText = (state) => getState(state).targetText

export const getTargetTokens = (state) => getState(state).targetTokens

export const getAttention = (state) =>  getState(state).attention

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


