import "./text.css";

const Text  = () => {
    return(
        <div className="main">

        <div className="foot">
            <div className="Explore">
                <ul>
                    <p>
                    
                    Explore
                    </p>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Questions</a></li>
                    <li><a href="#">Articles</a></li>
                    <li><a href="#">Tutorials</a></li>
                </ul>
            </div>
            <div className="Explore support">
                <ul>
                    <p>
                    Support
                    </p>
                    <li><a href="#">Faq's</a></li>
                    <li><a href="#">Help</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div className="Explore support1">
                <ul>
                    <p>
                    Stay Connected
                    </p>
                    <div className="pics">
                    <li> <img src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-instagram-icon-png-image_6315974.png"/></li>
                    <li><img src="data:image/jpeg;base64,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"/></li>
                    <li><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/512px-Logo_of_Twitter.svg.png?20220821125553"/></li>
                    </div>
                </ul>
            </div>
        </div>

        <div className="dev">
            <p>DEV@Deakin 2023</p>
            <div className="dev2">
                <p>Privacy Policy</p>
                <p>Terms</p>
                <p>Code Of Conduct</p>
            </div>
        </div>
        </div>
    );
};

export default Text;