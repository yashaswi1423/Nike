const Hero = () => {
    return(
        <main className="hero container">
            <div className="hero-content">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
                <div className="Hero-btn">
                    <button>Shop Now</button>
                    <button className="two">Category</button>

                </div>
                <div className="shop">
                    <p>Also Available On</p>
                    <div className="brand">
                        <img src="/images/amazon.png" alt="amazon"></img>
                        <img src="/images/flipkart.png" alt="flipkart"></img>
                    </div>
                </div>
            </div>
            <div className="hero-image">
                        <img src="/images/shoe_image.png" alt="shoe"></img>

            </div>
        </main>
    )
}
export default Hero;
