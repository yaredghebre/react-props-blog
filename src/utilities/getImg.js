const getImg = () => {
  //   return new URL('../assets/imgs/' + title, import.meta.url).href;
  return `https://picsum.photos/500/300?${Math.random()}`;
};

export default getImg;
