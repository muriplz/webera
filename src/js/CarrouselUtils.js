export async function selectRandomFolders() {
    try {
        const response = await fetch('/folders.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const folders = await response.json();

        // Select random folders
        if (folders.length < 3) {
            throw new Error('Not enough folders to choose from');
        }

        const shuffled = folders.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 3);
    } catch (error) {
        console.error('Error fetching folder names:', error);
        return [];
    }
}

export async function fetchItemsFromFolders(folders) {
    try {
        const response = await fetch('/files.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const files = await response.json();

        const items = [];
        for (const folder of folders) {
            if (files[folder]) {
                items.push(...files[folder].map(file => ({
                    name: file.split('.')[0], // Assuming name is derived from file name
                    image: `/GAFAS/${folder}/${file}`
                })));
            }
        }

        return items;
    } catch (error) {
        return [];
    }
}
