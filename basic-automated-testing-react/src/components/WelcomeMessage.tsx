type Props = {
    name?: any;
};

const WelcomeMessage = ({ name }: Props) => {
    return(
        <div>
            {
                name ? (
                    <p>Welcome back {name}!</p>
                ) : (
                    <button>Login</button>
                )
            }
        </div>
    )
};

export default WelcomeMessage;
