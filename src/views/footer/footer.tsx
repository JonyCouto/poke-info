import Link from "next/link";
import { Grid2, SvgIcon } from "@mui/material";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import './footer.scss';

export default function Footer(){
    return (
        <footer className="footer">
            <Grid2
                container
                spacing={2}
                sx={{
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Grid2 size={{ xs: 12, lg: 3 }}>
                    <span>Desenvolvido por Jonathan Couto</span>
                </Grid2>
                <Grid2 size={{ xs: 12, lg: 3 }}>
                    <Link href="https://github.com/JonyCouto" target="_blank" rel="noopener">
                    GitHub
                    <SvgIcon component={ArrowRightAltIcon} />
                    </Link>
                </Grid2>
                <Grid2 size={{ xs: 12, lg: 3 }}>
                    <Link href="https://www.linkedin.com/in/jonathan-vinicius-couto-a4900119b/" target="_blank" rel="noopener">
                    LinkedIn
                    <SvgIcon component={ArrowRightAltIcon} />
                    </Link>
                </Grid2>
                <Grid2 size={{ xs: 12, lg: 3 }}>
                    <span>Contato Comercial: jonathancouto3030@hotmail.com</span>
                </Grid2>
            </Grid2>
        </footer>
    )
}