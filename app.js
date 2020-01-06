/*IMPORTANT STATS
    the radius of the circle in which the eye can move is 130px;

    work out the angle of the mouse from the center point of the div
    and we can use the angle to find out the position of the eye according to the angle

    note: the skew of the eye only works when the eye is not on any of the AXIS 
    the height and the width of the iris will change as we move the eye from left to right
    and the skew of the iris will change as we move the eye from diagonal to diagonal.
*/

/* 
    OBSERVATIONS:
    Translate Y : 0px , TraslateX: 130px ,SkewX: 0,SkewY: 0, width: 25% , height: 40% (right most)
    Translate Y : 89px  , TraslateX: 89px ,SkewX: -20deg ,SkewY: 0deg, (right bottom corner)
    Translate Y :  , TraslateX: ,SkewX: ,SkewY: ,
    Translate Y :  , TraslateX: ,SkewX: ,SkewY: ,
    Translate Y :  , TraslateX: ,SkewX: ,SkewY: ,
    Translate Y :  , TraslateX: ,SkewX: ,SkewY: ,
    Translate Y :  , TraslateX: ,SkewX: ,SkewY: ,
  */

var eyes = document.getElementsByClassName("eye");
