const dbSchema= {
    tables: [
        {
            name: 'words',
            columns: [
                { name: 'id', type: 'INTEGER PRIMARY KEY AUTOINCREMENT'},
                { name: 'word', type: 'TEXT'},
                { name: 'correct_pronunciation_audio_path', type: 'TEXT'}
            ]

        },
        {
            name: 'user_recordings',
            columns: [
                {name: 'id', type: 'INTEGER PRIMARY KEY AUTOINCREMENT'},
                {name: 'user_id', type: 'INTEGER'},
                {name: 'word_id', type: 'INTEGER', references: 'words(id)'},
                {name: 'recording_audio_path', type: 'TEXT'},
                {name: 'alignment_score', type: 'REAL'}
            ]

        }
    ]
};