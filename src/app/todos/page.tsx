'use client';

import { Grid2 } from "@mui/material";
import {Pagination} from "@mui/material";
import IPokemon from "@/interfaces/pokemon";
import Pokemon from "@/components/pokemon/pokemon";
import { useState, useEffect } from "react";
import axios from "axios";
import './todos.scss';

export default function Home() {
	const [pokemons, setPokemons] = useState<IPokemon[]>([]);
	const [loading, setLoading] = useState(false);
	const [fade, setFade] = useState(false);
	const [page, setPage] = useState(1);
	const getPokemons = async (p: number) => {
		setFade(true);
		setLoading(true);
		const result: IPokemon[] = [];
		let i = p * 10 - 10; // 90
		const offset = p * 10; // 100
		setPage(p); // 10
		while (i < offset){ // 10 <= 20
			i++;
			await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`)
			.then((res) => result.push(res.data))
			.catch((error) => { });
		}
		setPokemons(result);
		setLoading(false);
		setTimeout(() => {
			setFade(false)
		}, 500);
	}
	const changePagination = (e: React.ChangeEvent<unknown>, p: number) => {
		getPokemons(p);
	}
	useEffect(() => {
		getPokemons(page);
	}, []);
	return (
		loading ?
		<Grid2 container spacing={2} sx={{ justifyContent: "center", alignItems: "flex-start", height: "100%" }} className="loading">
			<Grid2 size={12} sx={{display: "flex", justifyContent: "center", alignItems: "center", height: "100%"}}>
				<p>Carregando ...</p>
			</Grid2>
		</Grid2>
		:
		<Grid2 container spacing={2} sx={{ justifyContent: "center", alignItems: "flex-start", height: "100%" }}>
			<Grid2 size={12} sx={{display: "flex", justifyContent: "end"}}>
				<Pagination count={99} color="primary" page={page} onChange={changePagination} className="page" sx={{"& .MuiPaginationItem-root": {
      				color: "white", // Cor do texto
   				}}} />
			</Grid2>
			{
				pokemons.map((pokemon, index) => {
					return (
						<Grid2 key={index} size={{xs: 12, sm: 6, md: 4, lg: 3}}>
							<Pokemon  {...{pokemon, fade}} />
						</Grid2>
					)
				})
			}
			<Grid2 size={12} sx={{display: "flex", justifyContent: "end"}}>
				<Pagination count={99} color="primary" page={page} onChange={changePagination} className="page" sx={{"& .MuiPaginationItem-root": {
      				color: "white", // Cor do texto
   				}}} />
			</Grid2>
		</Grid2>
	);
}