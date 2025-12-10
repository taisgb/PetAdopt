//Passo 1: Pegar todos os pets da página
const pets = document.querySelectorAll('.div-pet');

//Passo 2: Pegamos os elementos do card principal
//Campos onde colocaremos as informações do pet selecionado
const nome = document.getElementById('nome-pet');
const descricao = document.getElementById('descricao-pet');
const imagem = document.getElementById('img-pet');

//Passo 3: Colocar um ouvido para cada pet
//Utilizar o laço de repetição FOR.
for (let i = 0; i < pets.length; i++) {
    //pegamos o indice do pet atual
    const pet =  pets[i];

    //Dentro do laço, pegamos a miniatura do pet atual
    //Dentro do pet, pegamos a imagem
    const miniatura = pet.querySelector('img');

    //Passo 4:Quando clicar na miniatura (imagem)

    miniatura.addEventListener('click', () => {
        nome.textContent = pet.querySelector('.nomePet').textContent;
        descricao.textContent = pet.querySelector('.descricaoPet').textContent;
        imagem.src = pet.querySelector('img').src;
    
    })
}