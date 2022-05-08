export default function MobileFooter() {
    return (
        <div class="fundo-mobile">
            {footerIcons.map(icon => <ion-icon name={icon}></ion-icon>)}
        </div>
    )
}

const footerIcons = [
    'home',
    'search-outline',
    'add-circle-outline',
    'heart-outline',
    'person-outline'
]