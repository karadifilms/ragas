from statics import data_from_youtube_video, audio_file_path, data_folder_path
from subprocess import call 

def get_timestamps(text):
    """
        format is {timestamp} {kannada_name} / {english_name}
    """
    text = text.strip().split('\n')
    text = list(map(lambda x: x.strip(), text))

    # english name 
    english_names = list(map(lambda x: x.split('/')[1].strip(), text))

    # timestamp 
    timestamps = list(map(lambda x: x.split(' ')[0].strip(), text))

    # kannada name 
    kannada_names = []
    for i, line in enumerate(text):
        kannada_name = line[len(timestamps[i]) : -len(english_names[i])-len('/ ')].strip()
        kannada_names.append(kannada_name)

    assert len(english_names) == len(kannada_names)
    assert len(english_names) == len(timestamps)
    
    return [(timestamps[i], kannada_names[i], english_names[i]) for i, _ in enumerate(timestamps)]

def get_filename_prefix_from_raga_name(english_name):
    return data_folder_path + english_name.lower().replace(' ', '_')

def create_slice_audio_files(data): 
    commands = [] 
    for i, elem in enumerate(data): 
        if i+1 == len(data): 
            commands.append(
                f"ffmpeg -n -i {audio_file_path} -ss {data[i][0]} -c:a aac {get_filename_prefix_from_raga_name(data[i][2])}.m4a"
            )
        else: 
            commands.append(
                f"ffmpeg -n -i {audio_file_path} -ss {data[i][0]} -to {data[i+1][0]} -c:a aac {get_filename_prefix_from_raga_name(data[i][2])}.m4a"
            )
    
    for command in commands[:20]: print (command)
    
    return commands 

def run_commands(commands):
    for command in commands:
        print (">>>", command)
        call(command, shell=True)

timestamp_data = get_timestamps(data_from_youtube_video)
commands = create_slice_audio_files(timestamp_data)
run_commands(commands)