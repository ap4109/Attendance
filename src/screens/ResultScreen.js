import React, { useState, useEffect, useRef } from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet, Dimensions, ToastAndroid } from 'react-native';
import { RNCamera } from 'react-native-camera';
const WINDOW_HEIGHT = Dimensions.get("window").height;
const closeButtonSize = Math.floor(WINDOW_HEIGHT * 0.05);
const captureSize = Math.floor(WINDOW_HEIGHT * 0.07);
export default function ResultScreen({ navigation, route }) {
    const [type, setType] = useState(RNCamera.Constants.Type.front);
    const [isPreview, setIsPreview] = useState(false);
    const [img, setIMG] = useState()
    const [gif, setGif] = useState(false)
    const ref = useRef(null)
    const takePhoto = async () => {
        if (ref.current) {
            const options = { quality: 0.5, base64: true, skipProcessing: true };
            const data = await ref.current.takePictureAsync(options);
            const source = data.uri;
            setIMG(source)
            if (source) {
                await ref.current.pausePreview();
                setIsPreview(true);
                console.log(source);
            }
        }
    }
      const showImageFunc = () => {
        setGif(true)
      };
    const cancelPreview = async () => {
        await ref.current.resumePreview();
        setIsPreview(false);
    };
    const renderCaptureControl = () => (
        <View style={styles.control}>
            <TouchableOpacity
                activeOpacity={0.7}
                onPress={takePhoto}
                style={styles.capture}
            />
        </View>
    );
    const renderCancelPreviewButton = () => (
        <View style={styles.control}>
            <TouchableOpacity onPress={cancelPreview}
                style={styles.closeButton}>
                <Image source={require('../image/close.png')}
                    style={{ height: 50, width: 50 }}
                />
            </TouchableOpacity>
        </View>
    );
    const { Id } = route.params;
    const { Name } = route.params;
    const { contractor } = route.params;
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }}>
                <View style={{
                    borderWidth: 1, width: 200,
                    height: 260, borderRadius: 15,
                }} />
                <View style={{
                    width: 200,
                    height: 200, backgroundColor: '#A9A9A9'
                }}>
                    <RNCamera
                        ref={ref}
                        style={styles.CAM}
                        type={type}
                        captureAudio={false}
                        onMountError={(error) => {
                            console.log("cammera error", error);
                        }}
                    />
                </View>
            </View>
            <View style={{ height: 200, width: 425, borderWidth: 1, marginTop: 50, justifyContent: 'space-around' }}>

                <Text style={{ fontSize: 20 }}>Id No. :- {Id} </Text>
                <View style={{  alignItems: 'center',flexDirection:'row' }}>
                <Text style={{ fontSize: 20 }}>Name :- {Name}</Text>
                  
                </View>
                <Text style={{ fontSize: 20 }}>Contractor :- {contractor} </Text>
            </View>

            <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
           
                {isPreview && renderCancelPreviewButton() ?

                    <TouchableOpacity
                        style={{ backgroundColor: 'skyblue', height: '50%', width: '100%', justifyContent: 'center' }}
                        onPress={() => showImageFunc}
                    >
                        <Text style={{ fontSize: 30, color: 'black', alignSelf: 'center' }}>CONFIRM</Text>
                    </TouchableOpacity> : null}
            </View>

            <View style={{
                alignItems: "center",
                justifyContent: 'center',
                alignContent: 'center',
                flex: 1,
            }}>
                <View style={styles.container}>
                    {isPreview && renderCancelPreviewButton()}
                    {!isPreview && renderCaptureControl()}
                    {gif&&<Image style={styles.image}
                        source={require('../image/TICK2.gif')}
                    />}

                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
    },
    capture: {
        backgroundColor: 'black',
        borderRadius: 5,
        height: captureSize,
        width: captureSize,
        borderRadius: Math.floor(captureSize / 2),
    },
    CAM: {
        height: 250,
    },
    control: {
        position: "absolute",
        flexDirection: "row",
        bottom: 38,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    closeButton: {
        position: 'relative',
        height: closeButtonSize,
        width: closeButtonSize,
        borderRadius: Math.floor(closeButtonSize / 2),
        justifyContent: 'space-around',
        alignItems: "center",
        backgroundColor: "#c4c5c4",
    },
    image: {
        height: 100,
        width: 100,
        marginLeft:20

    }

})



