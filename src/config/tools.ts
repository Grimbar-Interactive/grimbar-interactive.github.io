import { ProjectType } from 'components';

export const tools: ProjectType[] = [{
    title: 'Unity Toolkit Packages',
    client: '',
    description: 'A variety of MIT-licensed packages to ease the development of Unity projects. These packages are fairly opinionated, with a strong focus on editor-friendly dependency management and easy UI development founded on a scriptable object-based architecture.',
    mainURL: 'https://www.github.com/Grimbar-Interactive/unity-variables',
    photoURL: '/images/tools/unity-toolkit.png',
    platforms: [],
},{
    title: 'Game Developers Conference Scheduling Chrome Extension',
    client: '',
    description: "A chrome extension created to assist GDC attendees with their conference scheduling.  This extension connects to the Google calendar of your choice and provides buttons on the GDC session viewer site to add sessions of interest to your calendar with a single click.",
    mainURL: 'https://chromewebstore.google.com/detail/gdc-calendar-tool/pcegnhfgcahkoihgmecbplanamokaede?pli=1',
    photoURL: '/images/tools/gdcCalendarTool.png',
    platforms: [],
},{
    title: 'Grant Proposal Budgeting Tool',
    client: 'University at Albany',
    description: 'We are currently in the process of designing and building a budgeting tool in Excel for University at Albany.  This tool will assist faculty members when creating their budgets for agency grant proposals.',
    mainURL: '',
    photoURL: '/images/tools/albanyBudgetTool.png',
    platforms: [],
}];