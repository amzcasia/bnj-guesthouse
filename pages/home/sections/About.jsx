export default function About(){
    return(
        <section className="grid w-full text-center pt-52 lg:pt-32 justify-items-center text-primary">
            <h1 className="text-3xl font-bold lg:text-6xl">Your Stay Made Simple</h1>
            <h2 className="pt-5 text-xl lg:text-2xl max-w-[80%]">Cleanliness. Practicality. For the Every-Man.</h2>
            <p className=" max-w-[85%] lg:max-w-[50%] text-lg lg:text-xl font-normal pt-16 lg:pt-20">
                B&J Guesthouse is a 23-room hotel-like guesthouse with 5 room types located in Somerset, a five-minute walk away from Singapore’s famous Orchard Road shopping belt.
            </p>

            <p className="max-w-[85%] lg:max-w-[50%] text-lg lg:text-xl pt-5">
                Experience being an authentic Singaporean, with complimentary breakfast in the form of vouchers to a nearby coffee shop, Killiney Kopitiam, serving crispy bread toast and kopi (brewed coffee) for travellers to enjoy.
            </p>
            <div className="">
                <button className="px-8 py-2 text-2xl lg:text-3xl font-bold rounded-full text-accent bg-primary mt-[50px]">Discover More</button>
                <div className="flex justify-center w-full h-2 mt-3 gap-x-2">
                    <span className="h-[6px] w-[45px] bg-primary rounded-full"></span>
                    <span className="h-[6px] w-[45px] bg-primary rounded-full"></span>
                    <span className="h-[6px] w-[45px] bg-primary rounded-full"></span>
                </div>
            </div>
        </section>
    )
}