export default function loadBalancer(chinaDownload, USDownload) {
  const resolveFirst = Promise.race([chinaDownload, USDownload]);
  return resolveFirst.then((res) => console.log(res));
}
