export type KitchenVideo = {
  displayName: string;
  youtubeUrl: string;
};

// Add new videos here. Standard YouTube, youtu.be, Shorts, and Live links
// are all supported by the player in app/page.tsx.
export const kitchenVideos: KitchenVideo[] = [
      {
    displayName: 'All Apologies, live at the Dirty Duck',
    youtubeUrl: 'https://youtu.be/t3Jq9Nuhwh8?si=5OfY95SYM6w1lvKQ',
  },
  {
    displayName: 'Cherub Rock, live at the Dirty Duck',
    youtubeUrl: 'https://youtu.be/bBzc9i-CutE?si=EAgNj238s7Sxu_he',
  },

      {
    displayName: 'Wake Up, live at the Dirty Duck',
    youtubeUrl: 'https://youtu.be/i6keDWkE1_w?si=pcsvlKrhVINPdgs5',
  },
];
