import joplin from 'api';
import {ToolbarButtonLocation} from "api/types";

joplin.plugins.register({
	onStart: async function() {
		// eslint-disable-next-line no-console
		console.info('Hello revnav!');

        await joplin.commands.register({
            name: 'revealInNavigation',
            label: 'Reveal current note in navgation',
            iconName: 'fas fa-crosshairs',
            execute: async () => {
                const note = await joplin.workspace.selectedNote();
                await joplin.commands.execute("openNote", note.id);
                await joplin.commands.execute('focusElementSideBar')
            },
        })

        await joplin.views.toolbarButtons.create(
            'revnav_reveal_current_note',
            'revealInNavigation',
            ToolbarButtonLocation.NoteToolbar
        )
	},
});
