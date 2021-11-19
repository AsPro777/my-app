const initialState = {
    items: []
}

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_NEWS': 
            return {
                ...state,
                items: [...state.items,action.newElem]
            }
		case 'DEL_NEWS': {
			return {
				...state,
                items: [...state.items.slice(0,action.num),...state.items.slice(action.num+1)]
			}
		
        }
    }
}

export default Reducer;