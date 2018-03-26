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
        this.anims.create({
            key: 'plane',
            repeat: -1,
            frameRate: 10,
            frames: this.anims.generateFrameNames('sheet', { start: 1,  end: 3, prefix: 'planeBlue', suffix: '.png' })
        });
        
        var plane = this.add.sprite(400, 300, 'sheet').play('plane');
    }    
});

if (!window.cordova) {
    window.dispatchEvent('deviceready');
}