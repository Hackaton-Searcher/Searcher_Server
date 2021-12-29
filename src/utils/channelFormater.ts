export const channelListFormatter = (channelList: any[]) => {
  const formattedChannelList = channelList.map((channelItem) => {
    return {
      channelTitle: channelItem.snippet.channelTitle,
      channelId: channelItem.snippet.channelId,
      thumbnails: channelItem.snippet.thumbnails.default.url,
    };
  });

  return formattedChannelList;
};

export const channelItemFormatter = (channelItem: any) => {
  console.log(channelItem);

  const formattedChannelItem = {
    channelTitle: channelItem.snippet.title,
    thumbnails: channelItem.snippet.thumbnails.default.url,

    totalView: channelItem.statistics.viewCount,
    totalSubscribers: channelItem.statistics.subscriberCount,
    totalVideoCount: channelItem.statistics.videoCount,
  };

  return formattedChannelItem;
};
