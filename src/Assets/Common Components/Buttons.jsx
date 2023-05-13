const Buttons = ({btnName,btnstyle,click,val}) => {
    return(
        <>
        <button type="button" onClick={click} value={val} className={`${btnstyle}`}>{btnName}</button>
        </>
    )
}
export default Buttons;