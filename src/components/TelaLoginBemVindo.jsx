function TelaLoginBemVindo() {
    return (
        <div class="bemVindoLogin">
            <p class="titlePrincipal">Bem-Vindo!</p>
            <form class="input__login" action="login">
                <input type="email" id="email" name="email" placeholder="Email" required/>
                <input type="password" id="password" name="password" placeholder="Senha" required/>
                <button class="button__login" type="submit">Login</button>
            </form>
            <a class="esqueceu__senha" href="#">Esqueceu a senha?</a>
        </div>
    )
}

export default TelaLoginBemVindo