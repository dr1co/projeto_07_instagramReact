export default function Navbar() {
    return (
        <div class="navbar">
            <div class="container">
                <DesktopLogo />
                <MobileLogo />
                <MobileInstagram />
                <SearchBar />
                <DesktopIcons />
                <MobileIcons />
            </div>
        </div>
    )
}

const icons = [
    'paper-plane-outline',
    'compass-outline',
    'heart-outline',
    'person-outline'
];

function DesktopLogo() {
    return (
        <div class="logo">
            <ion-icon name="logo-instagram"></ion-icon>
            <div class="separador"></div>
            <img src="assets/img/logo.png" alt="Logo do Instagram" />
        </div>
    )
}

function MobileLogo() {
    return (
        <div class="logo-mobile">
            <ion-icon name="logo-instagram"></ion-icon>
        </div>
    )
}

function MobileInstagram() {
    return (
        <div class="instagram-mobile">
            <img src="assets/img/logo.png" alt="Logo do Instagram" />
        </div>
    )
}

function SearchBar() {
    return (
        <div class="pesquisa">
            <input type="text" placeholder="Pesquisar" />
        </div>
    )
}

function DesktopIcons() {
    return (
        <div class="icones">
            {icons.map(icon => <ion-icon name={icon}></ion-icon>)}
        </div>
    )
}

function MobileIcons() {
    return (
        <div class="icones-mobile">
            <ion-icon name={icons[0]}></ion-icon>
        </div>
    )
}