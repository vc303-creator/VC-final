gdjs.escena_321_39pCode = {};
gdjs.escena_321_39pCode.localVariables = [];
gdjs.escena_321_39pCode.idToCallbackMap = new Map();
gdjs.escena_321_39pCode.GDFlyObjects1= [];
gdjs.escena_321_39pCode.GDFlyObjects2= [];
gdjs.escena_321_39pCode.GDFlyObjects3= [];
gdjs.escena_321_39pCode.GDMonsterObjects1= [];
gdjs.escena_321_39pCode.GDMonsterObjects2= [];
gdjs.escena_321_39pCode.GDMonsterObjects3= [];
gdjs.escena_321_39pCode.GDWinter_9595Tile_9595Platform_9595CenterObjects1= [];
gdjs.escena_321_39pCode.GDWinter_9595Tile_9595Platform_9595CenterObjects2= [];
gdjs.escena_321_39pCode.GDWinter_9595Tile_9595Platform_9595CenterObjects3= [];
gdjs.escena_321_39pCode.GDNewTiledSprite2Objects1= [];
gdjs.escena_321_39pCode.GDNewTiledSprite2Objects2= [];
gdjs.escena_321_39pCode.GDNewTiledSprite2Objects3= [];
gdjs.escena_321_39pCode.GDIzquierdaObjects1= [];
gdjs.escena_321_39pCode.GDIzquierdaObjects2= [];
gdjs.escena_321_39pCode.GDIzquierdaObjects3= [];
gdjs.escena_321_39pCode.GDDerechaObjects1= [];
gdjs.escena_321_39pCode.GDDerechaObjects2= [];
gdjs.escena_321_39pCode.GDDerechaObjects3= [];
gdjs.escena_321_39pCode.GDAbajoObjects1= [];
gdjs.escena_321_39pCode.GDAbajoObjects2= [];
gdjs.escena_321_39pCode.GDAbajoObjects3= [];
gdjs.escena_321_39pCode.GDArribaObjects1= [];
gdjs.escena_321_39pCode.GDArribaObjects2= [];
gdjs.escena_321_39pCode.GDArribaObjects3= [];
gdjs.escena_321_39pCode.GDGold_9595CoinObjects1= [];
gdjs.escena_321_39pCode.GDGold_9595CoinObjects2= [];
gdjs.escena_321_39pCode.GDGold_9595CoinObjects3= [];
gdjs.escena_321_39pCode.GDtxt_9595vidasObjects1= [];
gdjs.escena_321_39pCode.GDtxt_9595vidasObjects2= [];
gdjs.escena_321_39pCode.GDtxt_9595vidasObjects3= [];
gdjs.escena_321_39pCode.GDtxt_9595monedasObjects1= [];
gdjs.escena_321_39pCode.GDtxt_9595monedasObjects2= [];
gdjs.escena_321_39pCode.GDtxt_9595monedasObjects3= [];
gdjs.escena_321_39pCode.GDNewTiledSpriteObjects1= [];
gdjs.escena_321_39pCode.GDNewTiledSpriteObjects2= [];
gdjs.escena_321_39pCode.GDNewTiledSpriteObjects3= [];
gdjs.escena_321_39pCode.GDCastles_9595BackgroundObjects1= [];
gdjs.escena_321_39pCode.GDCastles_9595BackgroundObjects2= [];
gdjs.escena_321_39pCode.GDCastles_9595BackgroundObjects3= [];
gdjs.escena_321_39pCode.GDStar_9595DiamondObjects1= [];
gdjs.escena_321_39pCode.GDStar_9595DiamondObjects2= [];
gdjs.escena_321_39pCode.GDStar_9595DiamondObjects3= [];
gdjs.escena_321_39pCode.GDPrincessObjects1= [];
gdjs.escena_321_39pCode.GDPrincessObjects2= [];
gdjs.escena_321_39pCode.GDPrincessObjects3= [];
gdjs.escena_321_39pCode.GDFlag_9595BlueObjects1= [];
gdjs.escena_321_39pCode.GDFlag_9595BlueObjects2= [];
gdjs.escena_321_39pCode.GDFlag_9595BlueObjects3= [];
gdjs.escena_321_39pCode.GDWitchObjects1= [];
gdjs.escena_321_39pCode.GDWitchObjects2= [];
gdjs.escena_321_39pCode.GDWitchObjects3= [];
gdjs.escena_321_39pCode.GDMonsterObjects1= [];
gdjs.escena_321_39pCode.GDMonsterObjects2= [];
gdjs.escena_321_39pCode.GDMonsterObjects3= [];
gdjs.escena_321_39pCode.GDFlyObjects1= [];
gdjs.escena_321_39pCode.GDFlyObjects2= [];
gdjs.escena_321_39pCode.GDFlyObjects3= [];
gdjs.escena_321_39pCode.GDnebulaObjects1= [];
gdjs.escena_321_39pCode.GDnebulaObjects2= [];
gdjs.escena_321_39pCode.GDnebulaObjects3= [];
gdjs.escena_321_39pCode.GDBlueExplosionObjects1= [];
gdjs.escena_321_39pCode.GDBlueExplosionObjects2= [];
gdjs.escena_321_39pCode.GDBlueExplosionObjects3= [];
gdjs.escena_321_39pCode.GDFireballObjects1= [];
gdjs.escena_321_39pCode.GDFireballObjects2= [];
gdjs.escena_321_39pCode.GDFireballObjects3= [];


gdjs.escena_321_39pCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Princess"), gdjs.escena_321_39pCode.GDPrincessObjects2);
{for(var i = 0, len = gdjs.escena_321_39pCode.GDPrincessObjects2.length ;i < len;++i) {
    gdjs.escena_321_39pCode.GDPrincessObjects2[i].getBehavior("Flippable").flipX(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Princess"), gdjs.escena_321_39pCode.GDPrincessObjects1);
{for(var i = 0, len = gdjs.escena_321_39pCode.GDPrincessObjects1.length ;i < len;++i) {
    gdjs.escena_321_39pCode.GDPrincessObjects1[i].getBehavior("Flippable").flipX(true);
}
}
}

}


};gdjs.escena_321_39pCode.mapOfGDgdjs_9546escena_9595321_959539pCode_9546GDPrincessObjects1Objects = Hashtable.newFrom({"Princess": gdjs.escena_321_39pCode.GDPrincessObjects1});
gdjs.escena_321_39pCode.mapOfGDgdjs_9546escena_9595321_959539pCode_9546GDGold_95959595CoinObjects1Objects = Hashtable.newFrom({"Gold_Coin": gdjs.escena_321_39pCode.GDGold_9595CoinObjects1});
gdjs.escena_321_39pCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Gold_Coin"), gdjs.escena_321_39pCode.GDGold_9595CoinObjects1);
gdjs.copyArray(runtimeScene.getObjects("Princess"), gdjs.escena_321_39pCode.GDPrincessObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.escena_321_39pCode.mapOfGDgdjs_9546escena_9595321_959539pCode_9546GDPrincessObjects1Objects, gdjs.escena_321_39pCode.mapOfGDgdjs_9546escena_9595321_959539pCode_9546GDGold_95959595CoinObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.escena_321_39pCode.GDGold_9595CoinObjects1 */
gdjs.copyArray(runtimeScene.getObjects("txt_monedas"), gdjs.escena_321_39pCode.GDtxt_9595monedasObjects1);
{for(var i = 0, len = gdjs.escena_321_39pCode.GDGold_9595CoinObjects1.length ;i < len;++i) {
    gdjs.escena_321_39pCode.GDGold_9595CoinObjects1[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(2).add(100);
}
{for(var i = 0, len = gdjs.escena_321_39pCode.GDtxt_9595monedasObjects1.length ;i < len;++i) {
    gdjs.escena_321_39pCode.GDtxt_9595monedasObjects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(2).getAsString());
}
}
}

}


};gdjs.escena_321_39pCode.mapOfGDgdjs_9546escena_9595321_959539pCode_9546GDPrincessObjects2Objects = Hashtable.newFrom({"Princess": gdjs.escena_321_39pCode.GDPrincessObjects2});
gdjs.escena_321_39pCode.mapOfGDgdjs_9546escena_9595321_959539pCode_9546GDnebulaObjects2Objects = Hashtable.newFrom({"nebula": gdjs.escena_321_39pCode.GDnebulaObjects2});
gdjs.escena_321_39pCode.mapOfGDgdjs_9546escena_9595321_959539pCode_9546GDnebulaObjects2Objects = Hashtable.newFrom({"nebula": gdjs.escena_321_39pCode.GDnebulaObjects2});
gdjs.escena_321_39pCode.mapOfGDgdjs_9546escena_9595321_959539pCode_9546GDnebulaObjects1Objects = Hashtable.newFrom({"nebula": gdjs.escena_321_39pCode.GDnebulaObjects1});
gdjs.escena_321_39pCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Princess"), gdjs.escena_321_39pCode.GDPrincessObjects2);
gdjs.copyArray(runtimeScene.getObjects("nebula"), gdjs.escena_321_39pCode.GDnebulaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.escena_321_39pCode.mapOfGDgdjs_9546escena_9595321_959539pCode_9546GDPrincessObjects2Objects, gdjs.escena_321_39pCode.mapOfGDgdjs_9546escena_9595321_959539pCode_9546GDnebulaObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.escena_321_39pCode.GDnebulaObjects2 */
{for(var i = 0, len = gdjs.escena_321_39pCode.GDnebulaObjects2.length ;i < len;++i) {
    gdjs.escena_321_39pCode.GDnebulaObjects2[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(5).setBoolean(true);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Princess"), gdjs.escena_321_39pCode.GDPrincessObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.escena_321_39pCode.GDPrincessObjects2.length;i<l;++i) {
    if ( gdjs.escena_321_39pCode.GDPrincessObjects2[i].getBehavior("Flippable").isFlippedX() ) {
        isConditionTrue_0 = true;
        gdjs.escena_321_39pCode.GDPrincessObjects2[k] = gdjs.escena_321_39pCode.GDPrincessObjects2[i];
        ++k;
    }
}
gdjs.escena_321_39pCode.GDPrincessObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(5).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "x");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18295532);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.escena_321_39pCode.GDPrincessObjects2 */
gdjs.escena_321_39pCode.GDnebulaObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.escena_321_39pCode.mapOfGDgdjs_9546escena_9595321_959539pCode_9546GDnebulaObjects2Objects, (( gdjs.escena_321_39pCode.GDPrincessObjects2.length === 0 ) ? 0 :gdjs.escena_321_39pCode.GDPrincessObjects2[0].getPointX("poder")) - 30, (( gdjs.escena_321_39pCode.GDPrincessObjects2.length === 0 ) ? 0 :gdjs.escena_321_39pCode.GDPrincessObjects2[0].getPointY("poder")), "");
}
{for(var i = 0, len = gdjs.escena_321_39pCode.GDnebulaObjects2.length ;i < len;++i) {
    gdjs.escena_321_39pCode.GDnebulaObjects2[i].getBehavior("Flippable").flipX(true);
}
}
{for(var i = 0, len = gdjs.escena_321_39pCode.GDnebulaObjects2.length ;i < len;++i) {
    gdjs.escena_321_39pCode.GDnebulaObjects2[i].addForce(-(300), 0, 1);
}
}
{for(var i = 0, len = gdjs.escena_321_39pCode.GDnebulaObjects2.length ;i < len;++i) {
    gdjs.escena_321_39pCode.GDnebulaObjects2[i].getBehavior("Resizable").setSize(32, 32);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Princess"), gdjs.escena_321_39pCode.GDPrincessObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.escena_321_39pCode.GDPrincessObjects1.length;i<l;++i) {
    if ( !(gdjs.escena_321_39pCode.GDPrincessObjects1[i].getBehavior("Flippable").isFlippedX()) ) {
        isConditionTrue_0 = true;
        gdjs.escena_321_39pCode.GDPrincessObjects1[k] = gdjs.escena_321_39pCode.GDPrincessObjects1[i];
        ++k;
    }
}
gdjs.escena_321_39pCode.GDPrincessObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(5).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "x");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18297412);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.escena_321_39pCode.GDPrincessObjects1 */
gdjs.escena_321_39pCode.GDnebulaObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.escena_321_39pCode.mapOfGDgdjs_9546escena_9595321_959539pCode_9546GDnebulaObjects1Objects, (( gdjs.escena_321_39pCode.GDPrincessObjects1.length === 0 ) ? 0 :gdjs.escena_321_39pCode.GDPrincessObjects1[0].getPointX("poder")), (( gdjs.escena_321_39pCode.GDPrincessObjects1.length === 0 ) ? 0 :gdjs.escena_321_39pCode.GDPrincessObjects1[0].getPointY("poder")), "");
}
{for(var i = 0, len = gdjs.escena_321_39pCode.GDnebulaObjects1.length ;i < len;++i) {
    gdjs.escena_321_39pCode.GDnebulaObjects1[i].getBehavior("Flippable").flipX(false);
}
}
{for(var i = 0, len = gdjs.escena_321_39pCode.GDnebulaObjects1.length ;i < len;++i) {
    gdjs.escena_321_39pCode.GDnebulaObjects1[i].addForce(300, 0, 1);
}
}
{for(var i = 0, len = gdjs.escena_321_39pCode.GDnebulaObjects1.length ;i < len;++i) {
    gdjs.escena_321_39pCode.GDnebulaObjects1[i].getBehavior("Resizable").setSize(32, 32);
}
}
}

}


};gdjs.escena_321_39pCode.mapOfGDgdjs_9546escena_9595321_959539pCode_9546GDPrincessObjects1Objects = Hashtable.newFrom({"Princess": gdjs.escena_321_39pCode.GDPrincessObjects1});
gdjs.escena_321_39pCode.mapOfGDgdjs_9546escena_9595321_959539pCode_9546GDStar_95959595DiamondObjects1Objects = Hashtable.newFrom({"Star_Diamond": gdjs.escena_321_39pCode.GDStar_9595DiamondObjects1});
gdjs.escena_321_39pCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Princess"), gdjs.escena_321_39pCode.GDPrincessObjects1);
gdjs.copyArray(runtimeScene.getObjects("Star_Diamond"), gdjs.escena_321_39pCode.GDStar_9595DiamondObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.escena_321_39pCode.mapOfGDgdjs_9546escena_9595321_959539pCode_9546GDPrincessObjects1Objects, gdjs.escena_321_39pCode.mapOfGDgdjs_9546escena_9595321_959539pCode_9546GDStar_95959595DiamondObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.escena_321_39pCode.GDPrincessObjects1 */
/* Reuse gdjs.escena_321_39pCode.GDStar_9595DiamondObjects1 */
gdjs.copyArray(runtimeScene.getObjects("txt_vidas"), gdjs.escena_321_39pCode.GDtxt_9595vidasObjects1);
{for(var i = 0, len = gdjs.escena_321_39pCode.GDStar_9595DiamondObjects1.length ;i < len;++i) {
    gdjs.escena_321_39pCode.GDStar_9595DiamondObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.escena_321_39pCode.GDPrincessObjects1.length ;i < len;++i) {
    gdjs.escena_321_39pCode.GDPrincessObjects1[i].getBehavior("Resizable").setSize(120, 120);
}
}
{for(var i = 0, len = gdjs.escena_321_39pCode.GDtxt_9595vidasObjects1.length ;i < len;++i) {
    gdjs.escena_321_39pCode.GDtxt_9595vidasObjects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(3).getAsString());
}
}
{runtimeScene.getGame().getVariables().getFromIndex(3).add(1);
}
}

}


};gdjs.escena_321_39pCode.mapOfGDgdjs_9546escena_9595321_959539pCode_9546GDArribaObjects2Objects = Hashtable.newFrom({"Arriba": gdjs.escena_321_39pCode.GDArribaObjects2});
gdjs.escena_321_39pCode.mapOfGDgdjs_9546escena_9595321_959539pCode_9546GDFlyObjects2Objects = Hashtable.newFrom({"Fly": gdjs.escena_321_39pCode.GDFlyObjects2});
gdjs.escena_321_39pCode.mapOfGDgdjs_9546escena_9595321_959539pCode_9546GDAbajoObjects2Objects = Hashtable.newFrom({"Abajo": gdjs.escena_321_39pCode.GDAbajoObjects2});
gdjs.escena_321_39pCode.mapOfGDgdjs_9546escena_9595321_959539pCode_9546GDFlyObjects2Objects = Hashtable.newFrom({"Fly": gdjs.escena_321_39pCode.GDFlyObjects2});
gdjs.escena_321_39pCode.mapOfGDgdjs_9546escena_9595321_959539pCode_9546GDPrincessObjects2Objects = Hashtable.newFrom({"Princess": gdjs.escena_321_39pCode.GDPrincessObjects2});
gdjs.escena_321_39pCode.mapOfGDgdjs_9546escena_9595321_959539pCode_9546GDFlyObjects2Objects = Hashtable.newFrom({"Fly": gdjs.escena_321_39pCode.GDFlyObjects2});
gdjs.escena_321_39pCode.mapOfGDgdjs_9546escena_9595321_959539pCode_9546GDnebulaObjects2Objects = Hashtable.newFrom({"nebula": gdjs.escena_321_39pCode.GDnebulaObjects2});
gdjs.escena_321_39pCode.mapOfGDgdjs_9546escena_9595321_959539pCode_9546GDFlyObjects2Objects = Hashtable.newFrom({"Fly": gdjs.escena_321_39pCode.GDFlyObjects2});
gdjs.escena_321_39pCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Arriba"), gdjs.escena_321_39pCode.GDArribaObjects2);
gdjs.copyArray(runtimeScene.getObjects("Fly"), gdjs.escena_321_39pCode.GDFlyObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.escena_321_39pCode.mapOfGDgdjs_9546escena_9595321_959539pCode_9546GDArribaObjects2Objects, gdjs.escena_321_39pCode.mapOfGDgdjs_9546escena_9595321_959539pCode_9546GDFlyObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.escena_321_39pCode.GDFlyObjects2 */
{for(var i = 0, len = gdjs.escena_321_39pCode.GDFlyObjects2.length ;i < len;++i) {
    gdjs.escena_321_39pCode.GDFlyObjects2[i].getBehavior("Flippable").flipY(true);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Fly"), gdjs.escena_321_39pCode.GDFlyObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.escena_321_39pCode.GDFlyObjects2.length;i<l;++i) {
    if ( gdjs.escena_321_39pCode.GDFlyObjects2[i].getBehavior("Flippable").isFlippedY() ) {
        isConditionTrue_0 = true;
        gdjs.escena_321_39pCode.GDFlyObjects2[k] = gdjs.escena_321_39pCode.GDFlyObjects2[i];
        ++k;
    }
}
gdjs.escena_321_39pCode.GDFlyObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.escena_321_39pCode.GDFlyObjects2 */
{for(var i = 0, len = gdjs.escena_321_39pCode.GDFlyObjects2.length ;i < len;++i) {
    gdjs.escena_321_39pCode.GDFlyObjects2[i].setCenterYInScene(gdjs.escena_321_39pCode.GDFlyObjects2[i].getCenterYInScene() - (1));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Abajo"), gdjs.escena_321_39pCode.GDAbajoObjects2);
gdjs.copyArray(runtimeScene.getObjects("Fly"), gdjs.escena_321_39pCode.GDFlyObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.escena_321_39pCode.mapOfGDgdjs_9546escena_9595321_959539pCode_9546GDAbajoObjects2Objects, gdjs.escena_321_39pCode.mapOfGDgdjs_9546escena_9595321_959539pCode_9546GDFlyObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.escena_321_39pCode.GDFlyObjects2 */
{for(var i = 0, len = gdjs.escena_321_39pCode.GDFlyObjects2.length ;i < len;++i) {
    gdjs.escena_321_39pCode.GDFlyObjects2[i].getBehavior("Flippable").flipY(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Fly"), gdjs.escena_321_39pCode.GDFlyObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.escena_321_39pCode.GDFlyObjects2.length;i<l;++i) {
    if ( !(gdjs.escena_321_39pCode.GDFlyObjects2[i].getBehavior("Flippable").isFlippedY()) ) {
        isConditionTrue_0 = true;
        gdjs.escena_321_39pCode.GDFlyObjects2[k] = gdjs.escena_321_39pCode.GDFlyObjects2[i];
        ++k;
    }
}
gdjs.escena_321_39pCode.GDFlyObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.escena_321_39pCode.GDFlyObjects2 */
{for(var i = 0, len = gdjs.escena_321_39pCode.GDFlyObjects2.length ;i < len;++i) {
    gdjs.escena_321_39pCode.GDFlyObjects2[i].setY(gdjs.escena_321_39pCode.GDFlyObjects2[i].getY() + (1));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Fly"), gdjs.escena_321_39pCode.GDFlyObjects2);
gdjs.copyArray(runtimeScene.getObjects("Princess"), gdjs.escena_321_39pCode.GDPrincessObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.escena_321_39pCode.mapOfGDgdjs_9546escena_9595321_959539pCode_9546GDPrincessObjects2Objects, gdjs.escena_321_39pCode.mapOfGDgdjs_9546escena_9595321_959539pCode_9546GDFlyObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameOver", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Fly"), gdjs.escena_321_39pCode.GDFlyObjects2);
gdjs.copyArray(runtimeScene.getObjects("nebula"), gdjs.escena_321_39pCode.GDnebulaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.escena_321_39pCode.mapOfGDgdjs_9546escena_9595321_959539pCode_9546GDnebulaObjects2Objects, gdjs.escena_321_39pCode.mapOfGDgdjs_9546escena_9595321_959539pCode_9546GDFlyObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18304212);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.escena_321_39pCode.GDFlyObjects2 */
{for(var i = 0, len = gdjs.escena_321_39pCode.GDFlyObjects2.length ;i < len;++i) {
    gdjs.escena_321_39pCode.GDFlyObjects2[i].returnVariable(gdjs.escena_321_39pCode.GDFlyObjects2[i].getVariables().getFromIndex(0)).sub(1);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Fly"), gdjs.escena_321_39pCode.GDFlyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.escena_321_39pCode.GDFlyObjects1.length;i<l;++i) {
    if ( gdjs.escena_321_39pCode.GDFlyObjects1[i].getVariableNumber(gdjs.escena_321_39pCode.GDFlyObjects1[i].getVariables().getFromIndex(0)) < 1 ) {
        isConditionTrue_0 = true;
        gdjs.escena_321_39pCode.GDFlyObjects1[k] = gdjs.escena_321_39pCode.GDFlyObjects1[i];
        ++k;
    }
}
gdjs.escena_321_39pCode.GDFlyObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18305556);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.escena_321_39pCode.GDFlyObjects1 */
{for(var i = 0, len = gdjs.escena_321_39pCode.GDFlyObjects1.length ;i < len;++i) {
    gdjs.escena_321_39pCode.GDFlyObjects1[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "SOUND.mp3", false, 100, 1);
}
}

}


};gdjs.escena_321_39pCode.mapOfGDgdjs_9546escena_9595321_959539pCode_9546GDDerechaObjects2Objects = Hashtable.newFrom({"Derecha": gdjs.escena_321_39pCode.GDDerechaObjects2});
gdjs.escena_321_39pCode.mapOfGDgdjs_9546escena_9595321_959539pCode_9546GDMonsterObjects2Objects = Hashtable.newFrom({"Monster": gdjs.escena_321_39pCode.GDMonsterObjects2});
gdjs.escena_321_39pCode.mapOfGDgdjs_9546escena_9595321_959539pCode_9546GDDerechaObjects2Objects = Hashtable.newFrom({"Derecha": gdjs.escena_321_39pCode.GDDerechaObjects2});
gdjs.escena_321_39pCode.mapOfGDgdjs_9546escena_9595321_959539pCode_9546GDMonsterObjects2Objects = Hashtable.newFrom({"Monster": gdjs.escena_321_39pCode.GDMonsterObjects2});
gdjs.escena_321_39pCode.mapOfGDgdjs_9546escena_9595321_959539pCode_9546GDIzquierdaObjects2Objects = Hashtable.newFrom({"Izquierda": gdjs.escena_321_39pCode.GDIzquierdaObjects2});
gdjs.escena_321_39pCode.mapOfGDgdjs_9546escena_9595321_959539pCode_9546GDMonsterObjects2Objects = Hashtable.newFrom({"Monster": gdjs.escena_321_39pCode.GDMonsterObjects2});
gdjs.escena_321_39pCode.mapOfGDgdjs_9546escena_9595321_959539pCode_9546GDPrincessObjects2Objects = Hashtable.newFrom({"Princess": gdjs.escena_321_39pCode.GDPrincessObjects2});
gdjs.escena_321_39pCode.mapOfGDgdjs_9546escena_9595321_959539pCode_9546GDMonsterObjects2Objects = Hashtable.newFrom({"Monster": gdjs.escena_321_39pCode.GDMonsterObjects2});
gdjs.escena_321_39pCode.mapOfGDgdjs_9546escena_9595321_959539pCode_9546GDnebulaObjects2Objects = Hashtable.newFrom({"nebula": gdjs.escena_321_39pCode.GDnebulaObjects2});
gdjs.escena_321_39pCode.mapOfGDgdjs_9546escena_9595321_959539pCode_9546GDMonsterObjects2Objects = Hashtable.newFrom({"Monster": gdjs.escena_321_39pCode.GDMonsterObjects2});
gdjs.escena_321_39pCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Derecha"), gdjs.escena_321_39pCode.GDDerechaObjects2);
gdjs.copyArray(runtimeScene.getObjects("Monster"), gdjs.escena_321_39pCode.GDMonsterObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.escena_321_39pCode.mapOfGDgdjs_9546escena_9595321_959539pCode_9546GDDerechaObjects2Objects, gdjs.escena_321_39pCode.mapOfGDgdjs_9546escena_9595321_959539pCode_9546GDMonsterObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.escena_321_39pCode.GDMonsterObjects2 */
{for(var i = 0, len = gdjs.escena_321_39pCode.GDMonsterObjects2.length ;i < len;++i) {
    gdjs.escena_321_39pCode.GDMonsterObjects2[i].getBehavior("Flippable").flipX(true);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Derecha"), gdjs.escena_321_39pCode.GDDerechaObjects2);
gdjs.copyArray(runtimeScene.getObjects("Monster"), gdjs.escena_321_39pCode.GDMonsterObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.escena_321_39pCode.mapOfGDgdjs_9546escena_9595321_959539pCode_9546GDDerechaObjects2Objects, gdjs.escena_321_39pCode.mapOfGDgdjs_9546escena_9595321_959539pCode_9546GDMonsterObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.escena_321_39pCode.GDMonsterObjects2 */
{for(var i = 0, len = gdjs.escena_321_39pCode.GDMonsterObjects2.length ;i < len;++i) {
    gdjs.escena_321_39pCode.GDMonsterObjects2[i].getBehavior("Flippable").flipX(true);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Monster"), gdjs.escena_321_39pCode.GDMonsterObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.escena_321_39pCode.GDMonsterObjects2.length;i<l;++i) {
    if ( gdjs.escena_321_39pCode.GDMonsterObjects2[i].getBehavior("Flippable").isFlippedX() ) {
        isConditionTrue_0 = true;
        gdjs.escena_321_39pCode.GDMonsterObjects2[k] = gdjs.escena_321_39pCode.GDMonsterObjects2[i];
        ++k;
    }
}
gdjs.escena_321_39pCode.GDMonsterObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.escena_321_39pCode.GDMonsterObjects2 */
{for(var i = 0, len = gdjs.escena_321_39pCode.GDMonsterObjects2.length ;i < len;++i) {
    gdjs.escena_321_39pCode.GDMonsterObjects2[i].setX(gdjs.escena_321_39pCode.GDMonsterObjects2[i].getX() + (1));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Izquierda"), gdjs.escena_321_39pCode.GDIzquierdaObjects2);
gdjs.copyArray(runtimeScene.getObjects("Monster"), gdjs.escena_321_39pCode.GDMonsterObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.escena_321_39pCode.mapOfGDgdjs_9546escena_9595321_959539pCode_9546GDIzquierdaObjects2Objects, gdjs.escena_321_39pCode.mapOfGDgdjs_9546escena_9595321_959539pCode_9546GDMonsterObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.escena_321_39pCode.GDMonsterObjects2 */
{for(var i = 0, len = gdjs.escena_321_39pCode.GDMonsterObjects2.length ;i < len;++i) {
    gdjs.escena_321_39pCode.GDMonsterObjects2[i].getBehavior("Flippable").flipX(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Monster"), gdjs.escena_321_39pCode.GDMonsterObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.escena_321_39pCode.GDMonsterObjects2.length;i<l;++i) {
    if ( !(gdjs.escena_321_39pCode.GDMonsterObjects2[i].getBehavior("Flippable").isFlippedX()) ) {
        isConditionTrue_0 = true;
        gdjs.escena_321_39pCode.GDMonsterObjects2[k] = gdjs.escena_321_39pCode.GDMonsterObjects2[i];
        ++k;
    }
}
gdjs.escena_321_39pCode.GDMonsterObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.escena_321_39pCode.GDMonsterObjects2 */
{for(var i = 0, len = gdjs.escena_321_39pCode.GDMonsterObjects2.length ;i < len;++i) {
    gdjs.escena_321_39pCode.GDMonsterObjects2[i].setX(gdjs.escena_321_39pCode.GDMonsterObjects2[i].getX() - (1));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Monster"), gdjs.escena_321_39pCode.GDMonsterObjects2);
gdjs.copyArray(runtimeScene.getObjects("Princess"), gdjs.escena_321_39pCode.GDPrincessObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.escena_321_39pCode.mapOfGDgdjs_9546escena_9595321_959539pCode_9546GDPrincessObjects2Objects, gdjs.escena_321_39pCode.mapOfGDgdjs_9546escena_9595321_959539pCode_9546GDMonsterObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameOver", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Monster"), gdjs.escena_321_39pCode.GDMonsterObjects2);
gdjs.copyArray(runtimeScene.getObjects("nebula"), gdjs.escena_321_39pCode.GDnebulaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.escena_321_39pCode.mapOfGDgdjs_9546escena_9595321_959539pCode_9546GDnebulaObjects2Objects, gdjs.escena_321_39pCode.mapOfGDgdjs_9546escena_9595321_959539pCode_9546GDMonsterObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18310780);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.escena_321_39pCode.GDMonsterObjects2 */
{for(var i = 0, len = gdjs.escena_321_39pCode.GDMonsterObjects2.length ;i < len;++i) {
    gdjs.escena_321_39pCode.GDMonsterObjects2[i].returnVariable(gdjs.escena_321_39pCode.GDMonsterObjects2[i].getVariables().getFromIndex(0)).sub(1);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Monster"), gdjs.escena_321_39pCode.GDMonsterObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.escena_321_39pCode.GDMonsterObjects2.length;i<l;++i) {
    if ( gdjs.escena_321_39pCode.GDMonsterObjects2[i].getVariableNumber(gdjs.escena_321_39pCode.GDMonsterObjects2[i].getVariables().getFromIndex(0)) < 1 ) {
        isConditionTrue_0 = true;
        gdjs.escena_321_39pCode.GDMonsterObjects2[k] = gdjs.escena_321_39pCode.GDMonsterObjects2[i];
        ++k;
    }
}
gdjs.escena_321_39pCode.GDMonsterObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.escena_321_39pCode.GDMonsterObjects2 */
{for(var i = 0, len = gdjs.escena_321_39pCode.GDMonsterObjects2.length ;i < len;++i) {
    gdjs.escena_321_39pCode.GDMonsterObjects2[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "SOUND.mp3", false, 100, 1);
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Princess"), gdjs.escena_321_39pCode.GDPrincessObjects1);
{for(var i = 0, len = gdjs.escena_321_39pCode.GDPrincessObjects1.length ;i < len;++i) {
    gdjs.escena_321_39pCode.GDPrincessObjects1[i].getBehavior("Resizable").setSize(100, 100);
}
}
}

}


};gdjs.escena_321_39pCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 0.75, "", 0);
}
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 0.75, "Tileset", 0);
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Princess"), gdjs.escena_321_39pCode.GDPrincessObjects2);
{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.escena_321_39pCode.GDPrincessObjects2.length === 0 ) ? 0 :gdjs.escena_321_39pCode.GDPrincessObjects2[0].getPointX("")), "", 0);
}
{gdjs.evtTools.camera.setCameraY(runtimeScene, (( gdjs.escena_321_39pCode.GDPrincessObjects2.length === 0 ) ? 0 :gdjs.escena_321_39pCode.GDPrincessObjects2[0].getPointY("")), "", 0);
}
{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.escena_321_39pCode.GDPrincessObjects2.length === 0 ) ? 0 :gdjs.escena_321_39pCode.GDPrincessObjects2[0].getPointX("")), "TileSet", 0);
}
{gdjs.evtTools.camera.setCameraY(runtimeScene, (( gdjs.escena_321_39pCode.GDPrincessObjects2.length === 0 ) ? 0 :gdjs.escena_321_39pCode.GDPrincessObjects2[0].getPointY("")), "TileSet", 0);
}
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.camera.clampCamera(runtimeScene, 0, -(300), 1440, 300, "", 0);
}
{gdjs.evtTools.camera.clampCamera(runtimeScene, 0, -(300), 1440, 300, "TileSet", 0);
}
}

}


};gdjs.escena_321_39pCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Abajo"), gdjs.escena_321_39pCode.GDAbajoObjects1);
gdjs.copyArray(runtimeScene.getObjects("Arriba"), gdjs.escena_321_39pCode.GDArribaObjects1);
gdjs.copyArray(runtimeScene.getObjects("Derecha"), gdjs.escena_321_39pCode.GDDerechaObjects1);
gdjs.copyArray(runtimeScene.getObjects("Izquierda"), gdjs.escena_321_39pCode.GDIzquierdaObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite"), gdjs.escena_321_39pCode.GDNewTiledSpriteObjects1);
{for(var i = 0, len = gdjs.escena_321_39pCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.escena_321_39pCode.GDNewTiledSpriteObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.escena_321_39pCode.GDDerechaObjects1.length ;i < len;++i) {
    gdjs.escena_321_39pCode.GDDerechaObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.escena_321_39pCode.GDIzquierdaObjects1.length ;i < len;++i) {
    gdjs.escena_321_39pCode.GDIzquierdaObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.escena_321_39pCode.GDAbajoObjects1.length ;i < len;++i) {
    gdjs.escena_321_39pCode.GDAbajoObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.escena_321_39pCode.GDArribaObjects1.length ;i < len;++i) {
    gdjs.escena_321_39pCode.GDArribaObjects1[i].hide();
}
}
}

}


};gdjs.escena_321_39pCode.mapOfGDgdjs_9546escena_9595321_959539pCode_9546GDPrincessObjects1Objects = Hashtable.newFrom({"Princess": gdjs.escena_321_39pCode.GDPrincessObjects1});
gdjs.escena_321_39pCode.mapOfGDgdjs_9546escena_9595321_959539pCode_9546GDFlag_95959595BlueObjects1Objects = Hashtable.newFrom({"Flag_Blue": gdjs.escena_321_39pCode.GDFlag_9595BlueObjects1});
gdjs.escena_321_39pCode.eventsList8 = function(runtimeScene) {

{


gdjs.escena_321_39pCode.eventsList0(runtimeScene);
}


{


gdjs.escena_321_39pCode.eventsList1(runtimeScene);
}


{


gdjs.escena_321_39pCode.eventsList2(runtimeScene);
}


{


gdjs.escena_321_39pCode.eventsList3(runtimeScene);
}


{


gdjs.escena_321_39pCode.eventsList4(runtimeScene);
}


{


gdjs.escena_321_39pCode.eventsList5(runtimeScene);
}


{


gdjs.escena_321_39pCode.eventsList6(runtimeScene);
}


{


gdjs.escena_321_39pCode.eventsList7(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Flag_Blue"), gdjs.escena_321_39pCode.GDFlag_9595BlueObjects1);
gdjs.copyArray(runtimeScene.getObjects("Princess"), gdjs.escena_321_39pCode.GDPrincessObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.escena_321_39pCode.mapOfGDgdjs_9546escena_9595321_959539pCode_9546GDPrincessObjects1Objects, gdjs.escena_321_39pCode.mapOfGDgdjs_9546escena_9595321_959539pCode_9546GDFlag_95959595BlueObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.escena_321_39pCode.GDFlag_9595BlueObjects1 */
{for(var i = 0, len = gdjs.escena_321_39pCode.GDFlag_9595BlueObjects1.length ;i < len;++i) {
    gdjs.escena_321_39pCode.GDFlag_9595BlueObjects1[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "escena 2'p", false);
}
}

}


};

gdjs.escena_321_39pCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.escena_321_39pCode.GDFlyObjects1.length = 0;
gdjs.escena_321_39pCode.GDFlyObjects2.length = 0;
gdjs.escena_321_39pCode.GDFlyObjects3.length = 0;
gdjs.escena_321_39pCode.GDMonsterObjects1.length = 0;
gdjs.escena_321_39pCode.GDMonsterObjects2.length = 0;
gdjs.escena_321_39pCode.GDMonsterObjects3.length = 0;
gdjs.escena_321_39pCode.GDWinter_9595Tile_9595Platform_9595CenterObjects1.length = 0;
gdjs.escena_321_39pCode.GDWinter_9595Tile_9595Platform_9595CenterObjects2.length = 0;
gdjs.escena_321_39pCode.GDWinter_9595Tile_9595Platform_9595CenterObjects3.length = 0;
gdjs.escena_321_39pCode.GDNewTiledSprite2Objects1.length = 0;
gdjs.escena_321_39pCode.GDNewTiledSprite2Objects2.length = 0;
gdjs.escena_321_39pCode.GDNewTiledSprite2Objects3.length = 0;
gdjs.escena_321_39pCode.GDIzquierdaObjects1.length = 0;
gdjs.escena_321_39pCode.GDIzquierdaObjects2.length = 0;
gdjs.escena_321_39pCode.GDIzquierdaObjects3.length = 0;
gdjs.escena_321_39pCode.GDDerechaObjects1.length = 0;
gdjs.escena_321_39pCode.GDDerechaObjects2.length = 0;
gdjs.escena_321_39pCode.GDDerechaObjects3.length = 0;
gdjs.escena_321_39pCode.GDAbajoObjects1.length = 0;
gdjs.escena_321_39pCode.GDAbajoObjects2.length = 0;
gdjs.escena_321_39pCode.GDAbajoObjects3.length = 0;
gdjs.escena_321_39pCode.GDArribaObjects1.length = 0;
gdjs.escena_321_39pCode.GDArribaObjects2.length = 0;
gdjs.escena_321_39pCode.GDArribaObjects3.length = 0;
gdjs.escena_321_39pCode.GDGold_9595CoinObjects1.length = 0;
gdjs.escena_321_39pCode.GDGold_9595CoinObjects2.length = 0;
gdjs.escena_321_39pCode.GDGold_9595CoinObjects3.length = 0;
gdjs.escena_321_39pCode.GDtxt_9595vidasObjects1.length = 0;
gdjs.escena_321_39pCode.GDtxt_9595vidasObjects2.length = 0;
gdjs.escena_321_39pCode.GDtxt_9595vidasObjects3.length = 0;
gdjs.escena_321_39pCode.GDtxt_9595monedasObjects1.length = 0;
gdjs.escena_321_39pCode.GDtxt_9595monedasObjects2.length = 0;
gdjs.escena_321_39pCode.GDtxt_9595monedasObjects3.length = 0;
gdjs.escena_321_39pCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.escena_321_39pCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.escena_321_39pCode.GDNewTiledSpriteObjects3.length = 0;
gdjs.escena_321_39pCode.GDCastles_9595BackgroundObjects1.length = 0;
gdjs.escena_321_39pCode.GDCastles_9595BackgroundObjects2.length = 0;
gdjs.escena_321_39pCode.GDCastles_9595BackgroundObjects3.length = 0;
gdjs.escena_321_39pCode.GDStar_9595DiamondObjects1.length = 0;
gdjs.escena_321_39pCode.GDStar_9595DiamondObjects2.length = 0;
gdjs.escena_321_39pCode.GDStar_9595DiamondObjects3.length = 0;
gdjs.escena_321_39pCode.GDPrincessObjects1.length = 0;
gdjs.escena_321_39pCode.GDPrincessObjects2.length = 0;
gdjs.escena_321_39pCode.GDPrincessObjects3.length = 0;
gdjs.escena_321_39pCode.GDFlag_9595BlueObjects1.length = 0;
gdjs.escena_321_39pCode.GDFlag_9595BlueObjects2.length = 0;
gdjs.escena_321_39pCode.GDFlag_9595BlueObjects3.length = 0;
gdjs.escena_321_39pCode.GDWitchObjects1.length = 0;
gdjs.escena_321_39pCode.GDWitchObjects2.length = 0;
gdjs.escena_321_39pCode.GDWitchObjects3.length = 0;
gdjs.escena_321_39pCode.GDMonsterObjects1.length = 0;
gdjs.escena_321_39pCode.GDMonsterObjects2.length = 0;
gdjs.escena_321_39pCode.GDMonsterObjects3.length = 0;
gdjs.escena_321_39pCode.GDFlyObjects1.length = 0;
gdjs.escena_321_39pCode.GDFlyObjects2.length = 0;
gdjs.escena_321_39pCode.GDFlyObjects3.length = 0;
gdjs.escena_321_39pCode.GDnebulaObjects1.length = 0;
gdjs.escena_321_39pCode.GDnebulaObjects2.length = 0;
gdjs.escena_321_39pCode.GDnebulaObjects3.length = 0;
gdjs.escena_321_39pCode.GDBlueExplosionObjects1.length = 0;
gdjs.escena_321_39pCode.GDBlueExplosionObjects2.length = 0;
gdjs.escena_321_39pCode.GDBlueExplosionObjects3.length = 0;
gdjs.escena_321_39pCode.GDFireballObjects1.length = 0;
gdjs.escena_321_39pCode.GDFireballObjects2.length = 0;
gdjs.escena_321_39pCode.GDFireballObjects3.length = 0;

gdjs.escena_321_39pCode.eventsList8(runtimeScene);
gdjs.escena_321_39pCode.GDFlyObjects1.length = 0;
gdjs.escena_321_39pCode.GDFlyObjects2.length = 0;
gdjs.escena_321_39pCode.GDFlyObjects3.length = 0;
gdjs.escena_321_39pCode.GDMonsterObjects1.length = 0;
gdjs.escena_321_39pCode.GDMonsterObjects2.length = 0;
gdjs.escena_321_39pCode.GDMonsterObjects3.length = 0;
gdjs.escena_321_39pCode.GDWinter_9595Tile_9595Platform_9595CenterObjects1.length = 0;
gdjs.escena_321_39pCode.GDWinter_9595Tile_9595Platform_9595CenterObjects2.length = 0;
gdjs.escena_321_39pCode.GDWinter_9595Tile_9595Platform_9595CenterObjects3.length = 0;
gdjs.escena_321_39pCode.GDNewTiledSprite2Objects1.length = 0;
gdjs.escena_321_39pCode.GDNewTiledSprite2Objects2.length = 0;
gdjs.escena_321_39pCode.GDNewTiledSprite2Objects3.length = 0;
gdjs.escena_321_39pCode.GDIzquierdaObjects1.length = 0;
gdjs.escena_321_39pCode.GDIzquierdaObjects2.length = 0;
gdjs.escena_321_39pCode.GDIzquierdaObjects3.length = 0;
gdjs.escena_321_39pCode.GDDerechaObjects1.length = 0;
gdjs.escena_321_39pCode.GDDerechaObjects2.length = 0;
gdjs.escena_321_39pCode.GDDerechaObjects3.length = 0;
gdjs.escena_321_39pCode.GDAbajoObjects1.length = 0;
gdjs.escena_321_39pCode.GDAbajoObjects2.length = 0;
gdjs.escena_321_39pCode.GDAbajoObjects3.length = 0;
gdjs.escena_321_39pCode.GDArribaObjects1.length = 0;
gdjs.escena_321_39pCode.GDArribaObjects2.length = 0;
gdjs.escena_321_39pCode.GDArribaObjects3.length = 0;
gdjs.escena_321_39pCode.GDGold_9595CoinObjects1.length = 0;
gdjs.escena_321_39pCode.GDGold_9595CoinObjects2.length = 0;
gdjs.escena_321_39pCode.GDGold_9595CoinObjects3.length = 0;
gdjs.escena_321_39pCode.GDtxt_9595vidasObjects1.length = 0;
gdjs.escena_321_39pCode.GDtxt_9595vidasObjects2.length = 0;
gdjs.escena_321_39pCode.GDtxt_9595vidasObjects3.length = 0;
gdjs.escena_321_39pCode.GDtxt_9595monedasObjects1.length = 0;
gdjs.escena_321_39pCode.GDtxt_9595monedasObjects2.length = 0;
gdjs.escena_321_39pCode.GDtxt_9595monedasObjects3.length = 0;
gdjs.escena_321_39pCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.escena_321_39pCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.escena_321_39pCode.GDNewTiledSpriteObjects3.length = 0;
gdjs.escena_321_39pCode.GDCastles_9595BackgroundObjects1.length = 0;
gdjs.escena_321_39pCode.GDCastles_9595BackgroundObjects2.length = 0;
gdjs.escena_321_39pCode.GDCastles_9595BackgroundObjects3.length = 0;
gdjs.escena_321_39pCode.GDStar_9595DiamondObjects1.length = 0;
gdjs.escena_321_39pCode.GDStar_9595DiamondObjects2.length = 0;
gdjs.escena_321_39pCode.GDStar_9595DiamondObjects3.length = 0;
gdjs.escena_321_39pCode.GDPrincessObjects1.length = 0;
gdjs.escena_321_39pCode.GDPrincessObjects2.length = 0;
gdjs.escena_321_39pCode.GDPrincessObjects3.length = 0;
gdjs.escena_321_39pCode.GDFlag_9595BlueObjects1.length = 0;
gdjs.escena_321_39pCode.GDFlag_9595BlueObjects2.length = 0;
gdjs.escena_321_39pCode.GDFlag_9595BlueObjects3.length = 0;
gdjs.escena_321_39pCode.GDWitchObjects1.length = 0;
gdjs.escena_321_39pCode.GDWitchObjects2.length = 0;
gdjs.escena_321_39pCode.GDWitchObjects3.length = 0;
gdjs.escena_321_39pCode.GDMonsterObjects1.length = 0;
gdjs.escena_321_39pCode.GDMonsterObjects2.length = 0;
gdjs.escena_321_39pCode.GDMonsterObjects3.length = 0;
gdjs.escena_321_39pCode.GDFlyObjects1.length = 0;
gdjs.escena_321_39pCode.GDFlyObjects2.length = 0;
gdjs.escena_321_39pCode.GDFlyObjects3.length = 0;
gdjs.escena_321_39pCode.GDnebulaObjects1.length = 0;
gdjs.escena_321_39pCode.GDnebulaObjects2.length = 0;
gdjs.escena_321_39pCode.GDnebulaObjects3.length = 0;
gdjs.escena_321_39pCode.GDBlueExplosionObjects1.length = 0;
gdjs.escena_321_39pCode.GDBlueExplosionObjects2.length = 0;
gdjs.escena_321_39pCode.GDBlueExplosionObjects3.length = 0;
gdjs.escena_321_39pCode.GDFireballObjects1.length = 0;
gdjs.escena_321_39pCode.GDFireballObjects2.length = 0;
gdjs.escena_321_39pCode.GDFireballObjects3.length = 0;


return;

}

gdjs['escena_321_39pCode'] = gdjs.escena_321_39pCode;
