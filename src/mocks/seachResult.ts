import { Artist, artists } from "./artistis";
import { Playlist, playlists } from "./music";
import { RecentlyPlayed, recentlyPlayed } from "./recentlyPlayed";

export interface SearchResult {
  id: number;
  title: string;
  description: string;
  type: string;
  image: string;
}

const transformRecentlyPlayed = (
  recentlyPlayed: RecentlyPlayed[]
): SearchResult[] => {
  return recentlyPlayed.map((item) => ({
    id: item.id,
    title: item.title,
    description: `Song by ${item.artist}`,
    type: "song",
    image: item.albumArt,
  }));
};


const transformPlaylists = (playlists: Playlist[]): SearchResult[] => {
  return playlists.map((item) => ({
    id: item.id,
    title: item.title,
    description: "Playlist",
    type: "playlist",
    image: item.imageUrl,
  }));
};

const transformArtists = (playlists: Artist[]): SearchResult[] => {
  return playlists.map((item) => ({
    id: item.id,
    title: item.name,
    description: "Artist",
    type: "artist",
    image: item.image,
  }));
};

export const searchResults = [
  {
    id: 1,
    title: "Bohemian Rhapsody",
    description: "Song by Queen",
    type: "song",
    image: "https://picsum.photos/60/60?random=1",
  },
  {
    id: 2,
    title: "Thriller",
    description: "Album by Michael Jackson",
    type: "album",
    image: "https://picsum.photos/60/60?random=2",
  },
  {
    id: 3,
    title: "Fleetwood Mac",
    description: "Artist",
    type: "artist",
    image: "https://picsum.photos/60/60?random=3",
  },
  {
    id: 4,
    title: "Stairway to Heaven",
    description: "Song by Led Zeppelin",
    type: "song",
    image: "https://picsum.photos/60/60?random=4",
  },
  {
    id: 5,
    title: "The Dark Side of the Moon",
    description: "Album by Pink Floyd",
    type: "album",
    image: "https://picsum.photos/60/60?random=5",
  },
  {
    id: 6,
    title: "Adele",
    description: "Artist",
    type: "artist",
    image: "https://picsum.photos/60/60?random=6",
  },
  {
    id: 7,
    title: "Shape of You",
    description: "Song by Ed Sheeran",
    type: "song",
    image: "https://picsum.photos/60/60?random=7",
  },
  {
    id: 8,
    title: "Lemonade",
    description: "Album by Beyoncé",
    type: "album",
    image: "https://picsum.photos/60/60?random=8",
  },
  {
    id: 9,
    title: "Nirvana",
    description: "Artist",
    type: "artist",
    image: "https://picsum.photos/60/60?random=9",
  },
  {
    id: 10,
    title: "Blinding Lights",
    description: "Song by The Weeknd",
    type: "song",
    image: "https://picsum.photos/60/60?random=10",
  },
  ...transformRecentlyPlayed(recentlyPlayed),
  ...transformPlaylists(playlists),
  ...transformArtists(artists),
];
