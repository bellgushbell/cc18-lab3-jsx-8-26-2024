
function App() {


    return (
        <div className="Main-Wrapper">
            <div className="container">
                <Image />
                <UserEmail />
                <div className="follow-tap">
                    <Post />
                    <Follow />
                    <Follower />
                </div>
            </div>

        </div>



    )
}



function Image() {
    return (
        <div className="imagegirl">
            <img style={{ borderRadius: '50%', marginTop: '20px' }} src="./girlpic.avif" alt="girlpic" />
        </div>

    )
}
function UserEmail() {
    return (
        <div className="useremail">
            <h1>Julienne Moore</h1>
            <h3 style={{ color: "gray" }}>julianne.moore@company.com</h3>
        </div>

    )
}



function Post() {
    return (
        <div className="post">
            <h2>25</h2>
            <h3 style={{ color: "gray" }}>Posts</h3>
        </div>

    )
}
function Follow() {
    return (
        <div className="following">
            <h2>350</h2>
            <h3 style={{ color: "gray" }}>Following</h3>
        </div>
    )

}
function Follower() {
    return (
        <div className="follower">
            <h2>1.5k</h2>
            <h3 style={{ color: "gray" }}>Follower</h3>
        </div>
    )

}








ReactDOM.createRoot(document.querySelector('#root')).render(<App />)