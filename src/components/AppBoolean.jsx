const AppBoolean = ({isMan}) => {
    //console.log(isMan);
    // let res;
    // (isMan == true) ? res =('Это мужчина') : res =('Это женщина');

    return (
        <div>
            {isMan ? 'Это мужчина' : 'Это женщина'}
        </div>
    )

}

export default AppBoolean;