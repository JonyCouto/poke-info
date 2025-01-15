'use client';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import { Grid2, Icon } from '@mui/material';
import axios from 'axios';
import IPokemon from '@/interfaces/pokemon';
import Pokemon from '@/components/pokemon/pokemon';
import { SearchRounded } from '@mui/icons-material';
import { KeyboardEvent, useEffect, useState } from 'react';

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
			<Grid2 size={{ xs: 12, lg: 4 }} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
				<Card sx={{ maxWidth: 345 }}>
					<CardContent>
						<Typography gutterBottom variant="h5" component="div">
							Bem vindos(as)!
						</Typography>
						<Typography variant="body2" sx={{ color: 'text.secondary', textAlign: 'justify' }}>
							Olá aventureiro(a) DEV, esse é um projeto para testes com a tecnologia React utilizando Next.js, componentizações
							com Matherial UI e requisições http a uma API livre de pokémons.
						</Typography>
					</CardContent>
					<CardActions sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
						<FormControl variant="standard">
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
					</CardActions>
				</Card>
			</Grid2>
			<Grid2 size={{ xs: 12, lg: 4 }} sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
				<Pokemon {...{ pokemon, fade }} />
			</Grid2>
		</Grid2>
	);
}