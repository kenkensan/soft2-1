// シーンクラス
// 他のJSファイルから呼び出された場合はシーンを返す
class MainScene extends Phaser.Scene {
    // コンストラクタ
    constructor() {
        // 継承した「Phaser.Scene」クラスのコンストラクタの呼び出し
        super('MainScene');
    }

    // シーンの事前読み込み処理
    preload() {
        // 画像の読み込み(使用する時の名前, パス)
        this.load.image('city','assets/city.png');
        this.load.image('taro','assets/taro.png');
        this.load.image('hanako','assets/hanako.png');
    }
    // シーン初期化処理
    create() {
        this.add.image(400,300 ,'city');
        const taro = this.physices.add.sprite(50,50 ,'taro');
        const hanako = this.physices.add.sprite(750,400 ,'hanako');
        this.taro=taro;
        this.hanako=hanako;
    }
    // 毎フレーム実行される繰り返し処理
    update() {
    }
}