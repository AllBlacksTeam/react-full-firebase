export default function(state = null, action) {

    switch(action.type) {
        case 'CAR_SELECTED':
          return action.payload;
    }

    return state;
}
