var config = {
    style: 'mapbox://styles/materialepidemiology/ck67895mv05fr1ilqdjjrdjog',
    accessToken: 'pk.eyJ1IjoibWF0ZXJpYWxlcGlkZW1pb2xvZ3kiLCJhIjoiY2s2Nzd5ZHY2MXNlMTNlbW03d2Y2cTgwbSJ9.G1wCOq_NCYYPX36xn_1rtg',
    showMarkers: false,
    theme: 'dark',
    alignment: 'left',
    title: 'Material Epidemiology',
    subtitle: 'A descriptive and interesting subtitle to draw in the reader',
    byline: '',
    footer: 'Credits: Jeana Ripple (Associate Professor of Architecture, University of Virginia), Andrea Hansen Phillips (Assistant Professor of Landscape Architecture, University of Virginia)',
    chapters: [
        {
            id: 'slug-style-id',
            title: 'Display Title',
            image: './path/to/image/source.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [-74.014, 40.653],
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'other-identifier',
            title: 'Second Title',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-77.020636, 38.886900],
                zoom: 13.5,
                pitch: 60,
                bearing: -43.2
            },
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
