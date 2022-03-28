const findPokemon = () => {
    const pokeInput = document.getElementById("pokeName");
    let pokeName = pokeInput.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if(res.status != "200"){
            console.log(res)
            changeImg("../css/img/poke-sad.jpg")
        }
        else{
            console.log(res)
            return res.json();
        }        
    }).then((data) => {
        console.log(data);
        let pokeImg = data.sprites.other.home.front_default;
        let pokeHeight= data.height;
        let pokeWeight = data.weight;
        let pokeExperience = data.base_experience;

        changeImg(pokeImg);
        changeName(pokeName);
        changeHeight(pokeHeight);
        changeWeight(pokeWeight);
        changeExperience(pokeExperience);
        
    })
}

findPokemon();


const changeImg = (url) => {
    const pokeImg= document.getElementById("pokeImg");
    pokeImg.src = url;
}

const changeName = (name) =>{
    const labelName= document.getElementById('name');
    labelName.innerHTML= name;
}

const changeHeight = (height) =>{
    const labelHeight = document.getElementById('height');
    labelHeight.innerHTML=height;
}

const changeWeight = (weight) =>{
    const labelWeight = document.getElementById('weight');
    labelWeight.innerHTML=weight;
}

const changeExperience = (experience) => {
    const labelExperience = document.getElementById('experience');
    labelExperience.innerHTML = experience;
}

const print = () => {
    const pokeName = document.getElementById("pokeName");
    console.log("hola " + pokeName.value);
}

