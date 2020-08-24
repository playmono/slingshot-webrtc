export default class PreloadScene extends Phaser.Scene {
    constructor() {
        super({ key: 'PreloadScene' })
    }

    preload() {
        this.load.image('phaser-logo', 'assets/img/phaser-logo.png')

        // ninja
        const players = ['ninja', 'swordman', 'girl']

        for (let player of players) {
            // Front - Idle
            for (let i in [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 , 11]) {
                let position = i.padStart(3, '0')
                this.load.image(player + '_front_idle_' + position, 'assets/img/' + player + '/Front - Idle/Front - Idle_' + position + '.png')
            }
        }
    }s

    create() {
        this.scene.start('MainScene')

        /**
         * This is how you would dynamically import the mainScene class (with code splitting),
         * add the mainScene to the Scene Manager
         * and start the scene.
         * The name of the chunk would be 'mainScene.chunk.js
         * Find more about code splitting here: https://webpack.js.org/guides/code-splitting/
         */
        // let someCondition = true
        // if (someCondition)
        //   import(/* webpackChunkName: "mainScene" */ './mainScene').then(mainScene => {
        //     this.scene.add('MainScene', mainScene.default, true)
        //   })
        // else console.log('The mainScene class will not even be loaded by the browser')
    }
}
