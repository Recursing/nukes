function formatPerc(p?: number): string {
  return p?.toLocaleString(undefined, {
    style: "percent",
    maximumFractionDigits: 2,
  });
}
async function getJSON(url: string) {
  const res = await fetch(url);
  return await res.json();
}

export interface Prediction {
  url: string;
  title: string;
  probability: string;
  embed_url: string;
  close_time: number;
  last_activity_time: number;
}
async function getManifoldData(): Promise<Prediction[]> {
  const urls = [
    "https://manifold.markets/jack/will-a-nuclear-weapon-detonate-in-n-6edbcd23a9f1",
    "https://manifold.markets/AndyMartin/will-a-nuclear-weapon-be-launched-i-015e44ed91f5",
    "https://manifold.markets/AmmonLam/will-a-nuclear-weapon-cause-over-10",
  ];
  const dataPromises = urls.map(async (url) => {
    const slug = url.split("/").pop();
    const data = await getJSON("https://manifold.markets/api/v0/slug/" + slug);
    data.lastUpdatedTime;
    return {
      url,
      title: "Manifold: " + data.question,
      probability: formatPerc(data.probability),
      embed_url: url.replace("manifold.markets/", "manifold.markets/embed/"),
      close_time: data.closeTime,
      last_activity_time: data.lastUpdatedTime,
    };
  });
  return Promise.all(dataPromises);
}

interface MetaculusResponse {
  page_url: string;
  title_short: string;
  close_time: string;
  id: number;
  metaculus_prediction?: {
    full?: number;
  };
  community_prediction?: {
    full?: {
      q2?: number;
    };
  };
  number_of_predictions: number;
  last_activity_time: string;
}
async function getMetaculusData(): Promise<Prediction[]> {
  const url = "https://large-goose-21.deno.dev";
  const data: MetaculusResponse[] = await getJSON(url);
  return data.map((d) => ({
    url: `https://www.metaculus.com${d.page_url}`,
    title: "Metaculus: " + d.title_short,
    probability:
      (d.metaculus_prediction
        ? formatPerc(d.metaculus_prediction?.full) + " (metaculus), "
        : "") +
      (formatPerc(d.community_prediction?.full?.q2) + " (community)"),
    embed_url: `https://www.metaculus.com/questions/embed/${d.id}`,
    close_time: new Date(d.close_time).getTime(),
    last_activity_time: new Date(d.last_activity_time).getTime(),
  }));
}
export async function getData(): Promise<Prediction[]> {
  const manifoldData = await getManifoldData();
  const metaculusData = await getMetaculusData();
  return [...manifoldData, ...metaculusData];
}
