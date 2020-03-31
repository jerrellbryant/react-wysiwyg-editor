import {createStore} from "redux"


export function underline() {
    return {
        type: "UNDERLINE"
    }
}

export function italic() {
    return {
        type: "ITALIC"
    }
}


export function bold() {
    return {
        type: "BOLD"
    }
}

export function createLink() {
    return {
        type: "CREATE_LINK"
    }
}

export function cut() {
    return {
        type: "CUT"
    }
}

export function undo() {
    return {
        type: "UNDO"
    }
}

export function redo() {
    return {
        type: "REDO"
    }
}

export function strike() {
    return {
        type: "STRIKE"
    }
}

export function trash() {
    return {
        type: "TRASH"
    }
}

export function selectAll() {
    return {
        type: "SELECT_ALL"
    }
}

export function changeColor() {
    return {
        type: "CHANGE_COLOR"
    }
}

export function copy() {
    return {
        type: "COPY"
    }
}

export function center() {
    return {
        type: "CENTER"
    }
}

export function left() {
    return {
        type: "LEFT"
    }
}

export function right() {
    return {
        type: "RIGHT"
    }
}


const INITIAL_STATE = {
    default: document.execCommand("normal", false, ""),
    editor: "editor"
};

function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "UNDERLINE":
            const underline = document.execCommand("underline", false, "");
                return {...state, underline};
        case "ITALIC":
            const italic =  document.execCommand("italic", false, "");
                return { ...state, italic};
        case "BOLD":
            const bold = document.execCommand("bold", false, "");
                return { ...state, bold };
        case "CREATE_LINK":
            const paramLink = prompt("Enter your URL");
            const createLink = document.execCommand("createLink", false, paramLink);
                return { ...state, createLink };
        case "CUT":
            const cut = document.execCommand("cut", false, "");
                return { ...state, cut};
        case "UNDO":
            const undo = document.execCommand("undo", false, "");
                return { ...state, undo};
        case "REDO":
            const redo = document.execCommand("redo", false, "");
                return { ...state, redo};
        case "STRIKE":
            const strike = document.execCommand("strikeThrough", false, "");
                return { ...state, strike};
        case "TRASH":
            const trash = document.execCommand("delete", false, "");
                return { ...state, trash};
        case "SELECT_ALL":
            const selectAll = document.execCommand("selectAll", false, "");
                return { ...state, selectAll};
        case "CHANGE_COLOR":
            const newColor = prompt("Enter your hex color e.g. #f1f233");
            const changeColor = document.execCommand("foreColor", false, newColor);
                return { ...state, changeColor};
        case "COPY":
            const copy = document.execCommand("copy", false, "");
                return { ...state, copy};
        case "CENTER":
            const center = document.execCommand("justifyCenter", false, "");
                return { ...state, center};
        case "LEFT":
            const left = document.execCommand("justifyLeft", false, "");
                return { ...state, left};
        case "RIGHT":
            const right = document.execCommand("justifyRight", false, "");
                return { ...state, right};
        default:
                return state
    }
}

const store = createStore(reducer);
store.subscribe(()=> store.getState());
export default store