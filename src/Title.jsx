import TypingEffect from "./components/TypingEffectComponent"

export default function Title() {
    return (
        <section className="w-full h-screen flex p-8">
            <div className="flex flex-col m-auto size-fit items-center justify-center">
                
                <TypingEffect
                tag="h1"
                content={"Ethan<br>Grané"}
                className="text-center text-[clamp(36px,25vw,150px)] mb-0 pd-0"
                />



                <TypingEffect 
                className="text-white text-left w-full text-[clamp(16px,5vw,32px)] font-light"
                tag="p"
                content="Game Developer <br />Portfolio" />
            </div>
        </section>
    );
}
