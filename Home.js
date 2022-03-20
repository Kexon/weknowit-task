import { View } from "react-native-web";

const Home = () => {
    let randomNumber = Math.random() * 20;
    const handleClick = () => {
        randomNumber = Math.randomNumber() * 20;
        console.log('click handled');
    }

    return ( 
        <View style={StyleSheet.container}>
            <Text style={style.status}>
                Testing
                </Text>
            </View>
        /*
        <div className="home">
        <h1>Welcome to my website.</h1>
        <p>Random number: {randomNumber}</p>
        <button onClick={() => handleClick()}>Click me</button>
        </div>
        */
     );
}
 
// We export this this function so we can use it in other files
export default Home;