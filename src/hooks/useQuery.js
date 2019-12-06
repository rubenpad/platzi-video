import React from 'react';

const FETCH = 'FETCH';
const SUCCESS = 'SUCCESS';
const ERROR = 'ERROR';

function reducer(state, action = {}) {
  switch (action.type) {
    case FETCH:
      return { ...state, loading: true, error: null };
    case SUCCESS:
      return { ...state, data: action.payload, loading: false };
    case ERROR:
      return { ...state, error: action.payload, loading: false };
    default:
      throw new Error('Unexpected action type.');
  }
}

export default function useQuery(query) {
  const [state, dispatch] = React.useReducer(reducer, {
    data: undefined,
    loading: true,
    error: null,
  });

  async function fetchData() {
    dispatch({ type: FETCH });
    try {
      const response = await query();
      const data = await response.json();
      dispatch({ type: SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: ERROR, payload: error });
    }
  }

  React.useEffect(() => {
    fetchData();
  }, []);

  return {
    data: state.data,
    loading: state.loading,
    error: state.error,
  };
}