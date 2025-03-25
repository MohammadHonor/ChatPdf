import React, { useEffect, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { TiMicrophone } from "react-icons/ti";
import { FaMicrophoneSlash } from "react-icons/fa";
const Dictaphone = () => {
  const [recordAudio, setRecordAudio] = useState(false);
  const { transcript, listening, browserSupportsSpeechRecognition } =
    useSpeechRecognition();
  console.log(transcript);

  useEffect(() => {
    if (recordAudio && listening) {
      SpeechRecognition.startListening({ continuous: true });
    }
    console.log("restarting");
  }, [recordAudio, listening]);

  if (!browserSupportsSpeechRecognition) {
    return <p>⚠️ Your browser does not support speech recognition.</p>;
  }

  const audioController = async () => {
    if (!recordAudio) {
      console.log("listening...");
      SpeechRecognition.startListening({ continous: true });
    } else {
      console.log("stop listening...");
      SpeechRecognition.stopListening();
    }
    setRecordAudio(!recordAudio);
  };
  return (
    <div
      className="flex justify-items:center flex-col items-center w-[10rem] absolute left-[40rem] bottom-[.4rem] cursor-pointer"
      onClick={audioController}
    >
      {recordAudio ? (
        <TiMicrophone className="relative text-8xl" />
      ) : (
        <FaMicrophoneSlash className="relative text-8xl" />
      )}
      <p className="text-green-400">
        {!recordAudio ? "start recording" : "stop recording"}
      </p>
    </div>
  );
};
export default Dictaphone;
