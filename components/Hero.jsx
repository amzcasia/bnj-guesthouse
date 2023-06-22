import heroBackground from '../assets/hero-background-image.png'

export default function Hero(){
    return(
        <section className="relative text-primary h-screen bg-cover bg-center border px-[5%]"
        style={{backgroundImage: `url(${heroBackground})`}}>

            <div className="text-center bg-white px-12 lg:max-w-[550px] py-8 rounded-[13px] mt-[450px] mx-auto">
                <p className="mb-6 text-3xl font-bold lg:text-4xl">Your Stay Made Simple</p>
                <button className="px-6 py-2 text-2xl font-bold rounded-full lg:text-3xl bg-accent"><a href="#">BOOK NOW</a></button>
            </div>
            <div className="bg-[#FDF1D2] lg:flex justify-between mt-6 py-6 px-10 text-base gap-y-3 grid">
                <div className="lg:text-2xl">
                    <p>
                        <span className="font-semibold">Check-in: </span>
                        <span>2PM</span>
                    </p>
                    <p>
                        <span className="font-semibold">Check-out: </span>
                        <span>12NN</span>
                    </p>
                </div>
                <div className="lg:text-center lg:text-2xl">
                    <p>
                        <span className="font-semibold">Email: </span>
                        <span>thebnjguesthouse@gmail.com</span>
                    </p>
                    <p className='grid lg:flex'>
                        <span className="font-semibold">Contact:&nbsp;</span>
                        <span>0956-956-0033 / 0942-976-4512</span>
                    </p>
                    <p className='pt-2'><a href="#"><span className="font-semibold underline">Chat With Us</span></a></p>
                </div>
                <div className="font-semibold lg:text-2xl">
                    <p className="underline"><a href="#">Must Know Details!</a></p>
                    <p className="underline"><a href="#">View FAQ</a></p>
                </div>
            </div>
            
            
        </section>
    )
}