class heroi {
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
    }

    Atacar() {

        let attack;

        if (this.type === "Mago") {

            attack = "Magia";
            console.log(`O ${this.type} atacou usando ${attack}.\n`);

        } else if (this.type === "Guerreiro") {

            attack = "Espada";
            console.log(`O ${this.type} atacou usando ${attack}.\n`);

        } else if (this.type === "Monge") {

            attack = "Artes marciais"
            console.log(`O ${this.type} atacou usando ${attack}.\n`);

        } else if (this.type === "Ninja") {

            attack = "Shuriken"
            console.log(`O ${this.type} atacou usando ${attack}.\n`);

        }
    }
}

let hero0 = new heroi("Leoncio", "30", "Mago");
let hero1 = new heroi("Clarice", "30", "Guerreiro");
let hero2 = new heroi("Pedro", "30", "Monge");
let hero3 = new heroi("Gestodonte", "30", "Ninja");

hero0.Atacar()
hero1.Atacar()
hero2.Atacar()
hero3.Atacar()

