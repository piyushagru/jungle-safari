class PlayScene extends Phaser.Scene{

    constructor(){
        super({
            physics:{
                system:"impact",
                gravity:100
            },
            key:"play"  });
    }

    preload ()
    {
        
        this.load.image('tile_image','assets/jtileset.png');
        this.load.tilemapTiledJSON('map','assets/game_map.json');
        this.load.spritesheet('run_sheet','assets/run.png',{frameWidth:21,frameHeight:33});

    }

   create ()
    {   
           
         //this.add.text(100,100,"Play",{fill:"#FFF"})
             
            // this.run_anim=this.player.animations.add('run')
            var map=this.add.tilemap('map');
            var tileset=map.addTilesetImage('j_tileset','tile_image');
            
            console.log(map)
            var layer=map.createStaticLayer('main',tileset);
            this.player=this.physics.add.sprite(100,100,'run_sheet');
            var items=map.createFromObjects('items',7,{},this);//this->in this scene //sprite configuration
            
            console.log(items)
    }
}