document.addEventListener('deviceready', function() {
    var config = {
        type: Phaser.WEBGL,
        parent: 'game',
        scene: {
            preload: preload,
            create: create
        }
    };
    
    var game = new Phaser.Game(config);
    
    function preload() {
        this.load.atlas('sheet', 'img/sheet.png', 'img/sheet.json');
    }
    
    function create() {
        this.add.sprite(400, 300, 'sheet', 'planeBlue1.png');
    }    
});

if (!window.cordova) {
    window.dispatchEvent('deviceready');
}