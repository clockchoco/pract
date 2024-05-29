export default function ParseIndexToClassName(index) {
    if (index.toString().substr(1, 3) === "000") {
        return "법"
    }
    else if (index.toString().substr(4, 3) === "000") {
        return "조"
    }
    else if (index.toString().substr(7, 3) === "000") {
        return "항"
    }
    else if (index.toString().substr(10, 3) === "000") {
        return "호"
    }
    else {
        return "목"
    }
}