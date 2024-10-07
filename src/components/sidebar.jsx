import logoEmpresa from '../assets/logoSulagro.png'
import iconHome from '../assets/iconCasa.png';
import iconLapis from '../assets/iconLapis.png';
import iconRelatorio from '../assets/iconRelatorio.png';
import iconNuvem from '../assets/iconNuvem.png';
import iconSair from '../assets/iconSair.png';
import iconConfiguracoes from '../assets/iconConfiguracoes.png';

function sidebar() {
    return (
        <div className="sidebar">
            <img className="logo" src={logoEmpresa} alt="imagem com referência a uma planta com horizonte laranja e outros detalhes em verde." />
            <h1 className="SulAgro">Sul Agro</h1>

            <button id="sidebarButton">
                <img id="iconHome" src={iconHome} alt="ícone de casa" />
                <p>Home</p>
            </button>

            <button id="sidebarButton">
                <img id="iconLapis" src={iconLapis} alt="ícone de lápis" />
                <p>Ver contrato</p>
            </button>

            <button id="sidebarButton">
                <img id="iconRelatorio" src={iconRelatorio} alt="ícone de relatório" />
                <p>Relatórios</p>
            </button>
            
            <button id="sidebarButton">
                <img id ="iconNuvem" src={iconNuvem} alt="ícone de nuvem" />
                <p>Registrar</p>
            </button>
        
        
            <button id="sidebarButton">
                <img id="iconConfiguracoes" src={iconConfiguracoes} alt="ícone de configurações" />
                <p>Configurações</p>
            </button>
        
        
            <button id="sidebarButtonClose">
                <img id="iconSair" src={iconSair} alt="ícone de saída" />
                <p>Sair</p>
            </button>
            
        </div>
    );
}

export default sidebar;
