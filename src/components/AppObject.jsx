const AppObject = ({name,username,city}) => {

    return (
        <div>
            <ul>
                <li>Имя: {name}</li>
                <li>Фамилия: {username}</li>
                <li>Город: {city}</li>
            </ul>
        </div>
    )
}

export default AppObject;