export const counterUp = (num) => {
    return {
    type: "UP",
    payload: num
    }
}

export const counterDown = (num) => {
    return {
    type: "DOWN",
    payload: num
    }
}

export const counterMul = () => {
    return {
    type: "MULTIPLY",
    }
}

export const counterDiv = () => {
    return {
    type: "DIVIDE",
    }
}