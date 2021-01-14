
const ResultInfo = ({result}) => {
    const resultLabel = result === "Win" ? "Congratulations Winner!" : "Oh no! You lost!"
    return (
        <p>{resultLabel}</p>
    )
}

export default ResultInfo;