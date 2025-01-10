const AppArray = ({arr}) => {

    const evenNum = (arr.filter((item) => item%2==0).join(` `))

    return (
        <div>{evenNum}</div>
    )

}

export default AppArray;