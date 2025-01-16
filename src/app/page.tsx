'use client';

import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import { Grid2, Icon } from '@mui/material';
import axios from 'axios';
import IPokemon from '@/interfaces/pokemon';
import Pokemon from '@/components/pokemon/pokemon';
import { KeyboardEvent, useEffect, useState } from 'react';
import { SearchRounded } from '@mui/icons-material';

export default function Home() {
	const [pokemon, setPokemon] = useState<IPokemon>(null);
	const [fade, setFade] = useState(false);
	const [searchTerm, setSearchTerm] = useState<string>('');
	useEffect(() => {
		searchPokemon('ditto');
	}, []);
	const searchPokemon = async (id: string) => {
		const response = await axios.get<IPokemon>(`https://pokeapi.co/api/v2/pokemon/${id.replaceAll(' ', '').toLowerCase()}`)
			.then((response) => {
				setPokemon(response.data);
				changePokemon();
			})
			.catch((error) => { });
	};
	const changePokemon = () => {
		setFade(true); // Inicia o fade-out
		setTimeout(() => {
			setFade(false); // Inicia o fade-in
		}, 500); // Tempo para completar o fade-out
	};
	function handleEventKey(e: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>): void {
		if (e.key === 'Enter') {
			searchPokemon(searchTerm);
		} else {
			return
		}
	}
	return (
		<Grid2 container sx={{ justifyContent: "center", alignItems: "center", height: "100%" }}>
			<Grid2 size={{ xs: 12, lg: 4 }} sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", textAlign: "justify" }} className="info">
				<h2>Sobre o projeto</h2>
				<p>
					Este projeto foi desenvolvido com o objetivo de praticar e aprofundar conhecimentos em tecnologias modernas de desenvolvimento front-end.
				</p>
				<h3>Tecnologias utilizadas</h3>
				<ul>
					<li><strong>React</strong>: Para criar interfaces dinâmicas e responsivas;</li>
					<li><strong>Next.js</strong>: Para otimizar o carregamento das páginas e implementar rotas de forma eficiente;</li>
					<li><strong>Axios</strong>: Para realizar requisições HTTP de forma simples e eficaz;</li>
					<li><strong>SASS e CSS</strong>: Para estilização avançada e personalização de componentes;</li>
					<li><strong>JavaScript (JS) e TypeScript (TS)</strong>: Unindo flexibilidade e segurança no desenvolvimento;</li>
					<li><strong>Material UI</strong>: Para a criação de uma interface elegante e consistente com componentes reutilizáveis.</li>
				</ul>
				<p>
					O projeto combina essas tecnologias para entregar uma aplicação moderna, funcional e com foco em boas práticas de desenvolvimento. 😊
				</p>
			</Grid2>
			<Grid2 size={{ xs: 12, lg: 4 }} sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
				<div className="containerSearch">
					<FormControl variant="filled">
						<InputLabel htmlFor="pokemon-search">Nome do pokémon ou ID</InputLabel>
						<Input
							id="pokemon-search"
							value={searchTerm}
							onChange={(e) => {
								setSearchTerm(e.target.value)
							}}
							onKeyDown={(e) => { handleEventKey(e) }}
						/>
					</FormControl>
					<Button size="small" onClick={() => searchPokemon(searchTerm)}>
						<SearchRounded />
					</Button>
				</div>
				<Pokemon {...{ pokemon, fade }} />
			</Grid2>
		</Grid2>
	);
}