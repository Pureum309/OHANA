import React from "react";
import {
    Text,
    View,
    SafeAreaView,
    FlatList,
    Image,
    StyleSheet,
    Dimensions
} from "react-native";

import TutorialScreen from "../screen/TutorialScreen";


const { width, height } = Dimensions.get('window');

const activeTutorial = [
    {
        id: '1',
        image: require('../assets/tutorial1.png'),
        title: 'Build a Community',
        subtitle: 'Add friends, family, and neighbours to your network with ease by sending them a link.',
    },
    {
        id: '2',
        image: require('../assets/tutorial2.png'),
        title: 'Plan Your Daily Tasks and Errands',
        subtitle: 'Add tasks and errands to your calendar by posting them to your profile.',
    },
    {
        id: '3',
        image: require('../assets/tutorial3.png'),
        title: 'Get Help With Your Tasks',
        subtitle: 'Your network can accept your tasks and help you get the difficult ones done easier.',
    },
];

const TutorialSlide = ({ item }) => {
    return (
        <View style={{ alignItems: 'center' }}>
            <Image
                source={require('../assets/logo2.png')}
                style={{
                    height: '25%',
                    width,
                    resizeMode: 'contain'
                }}
            />
            <Image
                source={item.image}
                style={{
                    height: '75%',
                    width,
                    resizeMode: 'contain'
                }}
            />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subtitle}>{item.subtitle}</Text>
        </View>
    );
};

const TutorialComp = ({ navigation }) => {
    const [currentTutorialIndex, setCurrentTutorial] = React.useState(0);

    const Footer = () => {
        return <View
            style={{
                height: height * 0.15,
                justifyContent: 'space-between',
                paddingHorizontal: 20,
                alignItems: 'center'
            }}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 20
            }}>
                {activeTutorial.map((_, index) => (
                    <View
                        key={index}
                        style={[styles.indicator,
                        currentTutorialIndex == index && {
                            width: 25
                        }]} />
                ))}

            </View>
            <Text style={styles.subtitle}>Tap on the numbers to see more</Text>
        </View>
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FlatList
                pagingEnabled
                data={activeTutorial}
                contentContainerStyle={{ height: height * 0.50 }}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => <TutorialSlide item={item} />}
            />
            <Footer />
        </SafeAreaView>
    );
};

// ******** Test Styling, can be changed later! **********
const styles = StyleSheet.create({
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 20,
    },
    subtitle: {
        fontSize: 16,
        marginTop: 10,
        maxWidth: '70%',
        textAlign: 'center',
        lineHeight: 23,
    },
    indicator: {
        height: 2.5,
        width: 10,
        backgroundColor: 'grey',
        marginHorizontal: 3,
        borderRadius: 2,
    },
});

export default TutorialComp;