const AppBoolean = ({isMan}) => {
    //console.log(isMan);
    let res;
    (isMan == true) ? res =('Это мужчина') : res =('Это женщина');

    return (
        <div>{res}</div>
    )

}

export default AppBoolean;