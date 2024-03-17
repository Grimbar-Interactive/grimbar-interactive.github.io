import { ProjectType } from 'components';
import { Platform } from './games';

export const apps: ProjectType[] = [{
    title: 'INVI MindHealth',
    client: 'The Acceleration Agency',
    description: 'INVI MindHealth is a mobile app for tracking and guiding your mental health. Our main efforts were in developing the multi-platform app interface using Vue.js and Cordova.',
    mainURL: 'https://www.invimh.com/',
    photoURL: '/images/apps/inviMindHealth.png',
    platforms: [
        { platform: Platform.Android, url: 'https://play.google.com/store/apps/details?id=com.invimh.mobile' },
        { platform: Platform.iOS, url: 'https://apps.apple.com/us/app/invi-mindhealth/id6443509024' },
    ],
},{
    title: 'Stitch Sculptor',
    client: '',
    description: "This app is a tool for crocheters to create, edit, and share patterns with the assistance of immediate visual feedback. Designing or editing a crochet pattern can be a long process, with a lot of guess work and trial and error.  This app provides a visual simulation of the finished product that adjusts in real time as you edit the pattern, allowing the user to see how adjustments will effect the overall project without needing to physically crochet the different options and saving significant time in the pattern design and editing process.  It also includes a variety of other features that will help improve the process for crocheters at every level!",
    mainURL: '',
    photoURL: '/images/apps/stitchSculptorSingle.png',
    platforms: [],
}];