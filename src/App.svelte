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
            <td style={prediction.last_activity_time > Date.now() ? "color:red" : ""}>
              {new Date(prediction.last_activity_time).toLocaleDateString(undefined, {
                year: "numeric",
                month: "short",
                day: "2-digit",
              })}
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</main>

<style>
  p {
    position: relative;
  }
  iframe {
    position: absolute;
    bottom: 20px;
    left: 0;
    z-index: 10;
    pointer-events: none;
  }
  h1 {
    margin: 0;
  }
</style>
