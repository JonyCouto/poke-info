export default interface IPokemon {
    name: string;
    id: number;
    sprites: {
        other: {
            showdown: {
                front_default: string;
            }
        }
    }
}