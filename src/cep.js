    cep.onkeyup= ()=>{
        cep.value=cep.value.replace("-","")
    if(cep.value.length ==8){
        fetch(`https://viacep.com.br/ws/${cep.value}/json/`).then(resposta => resposta.json()).then(resposta2=>{
            if(resposta2.erro){
                rua.value=''
                bairro.value=''
                cidade.value=''
                estado.value=''
                return
            }
            rua.value=resposta2.logradouro
            bairro.value=resposta2.bairro
            cidade.value=resposta2.localidade
            estado.value=resposta2.estado
            
        })
    }
}
function clicar(){
    window.alert('Endereço cadastrado com sucesso')
    cep.value=''
    rua.value=''
    bairro.value=''
    cidade.value=''
    estado.value=''
    return
}