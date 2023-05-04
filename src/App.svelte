<script lang="ts">
  import { onMount } from "svelte";
  import { getData, type Prediction } from "./lib/api";
  let predictions: (Prediction & { active: boolean })[] = [];
  onMount(async () => {
    predictions = (await getData()).map((p) => ({ ...p, active: false }));
  });
</script>

<main>
  <h1>Are we getting nuked?</h1>
  <div class="card">
    <table>
      <thead>
        <tr>
          <th>Prediction</th>
          <th>Probability</th>
          <th>Close Date</th>
          <th>Last Update</th>
        </tr>
      </thead>
      <tbody>
        {#each predictions as prediction}
          <tr>
            <td>
              <p
                class="iframe-container"
                on:mouseenter={() => {
                  prediction.active = true;
                }}
                on:mouseleave={() => {
                  prediction.active = false;
                }}
              >
                <a href={prediction.url}>{prediction.title}</a>
                <iframe
                  style="display: {prediction.active ? 'block' : 'none'}"
                  src={prediction.embed_url}
                  title={prediction.title}
                  frameborder="0"
                  width="600"
                  height="300"
                />
              </p>
            </td>
            <td>{prediction.probability}</td>
            <td style={prediction.close_time <= Date.now() ? "color:red" : ""}>
              {new Date(prediction.close_time).toLocaleDateString(undefined, {
                year: "numeric",
                month: "short",
                day: "2-digit",
              })}
            </td>
            <td
              style={prediction.last_activity_time > Date.now()
                ? "color:red"
                : ""}
            >
              {new Date(prediction.last_activity_time).toLocaleDateString(
                undefined,
                {
                  year: "numeric",
                  month: "short",
                  day: "2-digit",
                }
              )}
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
  <div class="explainer">
    <p>
      If you want to receive a phone call when one of these markets implies a
      probability higher than 30%, please text me on:
    </p>
    <ul class="contacts-list">
      <li><a href="https://wa.me/00393461388774">Whatsapp</a></li>
      <li><a href="https://signal.me/#p/+393461388774">Signal</a></li>
      <li><a href="https://t.me/recursing">Telegram</a></li>
      <li>
        <a href="https://forum.effectivealtruism.org/users/lorenzo-buonanno">
          EA Forum
        </a>
      </li>
      <li>
        <a href="https://www.lesswrong.com/users/lorenzo-buonanno">LessWrong</a>
      </li>
      <li>
        <a href="https://www.facebook.com/profile.php?id=100073337767772">
          Facebook
        </a>
      </li>
      <li><a href="https://twitter.com/L___orenzo">Twitter</a></li>
    </ul>
    <p>
      Write something like "I want you to call this number if a prediction
      markets implies a 30% probability of nuclear war, I accept that there
      might be false alarms". I will send you a text to verify that you own that
      number, and will add it to a list of numbers that automatically get called
      once one of the markets above implies a &gt;30% probability of nukes.
    </p>
    <p>
      This is very heavily inspired from <a
        href="https://hasrussialaunchednukesyet.com/"
      >
        hasrussialaunchednukesyet.com
      </a>
      (but even more extremely hacky).
      <br />
      See the script that checks the markets and makes the phone calls
      <a
        href="https://gist.github.com/Recursing/a9f88e0160435d97a35f6d9abe70c338"
      >
        here.
      </a>
    </p>
  </div>
</main>

<style>
  .iframe-container {
    position: relative;
  }
  iframe {
    position: absolute;
    bottom: 20px;
    left: 0;
    z-index: 10;
    pointer-events: none;
  }
  .contacts-list {
    list-style: none;
    padding: 0;
  }
  h1 {
    margin: 0;
  }
  .explainer {
    margin: auto;
    max-width: 100ch;
  }
</style>
