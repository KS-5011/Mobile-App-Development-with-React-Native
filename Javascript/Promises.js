const url = ''

fetch(url)
    .then(function(res){
        return res.json()
    })
    .then(function(json){
        return ({
            importantData: json.importantData,
        })
    })
    .then(function(data){
    })
    .catch(function(err){
        // handle error
    })
