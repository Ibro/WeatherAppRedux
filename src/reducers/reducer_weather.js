import FETCH_WEATHER from '../actions/index';

export default function (state = [], action) {
    console.log('Action received:', action);

    switch (action.type) {
        case FETCH_WEATHER:
            // returning array because we will have multiple cities
            // concat current state with action.payload.data
            return [action.payload.data, ...state];

    }

    return state;
}