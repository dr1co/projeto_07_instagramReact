import Stories from './stories.js';
import Posts from './posts.js';

export default function Content() {
    return (
        <div class="corpo">
            <LeftContent />
            <Sidebar />    
        </div>
    )
}

const userInfos = {
    username: 'catanacomics',
    name: 'Catana',
    image: 'assets/img/catanacomics.svg'
};

const suggestionsInfos = [
    {
        userPfp: 'assets/img/bad.vibes.memes.svg',
        userName: 'bad.vibes.memes',
        reason: 'Segue você',
    },
    {
        userPfp: 'assets/img/chibirdart.svg',
        userName: 'chibirdart',
        reason: 'Segue você',
    },
    {
        userPfp: 'assets/img/razoesparaacreditar.svg',
        userName: 'razoesparaacreditar',
        reason: 'Novo no Instagram',
    },
    {
        userPfp: 'assets/img/adorable_animals.svg',
        userName: 'adorable_animals',
        reason: 'Segue você',
    },
    {
        userPfp: 'assets/img/smallcutecats.svg',
        userName: 'smallcutecats',
        reason: 'Segue você',
    },
];

function LeftContent() {
    return (
        <div class="esquerda">
            <Stories />
            <Posts />
        </div>
    )
}

function Sidebar() {
    return (
        <div class="sidebar">
            <div class="usuario">
                <img src={userInfos.image} alt={userInfos.name} />
            <div class="texto">
                <strong>{userInfos.username}</strong>
                {userInfos.name}
                </div>
            </div>

            <Suggestions />

            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    )
}

function Suggestions() {
    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            {suggestionsInfos.map(suggestion => <Suggestion pfp={suggestion.userPfp} name={suggestion.userName} reason={suggestion.reason} />)}
        </div>
    )
}

function Suggestion(props) {
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={props.pfp} alt={props.name} />
                <div class="texto">
                      <div class="nome">{props.name}</div>
                    <div class="razao">{props.reason}</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    )
}