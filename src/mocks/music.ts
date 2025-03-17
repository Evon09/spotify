export interface Playlist {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  songs: number;
}

export const playlists = [
  {
    id: 1,
    title: "Discover Weekly",
    description:
      "Your weekly mixtape of fresh music. Enjoy new discoveries and personal favorites",
    imageUrl: "https://picsum.photos/200/300?music",
    songs: 30,
  },
  {
    id: 2,
    title: "Rock Classics",
    description: "The ultimate rock collection from the 70s to 2000s",
    imageUrl: "https://picsum.photos/200/300?guitar",
    songs: 45,
  },
  {
    id: 3,
    title: "Late Night Jazz",
    description: "Smooth jazz for relaxing evenings",
    imageUrl: "https://picsum.photos/200/300?jazz",
    songs: 25,
  },
  {
    id: 4,
    title: "Workout Pump",
    description: "High-energy tracks to boost your training",
    imageUrl: "https://picsum.photos/200/300?gym",
    songs: 50,
  },
  {
    id: 5,
    title: "Electronic Focus",
    description: "Productive beats for coding and studying",
    imageUrl: "https://picsum.photos/200/300?electronics",
    songs: 35,
  },
  {
    id: 6,
    title: "Throwback Hits",
    description: "Relive the best songs of the 90s and 2000s",
    imageUrl: "https://picsum.photos/200/300?retro",
    songs: 40,
  },
  {
    id: 7,
    title: "Acoustic Sessions",
    description: "Unplugged versions of popular tracks",
    imageUrl: "https://picsum.photos/200/300?acoustic",
    songs: 28,
  },
  {
    id: 8,
    title: "Global Beats",
    description: "Discover music from around the world",
    imageUrl: "https://picsum.photos/200/300?world",
    songs: 42,
  },
  {
    id: 9,
    title: "Classical Essentials",
    description: "Timeless masterpieces from great composers",
    imageUrl: "https://picsum.photos/200/300?classical",
    songs: 60,
  },
  {
    id: 10,
    title: "Late Night Drive",
    description: "Atmospheric tracks for nighttime cruising",
    imageUrl: "https://picsum.photos/200/300?car",
    songs: 22,
  },
  {
    id: 11,
    title: "Summer Vibes",
    description: "The soundtrack for your perfect summer",
    imageUrl: "https://picsum.photos/200/300?summer",
    songs: 38,
  },
  {
    id: 12,
    title: "Indie Rising",
    description: "Fresh independent artists breaking through",
    imageUrl: "https://picsum.photos/200/300?indie",
    songs: 33,
  },
];
