import { useState, useEffect } from 'react';
import Image from 'next/image';
import querystring from 'querystring';
import { SiSpotify } from 'react-icons/si';
import Link from 'next/link';

const SpotifyStatus = () => {
  const [online, setOnline] = useState(false);
  const [song, setSong] = useState('');
  const [artist, setArtist] = useState([]);
  const [image, setImage] = useState('');
  const [linkToSong, setLinkToSong] = useState('');
  const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

  useEffect(() => {
    //get access token
    const getAccessToken = async () => {
      const response = await fetch(`https://accounts.spotify.com/api/token`, {
        method: 'POST',
        headers: {
          Authorization: `Basic ${Buffer.from(
            `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
          ).toString('base64')}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: querystring.stringify({
          grant_type: 'refresh_token',
          refresh_token,
        }),
      });
      if (response.status === 401) {
        return;
      }
      return response.json();
    };

    //get last played song
    const getLastPlayed = async (accessToken) => {
      const response = await fetch(
        `https://api.spotify.com/v1/me/player/recently-played`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      if (response.status === 204) {
        return;
      }
      const data = await response.json();
      const artist = data.items[0].track.artists
        .map((_artist) => _artist.name)
        .join(', ');
      setSong(data.items[0].track.name);
      setArtist(artist);
      setImage(data.items[0].track.album.images[0].url);
      setLinkToSong(data.items[0].track.external_urls.spotify);
    };

    //get current playing song
    const getNowPlaying = async (accessToken) => {
      const response = await fetch(
        `https://api.spotify.com/v1/me/player/currently-playing`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      if (response.status === 204) {
        setOnline(false);
        getLastPlayed(accessToken);
        return;
      }
      const data = await response.json();
      if (data === undefined || data.item === null) {
        setOnline(false);
        getLastPlayed(accessToken);
        return;
      }
      console.log(data);
      setOnline(true);
      const artist = data.item.artists
        .map((_artist) => _artist.name)
        .join(', ');

      setSong(data.item.name);
      setArtist(artist);
      setImage(data.item.album.images[0].url);
      setLinkToSong(data.item.external_urls.spotify);
    };

    getAccessToken().then((res) => getNowPlaying(res.access_token));
  });

  return (
    <Link
      href={linkToSong}
      className='flex rounded-lg p-6 group h-full overflow-hidden transform-gpu transition-all duration-500 hover:scale-95'
    >
      <Image
        src={image}
        alt='Album cover'
        className='absolute inset-0 -z-10 h-full w-full bg-black object-cover object-center brightness-50 transition-all duration-500 group-hover:scale-[1.15] group-hover:brightness-[0.4]'
        layout='fill'
      />
      <div className='flex flex-col justify-between'>
        <SiSpotify
          className={`text-2xl  top-0 left-0 ${
            online ? 'text-[#1DB954] animate-pulse' : 'text-white opacity-50'
          }`}
        />
        {online ? (
          <span className='bottom-0 left-0'>
            <h1 className='text-white text-lg font-bold'>{song}</h1>
            <p className='text-white hidden md:block'>{artist}</p>
          </span>
        ) : (
          <span className='bottom-0 left-0'>
            <p className='text-white'>Last played:</p>
            <h1 className='text-white text-lg font-bold'>{song}</h1>
            <p className='text-white hidden md:block'>{artist}</p>
          </span>
        )}
      </div>
    </Link>
  );
};
export default SpotifyStatus;
