import { ArtistInterface } from './artist';

export interface TrackInterface{
  track_id : any,
  track_title : string,
  release_date : string,
  description : string,
  num_plays : number,
  num_likes : number,
  num_comments : number,
  num_downloads : number,
  artwork_url : string,
  artist_name : string,
  audio_url : string,
  artist : ArtistInterface
}
