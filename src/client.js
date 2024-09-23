import client from "@sanity/client";

export default client({
  projectId: "ho68atya",
  dataset: "production",
  useCdn: true,
  apiVersion: "2024-09-22",
});
