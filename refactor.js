const fs = require('fs');

const run = async () => {
    const dirs = fs
        .readdirSync('src')
        .filter(
            (dir) =>
                dir.includes('.') &&
                !dir.startsWith('index.') &&
                !dir.startsWith('types.')
        );

    dirs.forEach((dir) => {
        const index = fs.readFileSync('src/' + dir + '/index.ts', 'utf8');

        const regex = /"?id"?: ["']([a-z.0-9]+)["']/gi;

        const match = regex.exec(index);

        if (match) {
            const name = dir.split('.')[0];
            const pathWidgets = `../gdi-apps/src/${name}/widgets.json`;

            if (fs.existsSync(pathWidgets)) {
                const widgets = JSON.parse(
                    fs.readFileSync(pathWidgets, 'utf8')
                ).map((widget) => {
                    const { id } = widget;
                    const parts = id.split('.');

                    if (id.includes(parts[1])) {
                        console.log(id, parts[1]);
                        widget.widgetId = 'com.usegdi.' + dir;
                    }

                    return widget;
                });

                fs.writeFileSync(pathWidgets, JSON.stringify(widgets, null, 4));
            }
        } else {
            console.log(dir);
        }
    });
};

run();
