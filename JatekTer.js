import Kartya from "./Kartya.js";
class JatekTer{
    #kartyaLista =[];
    #kivalasztottKartyaLista = [];
    constructor (kartyaLista){
        this.#kartyaLista = kartyaLista;
        this.#init();
        {

        }
    }
    #init(){
        this.#kivalasztottKartyaLista = [];
        this.#kever();
        const szuloElem = $("article");
        szuloElem.empty();

        for(let index=0; index <this.#kartyaLista.length; index++){
            const kartya = new Kartya(this.#kartyaLista[index], szuloElem);
    }
}
#kever(){
    this.#kartyaLista.sort(function(){
        return 0.5 - Math.random();
    });
}
}
export default JatekTer;