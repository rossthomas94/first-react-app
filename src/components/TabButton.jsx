export default function TabButton({children, onClicked, selected}) {
    // props.children is the text/html between your tags in app.jsx or wherever this component is called

    // function handleClick(){

    // }; 
    return (
        <li><button className={selected} onClick={onClicked}>{children}</button></li>
    )    
};