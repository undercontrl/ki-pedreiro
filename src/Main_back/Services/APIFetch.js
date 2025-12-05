class APIFetch{
    constructor(){
        this.chave =  "997ADF04E5D6735917E28883A77845C172000DEE8D13A75666662B700215883E"
        this.URLBASE = "http://localhost:9000/backend/api/"
    }
    async fetch(url){
    try{
    let response = await fetch(`http://localhost:9000/backend/api/${url}`, {
    method: "GET",
    headers: {
        "Authorization": `Bearer ${this.chave}`
    }
});
    let data = await response.json();
    return data;
}catch(error){
    console.log(`o Erro foi: ${error}`)
}
}
    }
    export default APIFetch;