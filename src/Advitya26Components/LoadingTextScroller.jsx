export default function LoadingTextScroller({
    text = "LOADING ADVITYA GAMES...",
}) {
    // Create multiple copies of text to fill the wide card
    const repeatCount = 1;
    const textCopies = Array(repeatCount).fill(text);

    return (
        <div className="h-full flex items-center overflow-visible w-[200vw] min-w-[200vw] md:w-[300vw] md:min-w-[300vw] md:mr-[15vw]">
            <div className="flex items-center whitespace-nowrap gap-16 px-8">
                {textCopies.map((t, index) => (
                    <span
                        key={index}
                        className="inline-block text-[clamp(4rem,12vw,12rem)] font-black uppercase bg-linear-to-r from-[#068da8] via-[#5119b3] to-[#fbbf24] bg-size-[200%_auto] bg-clip-text text-transparent"
                        style={{
                            fontFamily: "Fugaz One, cursive",
                        }}

                    >
                        {t}
                    </span>
                ))}
            </div>
        </div>
    );
}
