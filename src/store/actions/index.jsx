

const getdata = (data) => {
    return (dispatch) => {
            console.log("chal rha hy", data);
            dispatch = {
                type: "action",
                data: data
            }
        }
}

export {
    getdata
}