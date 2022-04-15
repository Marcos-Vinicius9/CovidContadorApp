import React from "react";
import {View, Text} from 'react-native';
import YoutubeIframe from "react-native-youtube-iframe";

const VideoBox = (props) => {
    return(
        <View >
            <YoutubeIframe 
            play={true}
            videoId={props.id}
            height={300}
            />
        </View>
    );
}
export default VideoBox;