import { getFullLaw } from "@/components/getLaw";
function GetLaw(props) {
    const { data } = props;

    return (
        <>
            <h1>HI</h1>
            {data.map(d=> (<h2 key={d.index}>{d.text}</h2>))}
        </>
    )
}
export async function getStaticProps() {
    const data = await getFullLaw(248783);
    return {
        props: {
            data: data
        },
    }
}

export default GetLaw;


