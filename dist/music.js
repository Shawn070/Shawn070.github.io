const ap = new APlayer({
    container: document.getElementById('aplayer'),
    min: false,
    autoplay: false,
    loop: 'all',
    volume: 0.7,
    listFolded: false,
    listMaxHeight: 60,
    audio: [
      {
        name: '333',
        artist: '麦小兜',
        url: 'http://up.mcyt.net/?down/45967.mp3',
        cover: 'http://oeff2vktt.bkt.clouddn.com/image/8.jpg',
      },
      {
        name: '风筝误',
        artist: '刘珂矣',
        url: 'http://up.mcyt.net/?down/46644.mp3',
        cover: 'http://oeff2vktt.bkt.clouddn.com/image/96.jpg',
      }
    ]
});