import React, { useState, useCallback } from "react";
import { TouchableOpacity, Alert, Modal, Text, View, StyleSheet, ScrollView } from "react-native";
import moment from "moment";

import UserCard from "../Network_User/UserCard";
import CGNewTaskCard from "./CGNewTaskCard";


//for FONT USAGE
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

//DATABASE for FIRESTORE
import { loginUser } from "../Login/Login";
import { db } from '../../firebase/firebase';
import { doc, onSnapshot, collection, query, orderBy } from "firebase/firestore";

let lastLength = 0;
let lastPost = { id: "", category: "", datetime: "", location: "", detail: "", counter: 0 };
let curPost = { id: "", category: "", datetime: "", location: "", detail: "", counter: 0 };

const UserCardTask = () => {

    const [modalVisible, setModalVisible] = useState(false);
    const [cardModalVisible, setCardModalVisible] = useState(false);
    const [posts, setPosts] = useState([]);

    //For FONT USAGE
    const [fontsLoaded] = useFonts({
        'Rubik': require('../../assets/fonts/Rubik-Bold.ttf'),
        'Nunito': require('../../assets/fonts/Nunito-Regular.ttf')
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    })

    if (!fontsLoaded) {
        return null;
    }

    if (posts.length == 0) {
        const postsRef = collection(db, `posts`);
        const q = query(postsRef, orderBy("datetime", "desc"));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const tempPosts = [];
            snapshot.forEach((doc) => {
                tempPosts.push({ id: doc.id, ...doc.data() });
            });
            if (tempPosts.length != 0)
                setPosts(tempPosts);
        });
    } else {
        if (lastLength != 0 && posts.length > lastLength) {
            lastPost.id = posts[0].id;
            lastPost.category = posts[0].category;
            lastPost.datetime = moment(posts[0].datetime, 'MMM Do, YYYY hh:mm A');
            lastPost.location = posts[0].location;
            var detail = "";
            posts[0].tasks.map((task) => {
                detail += task + "\n";
            });
            lastPost.detail = detail;
            lastPost.counter = posts[0].counter
            setModalVisible(true);
        }

        lastLength = posts.length;
    }

    const cardClick = (post) => {
        curPost.id = post.id;
        curPost.category = post.category;
        curPost.datetime = moment(post.datetime, 'MMM Do, YYYY hh:mm A');
        curPost.location = post.location;
        var detail = "";
        post.tasks.map((task) => {
            detail += task + "\n";
        });
        console.log(detail);
        curPost.detail = detail;
        curPost.counter = posts.counter
        setCardModalVisible(true);
    }

    return (
        <View onLayout={onLayoutRootView}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("New Task screen has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <CGNewTaskCard
                            id={lastPost.id}
                            taskTitle={lastPost.category}
                            date={moment(lastPost.datetime).format('MMM Do, YYYY')}
                            time={moment(lastPost.datetime).format('hh:mma')}
                            detail={lastPost.detail}
                            location={lastPost.location}
                            counter={lastPost.counter}
                        />
                        <View style={styles.buttonCont}>
                            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={styles.closeButton}>
                                <Text style={styles.closeButtonText}>Back to Alerts</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
            <Modal
                animationType="fade"
                transparent={true}
                visible={cardModalVisible}
                onRequestClose={() => {
                    Alert.alert("New Task screen has been closed.");
                    setCardModalVisible(!cardModalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <CGNewTaskCard
                            id={curPost.id}
                            category={curPost.category}
                            date={moment(curPost.datetime).format('MMM Do, YYYY')}
                            time={moment(curPost.datetime).format('hh:mma')}
                            detail={curPost.detail}
                            location={curPost.location}
                            counter={curPost.counter}
                        />
                        <View style={styles.buttonCont}>
                            <TouchableOpacity onPress={() => setCardModalVisible(!cardModalVisible)} style={styles.closeButton}>
                                <Text style={styles.closeButtonText}>Back to Alerts</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
            {
                posts.map((post) => {
                    return (
                        <TouchableOpacity onPress={() => cardClick(post)}>
                            <UserCard
                                id={post.id}
                                name={post.category}
                                tasks={post.tasks}
                                rel={post.userName}
                                pic={require("../../assets/userPhoto.png")}
                            />
                        </TouchableOpacity>
                    )
                })
            }

        </View>

    )
}

export default UserCardTask;

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        backgroundColor: "rgba(18, 107, 138, 0.4)"
    },
    modalView: {
        height: '100%',
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    buttonCont: {
        display: "flex",
        flexDirection: "row",
    },
    closeButton: {
        backgroundColor: "#CDCECF",
        borderRadius: 15,
        paddingVertical: 10,
        paddingHorizontal: 12,
        margin: 10
    },
    closeButtonText: {
        fontSize: 25,
        fontFamily: 'Nunito'
    },
});