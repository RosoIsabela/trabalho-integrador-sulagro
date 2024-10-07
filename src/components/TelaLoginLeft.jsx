import logoEmpresa from '../assets/logoSulagro.png'
import imgTelaLogin from '../assets/imagemMulherDrone.png'

function TelaLoginLeft() {
    return (
        <div class="left">
            <img class="logo__empresa" src={logoEmpresa} alt="logo da empresa"/>
            <p class="titleEmpresa">
                <span class="cor__1">Sul</span><span class="cor__2">Agro</span>    
            </p>
            <img class="imagem__login" src={imgTelaLogin} alt="mluher com um drone"/>
        </div>
    )
}

export default TelaLoginLeft