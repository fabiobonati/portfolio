import { useState, useEffect } from 'react';
import Image from 'next/image';
import querystring from 'querystring';
const SpotifyStatus = () => {
  const [online, setOnline] = useState(false);
  const [song, setSong] = useState('');
  const [artist, setArtist] = useState([]);
  const [image, setImage] = useState('');
  const client_id = process.env.SPOTIFY_CLIENT_ID;
  const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
  const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

  useEffect(() => {
    const getAccessToken = async () => {
      const response = await fetch(`https://accounts.spotify.com/api/token`, {
        method: 'POST',
        headers: {
          Authorization: `Basic ${Buffer.from(
            `${client_id}:${client_secret}`
          ).toString('base64')}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: querystring.stringify({
          grant_type: 'refresh_token',
          refresh_token,
        }),
      });

      return response.json();
    };
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
        return null;
      }

      const data = await response.json();

      if (data.item === undefined) {
        setOnline(false);
        return null;
      }

      const song = data.item.name;
      const artist = data.item.artists
        .map((_artist) => _artist.name)
        .join(', ');
      const image = data.item.album.images[0].url;

      setOnline(true);
      setSong(song);
      setArtist(artist);
      setImage(image);
    };
    getAccessToken().then((res) => getNowPlaying(res.access_token));
  });
  return (
    <div className='col-span-3 flex items-center justify-center gap-4rounded-lg'>
      {online ? (
        <div className='flex flex-col items-center space-y-4 md:flex-row p-8 md:space-x-4 md:space-y-0'>
          <Image src={image} alt='Album cover' width={75} height={75} />
          <div className='space-y-1'>
            <h1 className='text-xl font-bold text-center text-violet-900 md:text-left'>
              {song}
            </h1>
            <p className='text-violet-700 text-center md:text-left'>{artist}</p>
          </div>
        </div>
      ) : (
        <div className='flex flex-col items-center space-y-4 md:flex-row p-8 md:space-x-4 md:space-y-0'>
          <Image
            src='/memoji.svg'
            alt='My personal memoji'
            width={75}
            height={75}
          />
          <div className='space-y-1'>
            <h1 className='text-xl font-bold text-center text-violet-900 md:text-left'>
              Not listening to anything
            </h1>
            <p className='text-violet-700 text-center md:text-left'>
              Check out my Spotify profile
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
export default SpotifyStatus;
