
export default function ParseIndexToClassName(index) {
    if (index.toString().substr(1, 3) === "000") {
        for (const el in selectedElements[0]) {
            if (el.value === index.toString().substr(1, 3)) return classes.selected + " " + index
        }
    }
    else if (index.toString().substr(4, 3) === "000") {

        for (const el of selectedElements[1]) {
            if (el === index.toString().substr(1, 3)) return classes.selected + " " + index
        }
        //조
    }
    else if (index.toString().substr(7, 3) === "000") {
        for (const el in selectedElements[2]) {
            if (el === index.toString().substr(4, 3)) return classes.selected + " " + index
        }
        //항
    }
    else if (index.toString().substr(10, 3) === "000") {
        for (const el in selectedElements[3]) {
            if (el === index.toString().substr(7, 3)) return classes.selected + " " + index
        }
        //호
    }
    else {
        for (const el in selectedElements[4]) {
            if (el === index.toString().substr(10, 3)) return classes.selected + " " + index
        }
        //목
    }
    return index;
}