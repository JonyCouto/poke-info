import IPokemon from "@/interfaces/pokemon"
import './pokemon.scss'

export default function Pokemon(props: {pokemon: IPokemon, fade: boolean}) {
    return (
        <div className="containerPokemon" 
			style={{
				transition: 'opacity 0.5s',
				opacity: props.fade ? 0 : 1}}>
			<p><span>ID:</span> {props.pokemon ? props.pokemon.id : ""}</p>
			<p><span>Nome:</span> {props.pokemon ? props.pokemon.name?.charAt(0).toUpperCase() + props.pokemon.name?.slice(1) : 'Não encontrado'}</p>
			<img src={props.pokemon ? props.pokemon.sprites?.other.showdown.front_default : undefined} alt={props.pokemon ? props.pokemon.name : ''} className='imgPokemon'/>
		</div>
    )
}