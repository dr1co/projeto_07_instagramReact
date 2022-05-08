import React from 'react';

export default function Posts() {
    return (
        <div class="posts">
            {postsInfos.map(post => 
                <div class="post">
                    <PostTop pfp={post.originalPosterPfp} username={post.originalPosterUserName} />
                    <PostContent image={post.postImage} pfp={post.postLikePfp} username={post.postLikeUserName} counter={post.postLikeCount} />
                </div>
            )}
        </div>
    )
}

const postsInfos = [
    {
        originalPosterPfp: 'assets/img/meowed.svg',
        originalPosterUserName: 'meowed',
        postImage: 'assets/img/gato-telefone.svg',
        postLikePfp: 'assets/img/respondeai.svg',
        postLikeUserName: 'respondeai',
        postLikeCount: '101.523'
    },
    {
        originalPosterPfp: 'assets/img/barked.svg',
        originalPosterUserName: 'barked',
        postImage: 'assets/img/dog.svg',
        postLikePfp: 'assets/img/adorable_animals.svg',
        postLikeUserName: 'adorable_animals',
        postLikeCount: '99.159'
    }
];

const initialLike = 'heart-outline'

function PostTop(props) {
    return (
        <div class="topo">
            <div class="usuario">
                <img src={props.pfp} alt={props.username} />
                {props.username}
            </div>
            <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
        </div>
    )
}

function PostContent(props) {
    const [like, setLike] = React.useState(initialLike);
    function toggleLike() {
        if(like === initialLike){
            setLike('heart');
            document.querySelector(".post .fundo .acoes ion-icon:first-of-type").classList.add("like");
        } else {
            setLike('heart-outline');
            document.querySelector(".post .fundo .acoes ion-icon:first-of-type").classList.remove("like");
        }
    }
    function addLike() {
        setLike('heart');
        document.querySelector(".post .fundo .acoes ion-icon:first-of-type").classList.add("like");
    }
    return (
        <div class="fundo">
            <div class="conteudo">
                <img src={props.image} alt="conteúdo do post" onClick={addLike} />
            </div>

            <div class="acoes">
                <div>
                    <ion-icon name={like} onClick={toggleLike}></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                    <ion-icon name="bookmark-outline"></ion-icon>
                </div>
            </div>
  
            <div class="curtidas">
                <img src={props.pfp} alt={props.username} />
                <div class="texto">
                    Curtido por <strong>{props.username}</strong> e <strong>outras {props.counter} pessoas</strong>
                </div>
            </div>
        </div>
    )
}