function youtubeInitialize()
{

    const style = document.head.appendChild( document.createElement( 'style' ) );
    const rootElements = document.getElementsByClassName( 'youtube-thumbnail' );
    var nextRootElementID = 0;

    for( const rootElement of rootElements )
    {
        const rootElementID = `youtube-thumbnail-${ nextRootElementID++ }`;
        rootElement.setAttribute( 'id', rootElementID );
        rootElement.onclick = function()
        {
            const iframe = rootElement.getElementsByTagName( 'iframe' )[ 0 ];
            iframe.contentWindow.postMessage
            (
                JSON.stringify
                (
                    {
                        event: 'command',
                        func: 'playVideo'
                    }
                ),
                '*'
            )
            rootElement.removeAttribute( 'id' );
            rootElement.classList.remove( 'youtube-thumbnail' );
        };

        const thumbnailURL = rootElement.getAttribute( 'data-thumbnail' );
        style.innerHTML = style.innerHTML.concat
        (
            `\n
            #${ rootElementID }::after {
                background-image: url("${ thumbnailURL }");
            }
            `
        );

        const playButton = document.createElement( 'div' );
        playButton.classList.add( 'youtube-thumbnail-button' );
        rootElement.appendChild( playButton );
    }

}
