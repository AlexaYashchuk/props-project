const AppNumber = (props) => {
    //console.log(props);
    const res = props.age-18;
    return (
        <div> 
            C момента наступления совершеннолетия прошло {res} лет
        </div>   
    )
}

export default AppNumber;