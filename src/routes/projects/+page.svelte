<svelte:head>
  <title>octo / projects</title>
  <meta property="og:title" content="octo / projects">
  <meta property="og:type" content="website">
  <meta property="og:image" content="https://octo.moe/favicon.png">
  <meta property="og:url" content="https://octo.moe/projects">
</svelte:head>

<script lang="ts">
  import sub from '../../lib/sub';
  $sub = '/ projects';

  import main from '../../lib/isMain';
  $main = false 
</script>

<div class="projects">
  <div class="projects-grid">
    <div class="project">
      <img src="/projects/osuworld.webp" data-title="osu! Russia Map" alt="osu! Russia Map">
      <h2>osu! World</h2>
      <div class="links">
        <a href="https://osuworld.octo.moe/" target="_blank">Website</a>
        <a href="https://discord.gg/S3z5zyJsgu" target="_blank">Discord</a>
      </div>
      <p>
        A community-driven project whose task is to compile region-based leaderboards
      </p>
      <p>
        A full rewrite of <code>osu! Russia Map</code>'s codebase with support for multiple countries
      </p>
    </div>

    <div class="project">
      <img class="gray" src="/projects/osumap.webp" data-title="osu! Russia Map" alt="">
      <h2>osu! Russia Map</h2>
      <div class="links">
        <span class="disabled" title="Domain was bought out by some shady folks">Website</span>
      </div>
      <p>
        An interactive map of all regions of Russia with their respective leaderboards for every game mode
      </p>
      <p>
        Has been replaced by osu! World
      </p>
    </div>

    <div class="project">
      <img class="gray" src="/projects/osubot.webp" data-title="osu! bot" alt="">
      <h2>osu! bot</h2>
      <div class="links">
        <a href="https://vk.com/sosubot" target="_blank">Website</a>
        <a href="https://github.com/OctoDumb/osubot" target="_blank">Source</a>
      </div>
      <p>
        A chat-bot for VK social network, supporting multiple servers (Official, Gatari, Ripple etc.)
      </p>
      <p>
        Due to lack of motivation and money to continue maintaining the project, it was abandoned in September 2022
      </p>
    </div>
  </div>
</div>

<style lang="scss">
  $background: #110D17;
  $text: #665879;

  .projects {
    width: 100%;
    display: flex;
    justify-content: center;

    .projects-grid {
      width: 90%;

      margin-top: 50px;

      display: grid;
      grid-template-rows: masonry;
      justify-content: space-around;

      @media screen and (min-width: 1000px) {
        width: 70%;
        grid-template-columns: 1fr 1fr;
      }

      @media screen and (min-width: 1300px) {
        width: 65%;
      }

      gap: 2rem;

      .project {
        $image-offset: 10px;

        flex: 1000px;

        font-size: 18px;
        color: white;

        h2 {
          @media screen and (min-width: 1300px) {
            margin-top: 0px;
          }
        }

        &:nth-child(2n) {
          img {
            margin-left: $image-offset;
            float: right;
          }
        }

        &:nth-child(2n - 1) {
          img {
            margin-right: $image-offset;
            float: left;
          }
        }

        img {
          width: 270px;
          margin-bottom: $image-offset;
          border-radius: 5px;

          @media screen and (max-width: 1500px) {
            width: 215px;
          }

          @media screen and (max-width: 1300px) {
            width: 100%;
          }

          &.gray {
            filter: grayscale(100%);
          }
        }

        h2 {
          margin-bottom: 0px;
        }

        .links {
          display: flex;
          gap: 0 10px;

          &.disabled {
            cursor: not-allowed;

            a {
              pointer-events: none;
            }
          }

          span, a {
            color: lighten($text, 8%);

            transition: color ease .2s;

            text-decoration: transparentize(lighten($text, 12%), 0.4) underline;

            &:hover:not(.disabled) {
              color: lighten($text, 16%);
            }

            &.disabled {
              text-decoration-style: dotted;
              cursor: not-allowed;
            }
          }
        }

        p {
          margin-top: 5px;
          color: #fffb;
        }
      }

      &.column-left {
        img {
          float: left;
          margin-right: 17px;
        }
      }

      &.column-right {
        img {
          float: right;
          margin-left: 17px;
        }
      }
    }
  }
</style>