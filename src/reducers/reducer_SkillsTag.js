import { UPDATE_TAG } from '../actions';

export default function(state = null, action){

  switch(action.type){
    case UPDATE_TAG:
      return [ action.payload, ...state ];

    default:
      return state;
  }


}
