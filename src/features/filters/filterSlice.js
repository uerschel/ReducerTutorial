const initialState = {
    status: 'All',
    colors: []
}

export default function filtersReducer(state = initialState, action) {
    switch (action.type) {
        case 'filters/statusFilterChanged': {
            return {
                // Again, one less level of nesting to copy
                ...state,
                status: action.payload
            }
        }
        case 'filters/colorFilterChanged': {
            let {color, changeType} = action.payload
            const {colors} = state
            switch (changeType) {
                case 'added': {
                    if (colors.includes(color)) {
                        return state
                    }
                    return {
                        ...state,
                        colors: state.colors.concat(color),
                    }
                }
                case 'removed': {
                    return {
                        ...state,
                        colors: state.colors.filter(
                            (existingColor) => existingColor !== color
                        )
                    }
                }
                default: {
                    return state
                }
            }
        }
        default:
            return state
    }
}