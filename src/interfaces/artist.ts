import { SocialInterface } from './social';
import { AlbumInterface } from './album';
import { TrackInterface } from './track';

export interface ArtistInterface{
    artistId: any,
    user_name: string,
    display_name: string,
    first_name: string,
    last_name: string,
    gender: string,
    city: string,
    bio: string,
    datecreated: string,
    profile_img_url: string,
    num_followers: number,
    num_tracks: number,
    num_albums: number,

    artist_networks: SocialInterface,
    artist_albums: AlbumInterface[],
    artist_tracks: TrackInterface[]
}
