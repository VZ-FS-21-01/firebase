const About = (props) => {
    const { user } = props
    return (
        <div className="about">
            {user && (<h1>ABOUT LOGGED IN</h1>)}
        </div>

    );
}

export default About;