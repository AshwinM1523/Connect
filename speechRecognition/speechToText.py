import whisper

model = whisper.load_model("base")
result = model.transcribe("testing.mp3")

with open("outputAudio.txt", "a") as audio:
    print(result["text"], file=audio)