<svelte:head>
  <title>octo</title>
  <meta property="og:title" content="octo">
  <meta property="og:type" content="website">
  <meta property="og:image" content="https://octo.moe/favicon.png">
  <meta property="og:url" content="https://octo.moe/">
</svelte:head>

<script lang="ts">
  import Fa from 'svelte-fa';
  import { faGithub, faDiscord, faYoutube, faTwitch, faBluesky, faTwitter } from '@fortawesome/free-brands-svg-icons';

  import sub from '../lib/sub';
  $sub = 'Praise the tako lord!';

  import main from '../lib/isMain';
  $main = true;
  
  let links = [
    {
      color: '#2d333b',
      icon: faGithub,
      name: "Github",
      link: 'https://github.com/uzervlad',
      size: "4x",
    },
    {
      color: '#6f86d4',
      icon: faDiscord,
      name: 'Discord',
      link: 'https://discord.com/users/194483019799724032',
    },
    {
      color: '#ff0000',
      icon: faYoutube,
      name: "YouTube",
      link: 'https://www.youtube.com/@octopussx',
      size: "3.3x",
    },
    {
      color: '#a970ff',
      icon: faTwitch,
      name: "Twitch",
      link: 'https://twitch.tv/octopussx',
      size: "3.7x",
    },
    {
      color: '#0886fe',
      icon: faBluesky,
      name: "Bluesky",
      link: 'https://bsky.app/profile/octo.moe',
      size: "3.3x",
    },
    {
      color: '#1da1f2',
      icon: faTwitter,
      name: "Twitter",
      link: "https://x.com/octopussx_osu",
      size: "3.8x",
    }
  ];
</script>

<div class="links">
  {#each links as link}
    <div class="wrapper">
      <a class={link.name.toLowerCase()} href={link.link} style={`--highlight: ${link.color};`} target="_blank">
        <Fa icon={link.icon} size={link.size ?? "3x"} class="icon" />
        <Fa icon={link.icon} size={link.size ?? "3x"} class="icon highlight" />
      </a>
      <span>{link.name}</span>
    </div>
  {/each}
</div>

<style lang="scss">
  $background: #110D17;
  $text: #665879;

  .links {
    position: absolute;
    top: 40px;
    left: 20px;

    @media screen and (max-width: 768px) {
      top: 20px;
      left: 10px;
    }

    .wrapper {
      display: flex;
      align-items: center;

      position: relative;

      margin-bottom: 14px;

      a {
        :global(.icon) {
          color: $text;
        }

        :global(.highlight) {
          position: absolute;
          top: 0;
          left: 0;
          color: var(--highlight);

          clip-path: circle(0% at 50% 50%);

          transition: clip-path ease .7s;
        }

        &:hover :global(.highlight) {
          clip-path: circle(100% at 50% 50%);
        }

        &:hover + span {
          -webkit-mask-position: left;
                  mask-position: left;
        }
      }

      span {
        margin-left: 8px;
        color: white;
        font-size: 26px;

        transition: all ease .6s;

        -webkit-mask-position: right;
                mask-position: right;
        -webkit-mask-image: linear-gradient(to right, #fff8 0%, #fff8 40%, transparent 60%, transparent 100%);
                mask-image: linear-gradient(to right, #fff8 0%, #fff8 40%, transparent 60%, transparent 100%);
        -webkit-mask-size: 300% 100%;
                mask-size: 300% 100%;
        -webkit-mask-mode: alpha;
                mask-mode: alpha;
      }
    }
  }
</style>