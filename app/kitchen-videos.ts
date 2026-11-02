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
  {
    displayName: 'Hungry Like The Wolf, live at the Dirty Duck for our Halloween set',
    youtubeUrl: 'https://youtu.be/T7e1B3VvTRQ?si=1tKAnhTRfRQKRD3M',
  },
  {
    displayName: 'Eat My Brain, live at the Dirty Duck for our Halloween set',
    youtubeUrl: 'https://youtu.be/_w479qI9Hd4?si=UAJzXTkobOKpMiRc',
  },
    {
    displayName: 'Stuck in the Middle With You, live at the Dirty Duck for our Halloween set',
    youtubeUrl: 'https://youtu.be/65a_d000jDI?si=KdcxR-gvTUJJK4--',
  },
];
