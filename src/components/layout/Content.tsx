interface ContentProps{
    children: React.ReactNode;
}
export default function Content(props: ContentProps){
    return(
        <>
            <div id="content">
                {props.children}
            </div>
        </>
    )
}