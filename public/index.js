function Greetings() {
    return <h1>Hello readers, Thankyou for reading this !</h1>;
}

// Render the component to the DOM
ReactDOM.render(
    <Greetings />,
    document.getElementById("root")
);