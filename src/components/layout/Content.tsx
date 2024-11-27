interface ContentProps{
    children: React.ReactNode;
}
export default function Content(props: ContentProps){
    return(
        <>
            <div style={{ width: "70%", marginLeft: "18%"}}>
                {props.children}
            </div>
        </>
    )
}