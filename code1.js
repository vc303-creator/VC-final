gdjs.GameOverCode = {};
gdjs.GameOverCode.localVariables = [];
gdjs.GameOverCode.idToCallbackMap = new Map();
gdjs.GameOverCode.GDNewTextObjects1= [];
gdjs.GameOverCode.GDNewTextObjects2= [];
gdjs.GameOverCode.GDBlueButtonWithShadowObjects1= [];
gdjs.GameOverCode.GDBlueButtonWithShadowObjects2= [];
gdjs.GameOverCode.GDPlay_9595AgainObjects1= [];
gdjs.GameOverCode.GDPlay_9595AgainObjects2= [];
gdjs.GameOverCode.GDNewTiledSprite2Objects1= [];
gdjs.GameOverCode.GDNewTiledSprite2Objects2= [];
gdjs.GameOverCode.GDIzquierdaObjects1= [];
gdjs.GameOverCode.GDIzquierdaObjects2= [];
gdjs.GameOverCode.GDDerechaObjects1= [];
gdjs.GameOverCode.GDDerechaObjects2= [];
gdjs.GameOverCode.GDAbajoObjects1= [];
gdjs.GameOverCode.GDAbajoObjects2= [];
gdjs.GameOverCode.GDArribaObjects1= [];
gdjs.GameOverCode.GDArribaObjects2= [];
gdjs.GameOverCode.GDGold_9595CoinObjects1= [];
gdjs.GameOverCode.GDGold_9595CoinObjects2= [];
gdjs.GameOverCode.GDtxt_9595vidasObjects1= [];
gdjs.GameOverCode.GDtxt_9595vidasObjects2= [];
gdjs.GameOverCode.GDtxt_9595monedasObjects1= [];
gdjs.GameOverCode.GDtxt_9595monedasObjects2= [];
gdjs.GameOverCode.GDNewTiledSpriteObjects1= [];
gdjs.GameOverCode.GDNewTiledSpriteObjects2= [];
gdjs.GameOverCode.GDCastles_9595BackgroundObjects1= [];
gdjs.GameOverCode.GDCastles_9595BackgroundObjects2= [];
gdjs.GameOverCode.GDStar_9595DiamondObjects1= [];
gdjs.GameOverCode.GDStar_9595DiamondObjects2= [];
gdjs.GameOverCode.GDPrincessObjects1= [];
gdjs.GameOverCode.GDPrincessObjects2= [];
gdjs.GameOverCode.GDFlag_9595BlueObjects1= [];
gdjs.GameOverCode.GDFlag_9595BlueObjects2= [];
gdjs.GameOverCode.GDWitchObjects1= [];
gdjs.GameOverCode.GDWitchObjects2= [];
gdjs.GameOverCode.GDMonsterObjects1= [];
gdjs.GameOverCode.GDMonsterObjects2= [];
gdjs.GameOverCode.GDFlyObjects1= [];
gdjs.GameOverCode.GDFlyObjects2= [];
gdjs.GameOverCode.GDnebulaObjects1= [];
gdjs.GameOverCode.GDnebulaObjects2= [];
gdjs.GameOverCode.GDBlueExplosionObjects1= [];
gdjs.GameOverCode.GDBlueExplosionObjects2= [];
gdjs.GameOverCode.GDFireballObjects1= [];
gdjs.GameOverCode.GDFireballObjects2= [];


gdjs.GameOverCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BlueButtonWithShadow"), gdjs.GameOverCode.GDBlueButtonWithShadowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameOverCode.GDBlueButtonWithShadowObjects1.length;i<l;++i) {
    if ( gdjs.GameOverCode.GDBlueButtonWithShadowObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameOverCode.GDBlueButtonWithShadowObjects1[k] = gdjs.GameOverCode.GDBlueButtonWithShadowObjects1[i];
        ++k;
    }
}
gdjs.GameOverCode.GDBlueButtonWithShadowObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "escena 1'p", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Play_Again"), gdjs.GameOverCode.GDPlay_9595AgainObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameOverCode.GDPlay_9595AgainObjects1.length;i<l;++i) {
    if ( gdjs.GameOverCode.GDPlay_9595AgainObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameOverCode.GDPlay_9595AgainObjects1[k] = gdjs.GameOverCode.GDPlay_9595AgainObjects1[i];
        ++k;
    }
}
gdjs.GameOverCode.GDPlay_9595AgainObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "escena 1'p", false);
}
}

}


};

gdjs.GameOverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameOverCode.GDNewTextObjects1.length = 0;
gdjs.GameOverCode.GDNewTextObjects2.length = 0;
gdjs.GameOverCode.GDBlueButtonWithShadowObjects1.length = 0;
gdjs.GameOverCode.GDBlueButtonWithShadowObjects2.length = 0;
gdjs.GameOverCode.GDPlay_9595AgainObjects1.length = 0;
gdjs.GameOverCode.GDPlay_9595AgainObjects2.length = 0;
gdjs.GameOverCode.GDNewTiledSprite2Objects1.length = 0;
gdjs.GameOverCode.GDNewTiledSprite2Objects2.length = 0;
gdjs.GameOverCode.GDIzquierdaObjects1.length = 0;
gdjs.GameOverCode.GDIzquierdaObjects2.length = 0;
gdjs.GameOverCode.GDDerechaObjects1.length = 0;
gdjs.GameOverCode.GDDerechaObjects2.length = 0;
gdjs.GameOverCode.GDAbajoObjects1.length = 0;
gdjs.GameOverCode.GDAbajoObjects2.length = 0;
gdjs.GameOverCode.GDArribaObjects1.length = 0;
gdjs.GameOverCode.GDArribaObjects2.length = 0;
gdjs.GameOverCode.GDGold_9595CoinObjects1.length = 0;
gdjs.GameOverCode.GDGold_9595CoinObjects2.length = 0;
gdjs.GameOverCode.GDtxt_9595vidasObjects1.length = 0;
gdjs.GameOverCode.GDtxt_9595vidasObjects2.length = 0;
gdjs.GameOverCode.GDtxt_9595monedasObjects1.length = 0;
gdjs.GameOverCode.GDtxt_9595monedasObjects2.length = 0;
gdjs.GameOverCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.GameOverCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.GameOverCode.GDCastles_9595BackgroundObjects1.length = 0;
gdjs.GameOverCode.GDCastles_9595BackgroundObjects2.length = 0;
gdjs.GameOverCode.GDStar_9595DiamondObjects1.length = 0;
gdjs.GameOverCode.GDStar_9595DiamondObjects2.length = 0;
gdjs.GameOverCode.GDPrincessObjects1.length = 0;
gdjs.GameOverCode.GDPrincessObjects2.length = 0;
gdjs.GameOverCode.GDFlag_9595BlueObjects1.length = 0;
gdjs.GameOverCode.GDFlag_9595BlueObjects2.length = 0;
gdjs.GameOverCode.GDWitchObjects1.length = 0;
gdjs.GameOverCode.GDWitchObjects2.length = 0;
gdjs.GameOverCode.GDMonsterObjects1.length = 0;
gdjs.GameOverCode.GDMonsterObjects2.length = 0;
gdjs.GameOverCode.GDFlyObjects1.length = 0;
gdjs.GameOverCode.GDFlyObjects2.length = 0;
gdjs.GameOverCode.GDnebulaObjects1.length = 0;
gdjs.GameOverCode.GDnebulaObjects2.length = 0;
gdjs.GameOverCode.GDBlueExplosionObjects1.length = 0;
gdjs.GameOverCode.GDBlueExplosionObjects2.length = 0;
gdjs.GameOverCode.GDFireballObjects1.length = 0;
gdjs.GameOverCode.GDFireballObjects2.length = 0;

gdjs.GameOverCode.eventsList0(runtimeScene);
gdjs.GameOverCode.GDNewTextObjects1.length = 0;
gdjs.GameOverCode.GDNewTextObjects2.length = 0;
gdjs.GameOverCode.GDBlueButtonWithShadowObjects1.length = 0;
gdjs.GameOverCode.GDBlueButtonWithShadowObjects2.length = 0;
gdjs.GameOverCode.GDPlay_9595AgainObjects1.length = 0;
gdjs.GameOverCode.GDPlay_9595AgainObjects2.length = 0;
gdjs.GameOverCode.GDNewTiledSprite2Objects1.length = 0;
gdjs.GameOverCode.GDNewTiledSprite2Objects2.length = 0;
gdjs.GameOverCode.GDIzquierdaObjects1.length = 0;
gdjs.GameOverCode.GDIzquierdaObjects2.length = 0;
gdjs.GameOverCode.GDDerechaObjects1.length = 0;
gdjs.GameOverCode.GDDerechaObjects2.length = 0;
gdjs.GameOverCode.GDAbajoObjects1.length = 0;
gdjs.GameOverCode.GDAbajoObjects2.length = 0;
gdjs.GameOverCode.GDArribaObjects1.length = 0;
gdjs.GameOverCode.GDArribaObjects2.length = 0;
gdjs.GameOverCode.GDGold_9595CoinObjects1.length = 0;
gdjs.GameOverCode.GDGold_9595CoinObjects2.length = 0;
gdjs.GameOverCode.GDtxt_9595vidasObjects1.length = 0;
gdjs.GameOverCode.GDtxt_9595vidasObjects2.length = 0;
gdjs.GameOverCode.GDtxt_9595monedasObjects1.length = 0;
gdjs.GameOverCode.GDtxt_9595monedasObjects2.length = 0;
gdjs.GameOverCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.GameOverCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.GameOverCode.GDCastles_9595BackgroundObjects1.length = 0;
gdjs.GameOverCode.GDCastles_9595BackgroundObjects2.length = 0;
gdjs.GameOverCode.GDStar_9595DiamondObjects1.length = 0;
gdjs.GameOverCode.GDStar_9595DiamondObjects2.length = 0;
gdjs.GameOverCode.GDPrincessObjects1.length = 0;
gdjs.GameOverCode.GDPrincessObjects2.length = 0;
gdjs.GameOverCode.GDFlag_9595BlueObjects1.length = 0;
gdjs.GameOverCode.GDFlag_9595BlueObjects2.length = 0;
gdjs.GameOverCode.GDWitchObjects1.length = 0;
gdjs.GameOverCode.GDWitchObjects2.length = 0;
gdjs.GameOverCode.GDMonsterObjects1.length = 0;
gdjs.GameOverCode.GDMonsterObjects2.length = 0;
gdjs.GameOverCode.GDFlyObjects1.length = 0;
gdjs.GameOverCode.GDFlyObjects2.length = 0;
gdjs.GameOverCode.GDnebulaObjects1.length = 0;
gdjs.GameOverCode.GDnebulaObjects2.length = 0;
gdjs.GameOverCode.GDBlueExplosionObjects1.length = 0;
gdjs.GameOverCode.GDBlueExplosionObjects2.length = 0;
gdjs.GameOverCode.GDFireballObjects1.length = 0;
gdjs.GameOverCode.GDFireballObjects2.length = 0;


return;

}

gdjs['GameOverCode'] = gdjs.GameOverCode;
