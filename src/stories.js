export default function Stories() {
    return (
        <div class="stories">
            {storiesInfos.map(story => <Story pfp={story.userPfp} username={story.userName} />)}
            <div class="setinha">
              <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}

const storiesInfos = [
    {
        userPfp: 'assets/img/9gag.svg',
        userName: '9gag'
    },
    {
        userPfp: 'assets/img/meowed.svg',
        userName: 'meowed'
    },
    {
        userPfp: 'assets/img/barked.svg',
        userName: 'barked'
    },
    {
        userPfp: 'assets/img/nathanwpylestrangeplanet.svg',
        userName: 'nathanwpylestrangeplanet'
    },
    {
        userPfp: 'assets/img/wawawicomics.svg',
        userName: 'wawawicomics'
    },
    {
        userPfp: 'assets/img/respondeai.svg',
        userName: 'respondeai'
    },
    {
        userPfp: 'assets/img/filomoderna.svg',
        userName: 'filomoderna'
    },
    {
        userPfp: 'assets/img/memeriagourmet.svg',
        userName: 'memeriagourmet'
    }
];

function Story(props) {
    return (
        <div class="story">
            <div class="imagem">
                <img src={props.pfp} alt={props.username} />
            </div>
            <div class="usuario">
                {props.username}
            </div>
        </div>
    )
}