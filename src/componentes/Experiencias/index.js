import './Experiencias.css'

export const Experiencias = () => {
    return (
        <div>
            <nav className='experiencia_box'>
                <h3>Um pouco sobre mim:</h3>

                <p className='sobre_mim'>
                    Atuei na função de auxiliar administrativo de 2018 a 2019.
                    <br />
                    Na última empresa que trabalhei atuei 10 meses na função de repositor até ser
                    provido a auxiliar administrativo atuando no cargo por 3 meses
                    até me afastar da empresa por motivos pessoais.
                    <br /><br />
                    Atualmente estou estudando programação.
                </p>
            </nav>

            <nav className='experiencias_profissionais'>
                <p>
                    Cargo: <br /> Auxiliar Administrativo
                </p>
                <p>
                    Empresa: <br /> Associação Comercial e Empresarial de Rio Bonito do Iguaçu
                </p>
                <p>
                    Período: <br /> Maio de 2018 - Fevereiro de 2019
                </p>

            </nav>
            
            <nav className='experiencias_profissionais'>
                <p>
                    Cargo: <br /> Repositor e Auxiliar Administrativo
                </p>
                <p>
                    Empresa: <br /> R. V. Voznei & CIA LTDA /
                    Michellen Viau Voznei & CIA LTDA
                </p>
                <p>
                    Período: <br/> Fevereiro de 2022 - Março de 2023
                </p>
            </nav>
        </div>
    )
}