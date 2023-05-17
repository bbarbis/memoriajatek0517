class Kartya{
    #fajlnev;
    #divElem;
    #imgElem;
    #allapot;
    #blokkolt;
    constructor(fajlnev, allapot, szuloElem){
        this.#fajlnev  = fajlnev;

        szuloElem.append(`<div class="kartya">
                                <img src ="" alt="kép">
                                </div>`);
        this.#divElem = szuloElem.children("div:last-child");
        this.#imgElem = this.#divElem.children("img");

        /**Állapot */
        this.#allapot = false;
        {
            this.#setLap();
        }
    }
    #setLap(){
        if(this.#allapot){
            this.#imgElem.attr("src", this.#fajlnev);
        }else{
            this.#imgElem.attr("src", "kepek/hatter.jpg");
        }
    }
}
export default Kartya;