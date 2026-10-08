'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import {
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  Link,
  Stack,
  Typography,
} from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import MusicNoteRoundedIcon from '@mui/icons-material/MusicNoteRounded';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import PauseRoundedIcon from '@mui/icons-material/PauseRounded';
import { slideshowImages } from './slideshow-images.generated';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

const navItems = [
  { label: 'Music', href: '#music' },
  { label: 'About', href: '#about' },
  { label: 'Shows', href: '#shows' },
  { label: 'Contact', href: '#contact' },
];

type Show = {
  date: string;
  venue: string;
  address: string;
  city: string;
};

// Add shows here. Leave the array empty to display the current "quiet—for now" message.
const shows: Show[] = [
  // {
  //   date: 'Sept 4th 2026',
  //   venue: "Pat's Patio",
  //   address: '2345 Whatever St, Calgary',
  //   city: 'Calgary',
  // },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);
  const [slideshowPlaying, setSlideshowPlaying] = useState(true);

  useEffect(() => {
    if (!slideshowPlaying) return;

    const timer = window.setInterval(() => {
      setSlideIndex((current) => (current + 1) % slideshowImages.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [slideshowPlaying]);

  const showPreviousSlide = () => {
    setSlideIndex((current) => (current - 1 + slideshowImages.length) % slideshowImages.length);
  };

  const showNextSlide = () => {
    setSlideIndex((current) => (current + 1) % slideshowImages.length);
  };

  return (
    <Box component="main" className="site-shell">
      <Box component="header" className="topbar">
        <Container maxWidth="xl" className="nav-wrap">
          <Link href="#top" className="wordmark" underline="none" aria-label="Night Soup home">
            NIGHT SOUP
          </Link>
          <Stack component="nav" direction="row" spacing={4} className="desktop-nav" aria-label="Main navigation">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href} className="nav-link" underline="none">
                {item.label}
              </Link>
            ))}
          </Stack>
          <IconButton
            className="menu-button"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
          >
            <MenuRoundedIcon />
          </IconButton>
        </Container>
      </Box>

      <Drawer anchor="right" open={menuOpen} onClose={() => setMenuOpen(false)}>
        <Box className="mobile-menu" role="presentation">
          <IconButton aria-label="Close menu" onClick={() => setMenuOpen(false)} className="menu-close">
            <CloseRoundedIcon />
          </IconButton>
          {navItems.map((item, index) => (
            <Link key={item.label} href={item.href} onClick={() => setMenuOpen(false)} underline="none">
              <span>0{index + 1}</span>{item.label}
            </Link>
          ))}
        </Box>
      </Drawer>

      <Box component="section" id="top" className="hero">
        <div className="hero-glow" />
        <Container maxWidth="xl" className="hero-grid">
          <Box className="hero-copy">
            <Typography className="eyebrow">90s Alternative and beyond</Typography>
            <Typography component="h1" className="hero-title" sx={{fontSize: "5rem !important"}}>
              Because soup of the day implies a darker, sexier, possibly saltier, <br />
              <em>Soup of the Night!</em>
            </Typography>
            <Typography className="hero-deck">
              Night Soup makes music for the hour when the streetlights hum and everything gets a little less ordinary.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} className="hero-actions">
              <Button variant="contained" href="#music" startIcon={<PlayArrowRoundedIcon />}>
                Hear the music
              </Button>
              <Button variant="outlined" href="#shows">Live dates</Button>
            </Stack>
          </Box>
          <Box className="logo-stage">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <Image
              src={`${basePath}/Night_Soup.svg`}
              alt="Night Soup illustrated bowl and record logo"
              className="hero-logo"
              width={1254}
              height={1254}
              priority
            />
          </Box>
        </Container>
        <div className="ticker" aria-hidden="true">
          <div>LOW LIGHTS · QUIET ROOMS · DEEP CUTS · NIGHT SOUP · LOW LIGHTS · QUIET ROOMS · DEEP CUTS · NIGHT SOUP · LOW LIGHTS · QUIET ROOMS · DEEP CUTS · NIGHT SOUP · LOW LIGHTS · QUIET ROOMS · DEEP CUTS · NIGHT SOUP · LOW LIGHTS · QUIET ROOMS · DEEP CUTS · NIGHT SOUP · LOW LIGHTS · QUIET ROOMS · DEEP CUTS · NIGHT SOUP ·</div>
        </div>
      </Box>

      <Box component="section" id="music" className="section music-section">
        <Container maxWidth="xl">
          <Box className="section-heading">
            <Typography className="section-number">01 / MUSIC</Typography>
            <Typography component="h2">From the kitchen</Typography>
          </Box>
          <Box className="record-card">
            <Box className="record-art" aria-hidden="true">
              <div className="record-disc"><div className="record-label">NS</div></div>
            </Box>
            <Box className="record-copy">
              <Typography className="release-type">NEXT SERVING</Typography>
              <Typography component="h3">Something is simmering.</Typography>
              <Typography>
                New music is on the way. 
              </Typography>
              <Button variant="contained" startIcon={<MusicNoteRoundedIcon />} disabled className="soon-button">
                Streaming links coming soon
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      <Box component="section" id="about" className="section about-section">
        <Container maxWidth="xl" className="slideshow-wrap">
          <Box
            className="slideshow"
            role="region"
            aria-roledescription="carousel"
            aria-label="Night Soup photos"
          >
            <Box className="slides" aria-live="polite">
              {slideshowImages.map((image, index) => (
                <Box
                  className={`slide ${index === slideIndex ? 'active' : ''}`}
                  key={image.src}
                  aria-hidden={index !== slideIndex}
                >
                  <Image src={`${basePath}${image.src}`} alt="" fill sizes="(max-width: 900px) 100vw, 1280px" className="slide-backdrop" />
                  <Image
                    src={`${basePath}${image.src}`}
                    alt={index === slideIndex ? image.alt : ''}
                    fill
                    sizes="(max-width: 900px) 100vw, 1280px"
                    className="slide-image"
                  />
                </Box>
              ))}
              <Typography className="slide-count" aria-hidden="true">
                {String(slideIndex + 1).padStart(2, '0')} / {String(slideshowImages.length).padStart(2, '0')}
              </Typography>
              <Box className="slideshow-heading">
                <Typography className="section-number">02 / THE BAND</Typography>
                <Typography component="h2">Made for the<br />late shift.</Typography>
              </Box>
            </Box>
            <Box className="slideshow-controls">
              <Stack direction="row" spacing={1}>
                <IconButton className="slide-button" onClick={showPreviousSlide} aria-label="Previous photo">
                  <ArrowBackRoundedIcon />
                </IconButton>
                <IconButton className="slide-button" onClick={showNextSlide} aria-label="Next photo">
                  <ArrowForwardRoundedIcon />
                </IconButton>
                <IconButton
                  className="slide-button"
                  onClick={() => setSlideshowPlaying((playing) => !playing)}
                  aria-label={slideshowPlaying ? 'Pause slideshow' : 'Play slideshow'}
                >
                  {slideshowPlaying ? <PauseRoundedIcon /> : <PlayArrowRoundedIcon />}
                </IconButton>
              </Stack>
              <Box className="slide-dots" aria-label="Choose a photo">
                {slideshowImages.map((image, index) => (
                  <button
                    type="button"
                    key={image.src}
                    className={index === slideIndex ? 'active' : ''}
                    onClick={() => setSlideIndex(index)}
                    aria-label={`Show photo ${index + 1}`}
                    aria-current={index === slideIndex ? 'true' : undefined}
                  />
                ))}
              </Box>
            </Box>
          </Box>
          <Box className="about-copy about-copy-below">
            <Typography className="about-lead">
              Night Soup lives where the 90s alternative is stripped down, simmered, and served hot.
            </Typography>
            <Typography>
              Evan Rothery. Duncan Findlay. Other ingredients. Mostly acoustic. Songs you have forgotten that you love. Innovative covers. Artful selections. Original tunes. Play along. Sing along. Drum along.
            </Typography>
            <div className="ingredient-line"><span /> Best served quiet</div>
          </Box>
        </Container>
      </Box>

      <Box component="section" id="shows" className="section shows-section">
        <Container maxWidth="xl">
          <Box className="section-heading split-heading">
            <Box>
              <Typography className="section-number">03 / SHOWS</Typography>
              <Typography component="h2">See you out there.</Typography>
            </Box>
            <Typography className="show-note">
              {shows.length ? `${shows.length} upcoming ${shows.length === 1 ? 'show' : 'shows'}` : 'No dates announced yet.'}
            </Typography>
          </Box>
          {shows.length ? (
            <Box className="show-list">
              {shows.map((show) => {
                const addressId = `show-address-${show.date}-${show.venue}`.replace(/[^a-zA-Z0-9-]/g, '-');

                return (
                  <Box className="show-row" key={`${show.date}-${show.venue}`}>
                    <Typography className="show-date">{show.date}</Typography>
                    <Typography component="h3" className="show-venue">{show.venue}</Typography>
                    <Box className="city-wrap">
                      <button type="button" className="show-city" aria-describedby={addressId}>
                        {show.city}
                      </button>
                      <span className="show-address" id={addressId} role="tooltip">
                        {show.address}
                      </span>
                    </Box>
                  </Box>
                );
              })}
            </Box>
          ) : (
            <Box className="empty-show">
              <Typography component="p">The room is quiet—for now.</Typography>
              <Typography>New live dates will appear here as soon as they’re booked.</Typography>
            </Box>
          )}
        </Container>
      </Box>

      <Box component="footer" id="contact" className="footer">
        <Container maxWidth="xl">
          <Typography className="section-number">04 / KEEP IN TOUCH</Typography>
          <Box className="footer-main">
            <Typography component="h2">Stay up late.</Typography>
            <Stack direction="row" spacing={1.5}>
              <IconButton aria-label="Instagram link coming soon" className="social-button"><InstagramIcon /></IconButton>
              <IconButton aria-label="Music links coming soon" className="social-button"><MusicNoteRoundedIcon /></IconButton>
            </Stack>
          </Box>
          <Box className="footer-bottom">
            <Typography>© {new Date().getFullYear()} Night Soup</Typography>
            <Typography>Music after dark.</Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
