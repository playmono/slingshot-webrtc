import ninjaFrontIdle from '../animations/ninjaFrontIdle'

export default class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y) {
      super(scene, x, y, 'ninja_front_idle_000')
      scene.add.existing(this)
      scene.physics.add.existing(this)
  
      this.setCollideWorldBounds(true)
        .setBounce(0.6)
        .setInteractive()
        .on('pointerdown', () => {
          this.setVelocityY(-400)
        })
    }
  }
  