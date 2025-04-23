<svelte:head>
  <title>octo / tournaments</title>
  <meta property="og:title" content="octo / tournaments">
  <meta property="og:type" content="website">
  <meta property="og:image" content="https://octo.moe/favicon.png">
  <meta property="og:url" content="https://octo.moe/tournaments">
</svelte:head>

<script lang="ts">
  import sub from '../../lib/sub';
  $sub = '/ tournaments';

  import main from '../../lib/isMain';
  $main = false;

  function getFlagUrl(code: string) {
    const fileName = code
      .split("")
      .map((c) => (c.charCodeAt(0) + 127397).toString(16))
      .join("-");

    return `https://osu.ppy.sh/assets/images/flags/${fileName}.svg`;
  }

  const tournaments = [
    {
      name: "Deko's Temptation Tournament",
      url: "https://osu.ppy.sh/community/forums/topics/1595854",
      cover: "https://i.ppy.sh/747a3801fb01e99d2a3ce4ab1959ba584ffc28d4/68747470733a2f2f696d6775722d617263686976652e7070792e73682f646973636f72642f3835363736333939313031353239323935382d3938353630323037323436363538333536322d756e6b6e6f776e2e706e67",
      team: {
        name: "simp4ravexi",
        members: [
          {
            id: 9211305,
            username: "OctopuSSX",
            country: "RU",
          },
          {
            id: 4468765,
            username: "KABA",
            country: "RU",
          },
          {
            id: 12284608,
            username: "RJbyM",
            country: "RU",
          },
        ],
      },
      result: "dq from QF",
    },
    {
      name: "Lazer Community Showdown",
      url: "https://osu.ppy.sh/community/forums/topics/2044830",
      cover: "https://i.ppy.sh/e6f1873d6b958a32d3eef7c74f71bb0ce4412063/68747470733a2f2f6467656973742e732d756c2e65752f7744634b674a464d",
      team: {
        name: "@sniffa rates when",
        members: [
          {
            id: 6892711,
            username: "Lopij",
            country: "BY",
          },
          {
            id: 9211305,
            username: "OctopuSSX",
            country: "RU",
          },
          {
            id: 6766278,
            username: "Pirasto",
            country: "PL",
          },
          {
            id: 17604898,
            username: "Tepe6oHbka",
            country: "RU",
          },
        ],
      },
    },
  ];
</script>

<div class="outer">
  <div class="tournaments">
    {#each tournaments as tournament}
    <div class="tournament">
      <img src={tournament.cover} alt="" class="bg">
  
      <a href={tournament.url} class="name">{tournament.name}</a>

      <div class="content">
        <div class="team">
          <h4>{tournament.team.name}</h4>
  
          {#each tournament.team.members as member}
          <a href={`https://osu.ppy.sh/u/${member.id}`} class="member">
            <img src={getFlagUrl(member.country)} class="flag" alt="">
            <span class="username">{member.username}</span>
          </a>
          {/each}
        </div>
        {#if tournament.result}
          <div class="result">
            <span>Result:</span>
            <span>{tournament.result}</span>
          </div>
        {/if}
      </div>
    </div>
    {/each}
  </div>
</div>

<style lang="scss">
  a {
    text-decoration: none;
    color: white;

    &:hover {
      text-decoration: underline;
    }
  }

  .outer {
    width: 100%;
    display: flex;
    justify-content: center;

    margin-top: 50px;
  }

  .tournaments {
    display: flex;
    flex-direction: row;
    gap: 20px;

    width: 90%;

    @media screen and (min-width: 1000px) {
      width: 70%;
    }

    @media screen and (min-width: 1300px) {
      width: 65%;
    }
  }

  .tournament {
    position: relative;
    background-color: #161616;
    color: white;
    border-radius: 6px;

    padding: 10px 16px;

    overflow: hidden;

    display: flex;
    flex-direction: column;
    align-items: center;

    &:hover .bg {
      opacity: 0.2;
    }

    z-index: 1;

    text-decoration: none;
  }

  .bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.03;
    z-index: -1;
    transition: .3s ease-out;
  }

  .name {
    font-size: 22px;
    font-weight: 600;
  }

  .content {
    display: flex;
    gap: 40px;
    align-items: center;
  }

  .team {
    width: max-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .member {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
  }

  .flag {
    height: 30px;
  }
  
  .result {
    display: flex;
    flex-direction: column;
    text-align: center;

    span:nth-child(2) {
      font-weight: 600;
    }
  }
</style>