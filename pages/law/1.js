import { getFullLaw } from "@/components/getLaw";
import ParseIndexToClassName from "@/components/parseIndexToClassName";
import { useEffect, useState } from "react";
import classes from "./1.module.css"
function GetLaw(props) {
    const [buttonState, setButtonState] = useState(false);
    const [className, setClassName ] = useState();
    const { data } = props;
    
    const selectedElements = [
        [], ["002", "003"], [], [], []
    ]
    selectedElements = fetch('/api/user-selected-elements', {
        body:{}
    });
    function handleClick() {
        setButtonState(!buttonState);
    }
    function handler(index) {
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

    function handleSelect(event) {
        if (buttonState) {
            if (!event.target.classList.contains(classes.selected)) {
                fetch('/api/user-selected-elements', {
                    method: 'POST',
                    body: JSON.stringify({
                        user: "beanbird",
                        index: event.target.getAttribute('index')
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then((res) => res.json())
                    .then((data) => console.log(data));
            }
            else {
                fetch('/api/user-selected-elements', {
                    method: 'DELETE',
                    body: JSON.stringify({
                        user: "beanbird",
                        index: event.target.getAttribute('index')
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then((res) => res.json())
                    .then((data) => console.log(data));
            }
            event.target.classList.toggle(classes.selected);
            
        }
        else {

        }
    }
    return (
        <>
            <button type="button" className={classes.button} onClick={handleClick} />
            <h1 className={buttonState ? classes.test1 : classes.test2}>제목 테스트</h1>
            {data.map(d => (
                <h2
                    onClick={handleSelect}
                    index={d.index}
                    key={d.index}
                    className={`${handler(d.index)} ${buttonState ? classes.active : ""}`}>{d.text}
                </h2>))
            }
        </>
    )
}
export async function getStaticProps() {
    const data = await getFullLaw(248613);
    return {
        props: {
            data: data,
        },
    }
}

export default GetLaw;


