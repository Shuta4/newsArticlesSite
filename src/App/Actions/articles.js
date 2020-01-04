export function articlesFetchDataSuccess(articles) {
    return {
        type: "ARTICLES_FETCH_DATA_SUCCESS",
        articles
    }
}

export function articlesFetchData(url) {
    return (dispatch)=> {
        fetch(url, {
            headers:{
                "accepts":"application/json"
            }
        }).then(response => {
            if(!response.ok) throw new Error(response.statusText);
            return response;
        }).then(response => {
            console.log(response)
            response.json().then(articles => {
                dispatch(articlesFetchDataSuccess(articles))
            })
        })
    }
}