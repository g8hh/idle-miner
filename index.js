(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_1", frames: [[0,0,277,151],[0,153,223,115],[225,153,123,168]]},
		{name:"index_atlas_2", frames: [[125,0,174,98],[125,100,176,95],[125,197,176,95],[125,294,176,95],[0,0,123,168],[0,170,123,168]]},
		{name:"index_atlas_3", frames: [[0,308,116,80],[0,119,107,120],[306,119,91,105],[306,226,91,105],[205,253,93,107],[0,253,203,53],[109,119,195,65],[109,186,195,65],[0,0,128,117],[130,0,128,117],[260,0,128,117]]},
		{name:"index_atlas_4", frames: [[216,225,163,45],[289,77,106,72],[169,100,106,72],[277,151,106,72],[0,224,102,66],[0,150,106,72],[104,248,102,66],[108,174,106,72],[0,292,102,66],[104,316,102,66],[208,272,102,66],[289,0,106,75],[0,0,118,72],[120,0,167,48],[120,50,167,48],[0,100,167,48]]},
		{name:"index_atlas_5", frames: [[186,313,62,55],[250,313,62,55],[314,313,62,55],[0,0,102,66],[104,0,102,66],[208,0,102,66],[0,68,102,66],[104,68,102,66],[208,68,102,66],[0,136,102,66],[104,136,102,66],[208,136,102,66],[0,204,102,66],[104,204,102,66],[208,204,102,66],[0,272,156,31],[312,74,63,63],[312,139,63,63],[312,204,63,63],[121,313,63,63],[158,272,119,39],[279,272,119,39],[0,305,119,39],[312,0,66,72]]},
		{name:"index_atlas_6", frames: [[96,339,45,32],[260,185,52,36],[314,185,52,36],[233,223,52,36],[143,339,45,32],[341,269,45,32],[0,0,58,58],[0,60,58,58],[50,306,44,46],[50,354,44,46],[100,254,44,46],[360,94,31,44],[271,159,83,24],[148,221,83,24],[148,247,83,24],[146,273,82,24],[287,223,52,36],[233,261,52,36],[287,261,52,36],[360,53,40,39],[288,299,34,39],[324,303,34,39],[360,303,34,39],[360,140,34,39],[190,350,34,39],[296,344,40,31],[150,179,50,40],[100,206,46,46],[226,350,33,38],[261,350,33,38],[146,299,69,23],[50,212,48,45],[100,159,48,45],[50,259,48,45],[0,120,48,51],[217,299,69,23],[60,53,48,51],[111,0,48,51],[0,173,48,51],[60,0,49,51],[110,53,48,51],[161,0,48,51],[0,226,48,51],[160,53,48,51],[211,0,48,51],[0,279,48,51],[210,53,48,51],[261,0,48,51],[0,332,48,51],[260,53,48,51],[311,0,48,51],[310,53,48,51],[60,106,48,51],[110,106,48,51],[160,106,48,51],[210,106,48,51],[341,223,42,44],[260,106,48,51],[310,106,48,51],[361,0,39,42],[50,159,48,51],[96,373,59,24],[96,324,113,13],[211,324,59,24],[150,159,119,18],[338,344,31,39],[202,179,56,35]]},
		{name:"index_atlas_7", frames: [[38,0,34,34],[74,0,34,34],[110,34,42,27],[154,34,42,27],[123,109,29,29],[154,109,29,29],[185,109,29,29],[110,0,36,32],[148,0,36,32],[186,0,36,32],[216,109,29,29],[0,120,29,29],[31,120,29,29],[0,35,33,34],[106,63,28,36],[62,125,29,29],[93,140,29,29],[166,63,30,30],[124,140,27,30],[0,72,39,22],[41,72,39,22],[198,73,39,22],[0,96,39,22],[0,0,36,33],[153,140,46,17],[41,96,39,22],[136,63,28,34],[82,101,39,22],[70,36,34,32],[35,36,33,34],[201,140,19,32],[224,0,32,36],[249,70,4,4],[231,38,25,30],[136,99,108,8],[82,70,17,19],[249,76,4,4],[239,70,8,11],[198,38,31,33]]}
];


(lib.AnMovieClip = function(){
	this.currentSoundStreamInMovieclip;
	this.actionFrames = [];
	this.soundStreamDuration = new Map();
	this.streamSoundSymbolsList = [];

	this.gotoAndPlayForStreamSoundSync = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.gotoAndPlay = function(positionOrLabel){
		this.clearAllSoundStreams();
		this.startStreamSoundsForTargetedFrame(positionOrLabel);
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		this.clearAllSoundStreams();
		this.startStreamSoundsForTargetedFrame(this.currentFrame);
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
		this.clearAllSoundStreams();
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
		this.clearAllSoundStreams();
	}
	this.startStreamSoundsForTargetedFrame = function(targetFrame){
		for(var index=0; index<this.streamSoundSymbolsList.length; index++){
			if(index <= targetFrame && this.streamSoundSymbolsList[index] != undefined){
				for(var i=0; i<this.streamSoundSymbolsList[index].length; i++){
					var sound = this.streamSoundSymbolsList[index][i];
					if(sound.endFrame > targetFrame){
						var targetPosition = Math.abs((((targetFrame - sound.startFrame)/lib.properties.fps) * 1000));
						var instance = playSound(sound.id);
						var remainingLoop = 0;
						if(sound.offset){
							targetPosition = targetPosition + sound.offset;
						}
						else if(sound.loop > 1){
							var loop = targetPosition /instance.duration;
							remainingLoop = Math.floor(sound.loop - loop);
							if(targetPosition == 0){ remainingLoop -= 1; }
							targetPosition = targetPosition % instance.duration;
						}
						instance.loop = remainingLoop;
						instance.position = Math.round(targetPosition);
						this.InsertIntoSoundStreamData(instance, sound.startFrame, sound.endFrame, sound.loop , sound.offset);
					}
				}
			}
		}
	}
	this.InsertIntoSoundStreamData = function(soundInstance, startIndex, endIndex, loopValue, offsetValue){ 
 		this.soundStreamDuration.set({instance:soundInstance}, {start: startIndex, end:endIndex, loop:loopValue, offset:offsetValue});
	}
	this.clearAllSoundStreams = function(){
		var keys = this.soundStreamDuration.keys();
		for(var i = 0;i<this.soundStreamDuration.size; i++){
			var key = keys.next().value;
			key.instance.stop();
		}
 		this.soundStreamDuration.clear();
		this.currentSoundStreamInMovieclip = undefined;
	}
	this.stopSoundStreams = function(currentFrame){
		if(this.soundStreamDuration.size > 0){
			var keys = this.soundStreamDuration.keys();
			for(var i = 0; i< this.soundStreamDuration.size ; i++){
				var key = keys.next().value; 
				var value = this.soundStreamDuration.get(key);
				if((value.end) == currentFrame){
					key.instance.stop();
					if(this.currentSoundStreamInMovieclip == key) { this.currentSoundStreamInMovieclip = undefined; }
					this.soundStreamDuration.delete(key);
				}
			}
		}
	}

	this.computeCurrentSoundStreamInstance = function(currentFrame){
		if(this.currentSoundStreamInMovieclip == undefined){
			if(this.soundStreamDuration.size > 0){
				var keys = this.soundStreamDuration.keys();
				var maxDuration = 0;
				for(var i=0;i<this.soundStreamDuration.size;i++){
					var key = keys.next().value;
					var value = this.soundStreamDuration.get(key);
					if(value.end > maxDuration){
						maxDuration = value.end;
						this.currentSoundStreamInMovieclip = key;
					}
				}
			}
		}
	}
	this.getDesiredFrame = function(currentFrame, calculatedDesiredFrame){
		for(var frameIndex in this.actionFrames){
			if((frameIndex > currentFrame) && (frameIndex < calculatedDesiredFrame)){
				return frameIndex;
			}
		}
		return calculatedDesiredFrame;
	}

	this.syncStreamSounds = function(){
		this.stopSoundStreams(this.currentFrame);
		this.computeCurrentSoundStreamInstance(this.currentFrame);
		if(this.currentSoundStreamInMovieclip != undefined){
			var soundInstance = this.currentSoundStreamInMovieclip.instance;
			if(soundInstance.position != 0){
				var soundValue = this.soundStreamDuration.get(this.currentSoundStreamInMovieclip);
				var soundPosition = (soundValue.offset?(soundInstance.position - soundValue.offset): soundInstance.position);
				var calculatedDesiredFrame = (soundValue.start)+((soundPosition/1000) * lib.properties.fps);
				if(soundValue.loop > 1){
					calculatedDesiredFrame +=(((((soundValue.loop - soundInstance.loop -1)*soundInstance.duration)) / 1000) * lib.properties.fps);
				}
				calculatedDesiredFrame = Math.floor(calculatedDesiredFrame);
				var deltaFrame = calculatedDesiredFrame - this.currentFrame;
				if(deltaFrame >= 2){
					this.gotoAndPlayForStreamSoundSync(this.getDesiredFrame(this.currentFrame,calculatedDesiredFrame));
				}
			}
		}
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_176 = function() {
	this.initialize(ss["index_atlas_6"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_175 = function() {
	this.initialize(ss["index_atlas_6"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_172 = function() {
	this.initialize(ss["index_atlas_5"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_177 = function() {
	this.initialize(ss["index_atlas_6"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_179 = function() {
	this.initialize(ss["index_atlas_6"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_178 = function() {
	this.initialize(ss["index_atlas_6"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_180 = function() {
	this.initialize(ss["index_atlas_6"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_173 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_170 = function() {
	this.initialize(ss["index_atlas_5"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_169 = function() {
	this.initialize(ss["index_atlas_7"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_171 = function() {
	this.initialize(ss["index_atlas_5"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_168 = function() {
	this.initialize(ss["index_atlas_7"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_166 = function() {
	this.initialize(ss["index_atlas_6"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_164 = function() {
	this.initialize(ss["index_atlas_7"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_163 = function() {
	this.initialize(ss["index_atlas_7"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_165 = function() {
	this.initialize(ss["index_atlas_6"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_160 = function() {
	this.initialize(ss["index_atlas_6"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_162 = function() {
	this.initialize(ss["index_atlas_6"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_161 = function() {
	this.initialize(ss["index_atlas_6"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_157 = function() {
	this.initialize(ss["index_atlas_6"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_156 = function() {
	this.initialize(img.CachedBmp_156);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,33,420);


(lib.CachedBmp_153 = function() {
	this.initialize(ss["index_atlas_6"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_154 = function() {
	this.initialize(ss["index_atlas_6"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_155 = function() {
	this.initialize(ss["index_atlas_6"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_150 = function() {
	this.initialize(ss["index_atlas_6"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_151 = function() {
	this.initialize(ss["index_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_147 = function() {
	this.initialize(ss["index_atlas_7"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_149 = function() {
	this.initialize(ss["index_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_148 = function() {
	this.initialize(ss["index_atlas_7"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_146 = function() {
	this.initialize(ss["index_atlas_7"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_145 = function() {
	this.initialize(ss["index_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_152 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_144 = function() {
	this.initialize(ss["index_atlas_4"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_142 = function() {
	this.initialize(ss["index_atlas_4"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_143 = function() {
	this.initialize(ss["index_atlas_4"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_138 = function() {
	this.initialize(ss["index_atlas_4"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_141 = function() {
	this.initialize(ss["index_atlas_4"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_137 = function() {
	this.initialize(ss["index_atlas_4"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_140 = function() {
	this.initialize(ss["index_atlas_4"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_136 = function() {
	this.initialize(ss["index_atlas_4"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_139 = function() {
	this.initialize(ss["index_atlas_4"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_133 = function() {
	this.initialize(ss["index_atlas_4"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_135 = function() {
	this.initialize(ss["index_atlas_5"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_174 = function() {
	this.initialize(img.CachedBmp_174);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,694,462);


(lib.CachedBmp_130 = function() {
	this.initialize(ss["index_atlas_5"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_132 = function() {
	this.initialize(ss["index_atlas_5"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_128 = function() {
	this.initialize(ss["index_atlas_4"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_134 = function() {
	this.initialize(ss["index_atlas_5"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_127 = function() {
	this.initialize(ss["index_atlas_5"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_131 = function() {
	this.initialize(ss["index_atlas_5"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_129 = function() {
	this.initialize(ss["index_atlas_5"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_124 = function() {
	this.initialize(ss["index_atlas_5"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_122 = function() {
	this.initialize(ss["index_atlas_5"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_118 = function() {
	this.initialize(ss["index_atlas_6"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_121 = function() {
	this.initialize(ss["index_atlas_5"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_126 = function() {
	this.initialize(ss["index_atlas_5"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_125 = function() {
	this.initialize(ss["index_atlas_4"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_119 = function() {
	this.initialize(ss["index_atlas_7"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_123 = function() {
	this.initialize(ss["index_atlas_5"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_120 = function() {
	this.initialize(ss["index_atlas_5"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_117 = function() {
	this.initialize(ss["index_atlas_7"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_115 = function() {
	this.initialize(ss["index_atlas_7"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_116 = function() {
	this.initialize(ss["index_atlas_6"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_167 = function() {
	this.initialize(img.CachedBmp_167);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1286,721);


(lib.CachedBmp_109 = function() {
	this.initialize(ss["index_atlas_7"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_114 = function() {
	this.initialize(ss["index_atlas_6"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_110 = function() {
	this.initialize(ss["index_atlas_7"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_108 = function() {
	this.initialize(ss["index_atlas_7"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_105 = function() {
	this.initialize(ss["index_atlas_5"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_113 = function() {
	this.initialize(ss["index_atlas_3"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_111 = function() {
	this.initialize(ss["index_atlas_3"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_112 = function() {
	this.initialize(ss["index_atlas_3"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_107 = function() {
	this.initialize(ss["index_atlas_3"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_103 = function() {
	this.initialize(ss["index_atlas_7"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_102 = function() {
	this.initialize(ss["index_atlas_7"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_104 = function() {
	this.initialize(ss["index_atlas_6"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_106 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_100 = function() {
	this.initialize(ss["index_atlas_7"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_101 = function() {
	this.initialize(ss["index_atlas_7"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_98 = function() {
	this.initialize(ss["index_atlas_7"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_97 = function() {
	this.initialize(ss["index_atlas_7"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_95 = function() {
	this.initialize(ss["index_atlas_6"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_96 = function() {
	this.initialize(ss["index_atlas_7"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_92 = function() {
	this.initialize(ss["index_atlas_6"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_94 = function() {
	this.initialize(ss["index_atlas_7"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_88 = function() {
	this.initialize(ss["index_atlas_7"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_93 = function() {
	this.initialize(ss["index_atlas_7"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_90 = function() {
	this.initialize(ss["index_atlas_6"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_99 = function() {
	this.initialize(ss["index_atlas_7"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_91 = function() {
	this.initialize(ss["index_atlas_6"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_84 = function() {
	this.initialize(ss["index_atlas_7"]);
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_89 = function() {
	this.initialize(ss["index_atlas_6"]);
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_86 = function() {
	this.initialize(ss["index_atlas_7"]);
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_83 = function() {
	this.initialize(ss["index_atlas_7"]);
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_82 = function() {
	this.initialize(ss["index_atlas_6"]);
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_80 = function() {
	this.initialize(ss["index_atlas_6"]);
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_85 = function() {
	this.initialize(ss["index_atlas_7"]);
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_87 = function() {
	this.initialize(ss["index_atlas_7"]);
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_78 = function() {
	this.initialize(ss["index_atlas_3"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_81 = function() {
	this.initialize(ss["index_atlas_6"]);
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_72 = function() {
	this.initialize(ss["index_atlas_5"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_73 = function() {
	this.initialize(ss["index_atlas_5"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_71 = function() {
	this.initialize(ss["index_atlas_6"]);
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_77 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_75 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_70 = function() {
	this.initialize(ss["index_atlas_6"]);
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_74 = function() {
	this.initialize(ss["index_atlas_5"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_76 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_158 = function() {
	this.initialize(ss["index_atlas_6"]);
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_68 = function() {
	this.initialize(ss["index_atlas_5"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_79 = function() {
	this.initialize(ss["index_atlas_3"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_69 = function() {
	this.initialize(ss["index_atlas_5"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_63 = function() {
	this.initialize(ss["index_atlas_7"]);
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_67 = function() {
	this.initialize(ss["index_atlas_5"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_62 = function() {
	this.initialize(ss["index_atlas_6"]);
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_64 = function() {
	this.initialize(ss["index_atlas_7"]);
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_60 = function() {
	this.initialize(ss["index_atlas_6"]);
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_61 = function() {
	this.initialize(ss["index_atlas_6"]);
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_58 = function() {
	this.initialize(ss["index_atlas_3"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_56 = function() {
	this.initialize(ss["index_atlas_5"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_53 = function() {
	this.initialize(ss["index_atlas_6"]);
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_159 = function() {
	this.initialize(ss["index_atlas_6"]);
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_57 = function() {
	this.initialize(ss["index_atlas_3"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_52 = function() {
	this.initialize(ss["index_atlas_6"]);
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_55 = function() {
	this.initialize(ss["index_atlas_6"]);
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_59 = function() {
	this.initialize(ss["index_atlas_3"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_51 = function() {
	this.initialize(ss["index_atlas_6"]);
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_50 = function() {
	this.initialize(ss["index_atlas_6"]);
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_54 = function() {
	this.initialize(ss["index_atlas_6"]);
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_49 = function() {
	this.initialize(ss["index_atlas_6"]);
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_46 = function() {
	this.initialize(ss["index_atlas_6"]);
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_48 = function() {
	this.initialize(ss["index_atlas_6"]);
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_47 = function() {
	this.initialize(ss["index_atlas_6"]);
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_41 = function() {
	this.initialize(ss["index_atlas_6"]);
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_42 = function() {
	this.initialize(ss["index_atlas_6"]);
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_45 = function() {
	this.initialize(ss["index_atlas_6"]);
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_44 = function() {
	this.initialize(ss["index_atlas_6"]);
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_40 = function() {
	this.initialize(ss["index_atlas_6"]);
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_39 = function() {
	this.initialize(ss["index_atlas_6"]);
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_38 = function() {
	this.initialize(ss["index_atlas_6"]);
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_35 = function() {
	this.initialize(ss["index_atlas_6"]);
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_34 = function() {
	this.initialize(ss["index_atlas_6"]);
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_43 = function() {
	this.initialize(ss["index_atlas_6"]);
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_37 = function() {
	this.initialize(ss["index_atlas_6"]);
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_31 = function() {
	this.initialize(ss["index_atlas_6"]);
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_32 = function() {
	this.initialize(ss["index_atlas_6"]);
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_33 = function() {
	this.initialize(ss["index_atlas_6"]);
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_29 = function() {
	this.initialize(ss["index_atlas_7"]);
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_24 = function() {
	this.initialize(ss["index_atlas_7"]);
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_30 = function() {
	this.initialize(ss["index_atlas_6"]);
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_28 = function() {
	this.initialize(ss["index_atlas_7"]);
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_36 = function() {
	this.initialize(ss["index_atlas_6"]);
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_23 = function() {
	this.initialize(ss["index_atlas_7"]);
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_27 = function() {
	this.initialize(ss["index_atlas_7"]);
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_19 = function() {
	this.initialize(ss["index_atlas_6"]);
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_21 = function() {
	this.initialize(ss["index_atlas_6"]);
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_20 = function() {
	this.initialize(ss["index_atlas_6"]);
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_16 = function() {
	this.initialize(ss["index_atlas_4"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_25 = function() {
	this.initialize(ss["index_atlas_7"]);
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_15 = function() {
	this.initialize(ss["index_atlas_6"]);
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.Растровоеизображение16 = function() {
	this.initialize(img.Растровоеизображение16);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,569,225);


(lib.CachedBmp_26 = function() {
	this.initialize(ss["index_atlas_7"]);
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.Растровоеизображение3111 = function() {
	this.initialize(img.Растровоеизображение3111);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,348,442);


(lib.CachedBmp_17 = function() {
	this.initialize(ss["index_atlas_4"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.Растровоеизображение5 = function() {
	this.initialize(img.Растровоеизображение5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1160,720);


(lib.CachedBmp_10 = function() {
	this.initialize(ss["index_atlas_6"]);
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_13 = function() {
	this.initialize(ss["index_atlas_7"]);
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["index_atlas_6"]);
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_18 = function() {
	this.initialize(ss["index_atlas_4"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(img.CachedBmp_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1053,721);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.yesB = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.CachedBmp_176();
	this.instance.setTransform(1.3,0);

	this.instance_1 = new lib.CachedBmp_175();
	this.instance_1.setTransform(-2,-0.9);

	this.instance_2 = new lib.CachedBmp_178();
	this.instance_2.setTransform(1.3,0);

	this.instance_3 = new lib.CachedBmp_177();
	this.instance_3.setTransform(-2,-0.9);

	this.instance_4 = new lib.CachedBmp_180();
	this.instance_4.setTransform(1.3,0);

	this.instance_5 = new lib.CachedBmp_179();
	this.instance_5.setTransform(-2,-0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_3},{t:this.instance_2}]},1).to({state:[{t:this.instance_5},{t:this.instance_4}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-0.9,52,36);


(lib.upgBack = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.text = new cjs.Text("升级", "bold 30px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 36;
	this.text.lineWidth = 657;
	this.text.parent = this;
	this.text.setTransform(345.15,14.05);

	this.instance = new lib.CachedBmp_174();
	this.instance.setTransform(-1,-1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.upgBack, new cjs.Rectangle(-1,-1,694,462), null);


(lib.uButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.CachedBmp_170();
	this.instance.setTransform(-0.6,-0.6,0.6347,0.6347);

	this.instance_1 = new lib.CachedBmp_171();
	this.instance_1.setTransform(-0.6,-0.6,0.6347,0.6347);

	this.instance_2 = new lib.CachedBmp_172();
	this.instance_2.setTransform(-0.6,-0.6,0.6347,0.6347);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.6,-0.6,39.4,34.9);


(lib.tutShow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.CachedBmp_168();
	this.instance.setTransform(-1.5,-1.5);

	this.instance_1 = new lib.CachedBmp_169();
	this.instance_1.setTransform(-1.5,-1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,34,34);


(lib.tutor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.text = new cjs.Text("在这里购买不同的升级", "bold 16px 'Arial'");
	this.text.lineHeight = 20;
	this.text.lineWidth = 154;
	this.text.parent = this;
	this.text.setTransform(120.1,20.75);

	this.text_1 = new cjs.Text("金钱用于制作和升级。 有机会开采一个方块后你会得到一个水晶", "bold 20px 'Arial'");
	this.text_1.lineHeight = 24;
	this.text_1.lineWidth = 279;
	this.text_1.parent = this;
	this.text_1.setTransform(976.75,514.05);

	this.text_2 = new cjs.Text("使用您的金钱、水晶和资源来制作更好的镐子", "bold 15px 'Arial'");
	this.text_2.lineHeight = 19;
	this.text_2.lineWidth = 230;
	this.text_2.parent = this;
	this.text_2.setTransform(603.9,384.65);

	this.text_3 = new cjs.Text("这是你当前的镐子", "bold 15px 'Arial'");
	this.text_3.lineHeight = 19;
	this.text_3.lineWidth = 175;
	this.text_3.parent = this;
	this.text_3.setTransform(645.75,170.05);

	this.text_4 = new cjs.Text("改变你的矿山等级以开采更好的矿石", "bold 15px 'Arial'");
	this.text_4.lineHeight = 19;
	this.text_4.lineWidth = 168;
	this.text_4.parent = this;
	this.text_4.setTransform(332.85,92.85);

	this.text_5 = new cjs.Text("制作完成后你可以装备不同的镐", "bold 15px 'Arial'");
	this.text_5.lineHeight = 19;
	this.text_5.lineWidth = 307;
	this.text_5.parent = this;
	this.text_5.setTransform(552.35,658);

	this.text_6 = new cjs.Text("您可以花费或出售您的资源", "bold 15px 'Arial'");
	this.text_6.lineHeight = 19;
	this.text_6.lineWidth = 170;
	this.text_6.parent = this;
	this.text_6.setTransform(1027.55,124.35);

	this.text_7 = new cjs.Text("这是你的矿山。 小猫开采不同的资源", "bold 15px 'Arial'");
	this.text_7.lineHeight = 19;
	this.text_7.lineWidth = 141;
	this.text_7.parent = this;
	this.text_7.setTransform(136.9,135.3);

	this.text_8 = new cjs.Text("点击铃铛加速你的小猫", "bold 15px 'Arial'");
	this.text_8.lineHeight = 19;
	this.text_8.lineWidth = 141;
	this.text_8.parent = this;
	this.text_8.setTransform(28.05,480);

	this.instance = new lib.CachedBmp_167();
	this.instance.setTransform(-1,-1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text_8},{t:this.text_7},{t:this.text_6},{t:this.text_5},{t:this.text_4},{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,1286,721);


(lib.speedUP_b = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.CachedBmp_165();
	this.instance.setTransform(-28.75,-28.75);

	this.instance_1 = new lib.CachedBmp_166();
	this.instance_1.setTransform(-28.75,-28.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.7,-28.7,58,58);


(lib.sellP = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.part = new cjs.Text("10%", "bold 22px 'Arial'");
	this.part.name = "part";
	this.part.textAlign = "center";
	this.part.lineHeight = 27;
	this.part.lineWidth = 50;
	this.part.parent = this;
	this.part.setTransform(13.15,1.95,0.4909,0.4909);

	this.instance = new lib.CachedBmp_163();
	this.instance.setTransform(-0.9,-0.95,0.6664,0.6664);

	this.instance_1 = new lib.CachedBmp_164();
	this.instance_1.setTransform(-0.9,-0.95,0.6664,0.6664);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.part}]}).to({state:[{t:this.instance_1},{t:this.part}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.9,-0.9,28,18);


(lib.sellBt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.CachedBmp_160();
	this.instance.setTransform(-2.8,-1.15,0.7207,0.7207);

	this.instance_1 = new lib.CachedBmp_161();
	this.instance_1.setTransform(-2.8,-1.15,0.7207,0.7207);

	this.instance_2 = new lib.CachedBmp_162();
	this.instance_2.setTransform(-2.8,-1.15,0.7207,0.7207);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.8,-1.1,31.7,33.1);


(lib.sellB = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.text = new cjs.Text("出售", "bold 22px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 27;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(24.45,0.95,0.4702,0.4702);

	this.instance = new lib.CachedBmp_158();
	this.instance.setTransform(-0.15,-0.25,0.698,0.698);

	this.instance_1 = new lib.CachedBmp_159();
	this.instance_1.setTransform(-0.15,-0.25,0.698,0.698);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).to({state:[{t:this.instance_1},{t:this.text}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.1,-0.2,49,16);


(lib.scroller = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.CachedBmp_157();
	this.instance.setTransform(-13.6,-19.35,0.872,0.872);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.scroller, new cjs.Rectangle(-13.6,-19.3,27.1,38.3), null);


(lib.scrollBar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.CachedBmp_156();
	this.instance.setTransform(-1,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.scrollBar, new cjs.Rectangle(-1,-1,33,420), null);


(lib.prestigeBt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.text = new cjs.Text("声望", "bold 22px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 27;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(41.4,2.4,0.7404,0.7404);

	this.instance = new lib.CachedBmp_153();

	this.instance_1 = new lib.CachedBmp_154();

	this.instance_2 = new lib.CachedBmp_155();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).to({state:[{t:this.instance_1},{t:this.text}]},1).to({state:[{t:this.instance_2},{t:this.text}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,83,24);


(lib.presPopup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.st4 = new cjs.Text("点击5次以声望", "bold 22px 'Arial'", "#000033");
	this.st4.name = "st4";
	this.st4.textAlign = "center";
	this.st4.lineHeight = 27;
	this.st4.lineWidth = 305;
	this.st4.parent = this;
	this.st4.setTransform(80.55,68.45,0.4576,0.4576);

	this.st3 = new cjs.Text("水晶增益: x1 -> x2", "bold 22px 'Arial'", "#000033");
	this.st3.name = "st3";
	this.st3.lineHeight = 27;
	this.st3.lineWidth = 305;
	this.st3.parent = this;
	this.st3.setTransform(10.8,34.45,0.4576,0.4576);

	this.st2 = new cjs.Text("掉落速度: x1 -> x1.87", "bold 22px 'Arial'", "#000033");
	this.st2.name = "st2";
	this.st2.lineHeight = 27;
	this.st2.lineWidth = 305;
	this.st2.parent = this;
	this.st2.setTransform(10.8,21.4,0.4576,0.4576);

	this.st1 = new cjs.Text("镐子伤害: x1 -> x2", "bold 22px 'Arial'", "#000033");
	this.st1.name = "st1";
	this.st1.lineHeight = 27;
	this.st1.lineWidth = 305;
	this.st1.parent = this;
	this.st1.setTransform(10.8,8.3,0.4576,0.4576);

	this.instance = new lib.CachedBmp_152();
	this.instance.setTransform(-0.55,-0.55,0.5945,0.5945);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.st1},{t:this.st2},{t:this.st3},{t:this.st4}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.presPopup, new cjs.Rectangle(-0.5,-0.5,164.7,89.7), null);


(lib.popupSale = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.sale2 = new cjs.Text("出售 100,000 获得 211,800$", "bold 20px 'Arial'");
	this.sale2.name = "sale2";
	this.sale2.textAlign = "center";
	this.sale2.lineHeight = 24;
	this.sale2.lineWidth = 269;
	this.sale2.parent = this;
	this.sale2.setTransform(80.4142,26.75,0.5854,0.5854);

	this.sale1 = new cjs.Text("出售 1 获得 100$", "bold 20px 'Arial'");
	this.sale1.name = "sale1";
	this.sale1.textAlign = "center";
	this.sale1.lineHeight = 24;
	this.sale1.lineWidth = 232;
	this.sale1.parent = this;
	this.sale1.setTransform(80,1.35,0.6753,0.6753);

	this.instance = new lib.CachedBmp_151();
	this.instance.setTransform(-0.85,-1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.sale1},{t:this.sale2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.popupSale, new cjs.Rectangle(-0.8,-1,163,45), null);


(lib.popupName = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.namee = new cjs.Text("隐石", "bold 20px 'Arial'");
	this.namee.name = "namee";
	this.namee.textAlign = "center";
	this.namee.lineHeight = 24;
	this.namee.lineWidth = 114;
	this.namee.parent = this;
	this.namee.setTransform(39.95,3.45,0.6753,0.6753);

	this.instance = new lib.CachedBmp_150();
	this.instance.setTransform(-1,-1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.namee}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.popupName, new cjs.Rectangle(-1,-1,82,24), null);


(lib.popupEq = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.sellfor = new cjs.Text("出售获得 100,000 $", "bold 20px 'Arial'");
	this.sellfor.name = "sellfor";
	this.sellfor.textAlign = "center";
	this.sellfor.lineHeight = 24;
	this.sellfor.lineWidth = 193;
	this.sellfor.parent = this;
	this.sellfor.setTransform(56.4,62.8,0.5703,0.5703);

	this.spd = new cjs.Text("速度: 1.02s", "bold 20px 'Arial'");
	this.spd.name = "spd";
	this.spd.textAlign = "center";
	this.spd.lineHeight = 24;
	this.spd.lineWidth = 193;
	this.spd.parent = this;
	this.spd.setTransform(56.4,33.4,0.5703,0.5703);

	this.dps = new cjs.Text("DPS: 100,000", "bold 20px 'Arial'");
	this.dps.name = "dps";
	this.dps.textAlign = "center";
	this.dps.lineHeight = 24;
	this.dps.lineWidth = 193;
	this.dps.parent = this;
	this.dps.setTransform(56.4,18.25,0.5703,0.5703);

	this.dmg = new cjs.Text("伤害: 100,000", "bold 20px 'Arial'");
	this.dmg.name = "dmg";
	this.dmg.textAlign = "center";
	this.dmg.lineHeight = 24;
	this.dmg.lineWidth = 193;
	this.dmg.parent = this;
	this.dmg.setTransform(56.4,3.2,0.5703,0.5703);

	this.instance = new lib.CachedBmp_149();
	this.instance.setTransform(-1,-1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.dmg},{t:this.dps},{t:this.spd},{t:this.sellfor}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.popupEq, new cjs.Rectangle(-1,-1,116,80), null);


(lib.plusLv = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.CachedBmp_146();
	this.instance.setTransform(-0.7,-0.7,0.7181,0.7181);

	this.instance_1 = new lib.CachedBmp_147();
	this.instance_1.setTransform(-0.7,-0.7,0.7181,0.7181);

	this.instance_2 = new lib.CachedBmp_148();
	this.instance_2.setTransform(-0.7,-0.7,0.7181,0.7181);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.7,-0.7,20.8,20.8);


(lib.pix = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.CachedBmp_121();

	this.instance_1 = new lib.CachedBmp_122();

	this.instance_2 = new lib.CachedBmp_123();

	this.instance_3 = new lib.CachedBmp_124();

	this.instance_4 = new lib.CachedBmp_125();
	this.instance_4.setTransform(-2.7,-10.75);

	this.instance_5 = new lib.CachedBmp_126();

	this.instance_6 = new lib.CachedBmp_127();

	this.instance_7 = new lib.CachedBmp_128();
	this.instance_7.setTransform(0,-3.9);

	this.instance_8 = new lib.CachedBmp_129();

	this.instance_9 = new lib.CachedBmp_130();

	this.instance_10 = new lib.CachedBmp_131();

	this.instance_11 = new lib.CachedBmp_132();

	this.instance_12 = new lib.CachedBmp_133();

	this.instance_13 = new lib.CachedBmp_134();

	this.instance_14 = new lib.CachedBmp_135();

	this.instance_15 = new lib.CachedBmp_136();

	this.instance_16 = new lib.CachedBmp_137();

	this.instance_17 = new lib.CachedBmp_138();

	this.instance_18 = new lib.CachedBmp_139();

	this.instance_19 = new lib.CachedBmp_140();
	this.instance_19.setTransform(0,-3.65);

	this.instance_20 = new lib.CachedBmp_141();
	this.instance_20.setTransform(0,-3.65);

	this.instance_21 = new lib.CachedBmp_142();
	this.instance_21.setTransform(0,-3.65);

	this.instance_22 = new lib.CachedBmp_143();
	this.instance_22.setTransform(0,-3.65);

	this.instance_23 = new lib.CachedBmp_144();
	this.instance_23.setTransform(0,-3.65);

	this.instance_24 = new lib.CachedBmp_145();
	this.instance_24.setTransform(-7.65,-16.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.6,-16.4,122.89999999999999,120);


(lib.ova = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.CachedBmp_120();
	this.instance.setTransform(-1,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ova, new cjs.Rectangle(-1,-1,156,31), null);


(lib.noB = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.CachedBmp_115();
	this.instance.setTransform(6.25,0);

	this.instance_1 = new lib.CachedBmp_114();
	this.instance_1.setTransform(-2,-1.35);

	this.instance_2 = new lib.CachedBmp_117();
	this.instance_2.setTransform(6.25,0);

	this.instance_3 = new lib.CachedBmp_116();
	this.instance_3.setTransform(-2,-1.35);

	this.instance_4 = new lib.CachedBmp_119();
	this.instance_4.setTransform(6.25,0);

	this.instance_5 = new lib.CachedBmp_118();
	this.instance_5.setTransform(-2,-1.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_3},{t:this.instance_2}]},1).to({state:[{t:this.instance_5},{t:this.instance_4}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-1.3,52,36);


(lib.motivator = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.CachedBmp_111();
	this.instance.setTransform(0,0,0.6757,0.6757);

	this.instance_1 = new lib.CachedBmp_112();
	this.instance_1.setTransform(-0.5,-0.45,0.6757,0.6757);

	this.instance_2 = new lib.CachedBmp_113();
	this.instance_2.setTransform(0,0,0.6757,0.6757);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.4,62.9,72.30000000000001);


(lib.minusLv = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.CachedBmp_108();
	this.instance.setTransform(-0.7,-0.7,0.7181,0.7181);

	this.instance_1 = new lib.CachedBmp_109();
	this.instance_1.setTransform(-0.7,-0.7,0.7181,0.7181);

	this.instance_2 = new lib.CachedBmp_110();
	this.instance_2.setTransform(-0.7,-0.7,0.7181,0.7181);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.7,-0.7,20.8,20.8);


(lib.icon25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.CachedBmp_104();
	this.instance.setTransform(0.9,-3.15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.icon25, new cjs.Rectangle(0.9,-3.1,40,39), null);


(lib.icon24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.CachedBmp_103();
	this.instance.setTransform(5.95,-1.05);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.icon24, new cjs.Rectangle(6,-1,33,34), null);


(lib.icon23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.CachedBmp_102();
	this.instance.setTransform(8.05,-2.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.icon23, new cjs.Rectangle(8.1,-2.7,28,36), null);


(lib.icon22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.CachedBmp_101();
	this.instance.setTransform(7.4,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.icon22, new cjs.Rectangle(7.4,0.5,29,29), null);


(lib.icon21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.CachedBmp_100();
	this.instance.setTransform(7.5,2.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.icon21, new cjs.Rectangle(7.5,2.1,29,29), null);


(lib.icon20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.CachedBmp_99();
	this.instance.setTransform(5.05,-2.15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.icon20, new cjs.Rectangle(5.1,-2.1,36,33), null);


(lib.icon19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.CachedBmp_98();
	this.instance.setTransform(7.85,0.95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.icon19, new cjs.Rectangle(7.9,1,30,30), null);


(lib.icon18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.CachedBmp_97();
	this.instance.setTransform(10.8,1.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.icon18, new cjs.Rectangle(10.8,1.3,26.999999999999996,30), null);


(lib.icon17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.CachedBmp_96();
	this.instance.setTransform(3.05,5.95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.icon17, new cjs.Rectangle(3.1,6,39,22), null);


(lib.icon16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.CachedBmp_95();
	this.instance.setTransform(6.2,-4.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.icon16, new cjs.Rectangle(6.2,-4.2,34,39), null);


(lib.icon15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.CachedBmp_94();
	this.instance.setTransform(3.05,5.95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.icon15, new cjs.Rectangle(3.1,6,39,22), null);


(lib.icon14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.CachedBmp_93();
	this.instance.setTransform(3.05,5.95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.icon14, new cjs.Rectangle(3.1,6,39,22), null);


(lib.icon13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.CachedBmp_92();
	this.instance.setTransform(6.2,-4.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.icon13, new cjs.Rectangle(6.2,-4.2,34,39), null);


(lib.icon12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.CachedBmp_91();
	this.instance.setTransform(6.2,-4.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.icon12, new cjs.Rectangle(6.2,-4.2,34,39), null);


(lib.icon11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.CachedBmp_90();
	this.instance.setTransform(6.2,-4.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.icon11, new cjs.Rectangle(6.2,-4.2,34,39), null);


(lib.icon10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.CachedBmp_89();
	this.instance.setTransform(6.2,-4.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.icon10, new cjs.Rectangle(6.2,-4.2,34,39), null);


(lib.icon9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.CachedBmp_88();
	this.instance.setTransform(3.05,5.95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.icon9, new cjs.Rectangle(3.1,6,39,22), null);


(lib.icon8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.CachedBmp_87();
	this.instance.setTransform(4.85,0.05);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.icon8, new cjs.Rectangle(4.9,0.1,34,32), null);


(lib.icon7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.CachedBmp_86();
	this.instance.setTransform(2.1,5.95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.icon7, new cjs.Rectangle(2.1,6,39,22), null);


(lib.icon6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.CachedBmp_85();
	this.instance.setTransform(4.7,5.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.icon6, new cjs.Rectangle(4.7,5.4,39,22), null);


(lib.icon5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.CachedBmp_84();
	this.instance.setTransform(0,7.25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.icon5, new cjs.Rectangle(0,7.3,46,17), null);


(lib.icon4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.CachedBmp_83();
	this.instance.setTransform(6.1,-0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.icon4, new cjs.Rectangle(6.1,-0.9,28,34), null);


(lib.icon3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.CachedBmp_82();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.icon3, new cjs.Rectangle(0,0,40,31), null);


(lib.icon2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.CachedBmp_81();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.icon2, new cjs.Rectangle(0,0,46,46), null);


(lib.icon1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.CachedBmp_80();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.icon1, new cjs.Rectangle(0,0,50,40), null);


(lib.hovering2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.CachedBmp_79();
	this.instance.setTransform(0,0,0.7572,0.7572);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hovering2, new cjs.Rectangle(0,0,147.7,49.2), null);


(lib.hovering = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.CachedBmp_78();
	this.instance.setTransform(0,0,0.7572,0.7572);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hovering, new cjs.Rectangle(0,0,147.7,49.2), null);


(lib.hover_upg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.CachedBmp_75();
	this.instance.setTransform(0,0,0.8865,0.8865);

	this.instance_1 = new lib.CachedBmp_76();
	this.instance_1.setTransform(0,0,0.8865,0.8865);

	this.instance_2 = new lib.CachedBmp_77();
	this.instance_2.setTransform(0,0,0.8865,0.8865);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,156.1,84.2);


(lib.hov = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.CachedBmp_72();

	this.instance_1 = new lib.CachedBmp_73();

	this.instance_2 = new lib.CachedBmp_74();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,63,63);


(lib.goUP = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.CachedBmp_70();
	this.instance.setTransform(-1.25,-1.25);

	this.instance_1 = new lib.CachedBmp_71();
	this.instance_1.setTransform(-1.25,-1.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.2,-1.2,33,38);


(lib.forgeBt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.text = new cjs.Text("锻造", "bold 22px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 27;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(52.3,4.2);

	this.instance = new lib.CachedBmp_67();
	this.instance.setTransform(-0.95,-0.95,0.8899,0.8899);

	this.instance_1 = new lib.CachedBmp_68();
	this.instance_1.setTransform(-0.95,-0.95,0.8899,0.8899);

	this.instance_2 = new lib.CachedBmp_69();
	this.instance_2.setTransform(-0.95,-0.95,0.8899,0.8899);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).to({state:[{t:this.instance_1},{t:this.text}]},1).to({state:[{t:this.instance_2},{t:this.text}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.9,-0.9,105.9,34.699999999999996);


(lib.eqB = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.text = new cjs.Text("装备", "bold 22px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 27;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(24.45,0.95,0.4702,0.4702);

	this.instance = new lib.CachedBmp_158();
	this.instance.setTransform(-0.15,-0.25,0.698,0.698);

	this.instance_1 = new lib.CachedBmp_159();
	this.instance_1.setTransform(-0.15,-0.25,0.698,0.698);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).to({state:[{t:this.instance_1},{t:this.text}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.1,-0.2,49,16);


(lib.crys = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.CachedBmp_64();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.crys, new cjs.Rectangle(0,0,19,32), null);


(lib.coin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.CachedBmp_63();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.coin, new cjs.Rectangle(0,0,33,34), null);


(lib.clos_upg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.CachedBmp_60();
	this.instance.setTransform(0,0,0.6939,0.6939);

	this.instance_1 = new lib.CachedBmp_61();
	this.instance_1.setTransform(0,0,0.6939,0.6939);

	this.instance_2 = new lib.CachedBmp_62();
	this.instance_2.setTransform(0,0,0.6939,0.6939);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,33.3,31.3);


(lib.chipG = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.CachedBmp_57();
	this.instance.setTransform(9,-10.2);

	this.instance_1 = new lib.CachedBmp_58();
	this.instance_1.setTransform(9,-10.2);

	this.instance_2 = new lib.CachedBmp_59();
	this.instance_2.setTransform(9,-10.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(9,-10.2,128,117);


(lib.bType = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.CachedBmp_32();

	this.instance_1 = new lib.CachedBmp_33();

	this.instance_2 = new lib.CachedBmp_34();

	this.instance_3 = new lib.CachedBmp_35();

	this.instance_4 = new lib.CachedBmp_36();

	this.instance_5 = new lib.CachedBmp_37();

	this.instance_6 = new lib.CachedBmp_38();

	this.instance_7 = new lib.CachedBmp_39();

	this.instance_8 = new lib.CachedBmp_40();

	this.instance_9 = new lib.CachedBmp_41();

	this.instance_10 = new lib.CachedBmp_42();

	this.instance_11 = new lib.CachedBmp_43();

	this.instance_12 = new lib.CachedBmp_44();

	this.instance_13 = new lib.CachedBmp_45();

	this.instance_14 = new lib.CachedBmp_46();

	this.instance_15 = new lib.CachedBmp_47();

	this.instance_16 = new lib.CachedBmp_48();

	this.instance_17 = new lib.CachedBmp_49();

	this.instance_18 = new lib.CachedBmp_50();
	this.instance_18.setTransform(-0.25,-0.15);

	this.instance_19 = new lib.CachedBmp_51();

	this.instance_20 = new lib.CachedBmp_52();

	this.instance_21 = new lib.CachedBmp_53();

	this.instance_22 = new lib.CachedBmp_54();

	this.instance_23 = new lib.CachedBmp_55();

	this.instance_24 = new lib.CachedBmp_56();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.2,-0.1,66.2,72.1);


(lib.breaking = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.CachedBmp_24();

	this.instance_1 = new lib.CachedBmp_25();

	this.instance_2 = new lib.CachedBmp_26();
	this.instance_2.setTransform(-2,-2.85);

	this.instance_3 = new lib.CachedBmp_27();
	this.instance_3.setTransform(-5.75,-6.5);

	this.instance_4 = new lib.CachedBmp_28();
	this.instance_4.setTransform(-9.8,-12.3);

	this.instance_5 = new lib.CachedBmp_29();
	this.instance_5.setTransform(-13.4,-15.05);

	this.instance_6 = new lib.CachedBmp_30();
	this.instance_6.setTransform(-17,-18.5);

	this.instance_7 = new lib.CachedBmp_31();
	this.instance_7.setTransform(-18.15,-19.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.1,-19.2,42,44);


(lib.bHP = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AgTghIAnAAIAABDIgnAAg");
	var mask_graphics_1 = new cjs.Graphics().p("AgVghIArAAIAABDIgrAAg");
	var mask_graphics_2 = new cjs.Graphics().p("AgXghIAvAAIAABDIgvAAg");
	var mask_graphics_3 = new cjs.Graphics().p("AgZghIAzAAIAABDIgzAAg");
	var mask_graphics_4 = new cjs.Graphics().p("AgcghIA5AAIAABDIg5AAg");
	var mask_graphics_5 = new cjs.Graphics().p("AgeghIA9AAIAABDIg9AAg");
	var mask_graphics_6 = new cjs.Graphics().p("AggghIBBAAIAABDIhBAAg");
	var mask_graphics_7 = new cjs.Graphics().p("AgighIBFAAIAABDIhFAAg");
	var mask_graphics_8 = new cjs.Graphics().p("AgkghIBJAAIAABDIhJAAg");
	var mask_graphics_9 = new cjs.Graphics().p("AgmghIBNAAIAABDIhNAAg");
	var mask_graphics_10 = new cjs.Graphics().p("AgoghIBRAAIAABDIhRAAg");
	var mask_graphics_11 = new cjs.Graphics().p("AgqghIBVAAIAABDIhVAAg");
	var mask_graphics_12 = new cjs.Graphics().p("AgsghIBZAAIAABDIhZAAg");
	var mask_graphics_13 = new cjs.Graphics().p("AgughIBdAAIAABDIhdAAg");
	var mask_graphics_14 = new cjs.Graphics().p("AgwghIBhAAIAABDIhhAAg");
	var mask_graphics_15 = new cjs.Graphics().p("AgyghIBlAAIAABDIhlAAg");
	var mask_graphics_16 = new cjs.Graphics().p("Ag0ghIBpAAIAABDIhpAAg");
	var mask_graphics_17 = new cjs.Graphics().p("Ag2ghIBtAAIAABDIhtAAg");
	var mask_graphics_18 = new cjs.Graphics().p("Ag4ghIBxAAIAABDIhxAAg");
	var mask_graphics_19 = new cjs.Graphics().p("Ag6ghIB1AAIAABDIh1AAg");
	var mask_graphics_20 = new cjs.Graphics().p("Ag8ghIB5AAIAABDIh5AAg");
	var mask_graphics_21 = new cjs.Graphics().p("Ag+ghIB9AAIAABDIh9AAg");
	var mask_graphics_22 = new cjs.Graphics().p("AhBghICDAAIAABDIiDAAg");
	var mask_graphics_23 = new cjs.Graphics().p("AhDghICHAAIAABDIiHAAg");
	var mask_graphics_24 = new cjs.Graphics().p("AhFghICLAAIAABDIiLAAg");
	var mask_graphics_25 = new cjs.Graphics().p("AhHghICPAAIAABDIiPAAg");
	var mask_graphics_26 = new cjs.Graphics().p("AhJghICTAAIAABDIiTAAg");
	var mask_graphics_27 = new cjs.Graphics().p("AhLghICXAAIAABDIiXAAg");
	var mask_graphics_28 = new cjs.Graphics().p("AhNghICbAAIAABDIibAAg");
	var mask_graphics_29 = new cjs.Graphics().p("AhPghICfAAIAABDIifAAg");
	var mask_graphics_30 = new cjs.Graphics().p("AhRghICjAAIAABDIijAAg");
	var mask_graphics_31 = new cjs.Graphics().p("AhTghICnAAIAABDIinAAg");
	var mask_graphics_32 = new cjs.Graphics().p("AhVghICrAAIAABDIirAAg");
	var mask_graphics_33 = new cjs.Graphics().p("AhXghICvAAIAABDIivAAg");
	var mask_graphics_34 = new cjs.Graphics().p("AhZghICzAAIAABDIizAAg");
	var mask_graphics_35 = new cjs.Graphics().p("AhbghIC3AAIAABDIi3AAg");
	var mask_graphics_36 = new cjs.Graphics().p("AhdghIC7AAIAABDIi7AAg");
	var mask_graphics_37 = new cjs.Graphics().p("AhfghIC/AAIAABDIi/AAg");
	var mask_graphics_38 = new cjs.Graphics().p("AhhghIDDAAIAABDIjDAAg");
	var mask_graphics_39 = new cjs.Graphics().p("AhkghIDJAAIAABDIjJAAg");
	var mask_graphics_40 = new cjs.Graphics().p("AhmghIDNAAIAABDIjNAAg");
	var mask_graphics_41 = new cjs.Graphics().p("AhoghIDRAAIAABDIjRAAg");
	var mask_graphics_42 = new cjs.Graphics().p("AhqghIDVAAIAABDIjVAAg");
	var mask_graphics_43 = new cjs.Graphics().p("AhsghIDZAAIAABDIjZAAg");
	var mask_graphics_44 = new cjs.Graphics().p("AhughIDdAAIAABDIjdAAg");
	var mask_graphics_45 = new cjs.Graphics().p("AhwghIDhAAIAABDIjhAAg");
	var mask_graphics_46 = new cjs.Graphics().p("AhyghIDlAAIAABDIjlAAg");
	var mask_graphics_47 = new cjs.Graphics().p("Ah0ghIDpAAIAABDIjpAAg");
	var mask_graphics_48 = new cjs.Graphics().p("Ah2ghIDtAAIAABDIjtAAg");
	var mask_graphics_49 = new cjs.Graphics().p("Ah4ghIDxAAIAABDIjxAAg");
	var mask_graphics_50 = new cjs.Graphics().p("Ah6ghID1AAIAABDIj1AAg");
	var mask_graphics_51 = new cjs.Graphics().p("Ah8ghID5AAIAABDIj5AAg");
	var mask_graphics_52 = new cjs.Graphics().p("Ah+ghID9AAIAABDIj9AAg");
	var mask_graphics_53 = new cjs.Graphics().p("AiAghIEBAAIAABDIkBAAg");
	var mask_graphics_54 = new cjs.Graphics().p("AiCghIEFAAIAABDIkFAAg");
	var mask_graphics_55 = new cjs.Graphics().p("AiEghIEJAAIAABDIkJAAg");
	var mask_graphics_56 = new cjs.Graphics().p("AiHghIEPAAIAABDIkPAAg");
	var mask_graphics_57 = new cjs.Graphics().p("AiJghIETAAIAABDIkTAAg");
	var mask_graphics_58 = new cjs.Graphics().p("AiLghIEXAAIAABDIkXAAg");
	var mask_graphics_59 = new cjs.Graphics().p("AiNghIEbAAIAABDIkbAAg");
	var mask_graphics_60 = new cjs.Graphics().p("AiPghIEfAAIAABDIkfAAg");
	var mask_graphics_61 = new cjs.Graphics().p("AiRghIEjAAIAABDIkjAAg");
	var mask_graphics_62 = new cjs.Graphics().p("AiTghIEnAAIAABDIknAAg");
	var mask_graphics_63 = new cjs.Graphics().p("AiVghIErAAIAABDIkrAAg");
	var mask_graphics_64 = new cjs.Graphics().p("AiXghIEvAAIAABDIkvAAg");
	var mask_graphics_65 = new cjs.Graphics().p("AiZghIEzAAIAABDIkzAAg");
	var mask_graphics_66 = new cjs.Graphics().p("AibghIE3AAIAABDIk3AAg");
	var mask_graphics_67 = new cjs.Graphics().p("AidghIE7AAIAABDIk7AAg");
	var mask_graphics_68 = new cjs.Graphics().p("AifghIE/AAIAABDIk/AAg");
	var mask_graphics_69 = new cjs.Graphics().p("AihghIFDAAIAABDIlDAAg");
	var mask_graphics_70 = new cjs.Graphics().p("AijghIFHAAIAABDIlHAAg");
	var mask_graphics_71 = new cjs.Graphics().p("AilghIFLAAIAABDIlLAAg");
	var mask_graphics_72 = new cjs.Graphics().p("AinghIFPAAIAABDIlPAAg");
	var mask_graphics_73 = new cjs.Graphics().p("AipghIFTAAIAABDIlTAAg");
	var mask_graphics_74 = new cjs.Graphics().p("AisghIFZAAIAABDIlZAAg");
	var mask_graphics_75 = new cjs.Graphics().p("AiughIFdAAIAABDIldAAg");
	var mask_graphics_76 = new cjs.Graphics().p("AiwghIFhAAIAABDIlhAAg");
	var mask_graphics_77 = new cjs.Graphics().p("AiyghIFlAAIAABDIllAAg");
	var mask_graphics_78 = new cjs.Graphics().p("Ai0ghIFpAAIAABDIlpAAg");
	var mask_graphics_79 = new cjs.Graphics().p("Ai2ghIFtAAIAABDIltAAg");
	var mask_graphics_80 = new cjs.Graphics().p("Ai4ghIFxAAIAABDIlxAAg");
	var mask_graphics_81 = new cjs.Graphics().p("Ai6ghIF1AAIAABDIl1AAg");
	var mask_graphics_82 = new cjs.Graphics().p("Ai8ghIF5AAIAABDIl5AAg");
	var mask_graphics_83 = new cjs.Graphics().p("Ai+ghIF9AAIAABDIl9AAg");
	var mask_graphics_84 = new cjs.Graphics().p("AjAghIGBAAIAABDImBAAg");
	var mask_graphics_85 = new cjs.Graphics().p("AjCghIGFAAIAABDImFAAg");
	var mask_graphics_86 = new cjs.Graphics().p("AjEghIGJAAIAABDImJAAg");
	var mask_graphics_87 = new cjs.Graphics().p("AjGghIGNAAIAABDImNAAg");
	var mask_graphics_88 = new cjs.Graphics().p("AjIghIGRAAIAABDImRAAg");
	var mask_graphics_89 = new cjs.Graphics().p("AjKghIGVAAIAABDImVAAg");
	var mask_graphics_90 = new cjs.Graphics().p("AjMghIGZAAIAABDImZAAg");
	var mask_graphics_91 = new cjs.Graphics().p("AjPghIGfAAIAABDImfAAg");
	var mask_graphics_92 = new cjs.Graphics().p("AjRghIGjAAIAABDImjAAg");
	var mask_graphics_93 = new cjs.Graphics().p("AjTghIGnAAIAABDImnAAg");
	var mask_graphics_94 = new cjs.Graphics().p("AjVghIGrAAIAABDImrAAg");
	var mask_graphics_95 = new cjs.Graphics().p("AjXghIGvAAIAABDImvAAg");
	var mask_graphics_96 = new cjs.Graphics().p("AjZghIGzAAIAABDImzAAg");
	var mask_graphics_97 = new cjs.Graphics().p("AjbghIG3AAIAABDIm3AAg");
	var mask_graphics_98 = new cjs.Graphics().p("AjdghIG7AAIAABDIm7AAg");
	var mask_graphics_99 = new cjs.Graphics().p("AjfghIG/AAIAABDIm/AAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-2.0353,y:1.8378}).wait(1).to({graphics:mask_graphics_1,x:-1.8317,y:1.8378}).wait(1).to({graphics:mask_graphics_2,x:-1.6223,y:1.8378}).wait(1).to({graphics:mask_graphics_3,x:-1.4128,y:1.8378}).wait(1).to({graphics:mask_graphics_4,x:-1.2033,y:1.8378}).wait(1).to({graphics:mask_graphics_5,x:-0.9938,y:1.8378}).wait(1).to({graphics:mask_graphics_6,x:-0.7844,y:1.8378}).wait(1).to({graphics:mask_graphics_7,x:-0.5749,y:1.8378}).wait(1).to({graphics:mask_graphics_8,x:-0.3654,y:1.8378}).wait(1).to({graphics:mask_graphics_9,x:-0.1559,y:1.8378}).wait(1).to({graphics:mask_graphics_10,x:0.0535,y:1.8378}).wait(1).to({graphics:mask_graphics_11,x:0.263,y:1.8378}).wait(1).to({graphics:mask_graphics_12,x:0.4725,y:1.8378}).wait(1).to({graphics:mask_graphics_13,x:0.682,y:1.8378}).wait(1).to({graphics:mask_graphics_14,x:0.8915,y:1.8378}).wait(1).to({graphics:mask_graphics_15,x:1.1009,y:1.8378}).wait(1).to({graphics:mask_graphics_16,x:1.3104,y:1.8378}).wait(1).to({graphics:mask_graphics_17,x:1.5199,y:1.8378}).wait(1).to({graphics:mask_graphics_18,x:1.7294,y:1.8378}).wait(1).to({graphics:mask_graphics_19,x:1.9388,y:1.8378}).wait(1).to({graphics:mask_graphics_20,x:2.1483,y:1.8378}).wait(1).to({graphics:mask_graphics_21,x:2.3578,y:1.8378}).wait(1).to({graphics:mask_graphics_22,x:2.5673,y:1.8378}).wait(1).to({graphics:mask_graphics_23,x:2.7767,y:1.8378}).wait(1).to({graphics:mask_graphics_24,x:2.9862,y:1.8378}).wait(1).to({graphics:mask_graphics_25,x:3.1957,y:1.8378}).wait(1).to({graphics:mask_graphics_26,x:3.4052,y:1.8378}).wait(1).to({graphics:mask_graphics_27,x:3.6146,y:1.8378}).wait(1).to({graphics:mask_graphics_28,x:3.8241,y:1.8378}).wait(1).to({graphics:mask_graphics_29,x:4.0336,y:1.8378}).wait(1).to({graphics:mask_graphics_30,x:4.2431,y:1.8378}).wait(1).to({graphics:mask_graphics_31,x:4.4525,y:1.8378}).wait(1).to({graphics:mask_graphics_32,x:4.662,y:1.8378}).wait(1).to({graphics:mask_graphics_33,x:4.8715,y:1.8378}).wait(1).to({graphics:mask_graphics_34,x:5.081,y:1.8378}).wait(1).to({graphics:mask_graphics_35,x:5.2905,y:1.8378}).wait(1).to({graphics:mask_graphics_36,x:5.4999,y:1.8378}).wait(1).to({graphics:mask_graphics_37,x:5.7094,y:1.8378}).wait(1).to({graphics:mask_graphics_38,x:5.9189,y:1.8378}).wait(1).to({graphics:mask_graphics_39,x:6.1284,y:1.8378}).wait(1).to({graphics:mask_graphics_40,x:6.3378,y:1.8378}).wait(1).to({graphics:mask_graphics_41,x:6.5473,y:1.8378}).wait(1).to({graphics:mask_graphics_42,x:6.7568,y:1.8378}).wait(1).to({graphics:mask_graphics_43,x:6.9663,y:1.8378}).wait(1).to({graphics:mask_graphics_44,x:7.1757,y:1.8378}).wait(1).to({graphics:mask_graphics_45,x:7.3852,y:1.8378}).wait(1).to({graphics:mask_graphics_46,x:7.5947,y:1.8378}).wait(1).to({graphics:mask_graphics_47,x:7.8042,y:1.8378}).wait(1).to({graphics:mask_graphics_48,x:8.0136,y:1.8378}).wait(1).to({graphics:mask_graphics_49,x:8.2231,y:1.8378}).wait(1).to({graphics:mask_graphics_50,x:8.4326,y:1.8378}).wait(1).to({graphics:mask_graphics_51,x:8.6421,y:1.8378}).wait(1).to({graphics:mask_graphics_52,x:8.8515,y:1.8378}).wait(1).to({graphics:mask_graphics_53,x:9.061,y:1.8378}).wait(1).to({graphics:mask_graphics_54,x:9.2705,y:1.8378}).wait(1).to({graphics:mask_graphics_55,x:9.48,y:1.8378}).wait(1).to({graphics:mask_graphics_56,x:9.6895,y:1.8378}).wait(1).to({graphics:mask_graphics_57,x:9.8989,y:1.8378}).wait(1).to({graphics:mask_graphics_58,x:10.1084,y:1.8378}).wait(1).to({graphics:mask_graphics_59,x:10.3179,y:1.8378}).wait(1).to({graphics:mask_graphics_60,x:10.5274,y:1.8378}).wait(1).to({graphics:mask_graphics_61,x:10.7368,y:1.8378}).wait(1).to({graphics:mask_graphics_62,x:10.9463,y:1.8378}).wait(1).to({graphics:mask_graphics_63,x:11.1558,y:1.8378}).wait(1).to({graphics:mask_graphics_64,x:11.3653,y:1.8378}).wait(1).to({graphics:mask_graphics_65,x:11.5747,y:1.8378}).wait(1).to({graphics:mask_graphics_66,x:11.7842,y:1.8378}).wait(1).to({graphics:mask_graphics_67,x:11.9937,y:1.8378}).wait(1).to({graphics:mask_graphics_68,x:12.2032,y:1.8378}).wait(1).to({graphics:mask_graphics_69,x:12.4126,y:1.8378}).wait(1).to({graphics:mask_graphics_70,x:12.6221,y:1.8378}).wait(1).to({graphics:mask_graphics_71,x:12.8316,y:1.8378}).wait(1).to({graphics:mask_graphics_72,x:13.0411,y:1.8378}).wait(1).to({graphics:mask_graphics_73,x:13.2506,y:1.8378}).wait(1).to({graphics:mask_graphics_74,x:13.46,y:1.8378}).wait(1).to({graphics:mask_graphics_75,x:13.6695,y:1.8378}).wait(1).to({graphics:mask_graphics_76,x:13.879,y:1.8378}).wait(1).to({graphics:mask_graphics_77,x:14.0885,y:1.8378}).wait(1).to({graphics:mask_graphics_78,x:14.2979,y:1.8378}).wait(1).to({graphics:mask_graphics_79,x:14.5074,y:1.8378}).wait(1).to({graphics:mask_graphics_80,x:14.7169,y:1.8378}).wait(1).to({graphics:mask_graphics_81,x:14.9264,y:1.8378}).wait(1).to({graphics:mask_graphics_82,x:15.1358,y:1.8378}).wait(1).to({graphics:mask_graphics_83,x:15.3453,y:1.8378}).wait(1).to({graphics:mask_graphics_84,x:15.5548,y:1.8378}).wait(1).to({graphics:mask_graphics_85,x:15.7643,y:1.8378}).wait(1).to({graphics:mask_graphics_86,x:15.9737,y:1.8378}).wait(1).to({graphics:mask_graphics_87,x:16.1832,y:1.8378}).wait(1).to({graphics:mask_graphics_88,x:16.3927,y:1.8378}).wait(1).to({graphics:mask_graphics_89,x:16.6022,y:1.8378}).wait(1).to({graphics:mask_graphics_90,x:16.8116,y:1.8378}).wait(1).to({graphics:mask_graphics_91,x:17.0211,y:1.8378}).wait(1).to({graphics:mask_graphics_92,x:17.2306,y:1.8378}).wait(1).to({graphics:mask_graphics_93,x:17.4401,y:1.8378}).wait(1).to({graphics:mask_graphics_94,x:17.6496,y:1.8378}).wait(1).to({graphics:mask_graphics_95,x:17.859,y:1.8378}).wait(1).to({graphics:mask_graphics_96,x:18.0685,y:1.8378}).wait(1).to({graphics:mask_graphics_97,x:18.278,y:1.8378}).wait(1).to({graphics:mask_graphics_98,x:18.4875,y:1.8378}).wait(1).to({graphics:mask_graphics_99,x:18.3969,y:1.8378}).wait(1));

	// Слой_1
	this.instance = new lib.CachedBmp_23();
	this.instance.setTransform(0,0,0.3764,0.3764);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(100));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,40.7,3);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.Растровоеизображение3111();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(0,0,348,442), null);


(lib.autoProg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.text = new cjs.Text("自动", "bold 22px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 27;
	this.text.lineWidth = 73;
	this.text.parent = this;
	this.text.setTransform(17.4536,0.9,0.4532,0.4532);

	this.instance = new lib.CachedBmp_19();
	this.instance.setTransform(-0.95,-0.95,0.6273,0.6273);

	this.instance_1 = new lib.CachedBmp_20();
	this.instance_1.setTransform(-0.95,-0.95,0.6273,0.6273);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).to({state:[{t:this.instance_1},{t:this.text}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.9,-0.9,37,15);


(lib.adButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.text = new cjs.Text("观看广告获得免费\n5 分钟加速", "bold 21px 'Consolas'", "#003300");
	this.text.textAlign = "center";
	this.text.lineHeight = 27;
	this.text.parent = this;
	this.text.setTransform(81.2993,8.05,0.5797,0.5797);

	this.instance = new lib.CachedBmp_16();
	this.instance.setTransform(-2,-2);

	this.instance_1 = new lib.CachedBmp_17();
	this.instance_1.setTransform(-2,-2);

	this.instance_2 = new lib.CachedBmp_18();
	this.instance_2.setTransform(-2,-2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text,p:{color:"#003300"}}]}).to({state:[{t:this.instance_1},{t:this.text,p:{color:"#003300"}}]},1).to({state:[{t:this.instance_2},{t:this.text,p:{color:"#001F00"}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,167,48);


(lib.Анимация12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.CachedBmp_13();
	this.instance.setTransform(-15.55,-16.55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.5,-16.5,31,33);


(lib.Анимация11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.CachedBmp_13();
	this.instance.setTransform(-15.5,-16.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.5,-16.5,31,33);


(lib.Анимация10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.CachedBmp_13();
	this.instance.setTransform(-15.55,-16.55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.5,-16.5,31,33);


(lib.Анимация9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.CachedBmp_10();
	this.instance.setTransform(-15.65,-19.55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.6,-19.5,31,39);


(lib.Анимация8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.CachedBmp_10();
	this.instance.setTransform(-15.65,-19.55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.6,-19.5,31,39);


(lib.Анимация7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.CachedBmp_10();
	this.instance.setTransform(-15.65,-19.55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.6,-19.5,31,39);


(lib.Анимация6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.CachedBmp_7();
	this.instance.setTransform(-61.65,-84);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.6,-84,123,168);


(lib.Анимация5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.CachedBmp_6();
	this.instance.setTransform(-61.6,-83.95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.6,-83.9,123,168);


(lib.Анимация4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.CachedBmp_5();
	this.instance.setTransform(-61.65,-84);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.6,-84,123,168);


(lib.Анимация3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.CachedBmp_4();
	this.instance.setTransform(-28.2,-17.25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.2,-17.2,56,35);


(lib.Анимация2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.CachedBmp_4();
	this.instance.setTransform(-28.15,-17.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.1,-17.2,56,35);


(lib.Анимация1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.CachedBmp_4();
	this.instance.setTransform(-28.2,-17.25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.2,-17.2,56,35);


(lib.upg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.hover = new lib.hover_upg();
	this.hover.name = "hover";
	this.hover.setTransform(86.95,47.9,1.1116,1.128,0,0,0,77.8,42.1);
	this.hover.alpha = 0.1992;
	new cjs.ButtonHelper(this.hover, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.hover).wait(1));

	// Слой_1
	this.cost = new cjs.Text("100,000$", "bold 12px 'Arial'");
	this.cost.name = "cost";
	this.cost.textAlign = "center";
	this.cost.lineHeight = 16;
	this.cost.lineWidth = 149;
	this.cost.parent = this;
	this.cost.setTransform(88,64.3,1.1174,1.1174);

	this.change = new cjs.Text("5% -> 5.5%", "bold 15px 'Arial'");
	this.change.name = "change";
	this.change.textAlign = "center";
	this.change.lineHeight = 19;
	this.change.lineWidth = 149;
	this.change.parent = this;
	this.change.setTransform(86.8,34.05,1.1174,1.1174);

	this.namee = new cjs.Text("最大工艺水晶", "bold 15px 'Arial'");
	this.namee.name = "namee";
	this.namee.textAlign = "center";
	this.namee.lineHeight = 19;
	this.namee.lineWidth = 147;
	this.namee.parent = this;
	this.namee.setTransform(87.0869,7.65,1.1174,1.1174);

	this.instance = new lib.CachedBmp_173();
	this.instance.setTransform(0.25,-1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.namee},{t:this.change},{t:this.cost}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.upg, new cjs.Rectangle(0.3,-1,174,98), null);


(lib.ress = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.sell25 = new lib.sellBt();
	this.sell25.name = "sell25";
	this.sell25.setTransform(234.05,1231.6,1.3876,1.3876,0,0,0,12.9,13.6);
	new cjs.ButtonHelper(this.sell25, 0, 1, 2);

	this.res25 = new cjs.Text(": 0", "bold 22px 'Arial'");
	this.res25.name = "res25";
	this.res25.lineHeight = 27;
	this.res25.lineWidth = 150;
	this.res25.parent = this;
	this.res25.setTransform(58.6,1218.6);

	this.ov1 = new lib.ova();
	this.ov1.name = "ov1";
	this.ov1.setTransform(133.4,1230.8,1,1,0,0,0,76.8,14.2);

	this.icon25 = new lib.icon25();
	this.icon25.name = "icon25";
	this.icon25.setTransform(24.4,1230.15,1,1,0,0,0,20.2,15.5);

	this.sell24 = new lib.sellBt();
	this.sell24.name = "sell24";
	this.sell24.setTransform(234.05,1181.35,1.3876,1.3876,0,0,0,12.9,13.6);
	new cjs.ButtonHelper(this.sell24, 0, 1, 2);

	this.res24 = new cjs.Text(": 0", "bold 22px 'Arial'");
	this.res24.name = "res24";
	this.res24.lineHeight = 27;
	this.res24.lineWidth = 150;
	this.res24.parent = this;
	this.res24.setTransform(58.6,1168.35);

	this.ov1_1 = new lib.ova();
	this.ov1_1.name = "ov1_1";
	this.ov1_1.setTransform(133.4,1180.55,1,1,0,0,0,76.8,14.2);

	this.icon24 = new lib.icon24();
	this.icon24.name = "icon24";
	this.icon24.setTransform(24.4,1179.9,1,1,0,0,0,20.2,15.5);

	this.sell23 = new lib.sellBt();
	this.sell23.name = "sell23";
	this.sell23.setTransform(234.05,1131.1,1.3876,1.3876,0,0,0,12.9,13.6);
	new cjs.ButtonHelper(this.sell23, 0, 1, 2);

	this.res23 = new cjs.Text(": 0", "bold 22px 'Arial'");
	this.res23.name = "res23";
	this.res23.lineHeight = 27;
	this.res23.lineWidth = 150;
	this.res23.parent = this;
	this.res23.setTransform(58.6,1118.1);

	this.ov1_2 = new lib.ova();
	this.ov1_2.name = "ov1_2";
	this.ov1_2.setTransform(133.4,1130.3,1,1,0,0,0,76.8,14.2);

	this.icon23 = new lib.icon23();
	this.icon23.name = "icon23";
	this.icon23.setTransform(24.4,1129.65,1,1,0,0,0,20.2,15.5);

	this.sell22 = new lib.sellBt();
	this.sell22.name = "sell22";
	this.sell22.setTransform(234.05,1080.85,1.3876,1.3876,0,0,0,12.9,13.6);
	new cjs.ButtonHelper(this.sell22, 0, 1, 2);

	this.res22 = new cjs.Text(": 0", "bold 22px 'Arial'");
	this.res22.name = "res22";
	this.res22.lineHeight = 27;
	this.res22.lineWidth = 150;
	this.res22.parent = this;
	this.res22.setTransform(58.6,1067.85);

	this.ov1_3 = new lib.ova();
	this.ov1_3.name = "ov1_3";
	this.ov1_3.setTransform(133.4,1080.05,1,1,0,0,0,76.8,14.2);

	this.icon22 = new lib.icon22();
	this.icon22.name = "icon22";
	this.icon22.setTransform(24.4,1079.4,1,1,0,0,0,20.2,15.5);

	this.sell21 = new lib.sellBt();
	this.sell21.name = "sell21";
	this.sell21.setTransform(234.05,1030.6,1.3876,1.3876,0,0,0,12.9,13.6);
	new cjs.ButtonHelper(this.sell21, 0, 1, 2);

	this.res21 = new cjs.Text(": 0", "bold 22px 'Arial'");
	this.res21.name = "res21";
	this.res21.lineHeight = 27;
	this.res21.lineWidth = 150;
	this.res21.parent = this;
	this.res21.setTransform(58.6,1017.6);

	this.ov1_4 = new lib.ova();
	this.ov1_4.name = "ov1_4";
	this.ov1_4.setTransform(133.4,1029.8,1,1,0,0,0,76.8,14.2);

	this.icon21 = new lib.icon21();
	this.icon21.name = "icon21";
	this.icon21.setTransform(24.4,1029.15,1,1,0,0,0,20.2,15.5);

	this.sell20 = new lib.sellBt();
	this.sell20.name = "sell20";
	this.sell20.setTransform(234.05,978.05,1.3876,1.3876,0,0,0,12.9,13.6);
	new cjs.ButtonHelper(this.sell20, 0, 1, 2);

	this.res20 = new cjs.Text(": 0", "bold 22px 'Arial'");
	this.res20.name = "res20";
	this.res20.lineHeight = 27;
	this.res20.lineWidth = 150;
	this.res20.parent = this;
	this.res20.setTransform(58.6,965.05);

	this.ov1_5 = new lib.ova();
	this.ov1_5.name = "ov1_5";
	this.ov1_5.setTransform(133.4,977.25,1,1,0,0,0,76.8,14.2);

	this.icon20 = new lib.icon20();
	this.icon20.name = "icon20";
	this.icon20.setTransform(24.4,976.6,1,1,0,0,0,20.2,15.5);

	this.sell19 = new lib.sellBt();
	this.sell19.name = "sell19";
	this.sell19.setTransform(234.05,927.8,1.3876,1.3876,0,0,0,12.9,13.6);
	new cjs.ButtonHelper(this.sell19, 0, 1, 2);

	this.res19 = new cjs.Text(": 0", "bold 22px 'Arial'");
	this.res19.name = "res19";
	this.res19.lineHeight = 27;
	this.res19.lineWidth = 150;
	this.res19.parent = this;
	this.res19.setTransform(58.6,914.8);

	this.ov1_6 = new lib.ova();
	this.ov1_6.name = "ov1_6";
	this.ov1_6.setTransform(133.4,927,1,1,0,0,0,76.8,14.2);

	this.icon19 = new lib.icon19();
	this.icon19.name = "icon19";
	this.icon19.setTransform(24.4,926.35,1,1,0,0,0,20.2,15.5);

	this.sell18 = new lib.sellBt();
	this.sell18.name = "sell18";
	this.sell18.setTransform(234.05,877.55,1.3876,1.3876,0,0,0,12.9,13.6);
	new cjs.ButtonHelper(this.sell18, 0, 1, 2);

	this.res18 = new cjs.Text(": 0", "bold 22px 'Arial'");
	this.res18.name = "res18";
	this.res18.lineHeight = 27;
	this.res18.lineWidth = 150;
	this.res18.parent = this;
	this.res18.setTransform(58.6,864.55);

	this.ov1_7 = new lib.ova();
	this.ov1_7.name = "ov1_7";
	this.ov1_7.setTransform(133.4,876.75,1,1,0,0,0,76.8,14.2);

	this.icon18 = new lib.icon18();
	this.icon18.name = "icon18";
	this.icon18.setTransform(24.4,876.1,1,1,0,0,0,20.2,15.5);

	this.sell17 = new lib.sellBt();
	this.sell17.name = "sell17";
	this.sell17.setTransform(234.05,827.3,1.3876,1.3876,0,0,0,12.9,13.6);
	new cjs.ButtonHelper(this.sell17, 0, 1, 2);

	this.res17 = new cjs.Text(": 0", "bold 22px 'Arial'");
	this.res17.name = "res17";
	this.res17.lineHeight = 27;
	this.res17.lineWidth = 150;
	this.res17.parent = this;
	this.res17.setTransform(58.6,814.3);

	this.ov1_8 = new lib.ova();
	this.ov1_8.name = "ov1_8";
	this.ov1_8.setTransform(133.4,826.5,1,1,0,0,0,76.8,14.2);

	this.icon17 = new lib.icon17();
	this.icon17.name = "icon17";
	this.icon17.setTransform(24.4,825.85,1,1,0,0,0,20.2,15.5);

	this.sell16 = new lib.sellBt();
	this.sell16.name = "sell16";
	this.sell16.setTransform(234.05,777.05,1.3876,1.3876,0,0,0,12.9,13.6);
	new cjs.ButtonHelper(this.sell16, 0, 1, 2);

	this.res16 = new cjs.Text(": 0", "bold 22px 'Arial'");
	this.res16.name = "res16";
	this.res16.lineHeight = 27;
	this.res16.lineWidth = 150;
	this.res16.parent = this;
	this.res16.setTransform(58.6,764.05);

	this.ov1_9 = new lib.ova();
	this.ov1_9.name = "ov1_9";
	this.ov1_9.setTransform(133.4,776.25,1,1,0,0,0,76.8,14.2);

	this.icon16 = new lib.icon16();
	this.icon16.name = "icon16";
	this.icon16.setTransform(24.4,775.6,1,1,0,0,0,20.2,15.5);

	this.sell15 = new lib.sellBt();
	this.sell15.name = "sell15";
	this.sell15.setTransform(234.05,724.5,1.3876,1.3876,0,0,0,12.9,13.6);
	new cjs.ButtonHelper(this.sell15, 0, 1, 2);

	this.res15 = new cjs.Text(": 0", "bold 22px 'Arial'");
	this.res15.name = "res15";
	this.res15.lineHeight = 27;
	this.res15.lineWidth = 150;
	this.res15.parent = this;
	this.res15.setTransform(58.6,711.5);

	this.ov1_10 = new lib.ova();
	this.ov1_10.name = "ov1_10";
	this.ov1_10.setTransform(133.4,723.7,1,1,0,0,0,76.8,14.2);

	this.icon15 = new lib.icon15();
	this.icon15.name = "icon15";
	this.icon15.setTransform(24.4,723.05,1,1,0,0,0,20.2,15.5);

	this.sell14 = new lib.sellBt();
	this.sell14.name = "sell14";
	this.sell14.setTransform(234.05,674.25,1.3876,1.3876,0,0,0,12.9,13.6);
	new cjs.ButtonHelper(this.sell14, 0, 1, 2);

	this.res14 = new cjs.Text(": 0", "bold 22px 'Arial'");
	this.res14.name = "res14";
	this.res14.lineHeight = 27;
	this.res14.lineWidth = 150;
	this.res14.parent = this;
	this.res14.setTransform(58.6,661.25);

	this.ov1_11 = new lib.ova();
	this.ov1_11.name = "ov1_11";
	this.ov1_11.setTransform(133.4,673.45,1,1,0,0,0,76.8,14.2);

	this.icon14 = new lib.icon14();
	this.icon14.name = "icon14";
	this.icon14.setTransform(24.4,672.8,1,1,0,0,0,20.2,15.5);

	this.sell13 = new lib.sellBt();
	this.sell13.name = "sell13";
	this.sell13.setTransform(234.05,624,1.3876,1.3876,0,0,0,12.9,13.6);
	new cjs.ButtonHelper(this.sell13, 0, 1, 2);

	this.res13 = new cjs.Text(": 0", "bold 22px 'Arial'");
	this.res13.name = "res13";
	this.res13.lineHeight = 27;
	this.res13.lineWidth = 150;
	this.res13.parent = this;
	this.res13.setTransform(58.6,611);

	this.ov1_12 = new lib.ova();
	this.ov1_12.name = "ov1_12";
	this.ov1_12.setTransform(133.4,623.2,1,1,0,0,0,76.8,14.2);

	this.icon13 = new lib.icon13();
	this.icon13.name = "icon13";
	this.icon13.setTransform(24.4,622.55,1,1,0,0,0,20.2,15.5);

	this.sell12 = new lib.sellBt();
	this.sell12.name = "sell12";
	this.sell12.setTransform(234.05,573.75,1.3876,1.3876,0,0,0,12.9,13.6);
	new cjs.ButtonHelper(this.sell12, 0, 1, 2);

	this.res12 = new cjs.Text(": 0", "bold 22px 'Arial'");
	this.res12.name = "res12";
	this.res12.lineHeight = 27;
	this.res12.lineWidth = 150;
	this.res12.parent = this;
	this.res12.setTransform(58.6,560.75);

	this.ov1_13 = new lib.ova();
	this.ov1_13.name = "ov1_13";
	this.ov1_13.setTransform(133.4,572.95,1,1,0,0,0,76.8,14.2);

	this.icon12 = new lib.icon12();
	this.icon12.name = "icon12";
	this.icon12.setTransform(24.4,572.3,1,1,0,0,0,20.2,15.5);

	this.sell11 = new lib.sellBt();
	this.sell11.name = "sell11";
	this.sell11.setTransform(234.05,523.5,1.3876,1.3876,0,0,0,12.9,13.6);
	new cjs.ButtonHelper(this.sell11, 0, 1, 2);

	this.res11 = new cjs.Text(": 0", "bold 22px 'Arial'");
	this.res11.name = "res11";
	this.res11.lineHeight = 27;
	this.res11.lineWidth = 150;
	this.res11.parent = this;
	this.res11.setTransform(58.6,510.5);

	this.ov1_14 = new lib.ova();
	this.ov1_14.name = "ov1_14";
	this.ov1_14.setTransform(133.4,522.7,1,1,0,0,0,76.8,14.2);

	this.icon11 = new lib.icon11();
	this.icon11.name = "icon11";
	this.icon11.setTransform(24.4,522.05,1,1,0,0,0,20.2,15.5);

	this.sell10 = new lib.sellBt();
	this.sell10.name = "sell10";
	this.sell10.setTransform(234.05,473.25,1.3876,1.3876,0,0,0,12.9,13.6);
	new cjs.ButtonHelper(this.sell10, 0, 1, 2);

	this.res10 = new cjs.Text(": 0", "bold 22px 'Arial'");
	this.res10.name = "res10";
	this.res10.lineHeight = 27;
	this.res10.lineWidth = 150;
	this.res10.parent = this;
	this.res10.setTransform(58.6,460.25);

	this.ov1_15 = new lib.ova();
	this.ov1_15.name = "ov1_15";
	this.ov1_15.setTransform(133.4,472.45,1,1,0,0,0,76.8,14.2);

	this.icon10 = new lib.icon10();
	this.icon10.name = "icon10";
	this.icon10.setTransform(24.4,471.8,1,1,0,0,0,20.2,15.5);

	this.sell9 = new lib.sellBt();
	this.sell9.name = "sell9";
	this.sell9.setTransform(234.05,423,1.3876,1.3876,0,0,0,12.9,13.6);
	new cjs.ButtonHelper(this.sell9, 0, 1, 2);

	this.res9 = new cjs.Text(": 0", "bold 22px 'Arial'");
	this.res9.name = "res9";
	this.res9.lineHeight = 27;
	this.res9.lineWidth = 150;
	this.res9.parent = this;
	this.res9.setTransform(58.6,410);

	this.ov1_16 = new lib.ova();
	this.ov1_16.name = "ov1_16";
	this.ov1_16.setTransform(133.4,422.2,1,1,0,0,0,76.8,14.2);

	this.icon9 = new lib.icon9();
	this.icon9.name = "icon9";
	this.icon9.setTransform(24.4,421.55,1,1,0,0,0,20.2,15.5);

	this.sell8 = new lib.sellBt();
	this.sell8.name = "sell8";
	this.sell8.setTransform(234.05,372.75,1.3876,1.3876,0,0,0,12.9,13.6);
	new cjs.ButtonHelper(this.sell8, 0, 1, 2);

	this.res8 = new cjs.Text(": 0", "bold 22px 'Arial'");
	this.res8.name = "res8";
	this.res8.lineHeight = 27;
	this.res8.lineWidth = 150;
	this.res8.parent = this;
	this.res8.setTransform(58.6,359.75);

	this.ov1_17 = new lib.ova();
	this.ov1_17.name = "ov1_17";
	this.ov1_17.setTransform(133.4,371.95,1,1,0,0,0,76.8,14.2);

	this.icon8 = new lib.icon8();
	this.icon8.name = "icon8";
	this.icon8.setTransform(24.4,371.3,1,1,0,0,0,20.2,15.5);

	this.sell7 = new lib.sellBt();
	this.sell7.name = "sell7";
	this.sell7.setTransform(234.05,322.5,1.3876,1.3876,0,0,0,12.9,13.6);
	new cjs.ButtonHelper(this.sell7, 0, 1, 2);

	this.res7 = new cjs.Text(": 0", "bold 22px 'Arial'");
	this.res7.name = "res7";
	this.res7.lineHeight = 27;
	this.res7.lineWidth = 150;
	this.res7.parent = this;
	this.res7.setTransform(58.6,309.5);

	this.ov1_18 = new lib.ova();
	this.ov1_18.name = "ov1_18";
	this.ov1_18.setTransform(133.4,321.7,1,1,0,0,0,76.8,14.2);

	this.icon7 = new lib.icon7();
	this.icon7.name = "icon7";
	this.icon7.setTransform(24.4,321.05,1,1,0,0,0,20.2,15.5);

	this.sell6 = new lib.sellBt();
	this.sell6.name = "sell6";
	this.sell6.setTransform(234.05,272.25,1.3876,1.3876,0,0,0,12.9,13.6);
	new cjs.ButtonHelper(this.sell6, 0, 1, 2);

	this.res6 = new cjs.Text(": 0", "bold 22px 'Arial'");
	this.res6.name = "res6";
	this.res6.lineHeight = 27;
	this.res6.lineWidth = 150;
	this.res6.parent = this;
	this.res6.setTransform(58.6,259.25);

	this.ov1_19 = new lib.ova();
	this.ov1_19.name = "ov1_19";
	this.ov1_19.setTransform(133.4,271.45,1,1,0,0,0,76.8,14.2);

	this.icon6 = new lib.icon6();
	this.icon6.name = "icon6";
	this.icon6.setTransform(24.4,270.8,1,1,0,0,0,20.2,15.5);

	this.sell5 = new lib.sellBt();
	this.sell5.name = "sell5";
	this.sell5.setTransform(234.05,222,1.3876,1.3876,0,0,0,12.9,13.6);
	new cjs.ButtonHelper(this.sell5, 0, 1, 2);

	this.res5 = new cjs.Text(": 0", "bold 22px 'Arial'");
	this.res5.name = "res5";
	this.res5.lineHeight = 27;
	this.res5.lineWidth = 150;
	this.res5.parent = this;
	this.res5.setTransform(58.6,209);

	this.ov1_20 = new lib.ova();
	this.ov1_20.name = "ov1_20";
	this.ov1_20.setTransform(133.4,221.2,1,1,0,0,0,76.8,14.2);

	this.icon5 = new lib.icon5();
	this.icon5.name = "icon5";
	this.icon5.setTransform(24.4,220.55,1,1,0,0,0,20.2,15.5);

	this.sell4 = new lib.sellBt();
	this.sell4.name = "sell4";
	this.sell4.setTransform(234.05,171.75,1.3876,1.3876,0,0,0,12.9,13.6);
	new cjs.ButtonHelper(this.sell4, 0, 1, 2);

	this.res4 = new cjs.Text(": 0", "bold 22px 'Arial'");
	this.res4.name = "res4";
	this.res4.lineHeight = 27;
	this.res4.lineWidth = 150;
	this.res4.parent = this;
	this.res4.setTransform(58.6,158.75);

	this.ov1_21 = new lib.ova();
	this.ov1_21.name = "ov1_21";
	this.ov1_21.setTransform(133.4,170.95,1,1,0,0,0,76.8,14.2);

	this.icon4 = new lib.icon4();
	this.icon4.name = "icon4";
	this.icon4.setTransform(24.4,170.3,1,1,0,0,0,20.2,15.5);

	this.res1 = new cjs.Text(": 0", "bold 22px 'Arial'");
	this.res1.name = "res1";
	this.res1.lineHeight = 27;
	this.res1.lineWidth = 150;
	this.res1.parent = this;
	this.res1.setTransform(58.6,10.6);

	this.ov1_22 = new lib.ova();
	this.ov1_22.name = "ov1_22";
	this.ov1_22.setTransform(133.4,22.8,1,1,0,0,0,76.8,14.2);

	this.sell3 = new lib.sellBt();
	this.sell3.name = "sell3";
	this.sell3.setTransform(234.05,121.5,1.3876,1.3876,0,0,0,12.9,13.6);
	new cjs.ButtonHelper(this.sell3, 0, 1, 2);

	this.sell2 = new lib.sellBt();
	this.sell2.name = "sell2";
	this.sell2.setTransform(233.9,71.3,1.3874,1.386,0,0,0,12.9,13.7);
	new cjs.ButtonHelper(this.sell2, 0, 1, 2);

	this.sell1 = new lib.sellBt();
	this.sell1.name = "sell1";
	this.sell1.setTransform(234.05,18.85,1.3876,1.3876,0,0,0,12.9,13.6);
	new cjs.ButtonHelper(this.sell1, 0, 1, 2);

	this.res3 = new cjs.Text(": 0", "bold 22px 'Arial'");
	this.res3.name = "res3";
	this.res3.lineHeight = 27;
	this.res3.lineWidth = 150;
	this.res3.parent = this;
	this.res3.setTransform(58.6,108.5);

	this.ov1_23 = new lib.ova();
	this.ov1_23.name = "ov1_23";
	this.ov1_23.setTransform(133.4,120.7,1,1,0,0,0,76.8,14.2);

	this.res2 = new cjs.Text(": 0", "bold 22px 'Arial'");
	this.res2.name = "res2";
	this.res2.lineHeight = 27;
	this.res2.lineWidth = 151;
	this.res2.parent = this;
	this.res2.setTransform(58.6,59.65);

	this.ov1_24 = new lib.ova();
	this.ov1_24.name = "ov1_24";
	this.ov1_24.setTransform(133.4,71.85,1,1,0,0,0,76.8,14.2);

	this.icon3 = new lib.icon3();
	this.icon3.name = "icon3";
	this.icon3.setTransform(24.4,120.05,1,1,0,0,0,20.2,15.5);

	this.icon2 = new lib.icon2();
	this.icon2.name = "icon2";
	this.icon2.setTransform(25.25,70.35,1,1,0,0,0,22.8,23.2);

	this.icon1 = new lib.icon1();
	this.icon1.name = "icon1";
	this.icon1.setTransform(25,21.5,1,1,0,0,0,25,20.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.icon1},{t:this.icon2},{t:this.icon3},{t:this.ov1_24},{t:this.res2},{t:this.ov1_23},{t:this.res3},{t:this.sell1},{t:this.sell2},{t:this.sell3},{t:this.ov1_22},{t:this.res1},{t:this.icon4},{t:this.ov1_21},{t:this.res4},{t:this.sell4},{t:this.icon5},{t:this.ov1_20},{t:this.res5},{t:this.sell5},{t:this.icon6},{t:this.ov1_19},{t:this.res6},{t:this.sell6},{t:this.icon7},{t:this.ov1_18},{t:this.res7},{t:this.sell7},{t:this.icon8},{t:this.ov1_17},{t:this.res8},{t:this.sell8},{t:this.icon9},{t:this.ov1_16},{t:this.res9},{t:this.sell9},{t:this.icon10},{t:this.ov1_15},{t:this.res10},{t:this.sell10},{t:this.icon11},{t:this.ov1_14},{t:this.res11},{t:this.sell11},{t:this.icon12},{t:this.ov1_13},{t:this.res12},{t:this.sell12},{t:this.icon13},{t:this.ov1_12},{t:this.res13},{t:this.sell13},{t:this.icon14},{t:this.ov1_11},{t:this.res14},{t:this.sell14},{t:this.icon15},{t:this.ov1_10},{t:this.res15},{t:this.sell15},{t:this.icon16},{t:this.ov1_9},{t:this.res16},{t:this.sell16},{t:this.icon17},{t:this.ov1_8},{t:this.res17},{t:this.sell17},{t:this.icon18},{t:this.ov1_7},{t:this.res18},{t:this.sell18},{t:this.icon19},{t:this.ov1_6},{t:this.res19},{t:this.sell19},{t:this.icon20},{t:this.ov1_5},{t:this.res20},{t:this.sell20},{t:this.icon21},{t:this.ov1_4},{t:this.res21},{t:this.sell21},{t:this.icon22},{t:this.ov1_3},{t:this.res22},{t:this.sell22},{t:this.icon23},{t:this.ov1_2},{t:this.res23},{t:this.sell23},{t:this.icon24},{t:this.ov1_1},{t:this.res24},{t:this.sell24},{t:this.icon25},{t:this.ov1},{t:this.res25},{t:this.sell25}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ress, new cjs.Rectangle(0,-1.6,256.3,1258.8), null);


(lib.res = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgUcAtvMAAAhbdMAo5AAAMAAABbdg");
	mask.setTransform(130.85,293.95);

	// Слой_1
	this.ress = new lib.ress();
	this.ress.name = "ress";
	this.ress.setTransform(126,246,1,1,0,0,0,126,246);

	var maskedShapeInstanceList = [this.ress];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.ress).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.res, new cjs.Rectangle(0,1.3,256.3,585.3000000000001), null);


(lib.midAd = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.noB = new lib.noB();
	this.noB.name = "noB";
	this.noB.setTransform(39.35,64.3);
	new cjs.ButtonHelper(this.noB, 0, 1, 2);

	this.yesB = new lib.yesB();
	this.yesB.name = "yesB";
	this.yesB.setTransform(162.2,80.75,1,1,0,0,0,24.2,16.9);
	new cjs.ButtonHelper(this.yesB, 0, 1, 2);

	this.instance = new lib.CachedBmp_107();
	this.instance.setTransform(9.05,2.4);

	this.instance_1 = new lib.CachedBmp_106();
	this.instance_1.setTransform(-2,-2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.yesB},{t:this.noB}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.midAd, new cjs.Rectangle(-2,-2,223,115), null);


(lib.material = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.icon1 = new lib.icon1();
	this.icon1.name = "icon1";

	this.icon2 = new lib.icon2();
	this.icon2.name = "icon2";
	this.icon2.setTransform(25.05,20.15,1,1,0,0,0,22.8,23.2);

	this.icon3 = new lib.icon3();
	this.icon3.name = "icon3";
	this.icon3.setTransform(25.05,20.15,1,1,0,0,0,20.2,15.5);

	this.icon4 = new lib.icon4();
	this.icon4.name = "icon4";
	this.icon4.setTransform(22.8,20.15,1,1,0,0,0,20.2,15.5);

	this.icon5 = new lib.icon5();
	this.icon5.name = "icon5";
	this.icon5.setTransform(21.3,21.65,1,1,0,0,0,20.2,15.5);

	this.icon6 = new lib.icon6();
	this.icon6.name = "icon6";
	this.icon6.setTransform(21.3,21.65,1,1,0,0,0,20.2,15.5);

	this.icon7 = new lib.icon7();
	this.icon7.name = "icon7";
	this.icon7.setTransform(21.3,21.65,1,1,0,0,0,20.2,15.5);

	this.icon8 = new lib.icon8();
	this.icon8.name = "icon8";
	this.icon8.setTransform(21.3,21.65,1,1,0,0,0,20.2,15.5);

	this.icon9 = new lib.icon9();
	this.icon9.name = "icon9";
	this.icon9.setTransform(21.3,21.65,1,1,0,0,0,20.2,15.5);

	this.icon10 = new lib.icon10();
	this.icon10.name = "icon10";
	this.icon10.setTransform(21.3,21.65,1,1,0,0,0,20.2,15.5);

	this.icon11 = new lib.icon11();
	this.icon11.name = "icon11";
	this.icon11.setTransform(21.3,21.65,1,1,0,0,0,20.2,15.5);

	this.icon12 = new lib.icon12();
	this.icon12.name = "icon12";
	this.icon12.setTransform(21.3,21.65,1,1,0,0,0,20.2,15.5);

	this.icon13 = new lib.icon13();
	this.icon13.name = "icon13";
	this.icon13.setTransform(21.3,21.65,1,1,0,0,0,20.2,15.5);

	this.icon14 = new lib.icon14();
	this.icon14.name = "icon14";
	this.icon14.setTransform(21.3,21.65,1,1,0,0,0,20.2,15.5);

	this.icon15 = new lib.icon15();
	this.icon15.name = "icon15";
	this.icon15.setTransform(21.3,21.65,1,1,0,0,0,20.2,15.5);

	this.icon16 = new lib.icon16();
	this.icon16.name = "icon16";
	this.icon16.setTransform(1.1,6.15);

	this.icon17 = new lib.icon17();
	this.icon17.name = "icon17";
	this.icon17.setTransform(21.3,21.65,1,1,0,0,0,20.2,15.5);

	this.icon18 = new lib.icon18();
	this.icon18.name = "icon18";
	this.icon18.setTransform(21.3,21.65,1,1,0,0,0,20.2,15.5);

	this.icon19 = new lib.icon19();
	this.icon19.name = "icon19";
	this.icon19.setTransform(21.3,21.65,1,1,0,0,0,20.2,15.5);

	this.icon20 = new lib.icon20();
	this.icon20.name = "icon20";
	this.icon20.setTransform(21.3,21.65,1,1,0,0,0,20.2,15.5);

	this.icon21 = new lib.icon21();
	this.icon21.name = "icon21";
	this.icon21.setTransform(21.3,21.65,1,1,0,0,0,20.2,15.5);

	this.icon22 = new lib.icon22();
	this.icon22.name = "icon22";
	this.icon22.setTransform(21.3,21.65,1,1,0,0,0,20.2,15.5);

	this.icon23 = new lib.icon23();
	this.icon23.name = "icon23";
	this.icon23.setTransform(21.3,21.65,1,1,0,0,0,20.2,15.5);

	this.icon24 = new lib.icon24();
	this.icon24.name = "icon24";
	this.icon24.setTransform(21.3,21.65,1,1,0,0,0,20.2,15.5);

	this.icon25 = new lib.icon25();
	this.icon25.name = "icon25";
	this.icon25.setTransform(21.3,21.65,1,1,0,0,0,20.2,15.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.icon1}]}).to({state:[{t:this.icon2}]},1).to({state:[{t:this.icon3}]},1).to({state:[{t:this.icon4}]},1).to({state:[{t:this.icon5}]},1).to({state:[{t:this.icon6}]},1).to({state:[{t:this.icon7}]},1).to({state:[{t:this.icon8}]},1).to({state:[{t:this.icon9}]},1).to({state:[{t:this.icon10}]},1).to({state:[{t:this.icon11}]},1).to({state:[{t:this.icon12}]},1).to({state:[{t:this.icon13}]},1).to({state:[{t:this.icon14}]},1).to({state:[{t:this.icon15}]},1).to({state:[{t:this.icon16}]},1).to({state:[{t:this.icon17}]},1).to({state:[{t:this.icon18}]},1).to({state:[{t:this.icon19}]},1).to({state:[{t:this.icon20}]},1).to({state:[{t:this.icon21}]},1).to({state:[{t:this.icon22}]},1).to({state:[{t:this.icon23}]},1).to({state:[{t:this.icon24}]},1).to({state:[{t:this.icon25}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-3,50,46);


(lib.invCell = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.hov = new lib.hov();
	this.hov.name = "hov";
	this.hov.setTransform(31.1,30.2,1,1,0,0,0,31.4,31.4);
	this.hov.alpha = 0.1992;
	new cjs.ButtonHelper(this.hov, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.hov).wait(1));

	// Слой_1
	this.lev = new cjs.Text("13", "bold 18px 'Arial'");
	this.lev.name = "lev";
	this.lev.textAlign = "center";
	this.lev.lineHeight = 22;
	this.lev.lineWidth = 53;
	this.lev.parent = this;
	this.lev.setTransform(13.1,51.45,0.4274,0.4274);

	this.rar = new cjs.Text("10000", "bold 22px 'Arial'");
	this.rar.name = "rar";
	this.rar.textAlign = "center";
	this.rar.lineHeight = 27;
	this.rar.lineWidth = 74;
	this.rar.parent = this;
	this.rar.setTransform(15.9,1.1,0.4061,0.4061);

	this.pixs = new lib.pix();
	this.pixs.name = "pixs";
	this.pixs.setTransform(21.65,44.85,0.3995,0.3995,-37.0555,0,0,11.1,45.1);

	this.instance = new lib.CachedBmp_105();
	this.instance.setTransform(-0.05,-1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.pixs},{t:this.rar},{t:this.lev}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.invCell, new cjs.Rectangle(-0.3,-1.2,63.3,63.2), null);


(lib.cGamess = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.Растровоеизображение16();
	this.instance.setTransform(0,0,0.2674,0.2674);

	this.instance_1 = new lib.hovering();
	this.instance_1.setTransform(0,0,1.0315,1.2176);
	this.instance_1.alpha = 0.3008;

	this.instance_2 = new lib.hovering2();
	this.instance_2.setTransform(0,0,1.0315,1.2176);
	this.instance_2.alpha = 0.3008;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1}]},1).to({state:[{t:this.instance},{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,152.3,60.2);


(lib.cat_anim03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// arm
	this.instance = new lib.Анимация1("synched",0);
	this.instance.setTransform(92,111.5,1,1,0,0,0,-28.2,0);

	this.instance_1 = new lib.Анимация2("synched",0);
	this.instance_1.setTransform(86.9,117.7,1,1,20.1969,0,0,-28.2,0.1);
	this.instance_1._off = true;

	this.instance_2 = new lib.Анимация3("synched",0);
	this.instance_2.setTransform(92,111.5,1,1,0,0,0,-28.2,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},14).to({state:[{t:this.instance_2}]},15).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,regY:0.1,rotation:20.1969,x:86.9,y:117.7},14).wait(16));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},14).to({_off:true,regY:0,rotation:0,x:92,y:111.5},15).wait(1));

	// pick
	this.pix = new lib.pix();
	this.pix.name = "pix";
	this.pix.setTransform(136.4,108.4,1,1,12.4563,0,0,11.3,45.1);

	this.timeline.addTween(cjs.Tween.get(this.pix).to({regX:11.2,regY:45,scaleX:0.9999,scaleY:0.9999,rotation:82.9422,x:131.4,y:139.05},14).to({regX:11.3,regY:45.1,scaleX:1,scaleY:1,rotation:12.4563,x:136.4,y:108.4},15).wait(1));

	// cat
	this.instance_3 = new lib.Анимация4("synched",0);
	this.instance_3.setTransform(69.65,163.1,1,1,0,0,0,8,79.1);

	this.instance_4 = new lib.Анимация5("synched",0);
	this.instance_4.setTransform(69.6,163.1,1,1,-4.6957,0,0,8,79.1);
	this.instance_4._off = true;

	this.instance_5 = new lib.Анимация6("synched",0);
	this.instance_5.setTransform(69.65,163.1,1,1,0,0,0,8,79.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_4}]},14).to({state:[{t:this.instance_5}]},15).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true,rotation:-4.6957,x:69.6},14).wait(16));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:false},14).to({_off:true,rotation:0,x:69.65},15).wait(1));

	// rleg
	this.instance_6 = new lib.Анимация7("synched",0);
	this.instance_6.setTransform(85.5,162.95,1,1,0,0,0,-4.1,-13.8);

	this.instance_7 = new lib.Анимация9("synched",0);
	this.instance_7.setTransform(84.9,162.95,1,1,0,0,0,-4.7,-13.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).to({state:[{t:this.instance_6}]},14).to({state:[{t:this.instance_7}]},15).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({startPosition:0},14).to({_off:true,regX:-4.7,x:84.9},15).wait(1));

	// lleg
	this.instance_8 = new lib.Анимация10("synched",0);
	this.instance_8.setTransform(54,166.05,1,1,0,0,0,0,-13.6);

	this.instance_9 = new lib.Анимация12("synched",0);
	this.instance_9.setTransform(54,165.65,1,1,0,0,0,0,-14);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8}]}).to({state:[{t:this.instance_8}]},14).to({state:[{t:this.instance_9}]},15).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({startPosition:0},14).to({_off:true,regY:-14,y:165.65},15).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13,-3.8,249.8,235.5);


(lib.cat_anim02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// arm
	this.instance = new lib.Анимация1("synched",0);
	this.instance.setTransform(92,111.5,1,1,0,0,0,-28.2,0);

	this.instance_1 = new lib.Анимация2("synched",0);
	this.instance_1.setTransform(85.35,111.5,1,1,0,0,0,-28.2,0);
	this.instance_1._off = true;

	this.instance_2 = new lib.Анимация3("synched",0);
	this.instance_2.setTransform(92,111.5,1,1,0,0,0,-28.2,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},14).to({state:[{t:this.instance_2}]},15).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:85.35},14).wait(16));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},14).to({_off:true,x:92},15).wait(1));

	// pick
	this.pix = new lib.pix();
	this.pix.name = "pix";
	this.pix.setTransform(136.35,108.35,1,1,-52.0557,0,0,11.2,45.1);

	this.timeline.addTween(cjs.Tween.get(this.pix).to({regY:45,rotation:37.9425},14).to({regY:45.1,rotation:-52.0557},15).wait(1));

	// cat
	this.instance_3 = new lib.Анимация4("synched",0);
	this.instance_3.setTransform(69.65,163.1,1,1,0,0,0,8,79.1);

	this.instance_4 = new lib.Анимация5("synched",0);
	this.instance_4.setTransform(69.6,163.1,1,1,-4.6957,0,0,8,79.1);
	this.instance_4._off = true;

	this.instance_5 = new lib.Анимация6("synched",0);
	this.instance_5.setTransform(69.65,163.1,1,1,0,0,0,8,79.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_4}]},14).to({state:[{t:this.instance_5}]},15).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true,rotation:-4.6957,x:69.6},14).wait(16));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:false},14).to({_off:true,rotation:0,x:69.65},15).wait(1));

	// rleg
	this.instance_6 = new lib.Анимация7("synched",0);
	this.instance_6.setTransform(85.5,162.95,1,1,0,0,0,-4.1,-13.8);

	this.instance_7 = new lib.Анимация9("synched",0);
	this.instance_7.setTransform(84.9,162.95,1,1,0,0,0,-4.7,-13.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).to({state:[{t:this.instance_6}]},14).to({state:[{t:this.instance_7}]},15).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({startPosition:0},14).to({_off:true,regX:-4.7,x:84.9},15).wait(1));

	// lleg
	this.instance_8 = new lib.Анимация10("synched",0);
	this.instance_8.setTransform(54,166.05,1,1,0,0,0,0,-13.6);

	this.instance_9 = new lib.Анимация12("synched",0);
	this.instance_9.setTransform(54,165.65,1,1,0,0,0,0,-14);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8}]}).to({state:[{t:this.instance_8}]},14).to({state:[{t:this.instance_9}]},15).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({startPosition:0},14).to({_off:true,regY:-14,y:165.65},15).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13,-3.8,250.7,200);


(lib.cat_anim01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// arm
	this.instance = new lib.Анимация1("synched",0);
	this.instance.setTransform(120.2,111.5);

	this.instance_1 = new lib.Анимация2("synched",0);
	this.instance_1.setTransform(120.2,111.5);
	this.instance_1._off = true;

	this.instance_2 = new lib.Анимация3("synched",0);
	this.instance_2.setTransform(120.2,111.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},7).to({state:[{t:this.instance_2}]},7).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},7).wait(8));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},7).to({_off:true},7).wait(1));

	// pick
	this.pix = new lib.pix();
	this.pix.name = "pix";
	this.pix.setTransform(136.3,108.3,1,1,22.9433,0,0,11.2,45);

	this.timeline.addTween(cjs.Tween.get(this.pix).wait(15));

	// cat
	this.instance_3 = new lib.Анимация4("synched",0);
	this.instance_3.setTransform(61.65,84);

	this.instance_4 = new lib.Анимация5("synched",0);
	this.instance_4.setTransform(61.65,84);
	this.instance_4._off = true;

	this.instance_5 = new lib.Анимация6("synched",0);
	this.instance_5.setTransform(61.65,84);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_4}]},7).to({state:[{t:this.instance_5}]},7).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},7).wait(8));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:false},7).to({_off:true},7).wait(1));

	// rleg
	this.instance_6 = new lib.Анимация7("synched",0);
	this.instance_6.setTransform(85.5,162.95,1,1,0,0,0,-4.1,-13.8);

	this.instance_7 = new lib.Анимация8("synched",0);
	this.instance_7.setTransform(84.7,162.9,1,1,-14.9983,0,0,-4.9,-13.8);
	this.instance_7._off = true;

	this.instance_8 = new lib.Анимация9("synched",0);
	this.instance_8.setTransform(84.9,162.95,1,1,0,0,0,-4.7,-13.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).to({state:[{t:this.instance_7}]},7).to({state:[{t:this.instance_8}]},7).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true,regX:-4.9,rotation:-14.9983,x:84.7,y:162.9},7).wait(8));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:false},7).to({_off:true,regX:-4.7,rotation:0,x:84.9,y:162.95},7).wait(1));

	// lleg
	this.instance_9 = new lib.Анимация10("synched",0);
	this.instance_9.setTransform(54,166.05,1,1,0,0,0,0,-13.6);

	this.instance_10 = new lib.Анимация11("synched",0);
	this.instance_10.setTransform(54.05,166.05,1,1,10.9763,0,0,0,-13.6);
	this.instance_10._off = true;

	this.instance_11 = new lib.Анимация12("synched",0);
	this.instance_11.setTransform(54,165.65,1,1,0,0,0,0,-14);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9}]}).to({state:[{t:this.instance_10}]},7).to({state:[{t:this.instance_11}]},7).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({_off:true,rotation:10.9763,x:54.05},7).wait(8));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({_off:false},7).to({_off:true,regY:-14,rotation:0,x:54,y:165.65},7).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,237.5,198.6);


(lib.cat = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.anim = new lib.cat_anim01();
	this.anim.name = "anim";
	this.anim.setTransform(-0.95,0.05,0.2822,0.2822,0,0,0,74,98.2);

	this.anim_1 = new lib.cat_anim02();
	this.anim_1.name = "anim_1";
	this.anim_1.setTransform(-0.3,0.05,0.2822,0.2822,0,0,0,74,98.2);

	this.anim_2 = new lib.cat_anim03();
	this.anim_2.name = "anim_2";
	this.anim_2.setTransform(0.3,0.05,0.2822,0.2822,0,0,0,74,98.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.anim}]}).to({state:[{t:this.anim_1}]},1).to({state:[{t:this.anim_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.8,-27.6,67.4,55.3);


(lib.bar_block = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.bHP = new lib.bHP();
	this.bHP.name = "bHP";
	this.bHP.setTransform(20.8,1.9,1,1,0,0,0,20.3,1.4);

	this.instance = new lib.CachedBmp_21();
	this.instance.setTransform(-0.5,-0.5,0.3764,0.3764);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.bHP}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bar_block, new cjs.Rectangle(-3.5,-1,45.6,6.8), null);


(lib.adButtont = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.adButton = new lib.adButton();
	this.adButton.name = "adButton";
	new cjs.ButtonHelper(this.adButton, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.adButton).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.adButtont, new cjs.Rectangle(-2,-2,167,48), null);


(lib.upgWindow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.u9 = new lib.upg();
	this.u9.name = "u9";
	this.u9.setTransform(561.05,366.35,1,1,0,0,0,77.8,42.9);

	this.u8 = new lib.upg();
	this.u8.name = "u8";
	this.u8.setTransform(337.45,366.35,1,1,0,0,0,77.8,42.9);

	this.u7 = new lib.upg();
	this.u7.name = "u7";
	this.u7.setTransform(110.9,366.35,1,1,0,0,0,77.8,42.9);

	this.u6 = new lib.upg();
	this.u6.name = "u6";
	this.u6.setTransform(561.05,246.5,1,1,0,0,0,77.8,42.9);

	this.u5 = new lib.upg();
	this.u5.name = "u5";
	this.u5.setTransform(337.45,246.5,1,1,0,0,0,77.8,42.9);

	this.u4 = new lib.upg();
	this.u4.name = "u4";
	this.u4.setTransform(110.9,246.5,1,1,0,0,0,77.8,42.9);

	this.u3 = new lib.upg();
	this.u3.name = "u3";
	this.u3.setTransform(561.05,130.25,1,1,0,0,0,77.8,42.9);

	this.u2 = new lib.upg();
	this.u2.name = "u2";
	this.u2.setTransform(337.45,130.25,1,1,0,0,0,77.8,42.9);

	this.u1 = new lib.upg();
	this.u1.name = "u1";
	this.u1.setTransform(110.9,130.25,1,1,0,0,0,77.8,42.9);

	this.clos = new lib.clos_upg();
	this.clos.name = "clos";
	this.clos.setTransform(658.25,32.25,1.4411,1.4411,0,0,0,16.6,15.7);
	new cjs.ButtonHelper(this.clos, 0, 1, 2);

	this.instance = new lib.upgBack();
	this.instance.setTransform(346.2,229.9,1,1,0,0,0,346.2,229.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.clos},{t:this.u1},{t:this.u2},{t:this.u3},{t:this.u4},{t:this.u5},{t:this.u6},{t:this.u7},{t:this.u8},{t:this.u9}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.upgWindow, new cjs.Rectangle(-1,-1,694,462), null);


(lib.block = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bar
	this.barBlock = new lib.bar_block();
	this.barBlock.name = "barBlock";
	this.barBlock.setTransform(24.65,57.15,1.1474,2.6566,0,0,0,20.9,2);

	this.timeline.addTween(cjs.Tween.get(this.barBlock).wait(1));

	// breaking
	this.breaking = new lib.breaking();
	this.breaking.name = "breaking";
	this.breaking.setTransform(22,22.9);

	this.timeline.addTween(cjs.Tween.get(this.breaking).wait(1));

	// Слой_1
	this.bType = new lib.bType();
	this.bType.name = "bType";

	this.timeline.addTween(cjs.Tween.get(this.bType).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.block, new cjs.Rectangle(-3.4,0,52.3,67.1), null);


(lib.tbs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.b120 = new lib.block();
	this.b120.name = "b120";
	this.b120.setTransform(328.8,411.05,0.7827,0.7827,0,0,0,24.1,25.3);

	this.b119 = new lib.block();
	this.b119.name = "b119";
	this.b119.setTransform(294.25,411.05,0.7827,0.7827,0,0,0,24.1,25.3);

	this.b118 = new lib.block();
	this.b118.name = "b118";
	this.b118.setTransform(259.75,411.05,0.7827,0.7827,0,0,0,24.1,25.3);

	this.b117 = new lib.block();
	this.b117.name = "b117";
	this.b117.setTransform(225.15,411.05,0.7827,0.7827,0,0,0,24.1,25.3);

	this.b116 = new lib.block();
	this.b116.name = "b116";
	this.b116.setTransform(191.05,411.05,0.7827,0.7827,0,0,0,24.1,25.3);

	this.b115 = new lib.block();
	this.b115.name = "b115";
	this.b115.setTransform(156.45,411.05,0.7827,0.7827,0,0,0,24.1,25.3);

	this.b114 = new lib.block();
	this.b114.name = "b114";
	this.b114.setTransform(122.15,411.05,0.7827,0.7827,0,0,0,24.1,25.3);

	this.b113 = new lib.block();
	this.b113.name = "b113";
	this.b113.setTransform(87.55,411.05,0.7827,0.7827,0,0,0,24.1,25.3);

	this.b112 = new lib.block();
	this.b112.name = "b112";
	this.b112.setTransform(53.45,411.05,0.7827,0.7827,0,0,0,24.1,25.3);

	this.b111 = new lib.block();
	this.b111.name = "b111";
	this.b111.setTransform(18.85,411.05,0.7827,0.7827,0,0,0,24.1,25.3);

	this.b101 = new lib.block();
	this.b101.name = "b101";
	this.b101.setTransform(328.8,375.45,0.7827,0.7827,0,0,0,24.1,25.3);

	this.b102 = new lib.block();
	this.b102.name = "b102";
	this.b102.setTransform(294.25,375.45,0.7827,0.7827,0,0,0,24.1,25.3);

	this.b103 = new lib.block();
	this.b103.name = "b103";
	this.b103.setTransform(259.75,375.45,0.7827,0.7827,0,0,0,24.1,25.3);

	this.b104 = new lib.block();
	this.b104.name = "b104";
	this.b104.setTransform(225.15,375.45,0.7827,0.7827,0,0,0,24.1,25.3);

	this.b105 = new lib.block();
	this.b105.name = "b105";
	this.b105.setTransform(191.05,375.45,0.7827,0.7827,0,0,0,24.1,25.3);

	this.b106 = new lib.block();
	this.b106.name = "b106";
	this.b106.setTransform(156.45,375.45,0.7827,0.7827,0,0,0,24.1,25.3);

	this.b107 = new lib.block();
	this.b107.name = "b107";
	this.b107.setTransform(122.15,375.45,0.7827,0.7827,0,0,0,24.1,25.3);

	this.b108 = new lib.block();
	this.b108.name = "b108";
	this.b108.setTransform(87.55,375.45,0.7827,0.7827,0,0,0,24.1,25.3);

	this.b109 = new lib.block();
	this.b109.name = "b109";
	this.b109.setTransform(53.45,375.45,0.7827,0.7827,0,0,0,24.1,25.3);

	this.b110 = new lib.block();
	this.b110.name = "b110";
	this.b110.setTransform(18.85,375.45,0.7827,0.7827,0,0,0,24.1,25.3);

	this.b100 = new lib.block();
	this.b100.name = "b100";
	this.b100.setTransform(328.8,340.4,0.7827,0.7827,0,0,0,24.1,25.3);

	this.b99 = new lib.block();
	this.b99.name = "b99";
	this.b99.setTransform(294.25,340.4,0.7827,0.7827,0,0,0,24.1,25.3);

	this.b98 = new lib.block();
	this.b98.name = "b98";
	this.b98.setTransform(259.75,340.4,0.7827,0.7827,0,0,0,24.1,25.3);

	this.b97 = new lib.block();
	this.b97.name = "b97";
	this.b97.setTransform(225.15,340.4,0.7827,0.7827,0,0,0,24.1,25.3);

	this.b96 = new lib.block();
	this.b96.name = "b96";
	this.b96.setTransform(191.05,340.4,0.7827,0.7827,0,0,0,24.1,25.3);

	this.b95 = new lib.block();
	this.b95.name = "b95";
	this.b95.setTransform(156.45,340.4,0.7827,0.7827,0,0,0,24.1,25.3);

	this.b94 = new lib.block();
	this.b94.name = "b94";
	this.b94.setTransform(122.15,340.4,0.7827,0.7827,0,0,0,24.1,25.3);

	this.b93 = new lib.block();
	this.b93.name = "b93";
	this.b93.setTransform(87.55,340.4,0.7827,0.7827,0,0,0,24.1,25.3);

	this.b92 = new lib.block();
	this.b92.name = "b92";
	this.b92.setTransform(53.45,340.4,0.7827,0.7827,0,0,0,24.1,25.3);

	this.b91 = new lib.block();
	this.b91.name = "b91";
	this.b91.setTransform(18.85,340.4,0.7827,0.7827,0,0,0,24.1,25.3);

	this.b81 = new lib.block();
	this.b81.name = "b81";
	this.b81.setTransform(309.95,285,0.7827,0.7827);

	this.b82 = new lib.block();
	this.b82.name = "b82";
	this.b82.setTransform(294.25,304.8,0.7827,0.7827,0,0,0,24.1,25.3);

	this.b83 = new lib.block();
	this.b83.name = "b83";
	this.b83.setTransform(259.75,304.8,0.7827,0.7827,0,0,0,24.1,25.3);

	this.b84 = new lib.block();
	this.b84.name = "b84";
	this.b84.setTransform(225.15,304.8,0.7827,0.7827,0,0,0,24.1,25.3);

	this.b85 = new lib.block();
	this.b85.name = "b85";
	this.b85.setTransform(191.05,304.8,0.7827,0.7827,0,0,0,24.1,25.3);

	this.b86 = new lib.block();
	this.b86.name = "b86";
	this.b86.setTransform(156.45,304.8,0.7827,0.7827,0,0,0,24.1,25.3);

	this.b87 = new lib.block();
	this.b87.name = "b87";
	this.b87.setTransform(122.15,304.8,0.7827,0.7827,0,0,0,24.1,25.3);

	this.b88 = new lib.block();
	this.b88.name = "b88";
	this.b88.setTransform(87.55,304.8,0.7827,0.7827,0,0,0,24.1,25.3);

	this.b89 = new lib.block();
	this.b89.name = "b89";
	this.b89.setTransform(53.45,304.8,0.7827,0.7827,0,0,0,24.1,25.3);

	this.b90 = new lib.block();
	this.b90.name = "b90";
	this.b90.setTransform(18.85,304.8,0.7827,0.7827,0,0,0,24.1,25.3);

	this.b80 = new lib.block();
	this.b80.name = "b80";
	this.b80.setTransform(328.8,268.85,0.7827,0.7827,0,0,0,24.1,25.3);

	this.b79 = new lib.block();
	this.b79.name = "b79";
	this.b79.setTransform(294.25,268.85,0.7827,0.7827,0,0,0,24.1,25.3);

	this.b78 = new lib.block();
	this.b78.name = "b78";
	this.b78.setTransform(259.75,268.85,0.7827,0.7827,0,0,0,24.1,25.3);

	this.b77 = new lib.block();
	this.b77.name = "b77";
	this.b77.setTransform(225.15,268.85,0.7827,0.7827,0,0,0,24.1,25.3);

	this.b76 = new lib.block();
	this.b76.name = "b76";
	this.b76.setTransform(191.05,268.85,0.7827,0.7827,0,0,0,24.1,25.3);

	this.b75 = new lib.block();
	this.b75.name = "b75";
	this.b75.setTransform(156.45,268.85,0.7827,0.7827,0,0,0,24.1,25.3);

	this.b74 = new lib.block();
	this.b74.name = "b74";
	this.b74.setTransform(122.15,268.85,0.7827,0.7827,0,0,0,24.1,25.3);

	this.b73 = new lib.block();
	this.b73.name = "b73";
	this.b73.setTransform(87.55,268.85,0.7827,0.7827,0,0,0,24.1,25.3);

	this.b72 = new lib.block();
	this.b72.name = "b72";
	this.b72.setTransform(53.45,268.85,0.7827,0.7827,0,0,0,24.1,25.3);

	this.b71 = new lib.block();
	this.b71.name = "b71";
	this.b71.setTransform(18.85,268.85,0.7827,0.7827,0,0,0,24.1,25.3);

	this.b61 = new lib.block();
	this.b61.name = "b61";
	this.b61.setTransform(328.8,233.25,0.7827,0.7827,0,0,0,24.1,25.3);

	this.b62 = new lib.block();
	this.b62.name = "b62";
	this.b62.setTransform(294.25,233.25,0.7827,0.7827,0,0,0,24.1,25.3);

	this.b63 = new lib.block();
	this.b63.name = "b63";
	this.b63.setTransform(259.75,233.25,0.7827,0.7827,0,0,0,24.1,25.3);

	this.b64 = new lib.block();
	this.b64.name = "b64";
	this.b64.setTransform(225.15,233.25,0.7827,0.7827,0,0,0,24.1,25.3);

	this.b65 = new lib.block();
	this.b65.name = "b65";
	this.b65.setTransform(191.05,233.25,0.7827,0.7827,0,0,0,24.1,25.3);

	this.b66 = new lib.block();
	this.b66.name = "b66";
	this.b66.setTransform(156.45,233.25,0.7827,0.7827,0,0,0,24.1,25.3);

	this.b67 = new lib.block();
	this.b67.name = "b67";
	this.b67.setTransform(122.15,233.25,0.7827,0.7827,0,0,0,24.1,25.3);

	this.b68 = new lib.block();
	this.b68.name = "b68";
	this.b68.setTransform(87.55,233.25,0.7827,0.7827,0,0,0,24.1,25.3);

	this.b69 = new lib.block();
	this.b69.name = "b69";
	this.b69.setTransform(53.45,233.25,0.7827,0.7827,0,0,0,24.1,25.3);

	this.b70 = new lib.block();
	this.b70.name = "b70";
	this.b70.setTransform(18.85,233.25,0.7827,0.7827,0,0,0,24.1,25.3);

	this.b60 = new lib.block();
	this.b60.name = "b60";
	this.b60.setTransform(328.8,198.2,0.7827,0.7827,0,0,0,24.1,25.3);

	this.b59 = new lib.block();
	this.b59.name = "b59";
	this.b59.setTransform(294.25,198.2,0.7827,0.7827,0,0,0,24.1,25.3);

	this.b58 = new lib.block();
	this.b58.name = "b58";
	this.b58.setTransform(259.75,198.2,0.7827,0.7827,0,0,0,24.1,25.3);

	this.b57 = new lib.block();
	this.b57.name = "b57";
	this.b57.setTransform(225.15,198.2,0.7827,0.7827,0,0,0,24.1,25.3);

	this.b56 = new lib.block();
	this.b56.name = "b56";
	this.b56.setTransform(191.05,198.2,0.7827,0.7827,0,0,0,24.1,25.3);

	this.b55 = new lib.block();
	this.b55.name = "b55";
	this.b55.setTransform(156.45,198.2,0.7827,0.7827,0,0,0,24.1,25.3);

	this.b54 = new lib.block();
	this.b54.name = "b54";
	this.b54.setTransform(122.15,198.2,0.7827,0.7827,0,0,0,24.1,25.3);

	this.b53 = new lib.block();
	this.b53.name = "b53";
	this.b53.setTransform(87.55,198.2,0.7827,0.7827,0,0,0,24.1,25.3);

	this.b52 = new lib.block();
	this.b52.name = "b52";
	this.b52.setTransform(53.45,198.2,0.7827,0.7827,0,0,0,24.1,25.3);

	this.b51 = new lib.block();
	this.b51.name = "b51";
	this.b51.setTransform(18.85,198.2,0.7827,0.7827,0,0,0,24.1,25.3);

	this.b41 = new lib.block();
	this.b41.name = "b41";
	this.b41.setTransform(328.8,162.6,0.7827,0.7827,0,0,0,24.1,25.3);

	this.b42 = new lib.block();
	this.b42.name = "b42";
	this.b42.setTransform(294.25,162.6,0.7827,0.7827,0,0,0,24.1,25.3);

	this.b43 = new lib.block();
	this.b43.name = "b43";
	this.b43.setTransform(259.75,162.6,0.7827,0.7827,0,0,0,24.1,25.3);

	this.b44 = new lib.block();
	this.b44.name = "b44";
	this.b44.setTransform(225.15,162.6,0.7827,0.7827,0,0,0,24.1,25.3);

	this.b45 = new lib.block();
	this.b45.name = "b45";
	this.b45.setTransform(191.05,162.6,0.7827,0.7827,0,0,0,24.1,25.3);

	this.b46 = new lib.block();
	this.b46.name = "b46";
	this.b46.setTransform(156.45,162.6,0.7827,0.7827,0,0,0,24.1,25.3);

	this.b47 = new lib.block();
	this.b47.name = "b47";
	this.b47.setTransform(122.15,162.6,0.7827,0.7827,0,0,0,24.1,25.3);

	this.b48 = new lib.block();
	this.b48.name = "b48";
	this.b48.setTransform(87.55,162.6,0.7827,0.7827,0,0,0,24.1,25.3);

	this.b49 = new lib.block();
	this.b49.name = "b49";
	this.b49.setTransform(53.45,162.6,0.7827,0.7827,0,0,0,24.1,25.3);

	this.b50 = new lib.block();
	this.b50.name = "b50";
	this.b50.setTransform(18.85,162.6,0.7827,0.7827,0,0,0,24.1,25.3);

	this.b40 = new lib.block();
	this.b40.name = "b40";
	this.b40.setTransform(328.8,126.05,0.7827,0.7827,0,0,0,24.1,25.3);

	this.b39 = new lib.block();
	this.b39.name = "b39";
	this.b39.setTransform(294.25,126.05,0.7827,0.7827,0,0,0,24.1,25.3);

	this.b38 = new lib.block();
	this.b38.name = "b38";
	this.b38.setTransform(259.75,126.05,0.7827,0.7827,0,0,0,24.1,25.3);

	this.b37 = new lib.block();
	this.b37.name = "b37";
	this.b37.setTransform(225.15,126.05,0.7827,0.7827,0,0,0,24.1,25.3);

	this.b36 = new lib.block();
	this.b36.name = "b36";
	this.b36.setTransform(191.05,126.05,0.7827,0.7827,0,0,0,24.1,25.3);

	this.b35 = new lib.block();
	this.b35.name = "b35";
	this.b35.setTransform(156.45,126.05,0.7827,0.7827,0,0,0,24.1,25.3);

	this.b34 = new lib.block();
	this.b34.name = "b34";
	this.b34.setTransform(122.15,126.05,0.7827,0.7827,0,0,0,24.1,25.3);

	this.b33 = new lib.block();
	this.b33.name = "b33";
	this.b33.setTransform(87.55,126.05,0.7827,0.7827,0,0,0,24.1,25.3);

	this.b32 = new lib.block();
	this.b32.name = "b32";
	this.b32.setTransform(53.45,126.05,0.7827,0.7827,0,0,0,24.1,25.3);

	this.b31 = new lib.block();
	this.b31.name = "b31";
	this.b31.setTransform(18.85,126.05,0.7827,0.7827,0,0,0,24.1,25.3);

	this.b1 = new lib.block();
	this.b1.name = "b1";
	this.b1.setTransform(309.95,0,0.7827,0.7827);

	this.b2 = new lib.block();
	this.b2.name = "b2";
	this.b2.setTransform(294.25,19.8,0.7827,0.7827,0,0,0,24.1,25.3);

	this.b3 = new lib.block();
	this.b3.name = "b3";
	this.b3.setTransform(259.75,19.8,0.7827,0.7827,0,0,0,24.1,25.3);

	this.b4 = new lib.block();
	this.b4.name = "b4";
	this.b4.setTransform(225.15,19.8,0.7827,0.7827,0,0,0,24.1,25.3);

	this.b5 = new lib.block();
	this.b5.name = "b5";
	this.b5.setTransform(191.05,19.8,0.7827,0.7827,0,0,0,24.1,25.3);

	this.b6 = new lib.block();
	this.b6.name = "b6";
	this.b6.setTransform(156.45,19.8,0.7827,0.7827,0,0,0,24.1,25.3);

	this.b7 = new lib.block();
	this.b7.name = "b7";
	this.b7.setTransform(122.15,19.8,0.7827,0.7827,0,0,0,24.1,25.3);

	this.b8 = new lib.block();
	this.b8.name = "b8";
	this.b8.setTransform(87.55,19.8,0.7827,0.7827,0,0,0,24.1,25.3);

	this.b9 = new lib.block();
	this.b9.name = "b9";
	this.b9.setTransform(53.45,19.8,0.7827,0.7827,0,0,0,24.1,25.3);

	this.b10 = new lib.block();
	this.b10.name = "b10";
	this.b10.setTransform(18.85,19.8,0.7827,0.7827,0,0,0,24.1,25.3);

	this.b20 = new lib.block();
	this.b20.name = "b20";
	this.b20.setTransform(328.8,55.4,0.7827,0.7827,0,0,0,24.1,25.3);

	this.b19 = new lib.block();
	this.b19.name = "b19";
	this.b19.setTransform(294.25,55.4,0.7827,0.7827,0,0,0,24.1,25.3);

	this.b18 = new lib.block();
	this.b18.name = "b18";
	this.b18.setTransform(259.75,55.4,0.7827,0.7827,0,0,0,24.1,25.3);

	this.b17 = new lib.block();
	this.b17.name = "b17";
	this.b17.setTransform(225.15,55.4,0.7827,0.7827,0,0,0,24.1,25.3);

	this.b16 = new lib.block();
	this.b16.name = "b16";
	this.b16.setTransform(191.05,55.4,0.7827,0.7827,0,0,0,24.1,25.3);

	this.b15 = new lib.block();
	this.b15.name = "b15";
	this.b15.setTransform(156.45,55.4,0.7827,0.7827,0,0,0,24.1,25.3);

	this.b14 = new lib.block();
	this.b14.name = "b14";
	this.b14.setTransform(122.15,55.4,0.7827,0.7827,0,0,0,24.1,25.3);

	this.b13 = new lib.block();
	this.b13.name = "b13";
	this.b13.setTransform(87.55,55.4,0.7827,0.7827,0,0,0,24.1,25.3);

	this.b12 = new lib.block();
	this.b12.name = "b12";
	this.b12.setTransform(53.45,55.4,0.7827,0.7827,0,0,0,24.1,25.3);

	this.b11 = new lib.block();
	this.b11.name = "b11";
	this.b11.setTransform(18.85,55.4,0.7827,0.7827,0,0,0,24.1,25.3);

	this.b21 = new lib.block();
	this.b21.name = "b21";
	this.b21.setTransform(328.8,90.45,0.7827,0.7827,0,0,0,24.1,25.3);

	this.b22 = new lib.block();
	this.b22.name = "b22";
	this.b22.setTransform(294.25,90.45,0.7827,0.7827,0,0,0,24.1,25.3);

	this.b23 = new lib.block();
	this.b23.name = "b23";
	this.b23.setTransform(259.75,90.45,0.7827,0.7827,0,0,0,24.1,25.3);

	this.b24 = new lib.block();
	this.b24.name = "b24";
	this.b24.setTransform(225.15,90.45,0.7827,0.7827,0,0,0,24.1,25.3);

	this.b25 = new lib.block();
	this.b25.name = "b25";
	this.b25.setTransform(191.05,90.45,0.7827,0.7827,0,0,0,24.1,25.3);

	this.b26 = new lib.block();
	this.b26.name = "b26";
	this.b26.setTransform(156.45,90.45,0.7827,0.7827,0,0,0,24.1,25.3);

	this.b27 = new lib.block();
	this.b27.name = "b27";
	this.b27.setTransform(122.15,90.45,0.7827,0.7827,0,0,0,24.1,25.3);

	this.b28 = new lib.block();
	this.b28.name = "b28";
	this.b28.setTransform(87.55,90.45,0.7827,0.7827,0,0,0,24.1,25.3);

	this.b29 = new lib.block();
	this.b29.name = "b29";
	this.b29.setTransform(53.45,90.45,0.7827,0.7827,0,0,0,24.1,25.3);

	this.b30 = new lib.block();
	this.b30.name = "b30";
	this.b30.setTransform(18.85,90.45,0.7827,0.7827,0,0,0,24.1,25.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.b30},{t:this.b29},{t:this.b28},{t:this.b27},{t:this.b26},{t:this.b25},{t:this.b24},{t:this.b23},{t:this.b22},{t:this.b21},{t:this.b11},{t:this.b12},{t:this.b13},{t:this.b14},{t:this.b15},{t:this.b16},{t:this.b17},{t:this.b18},{t:this.b19},{t:this.b20},{t:this.b10},{t:this.b9},{t:this.b8},{t:this.b7},{t:this.b6},{t:this.b5},{t:this.b4},{t:this.b3},{t:this.b2},{t:this.b1},{t:this.b31},{t:this.b32},{t:this.b33},{t:this.b34},{t:this.b35},{t:this.b36},{t:this.b37},{t:this.b38},{t:this.b39},{t:this.b40},{t:this.b50},{t:this.b49},{t:this.b48},{t:this.b47},{t:this.b46},{t:this.b45},{t:this.b44},{t:this.b43},{t:this.b42},{t:this.b41},{t:this.b51},{t:this.b52},{t:this.b53},{t:this.b54},{t:this.b55},{t:this.b56},{t:this.b57},{t:this.b58},{t:this.b59},{t:this.b60},{t:this.b70},{t:this.b69},{t:this.b68},{t:this.b67},{t:this.b66},{t:this.b65},{t:this.b64},{t:this.b63},{t:this.b62},{t:this.b61},{t:this.b71},{t:this.b72},{t:this.b73},{t:this.b74},{t:this.b75},{t:this.b76},{t:this.b77},{t:this.b78},{t:this.b79},{t:this.b80},{t:this.b90},{t:this.b89},{t:this.b88},{t:this.b87},{t:this.b86},{t:this.b85},{t:this.b84},{t:this.b83},{t:this.b82},{t:this.b81},{t:this.b91},{t:this.b92},{t:this.b93},{t:this.b94},{t:this.b95},{t:this.b96},{t:this.b97},{t:this.b98},{t:this.b99},{t:this.b100},{t:this.b110},{t:this.b109},{t:this.b108},{t:this.b107},{t:this.b106},{t:this.b105},{t:this.b104},{t:this.b103},{t:this.b102},{t:this.b101},{t:this.b111},{t:this.b112},{t:this.b113},{t:this.b114},{t:this.b115},{t:this.b116},{t:this.b117},{t:this.b118},{t:this.b119},{t:this.b120}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tbs, new cjs.Rectangle(-2.7,0,350.9,443.7), null);


(lib.blocks = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A7JfxMAAAg/hMA2TAAAMAAAA/hg");
	var mask_graphics_50 = new cjs.Graphics().p("A7JfxMAAAg/hMA2TAAAMAAAA/hg");
	var mask_graphics_99 = new cjs.Graphics().p("A7JfxMAAAg/hMA2TAAAMAAAA/hg");
	var mask_graphics_100 = new cjs.Graphics().p("A7JfxMAAAg/hMA2TAAAMAAAA/hg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:173.825,y:156.9}).wait(50).to({graphics:mask_graphics_50,x:173.825,y:156.9}).wait(49).to({graphics:mask_graphics_99,x:173.825,y:156.9}).wait(1).to({graphics:mask_graphics_100,x:173.825,y:156.9}).wait(1));

	// Слой_1
	this.tbs = new lib.tbs();
	this.tbs.name = "tbs";
	this.tbs.setTransform(173.8,215.4,1,1,0,0,0,173.8,215.4);

	var maskedShapeInstanceList = [this.tbs];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.tbs).to({y:180.4},50).to({y:147.9},49).to({y:215.4},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-46.3,347.7,406.5);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.clearAllSoundStreams();
		 
		var notation = 1;
		
		
		
		function nd(a) {
			return new Decimal(a);
		}
		
		
		function format3(num) {
			if (num < 10) {
				return Math.round(num*100)/100;
			}
			else if (num < 100) {
				return Math.round(num*10)/10;
			}
			else {
				return Math.round(num);
			}
		}
		
		function nullify(num) {
			if (num < 10) {
				return "00" + Math.floor(num);
			}
			else if (num < 100) {
				return "0" + Math.floor(num);
			}
			else {
				return Math.floor(num);
			}
		}
		
		
		function format(num) {
			if (notation == 1) {
				return format2(num);
			}
			else {
				if (num.lt(1000)) {
					return format3(num.toNumber());
				}
				else if (num.lt(100000)) {
					var num_ = num.toNumber;
					var fPart = Math.floor(num/1000);
					var sPart = (num%1000);
					return fPart + "," + nullify(sPart);
				}
				else {
					return format_short(num);
				}
			}
		}
		
		function format0(num) {
			if (notation == 1) {
				if (num.lt(1000)) {
					return format2(num.floor());
				}
				else {
					return format2(num);
				}
			}
		}
		
		
		function format2(num) {
			if (num.lt(1000)) {
				return format3(num.toNumber());
			}
			else if (num.lt(100000)) {
				var num_ = num.toNumber;
				var fPart = Math.floor(num/1000);
				var sPart = (num%1000);
				return fPart + "," + nullify(sPart);
			}
			else if (num.lt(1e6)) {
				return format3(num.div(1e3).toNumber()) + " K";
			}
			else if (num.lt(1e9)) {
				return format3(num.div(1e6).toNumber()) + " M";
			}
			else if (num.lt(1e12)) {
				return format3(num.div(1e9).toNumber()) + " B";
			}
			else if (num.lt(1e15)) {
				return format3(num.div(1e12).toNumber()) + " T";
			}
			else if (num.lt(1e18)) {
				return format3(num.div(1e15).toNumber()) + " Qa";
			}
			else if (num.lt(1e21)) {
				return format3(num.div(1e18).toNumber()) + " Qi";
			}
			else if (num.lt(1e24)) {
				return format3(num.div(1e21).toNumber()) + " Sx";
			}
			else if (num.lt(1e27)) {
				return format3(num.div(1e24).toNumber()) + " Sp";
			}
			else if (num.lt(1e30)) {
				return format3(num.div(1e27).toNumber()) + " Oc";
			}
			else if (num.lt(1e33)) {
				return format3(num.div(1e30).toNumber()) + " No";
			}
			else if (num.lt(1e36)) {
				return format3(num.div(1e33).toNumber()) + " Dc";
			}
			else if (num.lt(1e39)) {
				return format3(num.div(1e36).toNumber()) + " UD";
			}
			else if (num.lt(1e42)) {
				return format3(num.div(1e39).toNumber()) + " DD";
			}
			else if (num.lt(1e45)) {
				return format3(num.div(1e42).toNumber()) + " TD";
			}
			else if (num.lt(1e48)) {
				return format3(num.div(1e45).toNumber()) + " qD";
			}
			else if (num.lt(1e51)) {
				return format3(num.div(1e48).toNumber()) + " QD";
			}
			else if (num.lt(1e54)) {
				return format3(num.div(1e51).toNumber()) + " sD";
			}
			else if (num.lt(1e57)) {
				return format3(num.div(1e54).toNumber()) + " SD";
			}
			else if (num.lt(1e60)) {
				return format3(num.div(1e57).toNumber()) + " OD";
			}
			else if (num.lt(1e63)) {
				return format3(num.div(1e60).toNumber()) + " ND";
			}
			else if (num.lt(1e66)) {
				return format3(num.div(1e63).toNumber()) + " Vg";
			}
			else if (num.lt(1e69)) {
				return format3(num.div(1e66).toNumber()) + " UV";
			}
			else if (num.lt(1e72)) {
				return format3(num.div(1e69).toNumber()) + " DV";
			}
			else if (num.lt(1e75)) {
				return format3(num.div(1e72).toNumber()) + " TV";
			}
			else if (num.lt(1e78)) {
				return format3(num.div(1e75).toNumber()) + " qV";
			}
			else if (num.lt(1e81)) {
				return format3(num.div(1e78).toNumber()) + " QV";
			}
			else if (num.lt(1e84)) {
				return format3(num.div(1e81).toNumber()) + " sV";
			}
			else if (num.lt(1e87)) {
				return format3(num.div(1e84).toNumber()) + " SV";
			}
			else if (num.lt(1e90)) {
				return format3(num.div(1e87).toNumber()) + " OV";
			}
			else if (num.lt(1e93)) {
				return format3(num.div(1e90).toNumber()) + " NV";
			}
			else if (num.lt(1e96)) {
				return format3(num.div(1e93).toNumber()) + " Tg";
			}
			else if (num.lt(1e99)) {
				return format3(num.div(1e96).toNumber()) + " UT";
			}
			else if (num.lt(1e100)) {
				return format3(num.div(1e99).toNumber()) + " DT";
			}
			else if (num.lt(1e103)) {
				return format3(num.div(1e100).toNumber()) + " G";
			}
			else {
				return format_short(num);
			}
		}
		
		
		var curInf = new Decimal("ee30800");
		
		
		function exponentialFormat(num, precision) {
			let e = num.log10().floor()
			let m = num.div(Decimal.pow(10, e))
			if(m.toStringWithDecimalPlaces(precision) == 10) {
				m = new Decimal(1)
				e = e.add(1)
			}
			return m.toStringWithDecimalPlaces(precision)+"e"+e.toStringWithDecimalPlaces(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")
		}
		
		function exponentialFormat2(num, precision) {
			let e = num.log10();
			let e2 = e.log10().floor();
			let m = e.div(Decimal.pow(10, e2));
		
			return "e"+m.toStringWithDecimalPlaces(precision)+"e"+e2.toStringWithDecimalPlaces(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")
		}
		
		function commaFormat(num, precision) {
			if (num === null || num === undefined) return "NaN"
			if (num.mag < 0.001) return (0).toFixed(precision)
			return num.toStringWithDecimalPlaces(precision).replace(/\B(?=(\d{3})+(?!\d))/g, ",")
		}
		
		
		function regularFormat(num, precision) {
			if (num === null || num === undefined) return "NaN"
			if (num.mag < 0.001) return (0).toFixed(precision)
			return num.toStringWithDecimalPlaces(precision)
		}
		
		function fixValue(x, y = 0) {
			return x || new Decimal(y)
		}
		
		function sumValues(x) {
			x = Object.values(x)
			if (!x[0]) return new Decimal(0)
			return x.reduce((a, b) => Decimal.add(a, b))
		}
		
		
		function format_short(decimal, precision=1) {
			decimal = new Decimal(decimal)
			if (isNaN(decimal.sign)||isNaN(decimal.layer)||isNaN(decimal.mag)) {
				return "NaN"
			}
			if (decimal.sign<0) return "-"+format(decimal.neg(), precision)
			if (decimal.mag == Number.POSITIVE_INFINITY) return "R_INF";
			if (!decimal.gte("ee1000000")) {
				if (decimal.gte(curInf)) {
					var slog = decimal.slog()
					if (slog.gte(1e6)) return "F" + format(slog.floor())
					else return Decimal.pow(10, slog.sub(slog.floor())).toStringWithDecimalPlaces(3) + "F" + commaFormat(slog.floor(), 0)
				} else if (decimal.gte("1e1e6")) return exponentialFormat2(decimal, 3)
				else if (decimal.gte(1e4)) return exponentialFormat(decimal, 2)
				else if (decimal.gte(1e3)) return commaFormat(decimal, 0)
				else return regularFormat(decimal, precision)
			}
			else return "INF";
		}
		
		function formatWhole(decimal) {
			decimal = new Decimal(decimal)
			if (decimal.gte(1e9)) return format(decimal, 2)
			if (decimal.lte(0.95) && !decimal.eq(0)) return format(decimal, 2)
			return format(decimal, 0)
		}
		
		function formatTime(s) {
			if (s<60) return format(s)+"s"
			else if (s<3600) return formatWhole(Math.floor(s/60))+"m "+format(s%60)+"s"
			else if (s<86400) return formatWhole(Math.floor(s/3600))+"h "+formatWhole(Math.floor(s/60)%60)+"m "+format(s%60)+"s"
			else return formatWhole(Math.floor(s/86400)) + "d "+formatWhole(Math.floor(s/3600)%24)+"h "+formatWhole(Math.floor(s/60)%60)+"m "+format(s%60)+"s"
		}
		
		function toPlaces(x, precision, maxAccepted) {
			x = new Decimal(x)
			let result = x.toStringWithDecimalPlaces(precision)
			if (new Decimal(result).gte(maxAccepted)) {
				result = new Decimal(maxAccepted-Math.pow(0.1, precision)).toStringWithDecimalPlaces(precision)
			}
			return result
		}
		
		function absmin(a, b) {
			if (Math.abs(a) < Math.abs(b)) {
				return a;
			}
			else {
				return b;
			}
		}
		
		var mousePosX = 0;
		var mousePosY = 0;
		
		
		this.addEventListener("tick", main_fs.bind(this));
		function main_fs() {
		
			mousePosX = stage.mouseX / canvas.width * 1160;
			mousePosY = stage.mouseY / canvas.height * 720;
		}
		this.cGames.addEventListener("click", goCG.bind(this));
		function goCG() {
			window.open("http://gityx.com/", "_blank");
		}
		
		const crazysdk = window.CrazyGames.CrazySDK.getInstance(); //Getting the SDK
		crazysdk.init();
		adRequested = false;
		
		var fullscreen = false;
		var elem = document.getElementById("animation_container");
		
		crazysdk.addEventListener('adStarted', adStarted.bind(this));
		crazysdk.addEventListener('adError', adError.bind(this));
		crazysdk.addEventListener('adFinished', adFinished.bind(this));
		
		
		var addedAd2 = false;
		
		var respawn = 60;
		
		
		this.addEventListener("tick", devSet.bind(this));
		function devSet() {
			
			
			if (this.helpSplash.alpha > 0) {
				this.helpSplash.alpha -= 1/12/fps*timeMult;
			}
			else if (this.helpSplash.alpha < 0) {
				this.helpSplash.alpha = 0;
			}
			
			if (respawn > 0) {
				this.adButton.visible = false;
			}
			else {
				this.adButton.visible = true;
			}
			d = new Date();
			time1_ib = d.getTime()/1000;
			
		}
		
		
		function adStarted() {
			fps = 100000000;
			fps2 = 100000000;
		
		}
		
		function adError() {
		    fps = 30;
			fps2 = 30;
			this.helpSplash.alpha = 1;
			this.helpSplash.text = "这是一个广告错误，但无论如何这里有 1.5 分钟的奖励时间给你 ;)";
			speedUPtime_ib += 90;
			respawn = 300;
		}
		
		function adFinished() {
		    fps = 30;
			fps2 = 30;
			this.helpSplash.alpha = 1;
			this.helpSplash.text = "非常感谢观看。 这是您的奖金 5 分钟！";
			speedUPtime_ib += 300;
			respawn = 300;
		}
		
		function adError2() {
		    fps = 30;
			fps2 = 30;
			
		}
		
		
		function adFinished2() {
		    fps = 30;
			fps2 = 30;
			
			var mGet = costs[Math.min(24, Math.floor(stageMax/5))].times(sellPrice).times(infMult2).times(50);
			money = money.plus(mGet);
			
			this.helpSplash.text = "你得到了 " + format(mGet) + " $";
			
			respawn = 160;
		}
		
		
		this.adButton.addEventListener("click", getAd2.bind(this));
		function getAd2() {
			if (!crazysdk.hasAdblock) {
				crazysdk.requestAd('rewarded');
				adDelay = 60;
			}
		}
		
		
		this.midAd.yesB.addEventListener("click", watchAd.bind(this));
		function watchAd() {
			this.midAd.visible = false;
			this.chipG.visible = false;
			if (!addedAd2) {
				crazysdk.addEventListener('adFinished', adFinished2.bind(this));
				addedAd2 = true;
			}
			if (!crazysdk.hasAdblock) {
				crazysdk.requestAd('rewarded');
				adDelay = 60;
			}
		}
		
		
		//ads
		
		
		var respawn = 30;
		
		
		this.chipG.visible = false
		this.midAd.visible = false
		
		
		
		this.addEventListener("tick", bonusbonus.bind(this));
		function bonusbonus() {
			
			respawn -= 1/fps;
			if (this.chipG.life > 0) {
				this.chipG.life -= 1/fps;
				this.chipG.alpha = this.chipG.life/10;
				if (this.chipG.alpha < 0) {
					this.chipG.alpha.visible = false;
					respawn = 160;
				}
			}
			
			var chance = Math.random();
			if (chance <= 0.0009 && respawn <= 0) {
				this.chipG.visible = true;
				this.chipG.x = 99;
				this.chipG.y = 29;
				this.chipG.life = 15;
				respawn = 160;
			}
			
			if (this.midAd.visible) {
				stage.addChild(this.midAd);
			}
		}
		
		var respawn2 = 20;
		var yChange = 0;
		
		
		this.chipG.addEventListener("click", showAdd.bind(this));
		function showAdd() {
			this.midAd.visible = true;
			this.midAd.x = this.chipG.x + 40;
			this.midAd.y = this.chipG.y + 125;
		}
		
		this.midAd.noB.addEventListener("click", remChip.bind(this));
		function remChip() {
			this.midAd.visible = false;
			this.chipG.visible = false;
		}
		
		
		
		this.addEventListener("tick", spUP.bind(this));
		function spUP() {
			
			timeMult = 1 + (sActive*1);
			var dt = new Date();
			time2_ib = dt.getTime()/1000;
			
			if (speedUPtime_ib > 0) {
				this.speedUP_b.visible = true;
				this.spdUP.visible = true;
				this.spdTime.visible = true;
				this.spdUP.text = "加速 (x2, 最多 30分钟)";
				this.spdTime.text = Math.floor(speedUPtime_ib*10)/10 + "s";
				
				if (sActive == true) {
					this.speedUP_b.gotoAndStop(1);
					speedUPtime_ib -= 1/fps;
				}
				else {
					this.speedUP_b.gotoAndStop(0);
				}
			}
			else {
				this.speedUP_b.visible = false;
				this.spdUP.visible = false;
				this.spdTime.visible = false;
				sActive = false;
				this.adButton.visible = true;
			}
		}
		
		this.speedUP_b.addEventListener("click", makeActive.bind(this));
		function makeActive() {
			if (sActive == false) {
				sActive = true;
			}
			else {
				sActive = false;
			}
		}
		var cChance = 0.05;
		var cChance_next = 0.055;
		
		var cSpd2 = 1;
		var cSpd2_next = 1.05;
		
		var x2chance = 0;
		var x2chance_next = 1;
		
		var pDamage = nd(1);
		var pDamage_next = nd(1.05);
		
		var craftCrMax = nd(1);
		var craftCrMax_next = nd(2);
		
		var sellPrice = nd(1);
		var sellPrice_next = nd(1.1);
		
		var betterCraft = nd(1);
		var betterCraft_next = nd(2);
		
		var betterSpd = nd(1);
		var betterSpd_next = nd(1.05);
		
		var passiveGems = nd(0);
		var passiveGems_next = nd(1);
		
		
		var fps = 30;
		var fps2 = 30;
		
		
		var speedUPtime_ib = 0;
		var sActive = false;
		var timeMult = 1;
		var speedUPtime_ib = 0;
		
		var tutVis = true;
		
		var d = new Date();
		var timeStart_ib = d.getTime()/1000;
		var time1_ib = d.getTime()/1000;
		var time2_ib = d.getTime()/1000;
		
		window.setInterval(calculateFPS, 1000);
		window.setInterval(saving, 10000);
		function calculateFPS() {
			fps = Math.max(5, fps2);
			fps2 = 1;
		}
		
		
		var tick = 0;
		var phase = 0;
		var phaseProgress = 0;
		
		var catTick = 0;
		var catHit = false;
		var catSpeed = 2;
		var catMove = 1;
		
		var catDMG = nd(1);
		
		var stagei = 0;
		var stageMax = 0;
		
		var stageProg = 0;
		
		var cooldownMove = 5;
		
		var sellPart = 1;
		
		var wentStop = 0;
		
		var money = nd(0);
		var crystals = nd(0);
				
				
		var cspd = 1;
		
		
		var tutVis = true;
		
				
		function nd(a) {
			return new Decimal(a);
		}
		
		var blockMHP = [nd(5), nd(5), nd(5), nd(5), nd(5),
						nd(5), nd(5), nd(5), nd(5), nd(5),
						nd(5), nd(5), nd(5), nd(5), nd(5),
						nd(5), nd(5), nd(5), nd(5), nd(5),
						nd(5), nd(5), nd(5), nd(5), nd(5),
						nd(5), nd(5), nd(5), nd(5), nd(5),
						nd(5), nd(5), nd(5), nd(5), nd(5),
						nd(5), nd(5), nd(5), nd(5), nd(5),
						nd(5), nd(5), nd(5), nd(5), nd(5),
						nd(5), nd(5), nd(5), nd(5), nd(5),
						nd(5), nd(5), nd(5), nd(5), nd(5),
						nd(5), nd(5), nd(5), nd(5), nd(5),
						nd(5), nd(5), nd(5), nd(5), nd(5),
						nd(5), nd(5), nd(5), nd(5), nd(5),
						nd(5), nd(5), nd(5), nd(5), nd(5),
						nd(5), nd(5), nd(5), nd(5), nd(5),
						nd(5), nd(5), nd(5), nd(5), nd(5),
						nd(5), nd(5), nd(5), nd(5), nd(5),
						nd(5), nd(5), nd(5), nd(5), nd(5),
						nd(5), nd(5), nd(5), nd(5), nd(5),
						nd(5), nd(5), nd(5), nd(5), nd(5),
						nd(5), nd(5), nd(5), nd(5), nd(5),
						nd(5), nd(5), nd(5), nd(5), nd(5),
						nd(5), nd(5), nd(5), nd(5), nd(5)];
		
		
		var blockHP = [nd(5), nd(5), nd(5), nd(5), nd(5),
						nd(5), nd(5), nd(5), nd(5), nd(5),
						nd(5), nd(5), nd(5), nd(5), nd(5),
						nd(5), nd(5), nd(5), nd(5), nd(5),
						nd(5), nd(5), nd(5), nd(5), nd(5),
						nd(5), nd(5), nd(5), nd(5), nd(5),
						nd(5), nd(5), nd(5), nd(5), nd(5),
						nd(5), nd(5), nd(5), nd(5), nd(5),
						nd(5), nd(5), nd(5), nd(5), nd(5),
						nd(5), nd(5), nd(5), nd(5), nd(5),
						nd(5), nd(5), nd(5), nd(5), nd(5),
						nd(5), nd(5), nd(5), nd(5), nd(5),
						nd(5), nd(5), nd(5), nd(5), nd(5),
						nd(5), nd(5), nd(5), nd(5), nd(5),
						nd(5), nd(5), nd(5), nd(5), nd(5),
						nd(5), nd(5), nd(5), nd(5), nd(5),
						nd(5), nd(5), nd(5), nd(5), nd(5),
						nd(5), nd(5), nd(5), nd(5), nd(5),
						nd(5), nd(5), nd(5), nd(5), nd(5),
						nd(5), nd(5), nd(5), nd(5), nd(5),
						nd(5), nd(5), nd(5), nd(5), nd(5),
						nd(5), nd(5), nd(5), nd(5), nd(5),
						nd(5), nd(5), nd(5), nd(5), nd(5),
						nd(5), nd(5), nd(5), nd(5), nd(5)];
		
		
		
		
		var blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
					  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
					  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
					  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
					  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
					  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
					  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
					  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
					  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
					  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
					  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
					  0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		
		
		
		var chances = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
					   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		
		
		
		var resources = [nd(0), nd(0), nd(0), nd(0), nd(0), 
						 nd(0), nd(0), nd(0), nd(0), nd(0), 
						 nd(0), nd(0), nd(0), nd(0), nd(0), 
						 nd(0), nd(0), nd(0), nd(0), nd(0), 
						 nd(0), nd(0), nd(0), nd(0), nd(0)];
						 
						 
						 
		var costs = [nd(1), nd(1), nd(1), nd(1), nd(1),
					 nd(1), nd(1), nd(1), nd(1), nd(1),
					 nd(1), nd(1), nd(1), nd(1), nd(1),
					 nd(1), nd(1), nd(1), nd(1), nd(1),
					 nd(1), nd(1), nd(1), nd(1), nd(1)];
						 
						 
		var baseDMG = [nd(1.33334), nd(1), nd(1), nd(1), nd(1),
					 nd(1), nd(1), nd(1), nd(1), nd(1),
					 nd(1), nd(1), nd(1), nd(1), nd(1),
					 nd(1), nd(1), nd(1), nd(1), nd(1),
					 nd(1), nd(1), nd(1), nd(1), nd(1)];
		
		
		
		setChances();
		setBlocks();
		
		
		
		var dmgBonus = nd(1);
		var fallSpd = 1;
		var gemMult = nd(1);
		
		
		var dmgBonus_next = nd(1);
		var fallSpd_next = 1;
		var gemMult_next = nd(1);
		
		
		function pix(level, rarity, speed) {
			this.level = level;
			this.rarity = rarity;
			if (this.level < 25) {
				this.dps = baseDMG[Math.min(24, this.level)].times(nd(0.5).plus(nd(0.005).times(this.rarity))).times(pDamage).times(betterSpd).times(dmgBonus);
			}
			else {
				this.dps = baseDMG[Math.min(24, this.level)].times(nd(0.5).plus(nd(0.005).times(this.rarity))).times(pDamage).times(betterSpd).times(dmgBonus).times(nd(2).pow(this.level - 24));
			}
			this.speed = speed; //rand from 0.5 to 2
			this.damage = this.dps.times(this.speed);
		}
		
		
		
		var pick = new pix(0, 50, 1);
		
		
		
		var inventory = [new pix(0, 0, 0), new pix(0, 0, 0), new pix(0, 0, 0), new pix(0, 0, 0),
						 new pix(0, 0, 0), new pix(0, 0, 0), new pix(0, 0, 0), new pix(0, 0, 0),
						 new pix(0, 0, 0), new pix(0, 0, 0), new pix(0, 0, 0), new pix(0, 0, 0),
						 new pix(0, 0, 0), new pix(0, 0, 0), new pix(0, 0, 0), new pix(0, 0, 0)];
		
		
		
		var itemsCosts = [nd(0), nd(0), nd(0), nd(0), 
						  nd(0), nd(0), nd(0), nd(0), 
						  nd(0), nd(0), nd(0), nd(0), 
						  nd(0), nd(0), nd(0), nd(0)];
		
		
		var autoP = false;
		
		
		
		//craft
		
		var craftLv = 0;
		var craftCr = nd(1);
		var craftCost = nd(1);
		
		var equip = true;
		
		
		function upgrade(cost, cinc) {
			this.lv = 0;
			this.baseCost = cost;
			this.nowCost = cost;
			this.totalCost = cost;
			this.costInc = cinc;
			this.buyAmo = 1;
		}
		
		
		var upgrades = [new upgrade(nd(10), nd(2)), new upgrade(nd(100), nd(3)), new upgrade(nd(500), nd(3)),
						new upgrade(nd(1000), nd(3)), new upgrade(nd(5000), nd(10)), new upgrade(nd(25000), nd(5)),
						new upgrade(nd(100000), nd(1.5)), new upgrade(nd(1000000), nd(2)), new upgrade(nd(2000000), nd(1000))];
		
		//crystal chance / cat speed / 2x ore chance
		//pix damage / more cr/craft / selling price
		//better craft / better speed / passive gems
		
		var shiftY = 0;
		
		
		var prestigeLv = 0;
		
		
		
		var infMult = nd(1);
		var infMult2 = nd(1);
		
		
		function loading() {
			if (localStorage.getItem('iMiner_money')) {
				tick = JSON.parse(localStorage.getItem('iMiner_tick'));
				stagei = JSON.parse(localStorage.getItem('iMiner_stagei'));
				stageMax = JSON.parse(localStorage.getItem('iMiner_stageMax'));
				stageProg = JSON.parse(localStorage.getItem('iMiner_stageProg'));
				sellPart = JSON.parse(localStorage.getItem('iMiner_sellPart'));
				money = nd(JSON.parse(localStorage.getItem('iMiner_money')));
				crystals = nd(JSON.parse(localStorage.getItem('iMiner_crystals')));
				resources = JSON.parse(localStorage.getItem('iMiner_resources'));
				pick = JSON.parse(localStorage.getItem('iMiner_pick'));
				inventory = JSON.parse(localStorage.getItem('iMiner_inventory'));
				craftLv = JSON.parse(localStorage.getItem('iMiner_craftLv'));
				craftCr = nd(JSON.parse(localStorage.getItem('iMiner_craftCr')));
				equip = JSON.parse(localStorage.getItem('iMiner_equip'));
				upgrades = JSON.parse(localStorage.getItem('iMiner_upgrades'));
				shiftY = JSON.parse(localStorage.getItem('iMiner_shiftY'));
				
				pick.dps = nd(pick.dps);
				pick.damage = nd(pick.damage);
				
				for (var i = 0 ; i < 25 ; ++i) {
					resources[i] = nd(resources[i]);
				}
				
				for (var i = 0 ; i < 16 ; ++i) {
					inventory[i].dps = nd(inventory[i].dps);
					inventory[i].damage = nd(inventory[i].damage);
				}
				
				for (var i = 0 ; i < 9 ; ++i) {
					upgrades[i].baseCost = nd(upgrades[i].baseCost);
					upgrades[i].nowCost = nd(upgrades[i].nowCost);
					upgrades[i].totalCost = nd(upgrades[i].totalCost);
					upgrades[i].costInc = nd(upgrades[i].costInc);
				}
			}
			if (localStorage.getItem('iMiner_autoP')) {
				autoP = JSON.parse(localStorage.getItem('iMiner_autoP'));
			}
			if (localStorage.getItem('iMiner_cspd')) {
				cspd = JSON.parse(localStorage.getItem('iMiner_cspd'));
			}
			if (localStorage.getItem('iMiner_prestigeLv')) {
				prestigeLv = JSON.parse(localStorage.getItem('iMiner_prestigeLv'));
			}
			if (localStorage.getItem('iMiner_time1_ib')) {
				time1_ib = JSON.parse(localStorage.getItem('iMiner_time1_ib'));
				speedUPtime_ib = JSON.parse(localStorage.getItem('iMiner_speedUPtime_ib'));
			}
			if (localStorage.getItem('iMiner_tutVis')) {
				tutVis = JSON.parse(localStorage.getItem('iMiner_tutVis'));
			}
		}
		
		loading();
		
		
		var bonus = time2_ib - time1_ib;
		var bonus = bonus/20;
		var bonus = Math.pow(bonus, 0.69);
		
		if (bonus >= 2) {
			speedUPtime_ib += bonus;
		}
		if (speedUPtime_ib > 1800) {
			speedUPtime_ib = 1800;
		}
		
		setChances();
		setBlocks();
		
		function saving() {
			localStorage.setItem('iMiner_tick', JSON.stringify(tick));
			localStorage.setItem('iMiner_stagei', JSON.stringify(stagei));
			localStorage.setItem('iMiner_stageMax', JSON.stringify(stageMax));
			localStorage.setItem('iMiner_stageProg', JSON.stringify(stageProg));
			localStorage.setItem('iMiner_sellPart', JSON.stringify(sellPart));
			localStorage.setItem('iMiner_money', JSON.stringify(money));
			localStorage.setItem('iMiner_crystals', JSON.stringify(crystals));
			localStorage.setItem('iMiner_resources', JSON.stringify(resources));
			localStorage.setItem('iMiner_pick', JSON.stringify(pick));
			localStorage.setItem('iMiner_inventory', JSON.stringify(inventory));
			localStorage.setItem('iMiner_craftLv', JSON.stringify(craftLv));
			localStorage.setItem('iMiner_craftCr', JSON.stringify(craftCr));
			localStorage.setItem('iMiner_equip', JSON.stringify(equip));
			localStorage.setItem('iMiner_upgrades', JSON.stringify(upgrades));
			localStorage.setItem('iMiner_shiftY', JSON.stringify(shiftY));
			localStorage.setItem('iMiner_autoP', JSON.stringify(autoP));
			localStorage.setItem('iMiner_cspd', JSON.stringify(cspd));
			localStorage.setItem('iMiner_prestigeLv', JSON.stringify(prestigeLv));
			localStorage.setItem('iMiner_time1_ib', JSON.stringify(time1_ib));
			localStorage.setItem('iMiner_speedUPtime_ib', JSON.stringify(speedUPtime_ib));
			localStorage.setItem('iMiner_tutVis', JSON.stringify(tutVis));
			
			
			console.log("GAME SAVED");
		}
		
		
		
		this.popupName.visible = false;
		this.popupSale.visible = false;
		this.popupEq.visible = false;
		
		this.upgWindow.visible = false;
		this.presPopup.visible = false;
		
		
		this.addEventListener("tick", main.bind(this));
		function main() {
			tick += 1;
			fps2 += 1;
			time1_ib = d.getTime()/1000;
			
			if (cooldownMove > 0) {
				cooldownMove -= 1/fps*timeMult;
			}
			catTick += 1/fps*timeMult;
			
			catSpeed = pick.speed / cspd;
			catMove = 1 * cspd * cSpd2;
			catDMG = pick.damage;
			
			this.mineLv.text = "矿山等级: " + stagei;
			
			this.moneyt.text = "金钱: " + format(money);
			this.cryst.text = "水晶: " + format(crystals);
			
			
			crystals = crystals.plus(passiveGems.div(fps/timeMult).div(60).times(gemMult));
			
			
			
			this.cspd.text = "小猫速度: " + Math.round(cspd*100) + "%";
			
			if (cspd > 1) {
				cspd -= 0.02/30;
			}
			
			
			if (stagei > 0 && cooldownMove <= 0) {
				this.minusLv.visible = true;
			}
			else {
				this.minusLv.visible = false;
			}
			
			
			if (stagei < stageMax && cooldownMove <= 0) {
				this.plusLv.visible = true;
			}
			else {
				this.plusLv.visible = false;
			}
			
			if (stagei == stageMax) {
				this.prog.visible = true;
				this.prog.text = stageProg + "/10";
			}
			else {
				this.prog.visible = false;
			}
			
			if (stageProg >= 10) {
				stageProg = 0;
				stageMax += 1;
				cooldownMove = 0;
			}
			
			
			if (autoP) {
				this.autoProg.gotoAndStop(1);
				if (stagei != stageMax) {
					stagei = stageMax;
					setChances();
					setBlocks();
				}
			}
			else {
				this.autoProg.gotoAndStop(0);
			}
			
			
			this.res.ress.res1.text = ": " + format(resources[0]);
			this.res.ress.res2.text = ": " + format(resources[1]);
			this.res.ress.res3.text = ": " + format(resources[2]);
			this.res.ress.res4.text = ": " + format(resources[3]);
			this.res.ress.res5.text = ": " + format(resources[4]);
			this.res.ress.res6.text = ": " + format(resources[5]);
			this.res.ress.res7.text = ": " + format(resources[6]);
			this.res.ress.res8.text = ": " + format(resources[7]);
			this.res.ress.res9.text = ": " + format(resources[8]);
			this.res.ress.res10.text = ": " + format(resources[9]);
			this.res.ress.res11.text = ": " + format(resources[10]);
			this.res.ress.res12.text = ": " + format(resources[11]);
			this.res.ress.res13.text = ": " + format(resources[12]);
			this.res.ress.res14.text = ": " + format(resources[13]);
			this.res.ress.res15.text = ": " + format(resources[14]);
			this.res.ress.res16.text = ": " + format(resources[15]);
			this.res.ress.res17.text = ": " + format(resources[16]);
			this.res.ress.res18.text = ": " + format(resources[17]);
			this.res.ress.res19.text = ": " + format(resources[18]);
			this.res.ress.res20.text = ": " + format(resources[19]);
			this.res.ress.res21.text = ": " + format(resources[20]);
			this.res.ress.res22.text = ": " + format(resources[21]);
			this.res.ress.res23.text = ": " + format(resources[22]);
			this.res.ress.res24.text = ": " + format(resources[23]);
			this.res.ress.res25.text = ": " + format(resources[24]);
			
			
			this.cat.anim.pix.gotoAndStop(Math.min(24, pick.level));
			this.cat.anim_1.pix.gotoAndStop(Math.min(24, pick.level));
			this.cat.anim_2.pix.gotoAndStop(Math.min(24, pick.level));
			
			
			this.pixs.gotoAndStop(Math.min(24, pick.level));
			this.namee.text = rarPrefix(pick.rarity) + " " + matName(pick.level) + " 镐";
			this.dmg.text = format(pick.damage);
			this.dps.text = "DPS: " + format(pick.dps);
			this.spd.text = "速度: " + Math.round(pick.speed*100)/100 + "秒";
			this.lev.text = Math.round(pick.level);
			this.rar.text = shortt(pick.rarity);
			
			
			if (phase == 0) {
				
				this.blocks.gotoAndStop(0);
				bGotoStop();
				
				this.cat.x = 405;
				this.cat.y = 141;
				this.cat.gotoAndStop(2);
				this.cat.scaleX = 1;
				this.cat.scaleY = 1;
				
				this.cat.anim_2.gotoAndStop(Math.floor(catTick/catSpeed*30));
				
				
				if (catTick >= catSpeed/2 && catHit == false) {
					blockHP[0] = blockHP[0].sub(catDMG);
					catHit = true;
				}
				if (catTick >= catSpeed) {
					catTick = 0;
					catHit = false;
				}
				
				if (blockHP[0].lte(0)) {
					phase += 1;
					phaseProgress = 0;
					if (stagei == stageMax) {
						stageProg += 1;
					}
					resources[blocks[0]] = resources[blocks[0]].plus(infMult.floor());
					
					var crysRand = Math.random();
					if (crysRand < cChance) {
						crystals = crystals.plus(gemMult);
					}
					
					var x2c = Math.random();
					if (x2c < x2chance) {
						resources[blocks[0]] = resources[blocks[0]].plus(infMult.floor());
					}
					
				}
				
				
				
				this.blocks.tbs.b1.barBlock.bHP.gotoAndStop((blockHP[0].div(blockMHP[0]).times(99).floor()).toNumber());
				
				
				this.blocks.tbs.b1.visible = true;
				this.blocks.tbs.b2.visible = true;
				this.blocks.tbs.b3.visible = true;
				this.blocks.tbs.b4.visible = true;
				this.blocks.tbs.b5.visible = true;
				this.blocks.tbs.b6.visible = true;
				this.blocks.tbs.b7.visible = true;
				this.blocks.tbs.b8.visible = true;
				this.blocks.tbs.b9.visible = true;
				this.blocks.tbs.b10.visible = true;
				this.blocks.tbs.b11.visible = true;
				this.blocks.tbs.b12.visible = true;
				this.blocks.tbs.b13.visible = true;
				this.blocks.tbs.b14.visible = true;
				this.blocks.tbs.b15.visible = true;
				this.blocks.tbs.b16.visible = true;
				this.blocks.tbs.b17.visible = true;
				this.blocks.tbs.b18.visible = true;
				this.blocks.tbs.b19.visible = true;
				this.blocks.tbs.b20.visible = true;
				
				this.blocks.tbs.b1.barBlock.visible = true;
				this.blocks.tbs.b2.barBlock.visible = false;
				this.blocks.tbs.b3.barBlock.visible = false;
				this.blocks.tbs.b4.barBlock.visible = false;
				this.blocks.tbs.b5.barBlock.visible = false;
				this.blocks.tbs.b6.barBlock.visible = false;
				this.blocks.tbs.b7.barBlock.visible = false;
				this.blocks.tbs.b8.barBlock.visible = false;
				this.blocks.tbs.b9.barBlock.visible = false;
				this.blocks.tbs.b10.barBlock.visible = false;
				this.blocks.tbs.b11.barBlock.visible = false;
				this.blocks.tbs.b12.barBlock.visible = false;
				this.blocks.tbs.b13.barBlock.visible = false;
				this.blocks.tbs.b14.barBlock.visible = false;
				this.blocks.tbs.b15.barBlock.visible = false;
				this.blocks.tbs.b16.barBlock.visible = false;
				this.blocks.tbs.b17.barBlock.visible = false;
				this.blocks.tbs.b18.barBlock.visible = false;
				this.blocks.tbs.b19.barBlock.visible = false;
				this.blocks.tbs.b20.barBlock.visible = false;
				
			}
			else if (phase == 1) {
				phaseProgress += catMove/fps*timeMult;
				this.cat.x = 405 + Math.min(35, phaseProgress*35);
				this.cat.y = 141;
				this.cat.gotoAndStop(0);
				this.cat.scaleX = 1;
				this.cat.scaleY = 1;
				this.blocks.gotoAndStop(0);
				
				
				if (phaseProgress > 1) {
					phase += 1;
					phaseProgress = 0;
				}
				
				
				this.blocks.tbs.b2.barBlock.bHP.gotoAndStop((blockHP[1].div(blockMHP[1]).times(99).floor()).toNumber());
				
				
				this.blocks.tbs.b1.visible = false;
				this.blocks.tbs.b2.visible = true;
				this.blocks.tbs.b3.visible = true;
				this.blocks.tbs.b4.visible = true;
				this.blocks.tbs.b5.visible = true;
				this.blocks.tbs.b6.visible = true;
				this.blocks.tbs.b7.visible = true;
				this.blocks.tbs.b8.visible = true;
				this.blocks.tbs.b9.visible = true;
				this.blocks.tbs.b10.visible = true;
				this.blocks.tbs.b11.visible = true;
				this.blocks.tbs.b12.visible = true;
				this.blocks.tbs.b13.visible = true;
				this.blocks.tbs.b14.visible = true;
				this.blocks.tbs.b15.visible = true;
				this.blocks.tbs.b16.visible = true;
				this.blocks.tbs.b17.visible = true;
				this.blocks.tbs.b18.visible = true;
				this.blocks.tbs.b19.visible = true;
				this.blocks.tbs.b20.visible = true;
				
				this.blocks.tbs.b1.barBlock.visible = false;
				this.blocks.tbs.b2.barBlock.visible = true;
				this.blocks.tbs.b3.barBlock.visible = false;
				this.blocks.tbs.b4.barBlock.visible = false;
				this.blocks.tbs.b5.barBlock.visible = false;
				this.blocks.tbs.b6.barBlock.visible = false;
				this.blocks.tbs.b7.barBlock.visible = false;
				this.blocks.tbs.b8.barBlock.visible = false;
				this.blocks.tbs.b9.barBlock.visible = false;
				this.blocks.tbs.b10.barBlock.visible = false;
				this.blocks.tbs.b11.barBlock.visible = false;
				this.blocks.tbs.b12.barBlock.visible = false;
				this.blocks.tbs.b13.barBlock.visible = false;
				this.blocks.tbs.b14.barBlock.visible = false;
				this.blocks.tbs.b15.barBlock.visible = false;
				this.blocks.tbs.b16.barBlock.visible = false;
				this.blocks.tbs.b17.barBlock.visible = false;
				this.blocks.tbs.b18.barBlock.visible = false;
				this.blocks.tbs.b19.barBlock.visible = false;
				this.blocks.tbs.b20.barBlock.visible = false;
			}
			else if (phase == 2) {
				phaseProgress += 3/fps*fallSpd*timeMult;
				this.cat.x = 440;
				this.cat.y = 141;
				this.cat.gotoAndStop(0);
				this.cat.scaleX = 1;
				this.cat.scaleY = 1;
				this.blocks.gotoAndStop(Math.min(50, Math.floor(phaseProgress*50)));
		
				
				
				if (phaseProgress > 1) {
					phase += 1;
					phaseProgress = 0;
				}
				
				
				this.blocks.tbs.b2.barBlock.bHP.gotoAndStop((blockHP[1].div(blockMHP[1]).times(99).floor()).toNumber());
				
				
				this.blocks.tbs.b1.visible = false;
				this.blocks.tbs.b2.visible = true;
				this.blocks.tbs.b3.visible = true;
				this.blocks.tbs.b4.visible = true;
				this.blocks.tbs.b5.visible = true;
				this.blocks.tbs.b6.visible = true;
				this.blocks.tbs.b7.visible = true;
				this.blocks.tbs.b8.visible = true;
				this.blocks.tbs.b9.visible = true;
				this.blocks.tbs.b10.visible = true;
				this.blocks.tbs.b11.visible = true;
				this.blocks.tbs.b12.visible = true;
				this.blocks.tbs.b13.visible = true;
				this.blocks.tbs.b14.visible = true;
				this.blocks.tbs.b15.visible = true;
				this.blocks.tbs.b16.visible = true;
				this.blocks.tbs.b17.visible = true;
				this.blocks.tbs.b18.visible = true;
				this.blocks.tbs.b19.visible = true;
				this.blocks.tbs.b20.visible = true;
				
				this.blocks.tbs.b1.barBlock.visible = false;
				this.blocks.tbs.b2.barBlock.visible = true;
				this.blocks.tbs.b3.barBlock.visible = false;
				this.blocks.tbs.b4.barBlock.visible = false;
				this.blocks.tbs.b5.barBlock.visible = false;
				this.blocks.tbs.b6.barBlock.visible = false;
				this.blocks.tbs.b7.barBlock.visible = false;
				this.blocks.tbs.b8.barBlock.visible = false;
				this.blocks.tbs.b9.barBlock.visible = false;
				this.blocks.tbs.b10.barBlock.visible = false;
				this.blocks.tbs.b11.barBlock.visible = false;
				this.blocks.tbs.b12.barBlock.visible = false;
				this.blocks.tbs.b13.barBlock.visible = false;
				this.blocks.tbs.b14.barBlock.visible = false;
				this.blocks.tbs.b15.barBlock.visible = false;
				this.blocks.tbs.b16.barBlock.visible = false;
				this.blocks.tbs.b17.barBlock.visible = false;
				this.blocks.tbs.b18.barBlock.visible = false;
				this.blocks.tbs.b19.barBlock.visible = false;
				this.blocks.tbs.b20.barBlock.visible = false;
			}
			else if (phase == 3) {
				this.cat.x = 440;
				this.cat.y = 143;
				this.cat.gotoAndStop(1);
				this.cat.scaleX = -1;
				this.cat.scaleY = 1;
				this.blocks.gotoAndStop(50);
				
				
				this.cat.anim_1.gotoAndStop(Math.floor(catTick/catSpeed*30));
				
				
				if (catTick >= catSpeed/2 && catHit == false) {
					blockHP[1] = blockHP[1].sub(catDMG);
					catHit = true;
				}
				if (catTick >= catSpeed) {
					catTick = 0;
					catHit = false;
				}
				
				if (blockHP[1].lte(0)) {
					phase += 1;
					phaseProgress = 0;
					
					if (stagei == stageMax) {
						stageProg += 1;
					}
					resources[blocks[1]] = resources[blocks[1]].plus(infMult.floor());
					
					var crysRand = Math.random();
					if (crysRand < cChance) {
						crystals = crystals.plus(gemMult);
					}
					
					var x2c = Math.random();
					if (x2c < x2chance) {
						resources[blocks[1]] = resources[blocks[1]].plus(infMult.floor());
					}
				}
				
				
				this.blocks.tbs.b2.barBlock.bHP.gotoAndStop((blockHP[1].div(blockMHP[1]).times(99).floor()).toNumber());
				
				
				this.blocks.tbs.b1.visible = false;
				this.blocks.tbs.b2.visible = true;
				this.blocks.tbs.b3.visible = true;
				this.blocks.tbs.b4.visible = true;
				this.blocks.tbs.b5.visible = true;
				this.blocks.tbs.b6.visible = true;
				this.blocks.tbs.b7.visible = true;
				this.blocks.tbs.b8.visible = true;
				this.blocks.tbs.b9.visible = true;
				this.blocks.tbs.b10.visible = true;
				this.blocks.tbs.b11.visible = true;
				this.blocks.tbs.b12.visible = true;
				this.blocks.tbs.b13.visible = true;
				this.blocks.tbs.b14.visible = true;
				this.blocks.tbs.b15.visible = true;
				this.blocks.tbs.b16.visible = true;
				this.blocks.tbs.b17.visible = true;
				this.blocks.tbs.b18.visible = true;
				this.blocks.tbs.b19.visible = true;
				this.blocks.tbs.b20.visible = true;
				
				this.blocks.tbs.b1.barBlock.visible = false;
				this.blocks.tbs.b2.barBlock.visible = true;
				this.blocks.tbs.b3.barBlock.visible = false;
				this.blocks.tbs.b4.barBlock.visible = false;
				this.blocks.tbs.b5.barBlock.visible = false;
				this.blocks.tbs.b6.barBlock.visible = false;
				this.blocks.tbs.b7.barBlock.visible = false;
				this.blocks.tbs.b8.barBlock.visible = false;
				this.blocks.tbs.b9.barBlock.visible = false;
				this.blocks.tbs.b10.barBlock.visible = false;
				this.blocks.tbs.b11.barBlock.visible = false;
				this.blocks.tbs.b12.barBlock.visible = false;
				this.blocks.tbs.b13.barBlock.visible = false;
				this.blocks.tbs.b14.barBlock.visible = false;
				this.blocks.tbs.b15.barBlock.visible = false;
				this.blocks.tbs.b16.barBlock.visible = false;
				this.blocks.tbs.b17.barBlock.visible = false;
				this.blocks.tbs.b18.barBlock.visible = false;
				this.blocks.tbs.b19.barBlock.visible = false;
				this.blocks.tbs.b20.barBlock.visible = false;
			}
			else if (phase == 4) {
				phaseProgress += catMove/fps*timeMult;
				this.cat.x = 440 - Math.min(35, phaseProgress*35);
				this.cat.y = 143;
				this.cat.gotoAndStop(0);
				this.cat.scaleX = -1;
				this.cat.scaleY = 1;
				this.blocks.gotoAndStop(50);
				
				
				if (phaseProgress > 1) {
					phase += 1;
					phaseProgress = 0;
				}
				
				
				this.blocks.tbs.b3.barBlock.bHP.gotoAndStop((blockHP[2].div(blockMHP[2]).times(99).floor()).toNumber());
				
				
				this.blocks.tbs.b1.visible = false;
				this.blocks.tbs.b2.visible = false;
				this.blocks.tbs.b3.visible = true;
				this.blocks.tbs.b4.visible = true;
				this.blocks.tbs.b5.visible = true;
				this.blocks.tbs.b6.visible = true;
				this.blocks.tbs.b7.visible = true;
				this.blocks.tbs.b8.visible = true;
				this.blocks.tbs.b9.visible = true;
				this.blocks.tbs.b10.visible = true;
				this.blocks.tbs.b11.visible = true;
				this.blocks.tbs.b12.visible = true;
				this.blocks.tbs.b13.visible = true;
				this.blocks.tbs.b14.visible = true;
				this.blocks.tbs.b15.visible = true;
				this.blocks.tbs.b16.visible = true;
				this.blocks.tbs.b17.visible = true;
				this.blocks.tbs.b18.visible = true;
				this.blocks.tbs.b19.visible = true;
				this.blocks.tbs.b20.visible = true;
				
				this.blocks.tbs.b1.barBlock.visible = false;
				this.blocks.tbs.b2.barBlock.visible = false;
				this.blocks.tbs.b3.barBlock.visible = true;
				this.blocks.tbs.b4.barBlock.visible = false;
				this.blocks.tbs.b5.barBlock.visible = false;
				this.blocks.tbs.b6.barBlock.visible = false;
				this.blocks.tbs.b7.barBlock.visible = false;
				this.blocks.tbs.b8.barBlock.visible = false;
				this.blocks.tbs.b9.barBlock.visible = false;
				this.blocks.tbs.b10.barBlock.visible = false;
				this.blocks.tbs.b11.barBlock.visible = false;
				this.blocks.tbs.b12.barBlock.visible = false;
				this.blocks.tbs.b13.barBlock.visible = false;
				this.blocks.tbs.b14.barBlock.visible = false;
				this.blocks.tbs.b15.barBlock.visible = false;
				this.blocks.tbs.b16.barBlock.visible = false;
				this.blocks.tbs.b17.barBlock.visible = false;
				this.blocks.tbs.b18.barBlock.visible = false;
				this.blocks.tbs.b19.barBlock.visible = false;
				this.blocks.tbs.b20.barBlock.visible = false;
			}
			else if (phase == 5) {
				this.cat.x = 405;
				this.cat.y = 143;
				this.cat.gotoAndStop(1);
				this.cat.scaleX = -1;
				this.cat.scaleY = 1;
				this.blocks.gotoAndStop(50);
				
				
				this.cat.anim_1.gotoAndStop(Math.floor(catTick/catSpeed*30));
				
				
				if (catTick >= catSpeed/2 && catHit == false) {
					blockHP[2] = blockHP[2].sub(catDMG);
					catHit = true;
				}
				if (catTick >= catSpeed) {
					catTick = 0;
					catHit = false;
				}
				
				if (blockHP[2].lte(0)) {
					phase += 1;
					phaseProgress = 0;
					
					if (stagei == stageMax) {
						stageProg += 1;
					}
					resources[blocks[2]] = resources[blocks[2]].plus(infMult.floor());
					
					var crysRand = Math.random();
					if (crysRand < cChance) {
						crystals = crystals.plus(gemMult);
					}
					
					var x2c = Math.random();
					if (x2c < x2chance) {
						resources[blocks[2]] = resources[blocks[2]].plus(infMult.floor());
					}
				}
				
				
				this.blocks.tbs.b3.barBlock.bHP.gotoAndStop((blockHP[2].div(blockMHP[2]).times(99).floor()).toNumber());
				
				
				this.blocks.tbs.b1.visible = false;
				this.blocks.tbs.b2.visible = false;
				this.blocks.tbs.b3.visible = true;
				this.blocks.tbs.b4.visible = true;
				this.blocks.tbs.b5.visible = true;
				this.blocks.tbs.b6.visible = true;
				this.blocks.tbs.b7.visible = true;
				this.blocks.tbs.b8.visible = true;
				this.blocks.tbs.b9.visible = true;
				this.blocks.tbs.b10.visible = true;
				this.blocks.tbs.b11.visible = true;
				this.blocks.tbs.b12.visible = true;
				this.blocks.tbs.b13.visible = true;
				this.blocks.tbs.b14.visible = true;
				this.blocks.tbs.b15.visible = true;
				this.blocks.tbs.b16.visible = true;
				this.blocks.tbs.b17.visible = true;
				this.blocks.tbs.b18.visible = true;
				this.blocks.tbs.b19.visible = true;
				this.blocks.tbs.b20.visible = true;
				
				this.blocks.tbs.b1.barBlock.visible = false;
				this.blocks.tbs.b2.barBlock.visible = false;
				this.blocks.tbs.b3.barBlock.visible = true;
				this.blocks.tbs.b4.barBlock.visible = false;
				this.blocks.tbs.b5.barBlock.visible = false;
				this.blocks.tbs.b6.barBlock.visible = false;
				this.blocks.tbs.b7.barBlock.visible = false;
				this.blocks.tbs.b8.barBlock.visible = false;
				this.blocks.tbs.b9.barBlock.visible = false;
				this.blocks.tbs.b10.barBlock.visible = false;
				this.blocks.tbs.b11.barBlock.visible = false;
				this.blocks.tbs.b12.barBlock.visible = false;
				this.blocks.tbs.b13.barBlock.visible = false;
				this.blocks.tbs.b14.barBlock.visible = false;
				this.blocks.tbs.b15.barBlock.visible = false;
				this.blocks.tbs.b16.barBlock.visible = false;
				this.blocks.tbs.b17.barBlock.visible = false;
				this.blocks.tbs.b18.barBlock.visible = false;
				this.blocks.tbs.b19.barBlock.visible = false;
				this.blocks.tbs.b20.barBlock.visible = false;
			}
			else if (phase == 6) {
				phaseProgress += catMove/fps*timeMult;
				this.cat.x = 405 - Math.min(35, phaseProgress*35);
				this.cat.y = 143;
				this.cat.gotoAndStop(0);
				this.cat.scaleX = -1;
				this.cat.scaleY = 1;
				this.blocks.gotoAndStop(50);
				
				
				if (phaseProgress > 1) {
					phase += 1;
					phaseProgress = 0;
				}
				
				
				this.blocks.tbs.b4.barBlock.bHP.gotoAndStop((blockHP[3].div(blockMHP[3]).times(99).floor()).toNumber());
				
				
				this.blocks.tbs.b1.visible = false;
				this.blocks.tbs.b2.visible = false;
				this.blocks.tbs.b3.visible = false;
				this.blocks.tbs.b4.visible = true;
				this.blocks.tbs.b5.visible = true;
				this.blocks.tbs.b6.visible = true;
				this.blocks.tbs.b7.visible = true;
				this.blocks.tbs.b8.visible = true;
				this.blocks.tbs.b9.visible = true;
				this.blocks.tbs.b10.visible = true;
				this.blocks.tbs.b11.visible = true;
				this.blocks.tbs.b12.visible = true;
				this.blocks.tbs.b13.visible = true;
				this.blocks.tbs.b14.visible = true;
				this.blocks.tbs.b15.visible = true;
				this.blocks.tbs.b16.visible = true;
				this.blocks.tbs.b17.visible = true;
				this.blocks.tbs.b18.visible = true;
				this.blocks.tbs.b19.visible = true;
				this.blocks.tbs.b20.visible = true;
				
				this.blocks.tbs.b1.barBlock.visible = false;
				this.blocks.tbs.b2.barBlock.visible = false;
				this.blocks.tbs.b3.barBlock.visible = false;
				this.blocks.tbs.b4.barBlock.visible = true;
				this.blocks.tbs.b5.barBlock.visible = false;
				this.blocks.tbs.b6.barBlock.visible = false;
				this.blocks.tbs.b7.barBlock.visible = false;
				this.blocks.tbs.b8.barBlock.visible = false;
				this.blocks.tbs.b9.barBlock.visible = false;
				this.blocks.tbs.b10.barBlock.visible = false;
				this.blocks.tbs.b11.barBlock.visible = false;
				this.blocks.tbs.b12.barBlock.visible = false;
				this.blocks.tbs.b13.barBlock.visible = false;
				this.blocks.tbs.b14.barBlock.visible = false;
				this.blocks.tbs.b15.barBlock.visible = false;
				this.blocks.tbs.b16.barBlock.visible = false;
				this.blocks.tbs.b17.barBlock.visible = false;
				this.blocks.tbs.b18.barBlock.visible = false;
				this.blocks.tbs.b19.barBlock.visible = false;
				this.blocks.tbs.b20.barBlock.visible = false;
			}
			else if (phase == 7) {
				this.cat.x = 370;
				this.cat.y = 143;
				this.cat.gotoAndStop(1);
				this.cat.scaleX = -1;
				this.cat.scaleY = 1;
				this.blocks.gotoAndStop(50);
				
				
				this.cat.anim_1.gotoAndStop(Math.floor(catTick/catSpeed*30));
				
				
				if (catTick >= catSpeed/2 && catHit == false) {
					blockHP[3] = blockHP[3].sub(catDMG);
					catHit = true;
				}
				if (catTick >= catSpeed) {
					catTick = 0;
					catHit = false;
				}
				
				if (blockHP[3].lte(0)) {
					phase += 1;
					phaseProgress = 0;
					
					if (stagei == stageMax) {
						stageProg += 1;
					}
					resources[blocks[3]] = resources[blocks[3]].plus(infMult.floor());
					
					var crysRand = Math.random();
					if (crysRand < cChance) {
						crystals = crystals.plus(gemMult);
					}
					
					var x2c = Math.random();
					if (x2c < x2chance) {
						resources[blocks[3]] = resources[blocks[3]].plus(infMult.floor());
					}
				}
				
				
				this.blocks.tbs.b4.barBlock.bHP.gotoAndStop((blockHP[3].div(blockMHP[3]).times(99).floor()).toNumber());
				
				
				this.blocks.tbs.b1.visible = false;
				this.blocks.tbs.b2.visible = false;
				this.blocks.tbs.b3.visible = false;
				this.blocks.tbs.b4.visible = true;
				this.blocks.tbs.b5.visible = true;
				this.blocks.tbs.b6.visible = true;
				this.blocks.tbs.b7.visible = true;
				this.blocks.tbs.b8.visible = true;
				this.blocks.tbs.b9.visible = true;
				this.blocks.tbs.b10.visible = true;
				this.blocks.tbs.b11.visible = true;
				this.blocks.tbs.b12.visible = true;
				this.blocks.tbs.b13.visible = true;
				this.blocks.tbs.b14.visible = true;
				this.blocks.tbs.b15.visible = true;
				this.blocks.tbs.b16.visible = true;
				this.blocks.tbs.b17.visible = true;
				this.blocks.tbs.b18.visible = true;
				this.blocks.tbs.b19.visible = true;
				this.blocks.tbs.b20.visible = true;
				
				this.blocks.tbs.b1.barBlock.visible = false;
				this.blocks.tbs.b2.barBlock.visible = false;
				this.blocks.tbs.b3.barBlock.visible = false;
				this.blocks.tbs.b4.barBlock.visible = true;
				this.blocks.tbs.b5.barBlock.visible = false;
				this.blocks.tbs.b6.barBlock.visible = false;
				this.blocks.tbs.b7.barBlock.visible = false;
				this.blocks.tbs.b8.barBlock.visible = false;
				this.blocks.tbs.b9.barBlock.visible = false;
				this.blocks.tbs.b10.barBlock.visible = false;
				this.blocks.tbs.b11.barBlock.visible = false;
				this.blocks.tbs.b12.barBlock.visible = false;
				this.blocks.tbs.b13.barBlock.visible = false;
				this.blocks.tbs.b14.barBlock.visible = false;
				this.blocks.tbs.b15.barBlock.visible = false;
				this.blocks.tbs.b16.barBlock.visible = false;
				this.blocks.tbs.b17.barBlock.visible = false;
				this.blocks.tbs.b18.barBlock.visible = false;
				this.blocks.tbs.b19.barBlock.visible = false;
				this.blocks.tbs.b20.barBlock.visible = false;
			}
			else if (phase == 8) {
				phaseProgress += catMove/fps*timeMult;
				this.cat.x = 370 - Math.min(35, phaseProgress*35);
				this.cat.y = 143;
				this.cat.gotoAndStop(0);
				this.cat.scaleX = -1;
				this.cat.scaleY = 1;
				this.blocks.gotoAndStop(50);
				
				
				if (phaseProgress > 1) {
					phase += 1;
					phaseProgress = 0;
				}
				
				
				this.blocks.tbs.b5.barBlock.bHP.gotoAndStop((blockHP[4].div(blockMHP[4]).times(99).floor()).toNumber());
				
				
				this.blocks.tbs.b1.visible = false;
				this.blocks.tbs.b2.visible = false;
				this.blocks.tbs.b3.visible = false;
				this.blocks.tbs.b4.visible = false;
				this.blocks.tbs.b5.visible = true;
				this.blocks.tbs.b6.visible = true;
				this.blocks.tbs.b7.visible = true;
				this.blocks.tbs.b8.visible = true;
				this.blocks.tbs.b9.visible = true;
				this.blocks.tbs.b10.visible = true;
				this.blocks.tbs.b11.visible = true;
				this.blocks.tbs.b12.visible = true;
				this.blocks.tbs.b13.visible = true;
				this.blocks.tbs.b14.visible = true;
				this.blocks.tbs.b15.visible = true;
				this.blocks.tbs.b16.visible = true;
				this.blocks.tbs.b17.visible = true;
				this.blocks.tbs.b18.visible = true;
				this.blocks.tbs.b19.visible = true;
				this.blocks.tbs.b20.visible = true;
				
				this.blocks.tbs.b1.barBlock.visible = false;
				this.blocks.tbs.b2.barBlock.visible = false;
				this.blocks.tbs.b3.barBlock.visible = false;
				this.blocks.tbs.b4.barBlock.visible = false;
				this.blocks.tbs.b5.barBlock.visible = true;
				this.blocks.tbs.b6.barBlock.visible = false;
				this.blocks.tbs.b7.barBlock.visible = false;
				this.blocks.tbs.b8.barBlock.visible = false;
				this.blocks.tbs.b9.barBlock.visible = false;
				this.blocks.tbs.b10.barBlock.visible = false;
				this.blocks.tbs.b11.barBlock.visible = false;
				this.blocks.tbs.b12.barBlock.visible = false;
				this.blocks.tbs.b13.barBlock.visible = false;
				this.blocks.tbs.b14.barBlock.visible = false;
				this.blocks.tbs.b15.barBlock.visible = false;
				this.blocks.tbs.b16.barBlock.visible = false;
				this.blocks.tbs.b17.barBlock.visible = false;
				this.blocks.tbs.b18.barBlock.visible = false;
				this.blocks.tbs.b19.barBlock.visible = false;
				this.blocks.tbs.b20.barBlock.visible = false;
			}
			else if (phase == 9) {
				this.cat.x = 335;
				this.cat.y = 143;
				this.cat.gotoAndStop(1);
				this.cat.scaleX = -1;
				this.cat.scaleY = 1;
				this.blocks.gotoAndStop(50);
				
				
				this.cat.anim_1.gotoAndStop(Math.floor(catTick/catSpeed*30));
				
				
				if (catTick >= catSpeed/2 && catHit == false) {
					blockHP[4] = blockHP[4].sub(catDMG);
					catHit = true;
				}
				if (catTick >= catSpeed) {
					catTick = 0;
					catHit = false;
				}
				
				if (blockHP[4].lte(0)) {
					phase += 1;
					phaseProgress = 0;
					
					if (stagei == stageMax) {
						stageProg += 1;
					}
					resources[blocks[4]] = resources[blocks[4]].plus(infMult.floor());
					
					var crysRand = Math.random();
					if (crysRand < cChance) {
						crystals = crystals.plus(gemMult);
					}
					
					var x2c = Math.random();
					if (x2c < x2chance) {
						resources[blocks[4]] = resources[blocks[4]].plus(infMult.floor());
					}
				}
				
				
				this.blocks.tbs.b5.barBlock.bHP.gotoAndStop((blockHP[4].div(blockMHP[4]).times(99).floor()).toNumber());
				
				
				this.blocks.tbs.b1.visible = false;
				this.blocks.tbs.b2.visible = false;
				this.blocks.tbs.b3.visible = false;
				this.blocks.tbs.b4.visible = false;
				this.blocks.tbs.b5.visible = true;
				this.blocks.tbs.b6.visible = true;
				this.blocks.tbs.b7.visible = true;
				this.blocks.tbs.b8.visible = true;
				this.blocks.tbs.b9.visible = true;
				this.blocks.tbs.b10.visible = true;
				this.blocks.tbs.b11.visible = true;
				this.blocks.tbs.b12.visible = true;
				this.blocks.tbs.b13.visible = true;
				this.blocks.tbs.b14.visible = true;
				this.blocks.tbs.b15.visible = true;
				this.blocks.tbs.b16.visible = true;
				this.blocks.tbs.b17.visible = true;
				this.blocks.tbs.b18.visible = true;
				this.blocks.tbs.b19.visible = true;
				this.blocks.tbs.b20.visible = true;
				
				this.blocks.tbs.b1.barBlock.visible = false;
				this.blocks.tbs.b2.barBlock.visible = false;
				this.blocks.tbs.b3.barBlock.visible = false;
				this.blocks.tbs.b4.barBlock.visible = false;
				this.blocks.tbs.b5.barBlock.visible = true;
				this.blocks.tbs.b6.barBlock.visible = false;
				this.blocks.tbs.b7.barBlock.visible = false;
				this.blocks.tbs.b8.barBlock.visible = false;
				this.blocks.tbs.b9.barBlock.visible = false;
				this.blocks.tbs.b10.barBlock.visible = false;
				this.blocks.tbs.b11.barBlock.visible = false;
				this.blocks.tbs.b12.barBlock.visible = false;
				this.blocks.tbs.b13.barBlock.visible = false;
				this.blocks.tbs.b14.barBlock.visible = false;
				this.blocks.tbs.b15.barBlock.visible = false;
				this.blocks.tbs.b16.barBlock.visible = false;
				this.blocks.tbs.b17.barBlock.visible = false;
				this.blocks.tbs.b18.barBlock.visible = false;
				this.blocks.tbs.b19.barBlock.visible = false;
				this.blocks.tbs.b20.barBlock.visible = false;
			}
			else if (phase == 10) {
				phaseProgress += catMove/fps*timeMult;
				this.cat.x = 335 - Math.min(35, phaseProgress*35);
				this.cat.y = 143;
				this.cat.gotoAndStop(0);
				this.cat.scaleX = -1;
				this.cat.scaleY = 1;
				this.blocks.gotoAndStop(50);
				
				
				if (phaseProgress > 1) {
					phase += 1;
					phaseProgress = 0;
				}
				
				
				this.blocks.tbs.b6.barBlock.bHP.gotoAndStop((blockHP[5].div(blockMHP[5]).times(99).floor()).toNumber());
				
				
				this.blocks.tbs.b1.visible = false;
				this.blocks.tbs.b2.visible = false;
				this.blocks.tbs.b3.visible = false;
				this.blocks.tbs.b4.visible = false;
				this.blocks.tbs.b5.visible = false;
				this.blocks.tbs.b6.visible = true;
				this.blocks.tbs.b7.visible = true;
				this.blocks.tbs.b8.visible = true;
				this.blocks.tbs.b9.visible = true;
				this.blocks.tbs.b10.visible = true;
				this.blocks.tbs.b11.visible = true;
				this.blocks.tbs.b12.visible = true;
				this.blocks.tbs.b13.visible = true;
				this.blocks.tbs.b14.visible = true;
				this.blocks.tbs.b15.visible = true;
				this.blocks.tbs.b16.visible = true;
				this.blocks.tbs.b17.visible = true;
				this.blocks.tbs.b18.visible = true;
				this.blocks.tbs.b19.visible = true;
				this.blocks.tbs.b20.visible = true;
				
				this.blocks.tbs.b1.barBlock.visible = false;
				this.blocks.tbs.b2.barBlock.visible = false;
				this.blocks.tbs.b3.barBlock.visible = false;
				this.blocks.tbs.b4.barBlock.visible = false;
				this.blocks.tbs.b5.barBlock.visible = false;
				this.blocks.tbs.b6.barBlock.visible = true;
				this.blocks.tbs.b7.barBlock.visible = false;
				this.blocks.tbs.b8.barBlock.visible = false;
				this.blocks.tbs.b9.barBlock.visible = false;
				this.blocks.tbs.b10.barBlock.visible = false;
				this.blocks.tbs.b11.barBlock.visible = false;
				this.blocks.tbs.b12.barBlock.visible = false;
				this.blocks.tbs.b13.barBlock.visible = false;
				this.blocks.tbs.b14.barBlock.visible = false;
				this.blocks.tbs.b15.barBlock.visible = false;
				this.blocks.tbs.b16.barBlock.visible = false;
				this.blocks.tbs.b17.barBlock.visible = false;
				this.blocks.tbs.b18.barBlock.visible = false;
				this.blocks.tbs.b19.barBlock.visible = false;
				this.blocks.tbs.b20.barBlock.visible = false;
			}
			else if (phase == 11) {
				this.cat.x = 300;
				this.cat.y = 143;
				this.cat.gotoAndStop(1);
				this.cat.scaleX = -1;
				this.cat.scaleY = 1;
				this.blocks.gotoAndStop(50);
				
				
				this.cat.anim_1.gotoAndStop(Math.floor(catTick/catSpeed*30));
				
				
				if (catTick >= catSpeed/2 && catHit == false) {
					blockHP[5] = blockHP[5].sub(catDMG);
					catHit = true;
				}
				if (catTick >= catSpeed) {
					catTick = 0;
					catHit = false;
				}
				
				if (blockHP[5].lte(0)) {
					phase += 1;
					phaseProgress = 0;
					
					if (stagei == stageMax) {
						stageProg += 1;
					}
					resources[blocks[5]] = resources[blocks[5]].plus(infMult.floor());
					
					var crysRand = Math.random();
					if (crysRand < cChance) {
						crystals = crystals.plus(gemMult);
					}
					
					var x2c = Math.random();
					if (x2c < x2chance) {
						resources[blocks[5]] = resources[blocks[5]].plus(infMult.floor());
					}
				}
				
				
				this.blocks.tbs.b6.barBlock.bHP.gotoAndStop((blockHP[5].div(blockMHP[5]).times(99).floor()).toNumber());
				
				
				this.blocks.tbs.b1.visible = false;
				this.blocks.tbs.b2.visible = false;
				this.blocks.tbs.b3.visible = false;
				this.blocks.tbs.b4.visible = false;
				this.blocks.tbs.b5.visible = false;
				this.blocks.tbs.b6.visible = true;
				this.blocks.tbs.b7.visible = true;
				this.blocks.tbs.b8.visible = true;
				this.blocks.tbs.b9.visible = true;
				this.blocks.tbs.b10.visible = true;
				this.blocks.tbs.b11.visible = true;
				this.blocks.tbs.b12.visible = true;
				this.blocks.tbs.b13.visible = true;
				this.blocks.tbs.b14.visible = true;
				this.blocks.tbs.b15.visible = true;
				this.blocks.tbs.b16.visible = true;
				this.blocks.tbs.b17.visible = true;
				this.blocks.tbs.b18.visible = true;
				this.blocks.tbs.b19.visible = true;
				this.blocks.tbs.b20.visible = true;
				
				this.blocks.tbs.b1.barBlock.visible = false;
				this.blocks.tbs.b2.barBlock.visible = false;
				this.blocks.tbs.b3.barBlock.visible = false;
				this.blocks.tbs.b4.barBlock.visible = false;
				this.blocks.tbs.b5.barBlock.visible = false;
				this.blocks.tbs.b6.barBlock.visible = true;
				this.blocks.tbs.b7.barBlock.visible = false;
				this.blocks.tbs.b8.barBlock.visible = false;
				this.blocks.tbs.b9.barBlock.visible = false;
				this.blocks.tbs.b10.barBlock.visible = false;
				this.blocks.tbs.b11.barBlock.visible = false;
				this.blocks.tbs.b12.barBlock.visible = false;
				this.blocks.tbs.b13.barBlock.visible = false;
				this.blocks.tbs.b14.barBlock.visible = false;
				this.blocks.tbs.b15.barBlock.visible = false;
				this.blocks.tbs.b16.barBlock.visible = false;
				this.blocks.tbs.b17.barBlock.visible = false;
				this.blocks.tbs.b18.barBlock.visible = false;
				this.blocks.tbs.b19.barBlock.visible = false;
				this.blocks.tbs.b20.barBlock.visible = false;
			}
			else if (phase == 12) {
				phaseProgress += catMove/fps*timeMult;
				this.cat.x = 300 - Math.min(35, phaseProgress*35);
				this.cat.y = 143;
				this.cat.gotoAndStop(0);
				this.cat.scaleX = -1;
				this.cat.scaleY = 1;
				this.blocks.gotoAndStop(50);
				
				
				if (phaseProgress > 1) {
					phase += 1;
					phaseProgress = 0;
				}
				
				
				this.blocks.tbs.b7.barBlock.bHP.gotoAndStop((blockHP[6].div(blockMHP[6]).times(99).floor()).toNumber());
				
				
				this.blocks.tbs.b1.visible = false;
				this.blocks.tbs.b2.visible = false;
				this.blocks.tbs.b3.visible = false;
				this.blocks.tbs.b4.visible = false;
				this.blocks.tbs.b5.visible = false;
				this.blocks.tbs.b6.visible = false;
				this.blocks.tbs.b7.visible = true;
				this.blocks.tbs.b8.visible = true;
				this.blocks.tbs.b9.visible = true;
				this.blocks.tbs.b10.visible = true;
				this.blocks.tbs.b11.visible = true;
				this.blocks.tbs.b12.visible = true;
				this.blocks.tbs.b13.visible = true;
				this.blocks.tbs.b14.visible = true;
				this.blocks.tbs.b15.visible = true;
				this.blocks.tbs.b16.visible = true;
				this.blocks.tbs.b17.visible = true;
				this.blocks.tbs.b18.visible = true;
				this.blocks.tbs.b19.visible = true;
				this.blocks.tbs.b20.visible = true;
				
				this.blocks.tbs.b1.barBlock.visible = false;
				this.blocks.tbs.b2.barBlock.visible = false;
				this.blocks.tbs.b3.barBlock.visible = false;
				this.blocks.tbs.b4.barBlock.visible = false;
				this.blocks.tbs.b5.barBlock.visible = false;
				this.blocks.tbs.b6.barBlock.visible = false;
				this.blocks.tbs.b7.barBlock.visible = true;
				this.blocks.tbs.b8.barBlock.visible = false;
				this.blocks.tbs.b9.barBlock.visible = false;
				this.blocks.tbs.b10.barBlock.visible = false;
				this.blocks.tbs.b11.barBlock.visible = false;
				this.blocks.tbs.b12.barBlock.visible = false;
				this.blocks.tbs.b13.barBlock.visible = false;
				this.blocks.tbs.b14.barBlock.visible = false;
				this.blocks.tbs.b15.barBlock.visible = false;
				this.blocks.tbs.b16.barBlock.visible = false;
				this.blocks.tbs.b17.barBlock.visible = false;
				this.blocks.tbs.b18.barBlock.visible = false;
				this.blocks.tbs.b19.barBlock.visible = false;
				this.blocks.tbs.b20.barBlock.visible = false;
			}
			else if (phase == 13) {
				this.cat.x = 265;
				this.cat.y = 143;
				this.cat.gotoAndStop(1);
				this.cat.scaleX = -1;
				this.cat.scaleY = 1;
				this.blocks.gotoAndStop(50);
				
				
				this.cat.anim_1.gotoAndStop(Math.floor(catTick/catSpeed*30));
				
				
				if (catTick >= catSpeed/2 && catHit == false) {
					blockHP[6] = blockHP[6].sub(catDMG);
					catHit = true;
				}
				if (catTick >= catSpeed) {
					catTick = 0;
					catHit = false;
				}
				
				if (blockHP[6].lte(0)) {
					phase += 1;
					phaseProgress = 0;
					
					if (stagei == stageMax) {
						stageProg += 1;
					}
					resources[blocks[6]] = resources[blocks[6]].plus(infMult.floor());
					
					var crysRand = Math.random();
					if (crysRand < cChance) {
						crystals = crystals.plus(gemMult);
					}
					
					var x2c = Math.random();
					if (x2c < x2chance) {
						resources[blocks[6]] = resources[blocks[6]].plus(infMult.floor());
					}
				}
				
				
				this.blocks.tbs.b7.barBlock.bHP.gotoAndStop((blockHP[6].div(blockMHP[6]).times(99).floor()).toNumber());
				
				
				this.blocks.tbs.b1.visible = false;
				this.blocks.tbs.b2.visible = false;
				this.blocks.tbs.b3.visible = false;
				this.blocks.tbs.b4.visible = false;
				this.blocks.tbs.b5.visible = false;
				this.blocks.tbs.b6.visible = false;
				this.blocks.tbs.b7.visible = true;
				this.blocks.tbs.b8.visible = true;
				this.blocks.tbs.b9.visible = true;
				this.blocks.tbs.b10.visible = true;
				this.blocks.tbs.b11.visible = true;
				this.blocks.tbs.b12.visible = true;
				this.blocks.tbs.b13.visible = true;
				this.blocks.tbs.b14.visible = true;
				this.blocks.tbs.b15.visible = true;
				this.blocks.tbs.b16.visible = true;
				this.blocks.tbs.b17.visible = true;
				this.blocks.tbs.b18.visible = true;
				this.blocks.tbs.b19.visible = true;
				this.blocks.tbs.b20.visible = true;
				
				this.blocks.tbs.b1.barBlock.visible = false;
				this.blocks.tbs.b2.barBlock.visible = false;
				this.blocks.tbs.b3.barBlock.visible = false;
				this.blocks.tbs.b4.barBlock.visible = false;
				this.blocks.tbs.b5.barBlock.visible = false;
				this.blocks.tbs.b6.barBlock.visible = false;
				this.blocks.tbs.b7.barBlock.visible = true;
				this.blocks.tbs.b8.barBlock.visible = false;
				this.blocks.tbs.b9.barBlock.visible = false;
				this.blocks.tbs.b10.barBlock.visible = false;
				this.blocks.tbs.b11.barBlock.visible = false;
				this.blocks.tbs.b12.barBlock.visible = false;
				this.blocks.tbs.b13.barBlock.visible = false;
				this.blocks.tbs.b14.barBlock.visible = false;
				this.blocks.tbs.b15.barBlock.visible = false;
				this.blocks.tbs.b16.barBlock.visible = false;
				this.blocks.tbs.b17.barBlock.visible = false;
				this.blocks.tbs.b18.barBlock.visible = false;
				this.blocks.tbs.b19.barBlock.visible = false;
				this.blocks.tbs.b20.barBlock.visible = false;
			}
			else if (phase == 14) {
				phaseProgress += catMove/fps*timeMult;
				this.cat.x = 265 - Math.min(35, phaseProgress*35);
				this.cat.y = 143;
				this.cat.gotoAndStop(0);
				this.cat.scaleX = -1;
				this.cat.scaleY = 1;
				this.blocks.gotoAndStop(50);
				
				
				if (phaseProgress > 1) {
					phase += 1;
					phaseProgress = 0;
				}
				
				
				this.blocks.tbs.b8.barBlock.bHP.gotoAndStop((blockHP[7].div(blockMHP[7]).times(99).floor()).toNumber());
				
				
				this.blocks.tbs.b1.visible = false;
				this.blocks.tbs.b2.visible = false;
				this.blocks.tbs.b3.visible = false;
				this.blocks.tbs.b4.visible = false;
				this.blocks.tbs.b5.visible = false;
				this.blocks.tbs.b6.visible = false;
				this.blocks.tbs.b7.visible = false;
				this.blocks.tbs.b8.visible = true;
				this.blocks.tbs.b9.visible = true;
				this.blocks.tbs.b10.visible = true;
				this.blocks.tbs.b11.visible = true;
				this.blocks.tbs.b12.visible = true;
				this.blocks.tbs.b13.visible = true;
				this.blocks.tbs.b14.visible = true;
				this.blocks.tbs.b15.visible = true;
				this.blocks.tbs.b16.visible = true;
				this.blocks.tbs.b17.visible = true;
				this.blocks.tbs.b18.visible = true;
				this.blocks.tbs.b19.visible = true;
				this.blocks.tbs.b20.visible = true;
				
				this.blocks.tbs.b1.barBlock.visible = false;
				this.blocks.tbs.b2.barBlock.visible = false;
				this.blocks.tbs.b3.barBlock.visible = false;
				this.blocks.tbs.b4.barBlock.visible = false;
				this.blocks.tbs.b5.barBlock.visible = false;
				this.blocks.tbs.b6.barBlock.visible = false;
				this.blocks.tbs.b7.barBlock.visible = false;
				this.blocks.tbs.b8.barBlock.visible = true;
				this.blocks.tbs.b9.barBlock.visible = false;
				this.blocks.tbs.b10.barBlock.visible = false;
				this.blocks.tbs.b11.barBlock.visible = false;
				this.blocks.tbs.b12.barBlock.visible = false;
				this.blocks.tbs.b13.barBlock.visible = false;
				this.blocks.tbs.b14.barBlock.visible = false;
				this.blocks.tbs.b15.barBlock.visible = false;
				this.blocks.tbs.b16.barBlock.visible = false;
				this.blocks.tbs.b17.barBlock.visible = false;
				this.blocks.tbs.b18.barBlock.visible = false;
				this.blocks.tbs.b19.barBlock.visible = false;
				this.blocks.tbs.b20.barBlock.visible = false;
			}
			else if (phase == 15) {
				this.cat.x = 230;
				this.cat.y = 143;
				this.cat.gotoAndStop(1);
				this.cat.scaleX = -1;
				this.cat.scaleY = 1;
				this.blocks.gotoAndStop(50);
				
				
				this.cat.anim_1.gotoAndStop(Math.floor(catTick/catSpeed*30));
				
				
				if (catTick >= catSpeed/2 && catHit == false) {
					blockHP[7] = blockHP[7].sub(catDMG);
					catHit = true;
				}
				if (catTick >= catSpeed) {
					catTick = 0;
					catHit = false;
				}
				
				if (blockHP[7].lte(0)) {
					phase += 1;
					phaseProgress = 0;
					
					if (stagei == stageMax) {
						stageProg += 1;
					}
					resources[blocks[7]] = resources[blocks[7]].plus(infMult.floor());
					
					var crysRand = Math.random();
					if (crysRand < cChance) {
						crystals = crystals.plus(gemMult);
					}
					
					var x2c = Math.random();
					if (x2c < x2chance) {
						resources[blocks[7]] = resources[blocks[7]].plus(infMult.floor());
					}
				}
				
				
				this.blocks.tbs.b8.barBlock.bHP.gotoAndStop((blockHP[7].div(blockMHP[7]).times(99).floor()).toNumber());
				
				
				this.blocks.tbs.b1.visible = false;
				this.blocks.tbs.b2.visible = false;
				this.blocks.tbs.b3.visible = false;
				this.blocks.tbs.b4.visible = false;
				this.blocks.tbs.b5.visible = false;
				this.blocks.tbs.b6.visible = false;
				this.blocks.tbs.b7.visible = false;
				this.blocks.tbs.b8.visible = true;
				this.blocks.tbs.b9.visible = true;
				this.blocks.tbs.b10.visible = true;
				this.blocks.tbs.b11.visible = true;
				this.blocks.tbs.b12.visible = true;
				this.blocks.tbs.b13.visible = true;
				this.blocks.tbs.b14.visible = true;
				this.blocks.tbs.b15.visible = true;
				this.blocks.tbs.b16.visible = true;
				this.blocks.tbs.b17.visible = true;
				this.blocks.tbs.b18.visible = true;
				this.blocks.tbs.b19.visible = true;
				this.blocks.tbs.b20.visible = true;
				
				this.blocks.tbs.b1.barBlock.visible = false;
				this.blocks.tbs.b2.barBlock.visible = false;
				this.blocks.tbs.b3.barBlock.visible = false;
				this.blocks.tbs.b4.barBlock.visible = false;
				this.blocks.tbs.b5.barBlock.visible = false;
				this.blocks.tbs.b6.barBlock.visible = false;
				this.blocks.tbs.b7.barBlock.visible = false;
				this.blocks.tbs.b8.barBlock.visible = true;
				this.blocks.tbs.b9.barBlock.visible = false;
				this.blocks.tbs.b10.barBlock.visible = false;
				this.blocks.tbs.b11.barBlock.visible = false;
				this.blocks.tbs.b12.barBlock.visible = false;
				this.blocks.tbs.b13.barBlock.visible = false;
				this.blocks.tbs.b14.barBlock.visible = false;
				this.blocks.tbs.b15.barBlock.visible = false;
				this.blocks.tbs.b16.barBlock.visible = false;
				this.blocks.tbs.b17.barBlock.visible = false;
				this.blocks.tbs.b18.barBlock.visible = false;
				this.blocks.tbs.b19.barBlock.visible = false;
				this.blocks.tbs.b20.barBlock.visible = false;
			}
			else if (phase == 16) {
				phaseProgress += catMove/fps*timeMult;
				this.cat.x = 230 - Math.min(35, phaseProgress*35);
				this.cat.y = 143;
				this.cat.gotoAndStop(0);
				this.cat.scaleX = -1;
				this.cat.scaleY = 1;
				this.blocks.gotoAndStop(50);
				
				
				if (phaseProgress > 1) {
					phase += 1;
					phaseProgress = 0;
				}
				
				
				this.blocks.tbs.b9.barBlock.bHP.gotoAndStop((blockHP[8].div(blockMHP[8]).times(99).floor()).toNumber());
				
				
				this.blocks.tbs.b1.visible = false;
				this.blocks.tbs.b2.visible = false;
				this.blocks.tbs.b3.visible = false;
				this.blocks.tbs.b4.visible = false;
				this.blocks.tbs.b5.visible = false;
				this.blocks.tbs.b6.visible = false;
				this.blocks.tbs.b7.visible = false;
				this.blocks.tbs.b8.visible = false;
				this.blocks.tbs.b9.visible = true;
				this.blocks.tbs.b10.visible = true;
				this.blocks.tbs.b11.visible = true;
				this.blocks.tbs.b12.visible = true;
				this.blocks.tbs.b13.visible = true;
				this.blocks.tbs.b14.visible = true;
				this.blocks.tbs.b15.visible = true;
				this.blocks.tbs.b16.visible = true;
				this.blocks.tbs.b17.visible = true;
				this.blocks.tbs.b18.visible = true;
				this.blocks.tbs.b19.visible = true;
				this.blocks.tbs.b20.visible = true;
				
				this.blocks.tbs.b1.barBlock.visible = false;
				this.blocks.tbs.b2.barBlock.visible = false;
				this.blocks.tbs.b3.barBlock.visible = false;
				this.blocks.tbs.b4.barBlock.visible = false;
				this.blocks.tbs.b5.barBlock.visible = false;
				this.blocks.tbs.b6.barBlock.visible = false;
				this.blocks.tbs.b7.barBlock.visible = false;
				this.blocks.tbs.b8.barBlock.visible = false;
				this.blocks.tbs.b9.barBlock.visible = true;
				this.blocks.tbs.b10.barBlock.visible = false;
				this.blocks.tbs.b11.barBlock.visible = false;
				this.blocks.tbs.b12.barBlock.visible = false;
				this.blocks.tbs.b13.barBlock.visible = false;
				this.blocks.tbs.b14.barBlock.visible = false;
				this.blocks.tbs.b15.barBlock.visible = false;
				this.blocks.tbs.b16.barBlock.visible = false;
				this.blocks.tbs.b17.barBlock.visible = false;
				this.blocks.tbs.b18.barBlock.visible = false;
				this.blocks.tbs.b19.barBlock.visible = false;
				this.blocks.tbs.b20.barBlock.visible = false;
			}
			else if (phase == 17) {
				this.cat.x = 195;
				this.cat.y = 143;
				this.cat.gotoAndStop(1);
				this.cat.scaleX = -1;
				this.cat.scaleY = 1;
				this.blocks.gotoAndStop(50);
				
				
				this.cat.anim_1.gotoAndStop(Math.floor(catTick/catSpeed*30));
				
				
				if (catTick >= catSpeed/2 && catHit == false) {
					blockHP[8] = blockHP[8].sub(catDMG);
					catHit = true;
				}
				if (catTick >= catSpeed) {
					catTick = 0;
					catHit = false;
				}
				
				if (blockHP[8].lte(0)) {
					phase += 1;
					phaseProgress = 0;
					
					if (stagei == stageMax) {
						stageProg += 1;
					}
					resources[blocks[8]] = resources[blocks[8]].plus(infMult.floor());
					
					var crysRand = Math.random();
					if (crysRand < cChance) {
						crystals = crystals.plus(gemMult);
					}
					
					var x2c = Math.random();
					if (x2c < x2chance) {
						resources[blocks[8]] = resources[blocks[8]].plus(infMult.floor());
					}
				}
				
				
				this.blocks.tbs.b9.barBlock.bHP.gotoAndStop((blockHP[8].div(blockMHP[8]).times(99).floor()).toNumber());
				
				
				this.blocks.tbs.b1.visible = false;
				this.blocks.tbs.b2.visible = false;
				this.blocks.tbs.b3.visible = false;
				this.blocks.tbs.b4.visible = false;
				this.blocks.tbs.b5.visible = false;
				this.blocks.tbs.b6.visible = false;
				this.blocks.tbs.b7.visible = false;
				this.blocks.tbs.b8.visible = false;
				this.blocks.tbs.b9.visible = true;
				this.blocks.tbs.b10.visible = true;
				this.blocks.tbs.b11.visible = true;
				this.blocks.tbs.b12.visible = true;
				this.blocks.tbs.b13.visible = true;
				this.blocks.tbs.b14.visible = true;
				this.blocks.tbs.b15.visible = true;
				this.blocks.tbs.b16.visible = true;
				this.blocks.tbs.b17.visible = true;
				this.blocks.tbs.b18.visible = true;
				this.blocks.tbs.b19.visible = true;
				this.blocks.tbs.b20.visible = true;
				
				this.blocks.tbs.b1.barBlock.visible = false;
				this.blocks.tbs.b2.barBlock.visible = false;
				this.blocks.tbs.b3.barBlock.visible = false;
				this.blocks.tbs.b4.barBlock.visible = false;
				this.blocks.tbs.b5.barBlock.visible = false;
				this.blocks.tbs.b6.barBlock.visible = false;
				this.blocks.tbs.b7.barBlock.visible = false;
				this.blocks.tbs.b8.barBlock.visible = false;
				this.blocks.tbs.b9.barBlock.visible = true;
				this.blocks.tbs.b10.barBlock.visible = false;
				this.blocks.tbs.b11.barBlock.visible = false;
				this.blocks.tbs.b12.barBlock.visible = false;
				this.blocks.tbs.b13.barBlock.visible = false;
				this.blocks.tbs.b14.barBlock.visible = false;
				this.blocks.tbs.b15.barBlock.visible = false;
				this.blocks.tbs.b16.barBlock.visible = false;
				this.blocks.tbs.b17.barBlock.visible = false;
				this.blocks.tbs.b18.barBlock.visible = false;
				this.blocks.tbs.b19.barBlock.visible = false;
				this.blocks.tbs.b20.barBlock.visible = false;
			}
			else if (phase == 18) {
				phaseProgress += catMove/fps*timeMult;
				this.cat.x = 195 - Math.min(35, phaseProgress*35);
				this.cat.y = 143;
				this.cat.gotoAndStop(0);
				this.cat.scaleX = -1;
				this.cat.scaleY = 1;
				this.blocks.gotoAndStop(50);
				
				
				if (phaseProgress > 1) {
					phase += 1;
					phaseProgress = 0;
				}
				
				
				this.blocks.tbs.b10.barBlock.bHP.gotoAndStop((blockHP[9].div(blockMHP[9]).times(99).floor()).toNumber());
				
				
				this.blocks.tbs.b1.visible = false;
				this.blocks.tbs.b2.visible = false;
				this.blocks.tbs.b3.visible = false;
				this.blocks.tbs.b4.visible = false;
				this.blocks.tbs.b5.visible = false;
				this.blocks.tbs.b6.visible = false;
				this.blocks.tbs.b7.visible = false;
				this.blocks.tbs.b8.visible = false;
				this.blocks.tbs.b9.visible = false;
				this.blocks.tbs.b10.visible = true;
				this.blocks.tbs.b11.visible = true;
				this.blocks.tbs.b12.visible = true;
				this.blocks.tbs.b13.visible = true;
				this.blocks.tbs.b14.visible = true;
				this.blocks.tbs.b15.visible = true;
				this.blocks.tbs.b16.visible = true;
				this.blocks.tbs.b17.visible = true;
				this.blocks.tbs.b18.visible = true;
				this.blocks.tbs.b19.visible = true;
				this.blocks.tbs.b20.visible = true;
				
				this.blocks.tbs.b1.barBlock.visible = false;
				this.blocks.tbs.b2.barBlock.visible = false;
				this.blocks.tbs.b3.barBlock.visible = false;
				this.blocks.tbs.b4.barBlock.visible = false;
				this.blocks.tbs.b5.barBlock.visible = false;
				this.blocks.tbs.b6.barBlock.visible = false;
				this.blocks.tbs.b7.barBlock.visible = false;
				this.blocks.tbs.b8.barBlock.visible = false;
				this.blocks.tbs.b9.barBlock.visible = false;
				this.blocks.tbs.b10.barBlock.visible = true;
				this.blocks.tbs.b11.barBlock.visible = false;
				this.blocks.tbs.b12.barBlock.visible = false;
				this.blocks.tbs.b13.barBlock.visible = false;
				this.blocks.tbs.b14.barBlock.visible = false;
				this.blocks.tbs.b15.barBlock.visible = false;
				this.blocks.tbs.b16.barBlock.visible = false;
				this.blocks.tbs.b17.barBlock.visible = false;
				this.blocks.tbs.b18.barBlock.visible = false;
				this.blocks.tbs.b19.barBlock.visible = false;
				this.blocks.tbs.b20.barBlock.visible = false;
			}
			else if (phase == 19) {
				this.cat.x = 160;
				this.cat.y = 143;
				this.cat.gotoAndStop(1);
				this.cat.scaleX = -1;
				this.cat.scaleY = 1;
				this.blocks.gotoAndStop(50);
				
				
				this.cat.anim_1.gotoAndStop(Math.floor(catTick/catSpeed*30));
				
				
				if (catTick >= catSpeed/2 && catHit == false) {
					blockHP[9] = blockHP[9].sub(catDMG);
					catHit = true;
				}
				if (catTick >= catSpeed) {
					catTick = 0;
					catHit = false;
				}
				
				if (blockHP[9].lte(0)) {
					phase += 1;
					phaseProgress = 0;
					
					if (stagei == stageMax) {
						stageProg += 1;
					}
					resources[blocks[9]] = resources[blocks[9]].plus(infMult.floor());
					
					var crysRand = Math.random();
					if (crysRand < cChance) {
						crystals = crystals.plus(gemMult);
					}
					
					var x2c = Math.random();
					if (x2c < x2chance) {
						resources[blocks[9]] = resources[blocks[9]].plus(infMult.floor());
					}
				}
				
				
				this.blocks.tbs.b10.barBlock.bHP.gotoAndStop((blockHP[9].div(blockMHP[9]).times(99).floor()).toNumber());
				
				
				this.blocks.tbs.b1.visible = false;
				this.blocks.tbs.b2.visible = false;
				this.blocks.tbs.b3.visible = false;
				this.blocks.tbs.b4.visible = false;
				this.blocks.tbs.b5.visible = false;
				this.blocks.tbs.b6.visible = false;
				this.blocks.tbs.b7.visible = false;
				this.blocks.tbs.b8.visible = false;
				this.blocks.tbs.b9.visible = false;
				this.blocks.tbs.b10.visible = true;
				this.blocks.tbs.b11.visible = true;
				this.blocks.tbs.b12.visible = true;
				this.blocks.tbs.b13.visible = true;
				this.blocks.tbs.b14.visible = true;
				this.blocks.tbs.b15.visible = true;
				this.blocks.tbs.b16.visible = true;
				this.blocks.tbs.b17.visible = true;
				this.blocks.tbs.b18.visible = true;
				this.blocks.tbs.b19.visible = true;
				this.blocks.tbs.b20.visible = true;
				
				this.blocks.tbs.b1.barBlock.visible = false;
				this.blocks.tbs.b2.barBlock.visible = false;
				this.blocks.tbs.b3.barBlock.visible = false;
				this.blocks.tbs.b4.barBlock.visible = false;
				this.blocks.tbs.b5.barBlock.visible = false;
				this.blocks.tbs.b6.barBlock.visible = false;
				this.blocks.tbs.b7.barBlock.visible = false;
				this.blocks.tbs.b8.barBlock.visible = false;
				this.blocks.tbs.b9.barBlock.visible = false;
				this.blocks.tbs.b10.barBlock.visible = true;
				this.blocks.tbs.b11.barBlock.visible = false;
				this.blocks.tbs.b12.barBlock.visible = false;
				this.blocks.tbs.b13.barBlock.visible = false;
				this.blocks.tbs.b14.barBlock.visible = false;
				this.blocks.tbs.b15.barBlock.visible = false;
				this.blocks.tbs.b16.barBlock.visible = false;
				this.blocks.tbs.b17.barBlock.visible = false;
				this.blocks.tbs.b18.barBlock.visible = false;
				this.blocks.tbs.b19.barBlock.visible = false;
				this.blocks.tbs.b20.barBlock.visible = false;
			}
			else if (phase == 20) {
				this.cat.x = 160;
				this.cat.y = 143;
				this.cat.gotoAndStop(2);
				this.cat.scaleX = -1;
				this.cat.scaleY = 1;
				this.blocks.gotoAndStop(50);
				
				
				this.cat.anim_2.gotoAndStop(Math.floor(catTick/catSpeed*30));
				
				
				if (catTick >= catSpeed/2 && catHit == false) {
					blockHP[10] = blockHP[10].sub(catDMG);
					catHit = true;
				}
				if (catTick >= catSpeed) {
					catTick = 0;
					catHit = false;
				}
				
				if (blockHP[10].lte(0)) {
					phase += 1;
					phaseProgress = 0;
					
					if (stagei == stageMax) {
						stageProg += 1;
					}
					resources[blocks[10]] = resources[blocks[10]].plus(infMult.floor());
					
					var crysRand = Math.random();
					if (crysRand < cChance) {
						crystals = crystals.plus(gemMult);
					}
					
					var x2c = Math.random();
					if (x2c < x2chance) {
						resources[blocks[10]] = resources[blocks[10]].plus(infMult.floor());
					}
				}
				
				
				this.blocks.tbs.b11.barBlock.bHP.gotoAndStop((blockHP[10].div(blockMHP[10]).times(99).floor()).toNumber());
				
				
				this.blocks.tbs.b1.visible = false;
				this.blocks.tbs.b2.visible = false;
				this.blocks.tbs.b3.visible = false;
				this.blocks.tbs.b4.visible = false;
				this.blocks.tbs.b5.visible = false;
				this.blocks.tbs.b6.visible = false;
				this.blocks.tbs.b7.visible = false;
				this.blocks.tbs.b8.visible = false;
				this.blocks.tbs.b9.visible = false;
				this.blocks.tbs.b10.visible = false;
				this.blocks.tbs.b11.visible = true;
				this.blocks.tbs.b12.visible = true;
				this.blocks.tbs.b13.visible = true;
				this.blocks.tbs.b14.visible = true;
				this.blocks.tbs.b15.visible = true;
				this.blocks.tbs.b16.visible = true;
				this.blocks.tbs.b17.visible = true;
				this.blocks.tbs.b18.visible = true;
				this.blocks.tbs.b19.visible = true;
				this.blocks.tbs.b20.visible = true;
				
				this.blocks.tbs.b1.barBlock.visible = false;
				this.blocks.tbs.b2.barBlock.visible = false;
				this.blocks.tbs.b3.barBlock.visible = false;
				this.blocks.tbs.b4.barBlock.visible = false;
				this.blocks.tbs.b5.barBlock.visible = false;
				this.blocks.tbs.b6.barBlock.visible = false;
				this.blocks.tbs.b7.barBlock.visible = false;
				this.blocks.tbs.b8.barBlock.visible = false;
				this.blocks.tbs.b9.barBlock.visible = false;
				this.blocks.tbs.b10.barBlock.visible = false;
				this.blocks.tbs.b11.barBlock.visible = true;
				this.blocks.tbs.b12.barBlock.visible = false;
				this.blocks.tbs.b13.barBlock.visible = false;
				this.blocks.tbs.b14.barBlock.visible = false;
				this.blocks.tbs.b15.barBlock.visible = false;
				this.blocks.tbs.b16.barBlock.visible = false;
				this.blocks.tbs.b17.barBlock.visible = false;
				this.blocks.tbs.b18.barBlock.visible = false;
				this.blocks.tbs.b19.barBlock.visible = false;
				this.blocks.tbs.b20.barBlock.visible = false;
			}
			else if (phase == 21) {
				phaseProgress += catMove/fps*timeMult;
				this.cat.x = 160 - Math.min(35, phaseProgress*35);
				this.cat.y = 143;
				this.cat.gotoAndStop(0);
				this.cat.scaleX = -1;
				this.cat.scaleY = 1;
				this.blocks.gotoAndStop(50);
				
				
				if (phaseProgress > 1) {
					phase += 1;
					phaseProgress = 0;
				}
				
				
				this.blocks.tbs.b12.barBlock.bHP.gotoAndStop((blockHP[11].div(blockMHP[11]).times(99).floor()).toNumber());
				
				
				this.blocks.tbs.b1.visible = false;
				this.blocks.tbs.b2.visible = false;
				this.blocks.tbs.b3.visible = false;
				this.blocks.tbs.b4.visible = false;
				this.blocks.tbs.b5.visible = false;
				this.blocks.tbs.b6.visible = false;
				this.blocks.tbs.b7.visible = false;
				this.blocks.tbs.b8.visible = false;
				this.blocks.tbs.b9.visible = false;
				this.blocks.tbs.b10.visible = false;
				this.blocks.tbs.b11.visible = false;
				this.blocks.tbs.b12.visible = true;
				this.blocks.tbs.b13.visible = true;
				this.blocks.tbs.b14.visible = true;
				this.blocks.tbs.b15.visible = true;
				this.blocks.tbs.b16.visible = true;
				this.blocks.tbs.b17.visible = true;
				this.blocks.tbs.b18.visible = true;
				this.blocks.tbs.b19.visible = true;
				this.blocks.tbs.b20.visible = true;
				
				this.blocks.tbs.b1.barBlock.visible = false;
				this.blocks.tbs.b2.barBlock.visible = false;
				this.blocks.tbs.b3.barBlock.visible = false;
				this.blocks.tbs.b4.barBlock.visible = false;
				this.blocks.tbs.b5.barBlock.visible = false;
				this.blocks.tbs.b6.barBlock.visible = false;
				this.blocks.tbs.b7.barBlock.visible = false;
				this.blocks.tbs.b8.barBlock.visible = false;
				this.blocks.tbs.b9.barBlock.visible = false;
				this.blocks.tbs.b10.barBlock.visible = false;
				this.blocks.tbs.b11.barBlock.visible = false;
				this.blocks.tbs.b12.barBlock.visible = true;
				this.blocks.tbs.b13.barBlock.visible = false;
				this.blocks.tbs.b14.barBlock.visible = false;
				this.blocks.tbs.b15.barBlock.visible = false;
				this.blocks.tbs.b16.barBlock.visible = false;
				this.blocks.tbs.b17.barBlock.visible = false;
				this.blocks.tbs.b18.barBlock.visible = false;
				this.blocks.tbs.b19.barBlock.visible = false;
				this.blocks.tbs.b20.barBlock.visible = false;
			}
			else if (phase == 22) {
				phaseProgress += 3/fps*fallSpd*timeMult;
				this.cat.x = 125;
				this.cat.y = 142;
				this.cat.gotoAndStop(0);
				this.cat.scaleX = -1;
				this.cat.scaleY = 1;
				this.blocks.gotoAndStop(Math.min(99, 50+Math.floor(phaseProgress*49)));
		
				
				
				if (phaseProgress > 1) {
					phase += 1;
					phaseProgress = 0;
				}
				
				
				this.blocks.tbs.b12.barBlock.bHP.gotoAndStop((blockHP[11].div(blockMHP[11]).times(99).floor()).toNumber());
				
				
				this.blocks.tbs.b1.visible = false;
				this.blocks.tbs.b2.visible = false;
				this.blocks.tbs.b3.visible = false;
				this.blocks.tbs.b4.visible = false;
				this.blocks.tbs.b5.visible = false;
				this.blocks.tbs.b6.visible = false;
				this.blocks.tbs.b7.visible = false;
				this.blocks.tbs.b8.visible = false;
				this.blocks.tbs.b9.visible = false;
				this.blocks.tbs.b10.visible = false;
				this.blocks.tbs.b11.visible = false;
				this.blocks.tbs.b12.visible = true;
				this.blocks.tbs.b13.visible = true;
				this.blocks.tbs.b14.visible = true;
				this.blocks.tbs.b15.visible = true;
				this.blocks.tbs.b16.visible = true;
				this.blocks.tbs.b17.visible = true;
				this.blocks.tbs.b18.visible = true;
				this.blocks.tbs.b19.visible = true;
				this.blocks.tbs.b20.visible = true;
				
				this.blocks.tbs.b1.barBlock.visible = false;
				this.blocks.tbs.b2.barBlock.visible = false;
				this.blocks.tbs.b3.barBlock.visible = false;
				this.blocks.tbs.b4.barBlock.visible = false;
				this.blocks.tbs.b5.barBlock.visible = false;
				this.blocks.tbs.b6.barBlock.visible = false;
				this.blocks.tbs.b7.barBlock.visible = false;
				this.blocks.tbs.b8.barBlock.visible = false;
				this.blocks.tbs.b9.barBlock.visible = false;
				this.blocks.tbs.b10.barBlock.visible = false;
				this.blocks.tbs.b11.barBlock.visible = false;
				this.blocks.tbs.b12.barBlock.visible = true;
				this.blocks.tbs.b13.barBlock.visible = false;
				this.blocks.tbs.b14.barBlock.visible = false;
				this.blocks.tbs.b15.barBlock.visible = false;
				this.blocks.tbs.b16.barBlock.visible = false;
				this.blocks.tbs.b17.barBlock.visible = false;
				this.blocks.tbs.b18.barBlock.visible = false;
				this.blocks.tbs.b19.barBlock.visible = false;
				this.blocks.tbs.b20.barBlock.visible = false;
			}
			else if (phase == 23) {
				this.cat.x = 125;
				this.cat.y = 146;
				this.cat.gotoAndStop(1);
				this.cat.scaleX = 1;
				this.cat.scaleY = 1;
				this.blocks.gotoAndStop(99);
				
				
				this.cat.anim_1.gotoAndStop(Math.floor(catTick/catSpeed*30));
				
				
				if (catTick >= catSpeed/2 && catHit == false) {
					blockHP[11] = blockHP[11].sub(catDMG);
					catHit = true;
				}
				if (catTick >= catSpeed) {
					catTick = 0;
					catHit = false;
				}
				
				if (blockHP[11].lte(0)) {
					phase += 1;
					phaseProgress = 0;
					
					if (stagei == stageMax) {
						stageProg += 1;
					}
					resources[blocks[11]] = resources[blocks[11]].plus(infMult.floor());
					
					var crysRand = Math.random();
					if (crysRand < cChance) {
						crystals = crystals.plus(gemMult);
					}
					
					var x2c = Math.random();
					if (x2c < x2chance) {
						resources[blocks[11]] = resources[blocks[11]].plus(infMult.floor());
					}
				}
				
				
				this.blocks.tbs.b12.barBlock.bHP.gotoAndStop((blockHP[11].div(blockMHP[11]).times(99).floor()).toNumber());
				
				
				this.blocks.tbs.b1.visible = false;
				this.blocks.tbs.b2.visible = false;
				this.blocks.tbs.b3.visible = false;
				this.blocks.tbs.b4.visible = false;
				this.blocks.tbs.b5.visible = false;
				this.blocks.tbs.b6.visible = false;
				this.blocks.tbs.b7.visible = false;
				this.blocks.tbs.b8.visible = false;
				this.blocks.tbs.b9.visible = false;
				this.blocks.tbs.b10.visible = false;
				this.blocks.tbs.b11.visible = false;
				this.blocks.tbs.b12.visible = true;
				this.blocks.tbs.b13.visible = true;
				this.blocks.tbs.b14.visible = true;
				this.blocks.tbs.b15.visible = true;
				this.blocks.tbs.b16.visible = true;
				this.blocks.tbs.b17.visible = true;
				this.blocks.tbs.b18.visible = true;
				this.blocks.tbs.b19.visible = true;
				this.blocks.tbs.b20.visible = true;
				
				this.blocks.tbs.b1.barBlock.visible = false;
				this.blocks.tbs.b2.barBlock.visible = false;
				this.blocks.tbs.b3.barBlock.visible = false;
				this.blocks.tbs.b4.barBlock.visible = false;
				this.blocks.tbs.b5.barBlock.visible = false;
				this.blocks.tbs.b6.barBlock.visible = false;
				this.blocks.tbs.b7.barBlock.visible = false;
				this.blocks.tbs.b8.barBlock.visible = false;
				this.blocks.tbs.b9.barBlock.visible = false;
				this.blocks.tbs.b10.barBlock.visible = false;
				this.blocks.tbs.b11.barBlock.visible = false;
				this.blocks.tbs.b12.barBlock.visible = true;
				this.blocks.tbs.b13.barBlock.visible = false;
				this.blocks.tbs.b14.barBlock.visible = false;
				this.blocks.tbs.b15.barBlock.visible = false;
				this.blocks.tbs.b16.barBlock.visible = false;
				this.blocks.tbs.b17.barBlock.visible = false;
				this.blocks.tbs.b18.barBlock.visible = false;
				this.blocks.tbs.b19.barBlock.visible = false;
				this.blocks.tbs.b20.barBlock.visible = false;
			}
			else if (phase == 24) {
				phaseProgress += catMove/fps*timeMult;
				this.cat.x = 125 + Math.min(35, phaseProgress*35);
				this.cat.y = 146;
				this.cat.gotoAndStop(0);
				this.cat.scaleX = 1;
				this.cat.scaleY = 1;
				this.blocks.gotoAndStop(99);
				
				
				if (phaseProgress > 1) {
					phase += 1;
					phaseProgress = 0;
				}
				
				
				this.blocks.tbs.b13.barBlock.bHP.gotoAndStop((blockHP[12].div(blockMHP[12]).times(99).floor()).toNumber());
				
				
				this.blocks.tbs.b1.visible = false;
				this.blocks.tbs.b2.visible = false;
				this.blocks.tbs.b3.visible = false;
				this.blocks.tbs.b4.visible = false;
				this.blocks.tbs.b5.visible = false;
				this.blocks.tbs.b6.visible = false;
				this.blocks.tbs.b7.visible = false;
				this.blocks.tbs.b8.visible = false;
				this.blocks.tbs.b9.visible = false;
				this.blocks.tbs.b10.visible = false;
				this.blocks.tbs.b11.visible = false;
				this.blocks.tbs.b12.visible = false;
				this.blocks.tbs.b13.visible = true;
				this.blocks.tbs.b14.visible = true;
				this.blocks.tbs.b15.visible = true;
				this.blocks.tbs.b16.visible = true;
				this.blocks.tbs.b17.visible = true;
				this.blocks.tbs.b18.visible = true;
				this.blocks.tbs.b19.visible = true;
				this.blocks.tbs.b20.visible = true;
				
				this.blocks.tbs.b1.barBlock.visible = false;
				this.blocks.tbs.b2.barBlock.visible = false;
				this.blocks.tbs.b3.barBlock.visible = false;
				this.blocks.tbs.b4.barBlock.visible = false;
				this.blocks.tbs.b5.barBlock.visible = false;
				this.blocks.tbs.b6.barBlock.visible = false;
				this.blocks.tbs.b7.barBlock.visible = false;
				this.blocks.tbs.b8.barBlock.visible = false;
				this.blocks.tbs.b9.barBlock.visible = false;
				this.blocks.tbs.b10.barBlock.visible = false;
				this.blocks.tbs.b11.barBlock.visible = false;
				this.blocks.tbs.b12.barBlock.visible = false;
				this.blocks.tbs.b13.barBlock.visible = true;
				this.blocks.tbs.b14.barBlock.visible = false;
				this.blocks.tbs.b15.barBlock.visible = false;
				this.blocks.tbs.b16.barBlock.visible = false;
				this.blocks.tbs.b17.barBlock.visible = false;
				this.blocks.tbs.b18.barBlock.visible = false;
				this.blocks.tbs.b19.barBlock.visible = false;
				this.blocks.tbs.b20.barBlock.visible = false;
			}
			else if (phase == 25) {
				this.cat.x = 160;
				this.cat.y = 146;
				this.cat.gotoAndStop(1);
				this.cat.scaleX = 1;
				this.cat.scaleY = 1;
				this.blocks.gotoAndStop(99);
				
				
				this.cat.anim_1.gotoAndStop(Math.floor(catTick/catSpeed*30));
				
				
				if (catTick >= catSpeed/2 && catHit == false) {
					blockHP[12] = blockHP[12].sub(catDMG);
					catHit = true;
				}
				if (catTick >= catSpeed) {
					catTick = 0;
					catHit = false;
				}
				
				if (blockHP[12].lte(0)) {
					phase += 1;
					phaseProgress = 0;
					
					if (stagei == stageMax) {
						stageProg += 1;
					}
					resources[blocks[12]] = resources[blocks[12]].plus(infMult.floor());
					
					var crysRand = Math.random();
					if (crysRand < cChance) {
						crystals = crystals.plus(gemMult);
					}
					
					var x2c = Math.random();
					if (x2c < x2chance) {
						resources[blocks[12]] = resources[blocks[12]].plus(infMult.floor());
					}
				}
				
				
				this.blocks.tbs.b13.barBlock.bHP.gotoAndStop((blockHP[12].div(blockMHP[12]).times(99).floor()).toNumber());
				
				
				this.blocks.tbs.b1.visible = false;
				this.blocks.tbs.b2.visible = false;
				this.blocks.tbs.b3.visible = false;
				this.blocks.tbs.b4.visible = false;
				this.blocks.tbs.b5.visible = false;
				this.blocks.tbs.b6.visible = false;
				this.blocks.tbs.b7.visible = false;
				this.blocks.tbs.b8.visible = false;
				this.blocks.tbs.b9.visible = false;
				this.blocks.tbs.b10.visible = false;
				this.blocks.tbs.b11.visible = false;
				this.blocks.tbs.b12.visible = false;
				this.blocks.tbs.b13.visible = true;
				this.blocks.tbs.b14.visible = true;
				this.blocks.tbs.b15.visible = true;
				this.blocks.tbs.b16.visible = true;
				this.blocks.tbs.b17.visible = true;
				this.blocks.tbs.b18.visible = true;
				this.blocks.tbs.b19.visible = true;
				this.blocks.tbs.b20.visible = true;
				
				this.blocks.tbs.b1.barBlock.visible = false;
				this.blocks.tbs.b2.barBlock.visible = false;
				this.blocks.tbs.b3.barBlock.visible = false;
				this.blocks.tbs.b4.barBlock.visible = false;
				this.blocks.tbs.b5.barBlock.visible = false;
				this.blocks.tbs.b6.barBlock.visible = false;
				this.blocks.tbs.b7.barBlock.visible = false;
				this.blocks.tbs.b8.barBlock.visible = false;
				this.blocks.tbs.b9.barBlock.visible = false;
				this.blocks.tbs.b10.barBlock.visible = false;
				this.blocks.tbs.b11.barBlock.visible = false;
				this.blocks.tbs.b12.barBlock.visible = false;
				this.blocks.tbs.b13.barBlock.visible = true;
				this.blocks.tbs.b14.barBlock.visible = false;
				this.blocks.tbs.b15.barBlock.visible = false;
				this.blocks.tbs.b16.barBlock.visible = false;
				this.blocks.tbs.b17.barBlock.visible = false;
				this.blocks.tbs.b18.barBlock.visible = false;
				this.blocks.tbs.b19.barBlock.visible = false;
				this.blocks.tbs.b20.barBlock.visible = false;
			}
			else if (phase == 26) {
				phaseProgress += catMove/fps*timeMult;
				this.cat.x = 160 + Math.min(35, phaseProgress*35);
				this.cat.y = 146;
				this.cat.gotoAndStop(0);
				this.cat.scaleX = 1;
				this.cat.scaleY = 1;
				this.blocks.gotoAndStop(99);
				
				
				if (phaseProgress > 1) {
					phase += 1;
					phaseProgress = 0;
				}
				
				
				this.blocks.tbs.b14.barBlock.bHP.gotoAndStop((blockHP[13].div(blockMHP[13]).times(99).floor()).toNumber());
				
				
				this.blocks.tbs.b1.visible = false;
				this.blocks.tbs.b2.visible = false;
				this.blocks.tbs.b3.visible = false;
				this.blocks.tbs.b4.visible = false;
				this.blocks.tbs.b5.visible = false;
				this.blocks.tbs.b6.visible = false;
				this.blocks.tbs.b7.visible = false;
				this.blocks.tbs.b8.visible = false;
				this.blocks.tbs.b9.visible = false;
				this.blocks.tbs.b10.visible = false;
				this.blocks.tbs.b11.visible = false;
				this.blocks.tbs.b12.visible = false;
				this.blocks.tbs.b13.visible = false;
				this.blocks.tbs.b14.visible = true;
				this.blocks.tbs.b15.visible = true;
				this.blocks.tbs.b16.visible = true;
				this.blocks.tbs.b17.visible = true;
				this.blocks.tbs.b18.visible = true;
				this.blocks.tbs.b19.visible = true;
				this.blocks.tbs.b20.visible = true;
				
				this.blocks.tbs.b1.barBlock.visible = false;
				this.blocks.tbs.b2.barBlock.visible = false;
				this.blocks.tbs.b3.barBlock.visible = false;
				this.blocks.tbs.b4.barBlock.visible = false;
				this.blocks.tbs.b5.barBlock.visible = false;
				this.blocks.tbs.b6.barBlock.visible = false;
				this.blocks.tbs.b7.barBlock.visible = false;
				this.blocks.tbs.b8.barBlock.visible = false;
				this.blocks.tbs.b9.barBlock.visible = false;
				this.blocks.tbs.b10.barBlock.visible = false;
				this.blocks.tbs.b11.barBlock.visible = false;
				this.blocks.tbs.b12.barBlock.visible = false;
				this.blocks.tbs.b13.barBlock.visible = false;
				this.blocks.tbs.b14.barBlock.visible = true;
				this.blocks.tbs.b15.barBlock.visible = false;
				this.blocks.tbs.b16.barBlock.visible = false;
				this.blocks.tbs.b17.barBlock.visible = false;
				this.blocks.tbs.b18.barBlock.visible = false;
				this.blocks.tbs.b19.barBlock.visible = false;
				this.blocks.tbs.b20.barBlock.visible = false;
			}
			else if (phase == 27) {
				this.cat.x = 195;
				this.cat.y = 146;
				this.cat.gotoAndStop(1);
				this.cat.scaleX = 1;
				this.cat.scaleY = 1;
				this.blocks.gotoAndStop(99);
				
				
				this.cat.anim_1.gotoAndStop(Math.floor(catTick/catSpeed*30));
				
				
				if (catTick >= catSpeed/2 && catHit == false) {
					blockHP[13] = blockHP[13].sub(catDMG);
					catHit = true;
				}
				if (catTick >= catSpeed) {
					catTick = 0;
					catHit = false;
				}
				
				if (blockHP[13].lte(0)) {
					phase += 1;
					phaseProgress = 0;
					
					if (stagei == stageMax) {
						stageProg += 1;
					}
					resources[blocks[13]] = resources[blocks[13]].plus(infMult.floor());
					
					var crysRand = Math.random();
					if (crysRand < cChance) {
						crystals = crystals.plus(gemMult);
					}
					
					var x2c = Math.random();
					if (x2c < x2chance) {
						resources[blocks[13]] = resources[blocks[13]].plus(infMult.floor());
					}
				}
				
				
				this.blocks.tbs.b14.barBlock.bHP.gotoAndStop((blockHP[13].div(blockMHP[13]).times(99).floor()).toNumber());
				
				
				this.blocks.tbs.b1.visible = false;
				this.blocks.tbs.b2.visible = false;
				this.blocks.tbs.b3.visible = false;
				this.blocks.tbs.b4.visible = false;
				this.blocks.tbs.b5.visible = false;
				this.blocks.tbs.b6.visible = false;
				this.blocks.tbs.b7.visible = false;
				this.blocks.tbs.b8.visible = false;
				this.blocks.tbs.b9.visible = false;
				this.blocks.tbs.b10.visible = false;
				this.blocks.tbs.b11.visible = false;
				this.blocks.tbs.b12.visible = false;
				this.blocks.tbs.b13.visible = false;
				this.blocks.tbs.b14.visible = true;
				this.blocks.tbs.b15.visible = true;
				this.blocks.tbs.b16.visible = true;
				this.blocks.tbs.b17.visible = true;
				this.blocks.tbs.b18.visible = true;
				this.blocks.tbs.b19.visible = true;
				this.blocks.tbs.b20.visible = true;
				
				this.blocks.tbs.b1.barBlock.visible = false;
				this.blocks.tbs.b2.barBlock.visible = false;
				this.blocks.tbs.b3.barBlock.visible = false;
				this.blocks.tbs.b4.barBlock.visible = false;
				this.blocks.tbs.b5.barBlock.visible = false;
				this.blocks.tbs.b6.barBlock.visible = false;
				this.blocks.tbs.b7.barBlock.visible = false;
				this.blocks.tbs.b8.barBlock.visible = false;
				this.blocks.tbs.b9.barBlock.visible = false;
				this.blocks.tbs.b10.barBlock.visible = false;
				this.blocks.tbs.b11.barBlock.visible = false;
				this.blocks.tbs.b12.barBlock.visible = false;
				this.blocks.tbs.b13.barBlock.visible = false;
				this.blocks.tbs.b14.barBlock.visible = true;
				this.blocks.tbs.b15.barBlock.visible = false;
				this.blocks.tbs.b16.barBlock.visible = false;
				this.blocks.tbs.b17.barBlock.visible = false;
				this.blocks.tbs.b18.barBlock.visible = false;
				this.blocks.tbs.b19.barBlock.visible = false;
				this.blocks.tbs.b20.barBlock.visible = false;
			}
			else if (phase == 28) {
				phaseProgress += catMove/fps*timeMult;
				this.cat.x = 195 + Math.min(35, phaseProgress*35);
				this.cat.y = 146;
				this.cat.gotoAndStop(0);
				this.cat.scaleX = 1;
				this.cat.scaleY = 1;
				this.blocks.gotoAndStop(99);
				
				
				if (phaseProgress > 1) {
					phase += 1;
					phaseProgress = 0;
				}
				
				
				this.blocks.tbs.b15.barBlock.bHP.gotoAndStop((blockHP[14].div(blockMHP[14]).times(99).floor()).toNumber());
				
				
				this.blocks.tbs.b1.visible = false;
				this.blocks.tbs.b2.visible = false;
				this.blocks.tbs.b3.visible = false;
				this.blocks.tbs.b4.visible = false;
				this.blocks.tbs.b5.visible = false;
				this.blocks.tbs.b6.visible = false;
				this.blocks.tbs.b7.visible = false;
				this.blocks.tbs.b8.visible = false;
				this.blocks.tbs.b9.visible = false;
				this.blocks.tbs.b10.visible = false;
				this.blocks.tbs.b11.visible = false;
				this.blocks.tbs.b12.visible = false;
				this.blocks.tbs.b13.visible = false;
				this.blocks.tbs.b14.visible = false;
				this.blocks.tbs.b15.visible = true;
				this.blocks.tbs.b16.visible = true;
				this.blocks.tbs.b17.visible = true;
				this.blocks.tbs.b18.visible = true;
				this.blocks.tbs.b19.visible = true;
				this.blocks.tbs.b20.visible = true;
				
				this.blocks.tbs.b1.barBlock.visible = false;
				this.blocks.tbs.b2.barBlock.visible = false;
				this.blocks.tbs.b3.barBlock.visible = false;
				this.blocks.tbs.b4.barBlock.visible = false;
				this.blocks.tbs.b5.barBlock.visible = false;
				this.blocks.tbs.b6.barBlock.visible = false;
				this.blocks.tbs.b7.barBlock.visible = false;
				this.blocks.tbs.b8.barBlock.visible = false;
				this.blocks.tbs.b9.barBlock.visible = false;
				this.blocks.tbs.b10.barBlock.visible = false;
				this.blocks.tbs.b11.barBlock.visible = false;
				this.blocks.tbs.b12.barBlock.visible = false;
				this.blocks.tbs.b13.barBlock.visible = false;
				this.blocks.tbs.b14.barBlock.visible = false;
				this.blocks.tbs.b15.barBlock.visible = true;
				this.blocks.tbs.b16.barBlock.visible = false;
				this.blocks.tbs.b17.barBlock.visible = false;
				this.blocks.tbs.b18.barBlock.visible = false;
				this.blocks.tbs.b19.barBlock.visible = false;
				this.blocks.tbs.b20.barBlock.visible = false;
			}
			else if (phase == 29) {
				this.cat.x = 230;
				this.cat.y = 146;
				this.cat.gotoAndStop(1);
				this.cat.scaleX = 1;
				this.cat.scaleY = 1;
				this.blocks.gotoAndStop(99);
				
				
				this.cat.anim_1.gotoAndStop(Math.floor(catTick/catSpeed*30));
				
				
				if (catTick >= catSpeed/2 && catHit == false) {
					blockHP[14] = blockHP[14].sub(catDMG);
					catHit = true;
				}
				if (catTick >= catSpeed) {
					catTick = 0;
					catHit = false;
				}
				
				if (blockHP[14].lte(0)) {
					phase += 1;
					phaseProgress = 0;
					
					if (stagei == stageMax) {
						stageProg += 1;
					}
					resources[blocks[14]] = resources[blocks[14]].plus(infMult.floor());
					
					var crysRand = Math.random();
					if (crysRand < cChance) {
						crystals = crystals.plus(gemMult);
					}
					
					var x2c = Math.random();
					if (x2c < x2chance) {
						resources[blocks[14]] = resources[blocks[14]].plus(infMult.floor());
					}
				}
				
				
				this.blocks.tbs.b15.barBlock.bHP.gotoAndStop((blockHP[14].div(blockMHP[14]).times(99).floor()).toNumber());
				
				
				this.blocks.tbs.b1.visible = false;
				this.blocks.tbs.b2.visible = false;
				this.blocks.tbs.b3.visible = false;
				this.blocks.tbs.b4.visible = false;
				this.blocks.tbs.b5.visible = false;
				this.blocks.tbs.b6.visible = false;
				this.blocks.tbs.b7.visible = false;
				this.blocks.tbs.b8.visible = false;
				this.blocks.tbs.b9.visible = false;
				this.blocks.tbs.b10.visible = false;
				this.blocks.tbs.b11.visible = false;
				this.blocks.tbs.b12.visible = false;
				this.blocks.tbs.b13.visible = false;
				this.blocks.tbs.b14.visible = false;
				this.blocks.tbs.b15.visible = true;
				this.blocks.tbs.b16.visible = true;
				this.blocks.tbs.b17.visible = true;
				this.blocks.tbs.b18.visible = true;
				this.blocks.tbs.b19.visible = true;
				this.blocks.tbs.b20.visible = true;
				
				this.blocks.tbs.b1.barBlock.visible = false;
				this.blocks.tbs.b2.barBlock.visible = false;
				this.blocks.tbs.b3.barBlock.visible = false;
				this.blocks.tbs.b4.barBlock.visible = false;
				this.blocks.tbs.b5.barBlock.visible = false;
				this.blocks.tbs.b6.barBlock.visible = false;
				this.blocks.tbs.b7.barBlock.visible = false;
				this.blocks.tbs.b8.barBlock.visible = false;
				this.blocks.tbs.b9.barBlock.visible = false;
				this.blocks.tbs.b10.barBlock.visible = false;
				this.blocks.tbs.b11.barBlock.visible = false;
				this.blocks.tbs.b12.barBlock.visible = false;
				this.blocks.tbs.b13.barBlock.visible = false;
				this.blocks.tbs.b14.barBlock.visible = false;
				this.blocks.tbs.b15.barBlock.visible = true;
				this.blocks.tbs.b16.barBlock.visible = false;
				this.blocks.tbs.b17.barBlock.visible = false;
				this.blocks.tbs.b18.barBlock.visible = false;
				this.blocks.tbs.b19.barBlock.visible = false;
				this.blocks.tbs.b20.barBlock.visible = false;
			}
			else if (phase == 30) {
				phaseProgress += catMove/fps*timeMult;
				this.cat.x = 230 + Math.min(35, phaseProgress*35);
				this.cat.y = 146;
				this.cat.gotoAndStop(0);
				this.cat.scaleX = 1;
				this.cat.scaleY = 1;
				this.blocks.gotoAndStop(99);
				
				
				if (phaseProgress > 1) {
					phase += 1;
					phaseProgress = 0;
				}
				
				
				this.blocks.tbs.b16.barBlock.bHP.gotoAndStop((blockHP[15].div(blockMHP[15]).times(99).floor()).toNumber());
				
				
				this.blocks.tbs.b1.visible = false;
				this.blocks.tbs.b2.visible = false;
				this.blocks.tbs.b3.visible = false;
				this.blocks.tbs.b4.visible = false;
				this.blocks.tbs.b5.visible = false;
				this.blocks.tbs.b6.visible = false;
				this.blocks.tbs.b7.visible = false;
				this.blocks.tbs.b8.visible = false;
				this.blocks.tbs.b9.visible = false;
				this.blocks.tbs.b10.visible = false;
				this.blocks.tbs.b11.visible = false;
				this.blocks.tbs.b12.visible = false;
				this.blocks.tbs.b13.visible = false;
				this.blocks.tbs.b14.visible = false;
				this.blocks.tbs.b15.visible = false;
				this.blocks.tbs.b16.visible = true;
				this.blocks.tbs.b17.visible = true;
				this.blocks.tbs.b18.visible = true;
				this.blocks.tbs.b19.visible = true;
				this.blocks.tbs.b20.visible = true;
				
				this.blocks.tbs.b1.barBlock.visible = false;
				this.blocks.tbs.b2.barBlock.visible = false;
				this.blocks.tbs.b3.barBlock.visible = false;
				this.blocks.tbs.b4.barBlock.visible = false;
				this.blocks.tbs.b5.barBlock.visible = false;
				this.blocks.tbs.b6.barBlock.visible = false;
				this.blocks.tbs.b7.barBlock.visible = false;
				this.blocks.tbs.b8.barBlock.visible = false;
				this.blocks.tbs.b9.barBlock.visible = false;
				this.blocks.tbs.b10.barBlock.visible = false;
				this.blocks.tbs.b11.barBlock.visible = false;
				this.blocks.tbs.b12.barBlock.visible = false;
				this.blocks.tbs.b13.barBlock.visible = false;
				this.blocks.tbs.b14.barBlock.visible = false;
				this.blocks.tbs.b15.barBlock.visible = false;
				this.blocks.tbs.b16.barBlock.visible = true;
				this.blocks.tbs.b17.barBlock.visible = false;
				this.blocks.tbs.b18.barBlock.visible = false;
				this.blocks.tbs.b19.barBlock.visible = false;
				this.blocks.tbs.b20.barBlock.visible = false;
			}
			else if (phase == 31) {
				this.cat.x = 265;
				this.cat.y = 146;
				this.cat.gotoAndStop(1);
				this.cat.scaleX = 1;
				this.cat.scaleY = 1;
				this.blocks.gotoAndStop(99);
				
				
				this.cat.anim_1.gotoAndStop(Math.floor(catTick/catSpeed*30));
				
				
				if (catTick >= catSpeed/2 && catHit == false) {
					blockHP[15] = blockHP[15].sub(catDMG);
					catHit = true;
				}
				if (catTick >= catSpeed) {
					catTick = 0;
					catHit = false;
				}
				
				if (blockHP[15].lte(0)) {
					phase += 1;
					phaseProgress = 0;
					
					if (stagei == stageMax) {
						stageProg += 1;
					}
					resources[blocks[15]] = resources[blocks[15]].plus(infMult.floor());
					
					var crysRand = Math.random();
					if (crysRand < cChance) {
						crystals = crystals.plus(gemMult);
					}
					
					var x2c = Math.random();
					if (x2c < x2chance) {
						resources[blocks[15]] = resources[blocks[15]].plus(infMult.floor());
					}
				}
				
				
				this.blocks.tbs.b16.barBlock.bHP.gotoAndStop((blockHP[15].div(blockMHP[15]).times(99).floor()).toNumber());
				
				
				this.blocks.tbs.b1.visible = false;
				this.blocks.tbs.b2.visible = false;
				this.blocks.tbs.b3.visible = false;
				this.blocks.tbs.b4.visible = false;
				this.blocks.tbs.b5.visible = false;
				this.blocks.tbs.b6.visible = false;
				this.blocks.tbs.b7.visible = false;
				this.blocks.tbs.b8.visible = false;
				this.blocks.tbs.b9.visible = false;
				this.blocks.tbs.b10.visible = false;
				this.blocks.tbs.b11.visible = false;
				this.blocks.tbs.b12.visible = false;
				this.blocks.tbs.b13.visible = false;
				this.blocks.tbs.b14.visible = false;
				this.blocks.tbs.b15.visible = false;
				this.blocks.tbs.b16.visible = true;
				this.blocks.tbs.b17.visible = true;
				this.blocks.tbs.b18.visible = true;
				this.blocks.tbs.b19.visible = true;
				this.blocks.tbs.b20.visible = true;
				
				this.blocks.tbs.b1.barBlock.visible = false;
				this.blocks.tbs.b2.barBlock.visible = false;
				this.blocks.tbs.b3.barBlock.visible = false;
				this.blocks.tbs.b4.barBlock.visible = false;
				this.blocks.tbs.b5.barBlock.visible = false;
				this.blocks.tbs.b6.barBlock.visible = false;
				this.blocks.tbs.b7.barBlock.visible = false;
				this.blocks.tbs.b8.barBlock.visible = false;
				this.blocks.tbs.b9.barBlock.visible = false;
				this.blocks.tbs.b10.barBlock.visible = false;
				this.blocks.tbs.b11.barBlock.visible = false;
				this.blocks.tbs.b12.barBlock.visible = false;
				this.blocks.tbs.b13.barBlock.visible = false;
				this.blocks.tbs.b14.barBlock.visible = false;
				this.blocks.tbs.b15.barBlock.visible = false;
				this.blocks.tbs.b16.barBlock.visible = true;
				this.blocks.tbs.b17.barBlock.visible = false;
				this.blocks.tbs.b18.barBlock.visible = false;
				this.blocks.tbs.b19.barBlock.visible = false;
				this.blocks.tbs.b20.barBlock.visible = false;
			}
			else if (phase == 32) {
				phaseProgress += catMove/fps*timeMult;
				this.cat.x = 265 + Math.min(35, phaseProgress*35);
				this.cat.y = 146;
				this.cat.gotoAndStop(0);
				this.cat.scaleX = 1;
				this.cat.scaleY = 1;
				this.blocks.gotoAndStop(99);
				
				
				if (phaseProgress > 1) {
					phase += 1;
					phaseProgress = 0;
				}
				
				
				this.blocks.tbs.b17.barBlock.bHP.gotoAndStop((blockHP[16].div(blockMHP[16]).times(99).floor()).toNumber());
				
				
				this.blocks.tbs.b1.visible = false;
				this.blocks.tbs.b2.visible = false;
				this.blocks.tbs.b3.visible = false;
				this.blocks.tbs.b4.visible = false;
				this.blocks.tbs.b5.visible = false;
				this.blocks.tbs.b6.visible = false;
				this.blocks.tbs.b7.visible = false;
				this.blocks.tbs.b8.visible = false;
				this.blocks.tbs.b9.visible = false;
				this.blocks.tbs.b10.visible = false;
				this.blocks.tbs.b11.visible = false;
				this.blocks.tbs.b12.visible = false;
				this.blocks.tbs.b13.visible = false;
				this.blocks.tbs.b14.visible = false;
				this.blocks.tbs.b15.visible = false;
				this.blocks.tbs.b16.visible = false;
				this.blocks.tbs.b17.visible = true;
				this.blocks.tbs.b18.visible = true;
				this.blocks.tbs.b19.visible = true;
				this.blocks.tbs.b20.visible = true;
				
				this.blocks.tbs.b1.barBlock.visible = false;
				this.blocks.tbs.b2.barBlock.visible = false;
				this.blocks.tbs.b3.barBlock.visible = false;
				this.blocks.tbs.b4.barBlock.visible = false;
				this.blocks.tbs.b5.barBlock.visible = false;
				this.blocks.tbs.b6.barBlock.visible = false;
				this.blocks.tbs.b7.barBlock.visible = false;
				this.blocks.tbs.b8.barBlock.visible = false;
				this.blocks.tbs.b9.barBlock.visible = false;
				this.blocks.tbs.b10.barBlock.visible = false;
				this.blocks.tbs.b11.barBlock.visible = false;
				this.blocks.tbs.b12.barBlock.visible = false;
				this.blocks.tbs.b13.barBlock.visible = false;
				this.blocks.tbs.b14.barBlock.visible = false;
				this.blocks.tbs.b15.barBlock.visible = false;
				this.blocks.tbs.b16.barBlock.visible = false;
				this.blocks.tbs.b17.barBlock.visible = true;
				this.blocks.tbs.b18.barBlock.visible = false;
				this.blocks.tbs.b19.barBlock.visible = false;
				this.blocks.tbs.b20.barBlock.visible = false;
			}
			else if (phase == 33) {
				this.cat.x = 300;
				this.cat.y = 146;
				this.cat.gotoAndStop(1);
				this.cat.scaleX = 1;
				this.cat.scaleY = 1;
				this.blocks.gotoAndStop(99);
				
				
				this.cat.anim_1.gotoAndStop(Math.floor(catTick/catSpeed*30));
				
				
				if (catTick >= catSpeed/2 && catHit == false) {
					blockHP[16] = blockHP[16].sub(catDMG);
					catHit = true;
				}
				if (catTick >= catSpeed) {
					catTick = 0;
					catHit = false;
				}
				
				if (blockHP[16].lte(0)) {
					phase += 1;
					phaseProgress = 0;
					
					if (stagei == stageMax) {
						stageProg += 1;
					}
					resources[blocks[16]] = resources[blocks[16]].plus(infMult.floor());
					
					var crysRand = Math.random();
					if (crysRand < cChance) {
						crystals = crystals.plus(gemMult);
					}
					
					var x2c = Math.random();
					if (x2c < x2chance) {
						resources[blocks[16]] = resources[blocks[16]].plus(infMult.floor());
					}
				}
				
				
				this.blocks.tbs.b17.barBlock.bHP.gotoAndStop((blockHP[16].div(blockMHP[16]).times(99).floor()).toNumber());
				
				
				this.blocks.tbs.b1.visible = false;
				this.blocks.tbs.b2.visible = false;
				this.blocks.tbs.b3.visible = false;
				this.blocks.tbs.b4.visible = false;
				this.blocks.tbs.b5.visible = false;
				this.blocks.tbs.b6.visible = false;
				this.blocks.tbs.b7.visible = false;
				this.blocks.tbs.b8.visible = false;
				this.blocks.tbs.b9.visible = false;
				this.blocks.tbs.b10.visible = false;
				this.blocks.tbs.b11.visible = false;
				this.blocks.tbs.b12.visible = false;
				this.blocks.tbs.b13.visible = false;
				this.blocks.tbs.b14.visible = false;
				this.blocks.tbs.b15.visible = false;
				this.blocks.tbs.b16.visible = false;
				this.blocks.tbs.b17.visible = true;
				this.blocks.tbs.b18.visible = true;
				this.blocks.tbs.b19.visible = true;
				this.blocks.tbs.b20.visible = true;
				
				this.blocks.tbs.b1.barBlock.visible = false;
				this.blocks.tbs.b2.barBlock.visible = false;
				this.blocks.tbs.b3.barBlock.visible = false;
				this.blocks.tbs.b4.barBlock.visible = false;
				this.blocks.tbs.b5.barBlock.visible = false;
				this.blocks.tbs.b6.barBlock.visible = false;
				this.blocks.tbs.b7.barBlock.visible = false;
				this.blocks.tbs.b8.barBlock.visible = false;
				this.blocks.tbs.b9.barBlock.visible = false;
				this.blocks.tbs.b10.barBlock.visible = false;
				this.blocks.tbs.b11.barBlock.visible = false;
				this.blocks.tbs.b12.barBlock.visible = false;
				this.blocks.tbs.b13.barBlock.visible = false;
				this.blocks.tbs.b14.barBlock.visible = false;
				this.blocks.tbs.b15.barBlock.visible = false;
				this.blocks.tbs.b16.barBlock.visible = false;
				this.blocks.tbs.b17.barBlock.visible = true;
				this.blocks.tbs.b18.barBlock.visible = false;
				this.blocks.tbs.b19.barBlock.visible = false;
				this.blocks.tbs.b20.barBlock.visible = false;
			}
			else if (phase == 34) {
				phaseProgress += catMove/fps*timeMult;
				this.cat.x = 300 + Math.min(35, phaseProgress*35);
				this.cat.y = 146;
				this.cat.gotoAndStop(0);
				this.cat.scaleX = 1;
				this.cat.scaleY = 1;
				this.blocks.gotoAndStop(99);
				
				
				if (phaseProgress > 1) {
					phase += 1;
					phaseProgress = 0;
				}
				
				
				this.blocks.tbs.b18.barBlock.bHP.gotoAndStop((blockHP[17].div(blockMHP[17]).times(99).floor()).toNumber());
				
				
				this.blocks.tbs.b1.visible = false;
				this.blocks.tbs.b2.visible = false;
				this.blocks.tbs.b3.visible = false;
				this.blocks.tbs.b4.visible = false;
				this.blocks.tbs.b5.visible = false;
				this.blocks.tbs.b6.visible = false;
				this.blocks.tbs.b7.visible = false;
				this.blocks.tbs.b8.visible = false;
				this.blocks.tbs.b9.visible = false;
				this.blocks.tbs.b10.visible = false;
				this.blocks.tbs.b11.visible = false;
				this.blocks.tbs.b12.visible = false;
				this.blocks.tbs.b13.visible = false;
				this.blocks.tbs.b14.visible = false;
				this.blocks.tbs.b15.visible = false;
				this.blocks.tbs.b16.visible = false;
				this.blocks.tbs.b17.visible = false;
				this.blocks.tbs.b18.visible = true;
				this.blocks.tbs.b19.visible = true;
				this.blocks.tbs.b20.visible = true;
				
				this.blocks.tbs.b1.barBlock.visible = false;
				this.blocks.tbs.b2.barBlock.visible = false;
				this.blocks.tbs.b3.barBlock.visible = false;
				this.blocks.tbs.b4.barBlock.visible = false;
				this.blocks.tbs.b5.barBlock.visible = false;
				this.blocks.tbs.b6.barBlock.visible = false;
				this.blocks.tbs.b7.barBlock.visible = false;
				this.blocks.tbs.b8.barBlock.visible = false;
				this.blocks.tbs.b9.barBlock.visible = false;
				this.blocks.tbs.b10.barBlock.visible = false;
				this.blocks.tbs.b11.barBlock.visible = false;
				this.blocks.tbs.b12.barBlock.visible = false;
				this.blocks.tbs.b13.barBlock.visible = false;
				this.blocks.tbs.b14.barBlock.visible = false;
				this.blocks.tbs.b15.barBlock.visible = false;
				this.blocks.tbs.b16.barBlock.visible = false;
				this.blocks.tbs.b17.barBlock.visible = false;
				this.blocks.tbs.b18.barBlock.visible = true;
				this.blocks.tbs.b19.barBlock.visible = false;
				this.blocks.tbs.b20.barBlock.visible = false;
			}
			else if (phase == 35) {
				this.cat.x = 335;
				this.cat.y = 146;
				this.cat.gotoAndStop(1);
				this.cat.scaleX = 1;
				this.cat.scaleY = 1;
				this.blocks.gotoAndStop(99);
				
				
				this.cat.anim_1.gotoAndStop(Math.floor(catTick/catSpeed*30));
				
				
				if (catTick >= catSpeed/2 && catHit == false) {
					blockHP[17] = blockHP[17].sub(catDMG);
					catHit = true;
				}
				if (catTick >= catSpeed) {
					catTick = 0;
					catHit = false;
				}
				
				if (blockHP[17].lte(0)) {
					phase += 1;
					phaseProgress = 0;
					
					if (stagei == stageMax) {
						stageProg += 1;
					}
					resources[blocks[17]] = resources[blocks[17]].plus(infMult.floor());
					
					var crysRand = Math.random();
					if (crysRand < cChance) {
						crystals = crystals.plus(gemMult);
					}
					
					var x2c = Math.random();
					if (x2c < x2chance) {
						resources[blocks[17]] = resources[blocks[17]].plus(infMult.floor());
					}
				}
				
				
				this.blocks.tbs.b18.barBlock.bHP.gotoAndStop((blockHP[17].div(blockMHP[17]).times(99).floor()).toNumber());
				
				
				this.blocks.tbs.b1.visible = false;
				this.blocks.tbs.b2.visible = false;
				this.blocks.tbs.b3.visible = false;
				this.blocks.tbs.b4.visible = false;
				this.blocks.tbs.b5.visible = false;
				this.blocks.tbs.b6.visible = false;
				this.blocks.tbs.b7.visible = false;
				this.blocks.tbs.b8.visible = false;
				this.blocks.tbs.b9.visible = false;
				this.blocks.tbs.b10.visible = false;
				this.blocks.tbs.b11.visible = false;
				this.blocks.tbs.b12.visible = false;
				this.blocks.tbs.b13.visible = false;
				this.blocks.tbs.b14.visible = false;
				this.blocks.tbs.b15.visible = false;
				this.blocks.tbs.b16.visible = false;
				this.blocks.tbs.b17.visible = false;
				this.blocks.tbs.b18.visible = true;
				this.blocks.tbs.b19.visible = true;
				this.blocks.tbs.b20.visible = true;
				
				this.blocks.tbs.b1.barBlock.visible = false;
				this.blocks.tbs.b2.barBlock.visible = false;
				this.blocks.tbs.b3.barBlock.visible = false;
				this.blocks.tbs.b4.barBlock.visible = false;
				this.blocks.tbs.b5.barBlock.visible = false;
				this.blocks.tbs.b6.barBlock.visible = false;
				this.blocks.tbs.b7.barBlock.visible = false;
				this.blocks.tbs.b8.barBlock.visible = false;
				this.blocks.tbs.b9.barBlock.visible = false;
				this.blocks.tbs.b10.barBlock.visible = false;
				this.blocks.tbs.b11.barBlock.visible = false;
				this.blocks.tbs.b12.barBlock.visible = false;
				this.blocks.tbs.b13.barBlock.visible = false;
				this.blocks.tbs.b14.barBlock.visible = false;
				this.blocks.tbs.b15.barBlock.visible = false;
				this.blocks.tbs.b16.barBlock.visible = false;
				this.blocks.tbs.b17.barBlock.visible = false;
				this.blocks.tbs.b18.barBlock.visible = true;
				this.blocks.tbs.b19.barBlock.visible = false;
				this.blocks.tbs.b20.barBlock.visible = false;
			}
			else if (phase == 36) {
				phaseProgress += catMove/fps*timeMult;
				this.cat.x = 335 + Math.min(35, phaseProgress*35);
				this.cat.y = 146;
				this.cat.gotoAndStop(0);
				this.cat.scaleX = 1;
				this.cat.scaleY = 1;
				this.blocks.gotoAndStop(99);
				
				
				if (phaseProgress > 1) {
					phase += 1;
					phaseProgress = 0;
				}
				
				
				this.blocks.tbs.b19.barBlock.bHP.gotoAndStop((blockHP[18].div(blockMHP[18]).times(99).floor()).toNumber());
				
				
				this.blocks.tbs.b1.visible = false;
				this.blocks.tbs.b2.visible = false;
				this.blocks.tbs.b3.visible = false;
				this.blocks.tbs.b4.visible = false;
				this.blocks.tbs.b5.visible = false;
				this.blocks.tbs.b6.visible = false;
				this.blocks.tbs.b7.visible = false;
				this.blocks.tbs.b8.visible = false;
				this.blocks.tbs.b9.visible = false;
				this.blocks.tbs.b10.visible = false;
				this.blocks.tbs.b11.visible = false;
				this.blocks.tbs.b12.visible = false;
				this.blocks.tbs.b13.visible = false;
				this.blocks.tbs.b14.visible = false;
				this.blocks.tbs.b15.visible = false;
				this.blocks.tbs.b16.visible = false;
				this.blocks.tbs.b17.visible = false;
				this.blocks.tbs.b18.visible = false;
				this.blocks.tbs.b19.visible = true;
				this.blocks.tbs.b20.visible = true;
				
				this.blocks.tbs.b1.barBlock.visible = false;
				this.blocks.tbs.b2.barBlock.visible = false;
				this.blocks.tbs.b3.barBlock.visible = false;
				this.blocks.tbs.b4.barBlock.visible = false;
				this.blocks.tbs.b5.barBlock.visible = false;
				this.blocks.tbs.b6.barBlock.visible = false;
				this.blocks.tbs.b7.barBlock.visible = false;
				this.blocks.tbs.b8.barBlock.visible = false;
				this.blocks.tbs.b9.barBlock.visible = false;
				this.blocks.tbs.b10.barBlock.visible = false;
				this.blocks.tbs.b11.barBlock.visible = false;
				this.blocks.tbs.b12.barBlock.visible = false;
				this.blocks.tbs.b13.barBlock.visible = false;
				this.blocks.tbs.b14.barBlock.visible = false;
				this.blocks.tbs.b15.barBlock.visible = false;
				this.blocks.tbs.b16.barBlock.visible = false;
				this.blocks.tbs.b17.barBlock.visible = false;
				this.blocks.tbs.b18.barBlock.visible = false;
				this.blocks.tbs.b19.barBlock.visible = true;
				this.blocks.tbs.b20.barBlock.visible = false;
			}
			else if (phase == 37) {
				this.cat.x = 370;
				this.cat.y = 146;
				this.cat.gotoAndStop(1);
				this.cat.scaleX = 1;
				this.cat.scaleY = 1;
				this.blocks.gotoAndStop(99);
				
				
				this.cat.anim_1.gotoAndStop(Math.floor(catTick/catSpeed*30));
				
				
				if (catTick >= catSpeed/2 && catHit == false) {
					blockHP[18] = blockHP[18].sub(catDMG);
					catHit = true;
				}
				if (catTick >= catSpeed) {
					catTick = 0;
					catHit = false;
				}
				
				if (blockHP[18].lte(0)) {
					phase += 1;
					phaseProgress = 0;
					
					if (stagei == stageMax) {
						stageProg += 1;
					}
					resources[blocks[18]] = resources[blocks[18]].plus(infMult.floor());
					
					var crysRand = Math.random();
					if (crysRand < cChance) {
						crystals = crystals.plus(gemMult);
					}
					
					var x2c = Math.random();
					if (x2c < x2chance) {
						resources[blocks[18]] = resources[blocks[18]].plus(infMult.floor());
					}
				}
				
				
				this.blocks.tbs.b19.barBlock.bHP.gotoAndStop((blockHP[18].div(blockMHP[18]).times(99).floor()).toNumber());
				
				
				this.blocks.tbs.b1.visible = false;
				this.blocks.tbs.b2.visible = false;
				this.blocks.tbs.b3.visible = false;
				this.blocks.tbs.b4.visible = false;
				this.blocks.tbs.b5.visible = false;
				this.blocks.tbs.b6.visible = false;
				this.blocks.tbs.b7.visible = false;
				this.blocks.tbs.b8.visible = false;
				this.blocks.tbs.b9.visible = false;
				this.blocks.tbs.b10.visible = false;
				this.blocks.tbs.b11.visible = false;
				this.blocks.tbs.b12.visible = false;
				this.blocks.tbs.b13.visible = false;
				this.blocks.tbs.b14.visible = false;
				this.blocks.tbs.b15.visible = false;
				this.blocks.tbs.b16.visible = false;
				this.blocks.tbs.b17.visible = false;
				this.blocks.tbs.b18.visible = false;
				this.blocks.tbs.b19.visible = true;
				this.blocks.tbs.b20.visible = true;
				
				this.blocks.tbs.b1.barBlock.visible = false;
				this.blocks.tbs.b2.barBlock.visible = false;
				this.blocks.tbs.b3.barBlock.visible = false;
				this.blocks.tbs.b4.barBlock.visible = false;
				this.blocks.tbs.b5.barBlock.visible = false;
				this.blocks.tbs.b6.barBlock.visible = false;
				this.blocks.tbs.b7.barBlock.visible = false;
				this.blocks.tbs.b8.barBlock.visible = false;
				this.blocks.tbs.b9.barBlock.visible = false;
				this.blocks.tbs.b10.barBlock.visible = false;
				this.blocks.tbs.b11.barBlock.visible = false;
				this.blocks.tbs.b12.barBlock.visible = false;
				this.blocks.tbs.b13.barBlock.visible = false;
				this.blocks.tbs.b14.barBlock.visible = false;
				this.blocks.tbs.b15.barBlock.visible = false;
				this.blocks.tbs.b16.barBlock.visible = false;
				this.blocks.tbs.b17.barBlock.visible = false;
				this.blocks.tbs.b18.barBlock.visible = false;
				this.blocks.tbs.b19.barBlock.visible = true;
				this.blocks.tbs.b20.barBlock.visible = false;
			}
			else if (phase == 38) {
				phaseProgress += catMove/fps*timeMult;
				this.cat.x = 370 + Math.min(35, phaseProgress*35);
				this.cat.y = 146;
				this.cat.gotoAndStop(0);
				this.cat.scaleX = 1;
				this.cat.scaleY = 1;
				this.blocks.gotoAndStop(99);
				
				
				if (phaseProgress > 1) {
					phase += 1;
					phaseProgress = 0;
				}
				
				
				this.blocks.tbs.b20.barBlock.bHP.gotoAndStop((blockHP[19].div(blockMHP[19]).times(99).floor()).toNumber());
				
				
				this.blocks.tbs.b1.visible = false;
				this.blocks.tbs.b2.visible = false;
				this.blocks.tbs.b3.visible = false;
				this.blocks.tbs.b4.visible = false;
				this.blocks.tbs.b5.visible = false;
				this.blocks.tbs.b6.visible = false;
				this.blocks.tbs.b7.visible = false;
				this.blocks.tbs.b8.visible = false;
				this.blocks.tbs.b9.visible = false;
				this.blocks.tbs.b10.visible = false;
				this.blocks.tbs.b11.visible = false;
				this.blocks.tbs.b12.visible = false;
				this.blocks.tbs.b13.visible = false;
				this.blocks.tbs.b14.visible = false;
				this.blocks.tbs.b15.visible = false;
				this.blocks.tbs.b16.visible = false;
				this.blocks.tbs.b17.visible = false;
				this.blocks.tbs.b18.visible = false;
				this.blocks.tbs.b19.visible = false;
				this.blocks.tbs.b20.visible = true;
				
				this.blocks.tbs.b1.barBlock.visible = false;
				this.blocks.tbs.b2.barBlock.visible = false;
				this.blocks.tbs.b3.barBlock.visible = false;
				this.blocks.tbs.b4.barBlock.visible = false;
				this.blocks.tbs.b5.barBlock.visible = false;
				this.blocks.tbs.b6.barBlock.visible = false;
				this.blocks.tbs.b7.barBlock.visible = false;
				this.blocks.tbs.b8.barBlock.visible = false;
				this.blocks.tbs.b9.barBlock.visible = false;
				this.blocks.tbs.b10.barBlock.visible = false;
				this.blocks.tbs.b11.barBlock.visible = false;
				this.blocks.tbs.b12.barBlock.visible = false;
				this.blocks.tbs.b13.barBlock.visible = false;
				this.blocks.tbs.b14.barBlock.visible = false;
				this.blocks.tbs.b15.barBlock.visible = false;
				this.blocks.tbs.b16.barBlock.visible = false;
				this.blocks.tbs.b17.barBlock.visible = false;
				this.blocks.tbs.b18.barBlock.visible = false;
				this.blocks.tbs.b19.barBlock.visible = false;
				this.blocks.tbs.b20.barBlock.visible = true;
			}
			else if (phase == 39) {
				this.cat.x = 405;
				this.cat.y = 146;
				this.cat.gotoAndStop(1);
				this.cat.scaleX = 1;
				this.cat.scaleY = 1;
				this.blocks.gotoAndStop(99);
				
				
				this.cat.anim_1.gotoAndStop(Math.floor(catTick/catSpeed*30));
				
				
				if (catTick >= catSpeed/2 && catHit == false) {
					blockHP[19] = blockHP[19].sub(catDMG);
					catHit = true;
				}
				if (catTick >= catSpeed) {
					catTick = 0;
					catHit = false;
				}
				
				if (blockHP[19].lte(0)) {
					phase += 1;
					phaseProgress = 0;
					
					if (stagei == stageMax) {
						stageProg += 1;
					}
					resources[blocks[19]] = resources[blocks[19]].plus(infMult.floor());
					
					var crysRand = Math.random();
					if (crysRand < cChance) {
						crystals = crystals.plus(gemMult);
					}
					
					var x2c = Math.random();
					if (x2c < x2chance) {
						resources[blocks[19]] = resources[blocks[19]].plus(infMult.floor());
					}
				}
				
				
				this.blocks.tbs.b20.barBlock.bHP.gotoAndStop((blockHP[19].div(blockMHP[19]).times(99).floor()).toNumber());
				
				
				this.blocks.tbs.b1.visible = false;
				this.blocks.tbs.b2.visible = false;
				this.blocks.tbs.b3.visible = false;
				this.blocks.tbs.b4.visible = false;
				this.blocks.tbs.b5.visible = false;
				this.blocks.tbs.b6.visible = false;
				this.blocks.tbs.b7.visible = false;
				this.blocks.tbs.b8.visible = false;
				this.blocks.tbs.b9.visible = false;
				this.blocks.tbs.b10.visible = false;
				this.blocks.tbs.b11.visible = false;
				this.blocks.tbs.b12.visible = false;
				this.blocks.tbs.b13.visible = false;
				this.blocks.tbs.b14.visible = false;
				this.blocks.tbs.b15.visible = false;
				this.blocks.tbs.b16.visible = false;
				this.blocks.tbs.b17.visible = false;
				this.blocks.tbs.b18.visible = false;
				this.blocks.tbs.b19.visible = false;
				this.blocks.tbs.b20.visible = true;
				
				this.blocks.tbs.b1.barBlock.visible = false;
				this.blocks.tbs.b2.barBlock.visible = false;
				this.blocks.tbs.b3.barBlock.visible = false;
				this.blocks.tbs.b4.barBlock.visible = false;
				this.blocks.tbs.b5.barBlock.visible = false;
				this.blocks.tbs.b6.barBlock.visible = false;
				this.blocks.tbs.b7.barBlock.visible = false;
				this.blocks.tbs.b8.barBlock.visible = false;
				this.blocks.tbs.b9.barBlock.visible = false;
				this.blocks.tbs.b10.barBlock.visible = false;
				this.blocks.tbs.b11.barBlock.visible = false;
				this.blocks.tbs.b12.barBlock.visible = false;
				this.blocks.tbs.b13.barBlock.visible = false;
				this.blocks.tbs.b14.barBlock.visible = false;
				this.blocks.tbs.b15.barBlock.visible = false;
				this.blocks.tbs.b16.barBlock.visible = false;
				this.blocks.tbs.b17.barBlock.visible = false;
				this.blocks.tbs.b18.barBlock.visible = false;
				this.blocks.tbs.b19.barBlock.visible = false;
				this.blocks.tbs.b20.barBlock.visible = true;
			}
			else if (phase == 40) {
				
				
				for (var i = 0 ; i < 100 ; ++i) {
					blocks[i] = blocks[i+20];
				}
				
				for (var i = 101 ; i < 120 ; ++i) {
					blocks[i] = retBlock();
				}
				
				
				for (var i = 0 ; i < 120 ; ++i) {
					if (stagei < 120) {
						infMult = nd(1);
					}
					else {
						infMult = nd(1.1487).pow(stagei - 119);
					}
					blockMHP[i] = blockHPset(blocks[i]).times(infMult);
					if (blockHP[i].gt(blockMHP[i])) {
						blockHP[i] = blockMHP[i];
					}
				}
				
				for (var i = 0 ; i < 120 ; ++i) {
					blockHP[i] = blockMHP[i];
				}
				
				phase = 0;
				phaseProgress = 0;
				
			}
			
			
			
			this.blocks.tbs.b1.breaking.gotoAndStop(7 - (blockHP[0].div(blockMHP[0]).times(7.99).floor()).toNumber());
			this.blocks.tbs.b2.breaking.gotoAndStop(7 - (blockHP[1].div(blockMHP[1]).times(7.99).floor()).toNumber());
			this.blocks.tbs.b3.breaking.gotoAndStop(7 - (blockHP[2].div(blockMHP[2]).times(7.99).floor()).toNumber());
			this.blocks.tbs.b4.breaking.gotoAndStop(7 - (blockHP[3].div(blockMHP[3]).times(7.99).floor()).toNumber());
			this.blocks.tbs.b5.breaking.gotoAndStop(7 - (blockHP[4].div(blockMHP[4]).times(7.99).floor()).toNumber());
			this.blocks.tbs.b6.breaking.gotoAndStop(7 - (blockHP[5].div(blockMHP[5]).times(7.99).floor()).toNumber());
			this.blocks.tbs.b7.breaking.gotoAndStop(7 - (blockHP[6].div(blockMHP[6]).times(7.99).floor()).toNumber());
			this.blocks.tbs.b8.breaking.gotoAndStop(7 - (blockHP[7].div(blockMHP[7]).times(7.99).floor()).toNumber());
			this.blocks.tbs.b9.breaking.gotoAndStop(7 - (blockHP[8].div(blockMHP[8]).times(7.99).floor()).toNumber());
			this.blocks.tbs.b10.breaking.gotoAndStop(7 - (blockHP[9].div(blockMHP[9]).times(7.99).floor()).toNumber());
			this.blocks.tbs.b11.breaking.gotoAndStop(7 - (blockHP[10].div(blockMHP[10]).times(7.99).floor()).toNumber());
			this.blocks.tbs.b12.breaking.gotoAndStop(7 - (blockHP[11].div(blockMHP[11]).times(7.99).floor()).toNumber());
			this.blocks.tbs.b13.breaking.gotoAndStop(7 - (blockHP[12].div(blockMHP[12]).times(7.99).floor()).toNumber());
			this.blocks.tbs.b14.breaking.gotoAndStop(7 - (blockHP[13].div(blockMHP[13]).times(7.99).floor()).toNumber());
			this.blocks.tbs.b15.breaking.gotoAndStop(7 - (blockHP[14].div(blockMHP[14]).times(7.99).floor()).toNumber());
			this.blocks.tbs.b16.breaking.gotoAndStop(7 - (blockHP[15].div(blockMHP[15]).times(7.99).floor()).toNumber());
			this.blocks.tbs.b17.breaking.gotoAndStop(7 - (blockHP[16].div(blockMHP[16]).times(7.99).floor()).toNumber());
			this.blocks.tbs.b18.breaking.gotoAndStop(7 - (blockHP[17].div(blockMHP[17]).times(7.99).floor()).toNumber());
			this.blocks.tbs.b19.breaking.gotoAndStop(7 - (blockHP[18].div(blockMHP[18]).times(7.99).floor()).toNumber());
			this.blocks.tbs.b20.breaking.gotoAndStop(7 - (blockHP[19].div(blockMHP[19]).times(7.99).floor()).toNumber());
			
			
			//const
			
			this.blocks.tbs.b21.breaking.gotoAndStop(7 - (blockHP[20].div(blockMHP[20]).times(7.99).floor()).toNumber());
			this.blocks.tbs.b22.breaking.gotoAndStop(7 - (blockHP[21].div(blockMHP[21]).times(7.99).floor()).toNumber());
			this.blocks.tbs.b23.breaking.gotoAndStop(7 - (blockHP[22].div(blockMHP[22]).times(7.99).floor()).toNumber());
			this.blocks.tbs.b24.breaking.gotoAndStop(7 - (blockHP[23].div(blockMHP[23]).times(7.99).floor()).toNumber());
			this.blocks.tbs.b25.breaking.gotoAndStop(7 - (blockHP[24].div(blockMHP[24]).times(7.99).floor()).toNumber());
			this.blocks.tbs.b26.breaking.gotoAndStop(7 - (blockHP[25].div(blockMHP[25]).times(7.99).floor()).toNumber());
			this.blocks.tbs.b27.breaking.gotoAndStop(7 - (blockHP[26].div(blockMHP[26]).times(7.99).floor()).toNumber());
			this.blocks.tbs.b28.breaking.gotoAndStop(7 - (blockHP[27].div(blockMHP[27]).times(7.99).floor()).toNumber());
			this.blocks.tbs.b29.breaking.gotoAndStop(7 - (blockHP[28].div(blockMHP[28]).times(7.99).floor()).toNumber());
			this.blocks.tbs.b30.breaking.gotoAndStop(7 - (blockHP[29].div(blockMHP[29]).times(7.99).floor()).toNumber());
			this.blocks.tbs.b31.breaking.gotoAndStop(7 - (blockHP[30].div(blockMHP[30]).times(7.99).floor()).toNumber());
			this.blocks.tbs.b32.breaking.gotoAndStop(7 - (blockHP[31].div(blockMHP[31]).times(7.99).floor()).toNumber());
			this.blocks.tbs.b33.breaking.gotoAndStop(7 - (blockHP[32].div(blockMHP[32]).times(7.99).floor()).toNumber());
			this.blocks.tbs.b34.breaking.gotoAndStop(7 - (blockHP[33].div(blockMHP[33]).times(7.99).floor()).toNumber());
			this.blocks.tbs.b35.breaking.gotoAndStop(7 - (blockHP[34].div(blockMHP[34]).times(7.99).floor()).toNumber());
			this.blocks.tbs.b36.breaking.gotoAndStop(7 - (blockHP[35].div(blockMHP[35]).times(7.99).floor()).toNumber());
			this.blocks.tbs.b37.breaking.gotoAndStop(7 - (blockHP[36].div(blockMHP[36]).times(7.99).floor()).toNumber());
			this.blocks.tbs.b38.breaking.gotoAndStop(7 - (blockHP[37].div(blockMHP[37]).times(7.99).floor()).toNumber());
			this.blocks.tbs.b39.breaking.gotoAndStop(7 - (blockHP[38].div(blockMHP[38]).times(7.99).floor()).toNumber());
			this.blocks.tbs.b40.breaking.gotoAndStop(7 - (blockHP[39].div(blockMHP[39]).times(7.99).floor()).toNumber());
			
			this.blocks.tbs.b41.breaking.gotoAndStop(7 - (blockHP[40].div(blockMHP[40]).times(7.99).floor()).toNumber());
			this.blocks.tbs.b42.breaking.gotoAndStop(7 - (blockHP[41].div(blockMHP[41]).times(7.99).floor()).toNumber());
			this.blocks.tbs.b43.breaking.gotoAndStop(7 - (blockHP[42].div(blockMHP[42]).times(7.99).floor()).toNumber());
			this.blocks.tbs.b44.breaking.gotoAndStop(7 - (blockHP[43].div(blockMHP[43]).times(7.99).floor()).toNumber());
			this.blocks.tbs.b45.breaking.gotoAndStop(7 - (blockHP[44].div(blockMHP[44]).times(7.99).floor()).toNumber());
			this.blocks.tbs.b46.breaking.gotoAndStop(7 - (blockHP[45].div(blockMHP[45]).times(7.99).floor()).toNumber());
			this.blocks.tbs.b47.breaking.gotoAndStop(7 - (blockHP[46].div(blockMHP[46]).times(7.99).floor()).toNumber());
			this.blocks.tbs.b48.breaking.gotoAndStop(7 - (blockHP[47].div(blockMHP[47]).times(7.99).floor()).toNumber());
			this.blocks.tbs.b49.breaking.gotoAndStop(7 - (blockHP[48].div(blockMHP[48]).times(7.99).floor()).toNumber());
			this.blocks.tbs.b50.breaking.gotoAndStop(7 - (blockHP[49].div(blockMHP[49]).times(7.99).floor()).toNumber());
			this.blocks.tbs.b51.breaking.gotoAndStop(7 - (blockHP[50].div(blockMHP[50]).times(7.99).floor()).toNumber());
			this.blocks.tbs.b52.breaking.gotoAndStop(7 - (blockHP[51].div(blockMHP[51]).times(7.99).floor()).toNumber());
			this.blocks.tbs.b53.breaking.gotoAndStop(7 - (blockHP[52].div(blockMHP[52]).times(7.99).floor()).toNumber());
			this.blocks.tbs.b54.breaking.gotoAndStop(7 - (blockHP[53].div(blockMHP[53]).times(7.99).floor()).toNumber());
			this.blocks.tbs.b55.breaking.gotoAndStop(7 - (blockHP[54].div(blockMHP[54]).times(7.99).floor()).toNumber());
			this.blocks.tbs.b56.breaking.gotoAndStop(7 - (blockHP[55].div(blockMHP[55]).times(7.99).floor()).toNumber());
			this.blocks.tbs.b57.breaking.gotoAndStop(7 - (blockHP[56].div(blockMHP[56]).times(7.99).floor()).toNumber());
			this.blocks.tbs.b58.breaking.gotoAndStop(7 - (blockHP[57].div(blockMHP[57]).times(7.99).floor()).toNumber());
			this.blocks.tbs.b59.breaking.gotoAndStop(7 - (blockHP[58].div(blockMHP[58]).times(7.99).floor()).toNumber());
			this.blocks.tbs.b60.breaking.gotoAndStop(7 - (blockHP[59].div(blockMHP[59]).times(7.99).floor()).toNumber());
			
			this.blocks.tbs.b61.breaking.gotoAndStop(7 - (blockHP[60].div(blockMHP[60]).times(7.99).floor()).toNumber());
			this.blocks.tbs.b62.breaking.gotoAndStop(7 - (blockHP[61].div(blockMHP[61]).times(7.99).floor()).toNumber());
			this.blocks.tbs.b63.breaking.gotoAndStop(7 - (blockHP[62].div(blockMHP[62]).times(7.99).floor()).toNumber());
			this.blocks.tbs.b64.breaking.gotoAndStop(7 - (blockHP[63].div(blockMHP[63]).times(7.99).floor()).toNumber());
			this.blocks.tbs.b65.breaking.gotoAndStop(7 - (blockHP[64].div(blockMHP[64]).times(7.99).floor()).toNumber());
			this.blocks.tbs.b66.breaking.gotoAndStop(7 - (blockHP[65].div(blockMHP[65]).times(7.99).floor()).toNumber());
			this.blocks.tbs.b67.breaking.gotoAndStop(7 - (blockHP[66].div(blockMHP[66]).times(7.99).floor()).toNumber());
			this.blocks.tbs.b68.breaking.gotoAndStop(7 - (blockHP[67].div(blockMHP[67]).times(7.99).floor()).toNumber());
			this.blocks.tbs.b69.breaking.gotoAndStop(7 - (blockHP[68].div(blockMHP[68]).times(7.99).floor()).toNumber());
			this.blocks.tbs.b70.breaking.gotoAndStop(7 - (blockHP[69].div(blockMHP[69]).times(7.99).floor()).toNumber());
			this.blocks.tbs.b71.breaking.gotoAndStop(7 - (blockHP[70].div(blockMHP[70]).times(7.99).floor()).toNumber());
			this.blocks.tbs.b72.breaking.gotoAndStop(7 - (blockHP[71].div(blockMHP[71]).times(7.99).floor()).toNumber());
			this.blocks.tbs.b73.breaking.gotoAndStop(7 - (blockHP[72].div(blockMHP[72]).times(7.99).floor()).toNumber());
			this.blocks.tbs.b74.breaking.gotoAndStop(7 - (blockHP[73].div(blockMHP[73]).times(7.99).floor()).toNumber());
			this.blocks.tbs.b75.breaking.gotoAndStop(7 - (blockHP[74].div(blockMHP[74]).times(7.99).floor()).toNumber());
			this.blocks.tbs.b76.breaking.gotoAndStop(7 - (blockHP[75].div(blockMHP[75]).times(7.99).floor()).toNumber());
			this.blocks.tbs.b77.breaking.gotoAndStop(7 - (blockHP[76].div(blockMHP[76]).times(7.99).floor()).toNumber());
			this.blocks.tbs.b78.breaking.gotoAndStop(7 - (blockHP[77].div(blockMHP[77]).times(7.99).floor()).toNumber());
			this.blocks.tbs.b79.breaking.gotoAndStop(7 - (blockHP[78].div(blockMHP[78]).times(7.99).floor()).toNumber());
			this.blocks.tbs.b80.breaking.gotoAndStop(7 - (blockHP[79].div(blockMHP[79]).times(7.99).floor()).toNumber());
			
			this.blocks.tbs.b81.breaking.gotoAndStop(7 - (blockHP[80].div(blockMHP[80]).times(7.99).floor()).toNumber());
			this.blocks.tbs.b82.breaking.gotoAndStop(7 - (blockHP[81].div(blockMHP[81]).times(7.99).floor()).toNumber());
			this.blocks.tbs.b83.breaking.gotoAndStop(7 - (blockHP[82].div(blockMHP[82]).times(7.99).floor()).toNumber());
			this.blocks.tbs.b84.breaking.gotoAndStop(7 - (blockHP[83].div(blockMHP[83]).times(7.99).floor()).toNumber());
			this.blocks.tbs.b85.breaking.gotoAndStop(7 - (blockHP[84].div(blockMHP[84]).times(7.99).floor()).toNumber());
			this.blocks.tbs.b86.breaking.gotoAndStop(7 - (blockHP[85].div(blockMHP[85]).times(7.99).floor()).toNumber());
			this.blocks.tbs.b87.breaking.gotoAndStop(7 - (blockHP[86].div(blockMHP[86]).times(7.99).floor()).toNumber());
			this.blocks.tbs.b88.breaking.gotoAndStop(7 - (blockHP[87].div(blockMHP[87]).times(7.99).floor()).toNumber());
			this.blocks.tbs.b89.breaking.gotoAndStop(7 - (blockHP[88].div(blockMHP[88]).times(7.99).floor()).toNumber());
			this.blocks.tbs.b90.breaking.gotoAndStop(7 - (blockHP[89].div(blockMHP[89]).times(7.99).floor()).toNumber());
			this.blocks.tbs.b91.breaking.gotoAndStop(7 - (blockHP[90].div(blockMHP[90]).times(7.99).floor()).toNumber());
			this.blocks.tbs.b92.breaking.gotoAndStop(7 - (blockHP[91].div(blockMHP[91]).times(7.99).floor()).toNumber());
			this.blocks.tbs.b93.breaking.gotoAndStop(7 - (blockHP[92].div(blockMHP[92]).times(7.99).floor()).toNumber());
			this.blocks.tbs.b94.breaking.gotoAndStop(7 - (blockHP[93].div(blockMHP[93]).times(7.99).floor()).toNumber());
			this.blocks.tbs.b95.breaking.gotoAndStop(7 - (blockHP[94].div(blockMHP[94]).times(7.99).floor()).toNumber());
			this.blocks.tbs.b96.breaking.gotoAndStop(7 - (blockHP[95].div(blockMHP[95]).times(7.99).floor()).toNumber());
			this.blocks.tbs.b97.breaking.gotoAndStop(7 - (blockHP[96].div(blockMHP[96]).times(7.99).floor()).toNumber());
			this.blocks.tbs.b98.breaking.gotoAndStop(7 - (blockHP[97].div(blockMHP[97]).times(7.99).floor()).toNumber());
			this.blocks.tbs.b99.breaking.gotoAndStop(7 - (blockHP[98].div(blockMHP[98]).times(7.99).floor()).toNumber());
			this.blocks.tbs.b100.breaking.gotoAndStop(7 - (blockHP[99].div(blockMHP[99]).times(7.99).floor()).toNumber());
			
			this.blocks.tbs.b101.breaking.gotoAndStop(7 - (blockHP[100].div(blockMHP[100]).times(7.99).floor()).toNumber());
			this.blocks.tbs.b102.breaking.gotoAndStop(7 - (blockHP[101].div(blockMHP[101]).times(7.99).floor()).toNumber());
			this.blocks.tbs.b103.breaking.gotoAndStop(7 - (blockHP[102].div(blockMHP[102]).times(7.99).floor()).toNumber());
			this.blocks.tbs.b104.breaking.gotoAndStop(7 - (blockHP[103].div(blockMHP[103]).times(7.99).floor()).toNumber());
			this.blocks.tbs.b105.breaking.gotoAndStop(7 - (blockHP[104].div(blockMHP[104]).times(7.99).floor()).toNumber());
			this.blocks.tbs.b106.breaking.gotoAndStop(7 - (blockHP[105].div(blockMHP[105]).times(7.99).floor()).toNumber());
			this.blocks.tbs.b107.breaking.gotoAndStop(7 - (blockHP[106].div(blockMHP[106]).times(7.99).floor()).toNumber());
			this.blocks.tbs.b108.breaking.gotoAndStop(7 - (blockHP[107].div(blockMHP[107]).times(7.99).floor()).toNumber());
			this.blocks.tbs.b109.breaking.gotoAndStop(7 - (blockHP[108].div(blockMHP[108]).times(7.99).floor()).toNumber());
			this.blocks.tbs.b110.breaking.gotoAndStop(7 - (blockHP[109].div(blockMHP[109]).times(7.99).floor()).toNumber());
			this.blocks.tbs.b111.breaking.gotoAndStop(7 - (blockHP[110].div(blockMHP[110]).times(7.99).floor()).toNumber());
			this.blocks.tbs.b112.breaking.gotoAndStop(7 - (blockHP[111].div(blockMHP[111]).times(7.99).floor()).toNumber());
			this.blocks.tbs.b113.breaking.gotoAndStop(7 - (blockHP[112].div(blockMHP[112]).times(7.99).floor()).toNumber());
			this.blocks.tbs.b114.breaking.gotoAndStop(7 - (blockHP[113].div(blockMHP[113]).times(7.99).floor()).toNumber());
			this.blocks.tbs.b115.breaking.gotoAndStop(7 - (blockHP[114].div(blockMHP[114]).times(7.99).floor()).toNumber());
			this.blocks.tbs.b116.breaking.gotoAndStop(7 - (blockHP[115].div(blockMHP[115]).times(7.99).floor()).toNumber());
			this.blocks.tbs.b117.breaking.gotoAndStop(7 - (blockHP[116].div(blockMHP[116]).times(7.99).floor()).toNumber());
			this.blocks.tbs.b118.breaking.gotoAndStop(7 - (blockHP[117].div(blockMHP[117]).times(7.99).floor()).toNumber());
			this.blocks.tbs.b119.breaking.gotoAndStop(7 - (blockHP[118].div(blockMHP[118]).times(7.99).floor()).toNumber());
			this.blocks.tbs.b120.breaking.gotoAndStop(7 - (blockHP[119].div(blockMHP[119]).times(7.99).floor()).toNumber());
			
			
			if (phase != 40 && phase != 0) {
				bGotoStop();
			}
			
			
			for (var i = 0 ; i < 120 ; ++i) {
				if (stagei < 120) {
					infMult = nd(1);
				}
				else {
					infMult = nd(1.1487).pow(stagei - 119);
				}
				blockMHP[i] = blockHPset(blocks[i]).times(infMult);
				if (blockHP[i].gt(blockMHP[i])) {
					blockHP[i] = blockMHP[i];
				}
			}
			
		}
		
		
		function bGotoStop() {
			
			this.exportRoot.blocks.tbs.b1.bType.gotoAndStop(blocks[0]);
			this.exportRoot.blocks.tbs.b2.bType.gotoAndStop(blocks[1]);
			this.exportRoot.blocks.tbs.b3.bType.gotoAndStop(blocks[2]);
			this.exportRoot.blocks.tbs.b4.bType.gotoAndStop(blocks[3]);
			this.exportRoot.blocks.tbs.b5.bType.gotoAndStop(blocks[4]);
			this.exportRoot.blocks.tbs.b6.bType.gotoAndStop(blocks[5]);
			this.exportRoot.blocks.tbs.b7.bType.gotoAndStop(blocks[6]);
			this.exportRoot.blocks.tbs.b8.bType.gotoAndStop(blocks[7]);
			this.exportRoot.blocks.tbs.b9.bType.gotoAndStop(blocks[8]);
			this.exportRoot.blocks.tbs.b10.bType.gotoAndStop(blocks[9]);
			this.exportRoot.blocks.tbs.b11.bType.gotoAndStop(blocks[10]);
			this.exportRoot.blocks.tbs.b12.bType.gotoAndStop(blocks[11]);
			this.exportRoot.blocks.tbs.b13.bType.gotoAndStop(blocks[12]);
			this.exportRoot.blocks.tbs.b14.bType.gotoAndStop(blocks[13]);
			this.exportRoot.blocks.tbs.b15.bType.gotoAndStop(blocks[14]);
			this.exportRoot.blocks.tbs.b16.bType.gotoAndStop(blocks[15]);
			this.exportRoot.blocks.tbs.b17.bType.gotoAndStop(blocks[16]);
			this.exportRoot.blocks.tbs.b18.bType.gotoAndStop(blocks[17]);
			this.exportRoot.blocks.tbs.b19.bType.gotoAndStop(blocks[18]);
			this.exportRoot.blocks.tbs.b20.bType.gotoAndStop(blocks[19]);
			this.exportRoot.blocks.tbs.b21.bType.gotoAndStop(blocks[20]);
			this.exportRoot.blocks.tbs.b22.bType.gotoAndStop(blocks[21]);
			this.exportRoot.blocks.tbs.b23.bType.gotoAndStop(blocks[22]);
			this.exportRoot.blocks.tbs.b24.bType.gotoAndStop(blocks[23]);
			this.exportRoot.blocks.tbs.b25.bType.gotoAndStop(blocks[24]);
			this.exportRoot.blocks.tbs.b26.bType.gotoAndStop(blocks[25]);
			this.exportRoot.blocks.tbs.b27.bType.gotoAndStop(blocks[26]);
			this.exportRoot.blocks.tbs.b28.bType.gotoAndStop(blocks[27]);
			this.exportRoot.blocks.tbs.b29.bType.gotoAndStop(blocks[28]);
			this.exportRoot.blocks.tbs.b30.bType.gotoAndStop(blocks[29]);
			this.exportRoot.blocks.tbs.b31.bType.gotoAndStop(blocks[30]);
			this.exportRoot.blocks.tbs.b32.bType.gotoAndStop(blocks[31]);
			this.exportRoot.blocks.tbs.b33.bType.gotoAndStop(blocks[32]);
			this.exportRoot.blocks.tbs.b34.bType.gotoAndStop(blocks[33]);
			this.exportRoot.blocks.tbs.b35.bType.gotoAndStop(blocks[34]);
			this.exportRoot.blocks.tbs.b36.bType.gotoAndStop(blocks[35]);
			this.exportRoot.blocks.tbs.b37.bType.gotoAndStop(blocks[36]);
			this.exportRoot.blocks.tbs.b38.bType.gotoAndStop(blocks[37]);
			this.exportRoot.blocks.tbs.b39.bType.gotoAndStop(blocks[38]);
			this.exportRoot.blocks.tbs.b40.bType.gotoAndStop(blocks[39]);
			this.exportRoot.blocks.tbs.b41.bType.gotoAndStop(blocks[40]);
			this.exportRoot.blocks.tbs.b42.bType.gotoAndStop(blocks[41]);
			this.exportRoot.blocks.tbs.b43.bType.gotoAndStop(blocks[42]);
			this.exportRoot.blocks.tbs.b44.bType.gotoAndStop(blocks[43]);
			this.exportRoot.blocks.tbs.b45.bType.gotoAndStop(blocks[44]);
			this.exportRoot.blocks.tbs.b46.bType.gotoAndStop(blocks[45]);
			this.exportRoot.blocks.tbs.b47.bType.gotoAndStop(blocks[46]);
			this.exportRoot.blocks.tbs.b48.bType.gotoAndStop(blocks[47]);
			this.exportRoot.blocks.tbs.b49.bType.gotoAndStop(blocks[48]);
			this.exportRoot.blocks.tbs.b50.bType.gotoAndStop(blocks[49]);
			this.exportRoot.blocks.tbs.b51.bType.gotoAndStop(blocks[50]);
			this.exportRoot.blocks.tbs.b52.bType.gotoAndStop(blocks[51]);
			this.exportRoot.blocks.tbs.b53.bType.gotoAndStop(blocks[52]);
			this.exportRoot.blocks.tbs.b54.bType.gotoAndStop(blocks[53]);
			this.exportRoot.blocks.tbs.b55.bType.gotoAndStop(blocks[54]);
			this.exportRoot.blocks.tbs.b56.bType.gotoAndStop(blocks[55]);
			this.exportRoot.blocks.tbs.b57.bType.gotoAndStop(blocks[56]);
			this.exportRoot.blocks.tbs.b58.bType.gotoAndStop(blocks[57]);
			this.exportRoot.blocks.tbs.b59.bType.gotoAndStop(blocks[58]);
			this.exportRoot.blocks.tbs.b60.bType.gotoAndStop(blocks[59]);
			this.exportRoot.blocks.tbs.b61.bType.gotoAndStop(blocks[60]);
			this.exportRoot.blocks.tbs.b62.bType.gotoAndStop(blocks[61]);
			this.exportRoot.blocks.tbs.b63.bType.gotoAndStop(blocks[62]);
			this.exportRoot.blocks.tbs.b64.bType.gotoAndStop(blocks[63]);
			this.exportRoot.blocks.tbs.b65.bType.gotoAndStop(blocks[64]);
			this.exportRoot.blocks.tbs.b66.bType.gotoAndStop(blocks[65]);
			this.exportRoot.blocks.tbs.b67.bType.gotoAndStop(blocks[66]);
			this.exportRoot.blocks.tbs.b68.bType.gotoAndStop(blocks[67]);
			this.exportRoot.blocks.tbs.b69.bType.gotoAndStop(blocks[68]);
			this.exportRoot.blocks.tbs.b70.bType.gotoAndStop(blocks[69]);
			this.exportRoot.blocks.tbs.b71.bType.gotoAndStop(blocks[70]);
			this.exportRoot.blocks.tbs.b72.bType.gotoAndStop(blocks[71]);
			this.exportRoot.blocks.tbs.b73.bType.gotoAndStop(blocks[72]);
			this.exportRoot.blocks.tbs.b74.bType.gotoAndStop(blocks[73]);
			this.exportRoot.blocks.tbs.b75.bType.gotoAndStop(blocks[74]);
			this.exportRoot.blocks.tbs.b76.bType.gotoAndStop(blocks[75]);
			this.exportRoot.blocks.tbs.b77.bType.gotoAndStop(blocks[76]);
			this.exportRoot.blocks.tbs.b78.bType.gotoAndStop(blocks[77]);
			this.exportRoot.blocks.tbs.b79.bType.gotoAndStop(blocks[78]);
			this.exportRoot.blocks.tbs.b80.bType.gotoAndStop(blocks[79]);
			this.exportRoot.blocks.tbs.b81.bType.gotoAndStop(blocks[80]);
			this.exportRoot.blocks.tbs.b82.bType.gotoAndStop(blocks[81]);
			this.exportRoot.blocks.tbs.b83.bType.gotoAndStop(blocks[82]);
			this.exportRoot.blocks.tbs.b84.bType.gotoAndStop(blocks[83]);
			this.exportRoot.blocks.tbs.b85.bType.gotoAndStop(blocks[84]);
			this.exportRoot.blocks.tbs.b86.bType.gotoAndStop(blocks[85]);
			this.exportRoot.blocks.tbs.b87.bType.gotoAndStop(blocks[86]);
			this.exportRoot.blocks.tbs.b88.bType.gotoAndStop(blocks[87]);
			this.exportRoot.blocks.tbs.b89.bType.gotoAndStop(blocks[88]);
			this.exportRoot.blocks.tbs.b90.bType.gotoAndStop(blocks[89]);
			this.exportRoot.blocks.tbs.b91.bType.gotoAndStop(blocks[90]);
			this.exportRoot.blocks.tbs.b92.bType.gotoAndStop(blocks[91]);
			this.exportRoot.blocks.tbs.b93.bType.gotoAndStop(blocks[92]);
			this.exportRoot.blocks.tbs.b94.bType.gotoAndStop(blocks[93]);
			this.exportRoot.blocks.tbs.b95.bType.gotoAndStop(blocks[94]);
			this.exportRoot.blocks.tbs.b96.bType.gotoAndStop(blocks[95]);
			this.exportRoot.blocks.tbs.b97.bType.gotoAndStop(blocks[96]);
			this.exportRoot.blocks.tbs.b98.bType.gotoAndStop(blocks[97]);
			this.exportRoot.blocks.tbs.b99.bType.gotoAndStop(blocks[98]);
			this.exportRoot.blocks.tbs.b100.bType.gotoAndStop(blocks[99]);
			this.exportRoot.blocks.tbs.b101.bType.gotoAndStop(blocks[100]);
			this.exportRoot.blocks.tbs.b102.bType.gotoAndStop(blocks[101]);
			this.exportRoot.blocks.tbs.b103.bType.gotoAndStop(blocks[102]);
			this.exportRoot.blocks.tbs.b104.bType.gotoAndStop(blocks[103]);
			this.exportRoot.blocks.tbs.b105.bType.gotoAndStop(blocks[104]);
			this.exportRoot.blocks.tbs.b106.bType.gotoAndStop(blocks[105]);
			this.exportRoot.blocks.tbs.b107.bType.gotoAndStop(blocks[106]);
			this.exportRoot.blocks.tbs.b108.bType.gotoAndStop(blocks[107]);
			this.exportRoot.blocks.tbs.b109.bType.gotoAndStop(blocks[108]);
			this.exportRoot.blocks.tbs.b110.bType.gotoAndStop(blocks[109]);
			this.exportRoot.blocks.tbs.b111.bType.gotoAndStop(blocks[110]);
			this.exportRoot.blocks.tbs.b112.bType.gotoAndStop(blocks[111]);
			this.exportRoot.blocks.tbs.b113.bType.gotoAndStop(blocks[112]);
			this.exportRoot.blocks.tbs.b114.bType.gotoAndStop(blocks[113]);
			this.exportRoot.blocks.tbs.b115.bType.gotoAndStop(blocks[114]);
			this.exportRoot.blocks.tbs.b116.bType.gotoAndStop(blocks[115]);
			this.exportRoot.blocks.tbs.b117.bType.gotoAndStop(blocks[116]);
			this.exportRoot.blocks.tbs.b118.bType.gotoAndStop(blocks[117]);
			this.exportRoot.blocks.tbs.b119.bType.gotoAndStop(blocks[118]);
			this.exportRoot.blocks.tbs.b120.bType.gotoAndStop(blocks[119]);
			
			wentStop = 1;
		}
		
		
		
		this.addEventListener("tick", main2.bind(this));
		function main2() {
			setChances();
			
			
			costs[0] = nd(1);
			costs[1] = nd(3);
			costs[2] = nd(10);
			costs[3] = nd(30);
			costs[4] = nd(100);
			costs[5] = nd(400);
			costs[6] = nd(1500);
			costs[7] = nd(5000);
			costs[8] = nd(20000);
			costs[9] = nd(80000);
			costs[10] = nd(320000);
			costs[11] = nd(1300000);
			costs[12] = nd(5000000);
			costs[13] = nd(20000000);
			costs[14] = nd(100000000);
			costs[15] = nd(500000000);
			costs[16] = nd(2e9);
			costs[17] = nd(8e9);
			costs[18] = nd(3.2e10);
			costs[19] = nd(1.3e11);
			costs[20] = nd(4e11);
			costs[21] = nd(2e12);
			costs[22] = nd(8e12);
			costs[23] = nd(3e13);
			costs[24] = nd(1e14);
			
			
			baseDMG[0] = nd(1.34);
			baseDMG[1] = nd(2);
			baseDMG[2] = nd(5);
			baseDMG[3] = nd(16);
			baseDMG[4] = nd(50);
			baseDMG[5] = nd(200);
			baseDMG[6] = nd(750);
			baseDMG[7] = nd(3000);
			baseDMG[8] = nd(12500);
			baseDMG[9] = nd(50000);
			baseDMG[10] = nd(200000);
			baseDMG[11] = nd(800000);
			baseDMG[12] = nd(3200000);
			baseDMG[13] = nd(13000000);
			baseDMG[14] = nd(50000000);
			baseDMG[15] = nd(180000000);
			baseDMG[16] = nd(700000000);
			baseDMG[17] = nd(2.5e9);
			baseDMG[18] = nd(1e10);
			baseDMG[19] = nd(3e10);
			baseDMG[20] = nd(1e11);
			baseDMG[21] = nd(4e11);
			baseDMG[22] = nd(1.5e12);
			baseDMG[23] = nd(5e12);
			baseDMG[24] = nd(2e13);
			
			this.sellP1.part.text = "1";
			this.sellP2.part.text = "10%";
			this.sellP3.part.text = "50%";
			this.sellP4.part.text = "全部";
			
			if (sellPart == 1) {
				this.sellP1.gotoAndStop(1);
				this.sellP2.gotoAndStop(0);
				this.sellP3.gotoAndStop(0);
				this.sellP4.gotoAndStop(0);
			}
			else if (sellPart == 2) {
				this.sellP1.gotoAndStop(0);
				this.sellP2.gotoAndStop(1);
				this.sellP3.gotoAndStop(0);
				this.sellP4.gotoAndStop(0);
			}
			else if (sellPart == 3) {
				this.sellP1.gotoAndStop(0);
				this.sellP2.gotoAndStop(0);
				this.sellP3.gotoAndStop(1);
				this.sellP4.gotoAndStop(0);
			}
			else if (sellPart == 4) {
				this.sellP1.gotoAndStop(0);
				this.sellP2.gotoAndStop(0);
				this.sellP3.gotoAndStop(0);
				this.sellP4.gotoAndStop(1);
			}
			
		}
		
		
		var freePlace = 16;
		var firstFree = 0;
		
		
		this.addEventListener("tick", main3.bind(this));
		function main3() {
			
			this.needMat.text = matName(Math.min(24, craftLv)) + " x" + format(nd(10).times(infMult2));
			this.mate.gotoAndStop(Math.min(24, craftLv));
			
			this.crcr.text = "水晶: " + format(craftCr);
			
			
			craftCost = costs[Math.min(24, craftLv)].times(10).times(infMult2);
			this.crcst.text = "成本: " + format(craftCost);
			
			this.mlv.text = Math.round(craftLv);
			
			
			if (craftCr.lt(craftCrMax)) {
				this.upCrys.visible = true;
			}
			else {
				this.upCrys.visible = false;
			}
			
			
			if (craftCr.gt(1)) {
				this.downCrys.visible = true;
			}
			else {
				this.downCrys.visible = false;
			}
			
			if (craftLv > 0) {
				this.downTier.visible = true;
			}
			else {
				this.downTier.visible = false;
			}
			
			freePlace = 0;
			for (var i = 0 ; i < 16 ; ++i) {
				if (inventory[i].speed == 0) {
					freePlace += 1;
				}
			}
			
			firstFree = 0
			if (freePlace > 0) {
				while (inventory[firstFree].speed != 0) {
					firstFree += 1;
				}
			}
			
			
			if (equip) {
				this.eqB.gotoAndStop(1);
				this.sellB.gotoAndStop(0);
			}
			else {
				this.eqB.gotoAndStop(0);
				this.sellB.gotoAndStop(1);
			}
			
			
			for (var i = 0 ; i < 16 ; ++i) {
				if (inventory[i].speed == 0) {
					itemsCosts[i] = nd(0);
				}
				else {
					if (inventory[i].level < 25) {
						itemsCosts[i] = costs[Math.min(24, inventory[i].level)].times(inventory[i].rarity/(inventory[i].rarity+100)).times(20).times(sellPrice);
					}
					else {
						itemsCosts[i] = costs[Math.min(24, inventory[i].level)].times(inventory[i].rarity/(inventory[i].rarity+100)).times(20).times(sellPrice).times(nd(2).pow(inventory[i].level - 24))
					}
				}
			}
			
			
			
			if (inventory[0].speed == 0) { //empty
				this.inv1.pixs.visible = false;
				this.inv1.rar.visible = false;
				this.inv1.lev.visible = false;
			}
			else {
				this.inv1.pixs.visible = true;
				this.inv1.rar.visible = true;
				this.inv1.lev.visible = true;
				this.inv1.pixs.gotoAndStop(Math.min(24, inventory[0].level));
				this.inv1.rar.text = shortt(inventory[0].rarity);
				this.inv1.lev.text = Math.round(inventory[0].level);
			}
			
			
			if (inventory[1].speed == 0) { //empty
				this.inv2.pixs.visible = false;
				this.inv2.rar.visible = false;
				this.inv2.lev.visible = false;
			}
			else {
				this.inv2.pixs.visible = true;
				this.inv2.rar.visible = true;
				this.inv2.lev.visible = true;
				this.inv2.pixs.gotoAndStop(Math.min(24, inventory[1].level));
				this.inv2.rar.text = shortt(inventory[1].rarity);
				this.inv2.lev.text = Math.round(inventory[1].level);
			}
			
			
			if (inventory[2].speed == 0) { //empty
				this.inv3.pixs.visible = false;
				this.inv3.rar.visible = false;
				this.inv3.lev.visible = false;
			}
			else {
				this.inv3.pixs.visible = true;
				this.inv3.rar.visible = true;
				this.inv3.lev.visible = true;
				this.inv3.pixs.gotoAndStop(Math.min(24, inventory[2].level));
				this.inv3.rar.text = shortt(inventory[2].rarity);
				this.inv3.lev.text = Math.round(inventory[2].level);
			}
			
			
			if (inventory[3].speed == 0) { //empty
				this.inv4.pixs.visible = false;
				this.inv4.rar.visible = false;
				this.inv4.lev.visible = false;
			}
			else {
				this.inv4.pixs.visible = true;
				this.inv4.rar.visible = true;
				this.inv4.lev.visible = true;
				this.inv4.pixs.gotoAndStop(Math.min(24, inventory[3].level));
				this.inv4.rar.text = shortt(inventory[3].rarity);
				this.inv4.lev.text = Math.round(inventory[3].level);
			}
			
			
			if (inventory[4].speed == 0) { //empty
				this.inv5.pixs.visible = false;
				this.inv5.rar.visible = false;
				this.inv5.lev.visible = false;
			}
			else {
				this.inv5.pixs.visible = true;
				this.inv5.rar.visible = true;
				this.inv5.lev.visible = true;
				this.inv5.pixs.gotoAndStop(Math.min(24, inventory[4].level));
				this.inv5.rar.text = shortt(inventory[4].rarity);
				this.inv5.lev.text = Math.round(inventory[4].level);
			}
			
			
			if (inventory[5].speed == 0) { //empty
				this.inv6.pixs.visible = false;
				this.inv6.rar.visible = false;
				this.inv6.lev.visible = false;
			}
			else {
				this.inv6.pixs.visible = true;
				this.inv6.rar.visible = true;
				this.inv6.lev.visible = true;
				this.inv6.pixs.gotoAndStop(Math.min(24, inventory[5].level));
				this.inv6.rar.text = shortt(inventory[5].rarity);
				this.inv6.lev.text = Math.round(inventory[5].level);
			}
			
			
			if (inventory[6].speed == 0) { //empty
				this.inv7.pixs.visible = false;
				this.inv7.rar.visible = false;
				this.inv7.lev.visible = false;
			}
			else {
				this.inv7.pixs.visible = true;
				this.inv7.rar.visible = true;
				this.inv7.lev.visible = true;
				this.inv7.pixs.gotoAndStop(Math.min(24, inventory[6].level));
				this.inv7.rar.text = shortt(inventory[6].rarity);
				this.inv7.lev.text = Math.round(inventory[6].level);
			}
			
			
			if (inventory[7].speed == 0) { //empty
				this.inv8.pixs.visible = false;
				this.inv8.rar.visible = false;
				this.inv8.lev.visible = false;
			}
			else {
				this.inv8.pixs.visible = true;
				this.inv8.rar.visible = true;
				this.inv8.lev.visible = true;
				this.inv8.pixs.gotoAndStop(Math.min(24, inventory[7].level));
				this.inv8.rar.text = shortt(inventory[7].rarity);
				this.inv8.lev.text = Math.round(inventory[7].level);
			}
			
			
			if (inventory[8].speed == 0) { //empty
				this.inv9.pixs.visible = false;
				this.inv9.rar.visible = false;
				this.inv9.lev.visible = false;
			}
			else {
				this.inv9.pixs.visible = true;
				this.inv9.rar.visible = true;
				this.inv9.lev.visible = true;
				this.inv9.pixs.gotoAndStop(Math.min(24, inventory[8].level));
				this.inv9.rar.text = shortt(inventory[8].rarity);
				this.inv9.lev.text = Math.round(inventory[8].level);
			}
			
			
			if (inventory[9].speed == 0) { //empty
				this.inv10.pixs.visible = false;
				this.inv10.rar.visible = false;
				this.inv10.lev.visible = false;
			}
			else {
				this.inv10.pixs.visible = true;
				this.inv10.rar.visible = true;
				this.inv10.lev.visible = true;
				this.inv10.pixs.gotoAndStop(Math.min(24, inventory[9].level));
				this.inv10.rar.text = shortt(inventory[9].rarity);
				this.inv10.lev.text = Math.round(inventory[9].level);
			}
			
			
			if (inventory[10].speed == 0) { //empty
				this.inv11.pixs.visible = false;
				this.inv11.rar.visible = false;
				this.inv11.lev.visible = false;
			}
			else {
				this.inv11.pixs.visible = true;
				this.inv11.rar.visible = true;
				this.inv11.lev.visible = true;
				this.inv11.pixs.gotoAndStop(Math.min(24, inventory[10].level));
				this.inv11.rar.text = shortt(inventory[10].rarity);
				this.inv11.lev.text = Math.round(inventory[10].level);
			}
			
			
			if (inventory[11].speed == 0) { //empty
				this.inv12.pixs.visible = false;
				this.inv12.rar.visible = false;
				this.inv12.lev.visible = false;
			}
			else {
				this.inv12.pixs.visible = true;
				this.inv12.rar.visible = true;
				this.inv12.lev.visible = true;
				this.inv12.pixs.gotoAndStop(Math.min(24, inventory[11].level));
				this.inv12.rar.text = shortt(inventory[11].rarity);
				this.inv12.lev.text = Math.round(inventory[11].level);
			}
			
			
			if (inventory[12].speed == 0) { //empty
				this.inv13.pixs.visible = false;
				this.inv13.rar.visible = false;
				this.inv13.lev.visible = false;
			}
			else {
				this.inv13.pixs.visible = true;
				this.inv13.rar.visible = true;
				this.inv13.lev.visible = true;
				this.inv13.pixs.gotoAndStop(Math.min(24, inventory[12].level));
				this.inv13.rar.text = shortt(inventory[12].rarity);
				this.inv13.lev.text = Math.round(inventory[12].level);
			}
			
			
			if (inventory[13].speed == 0) { //empty
				this.inv14.pixs.visible = false;
				this.inv14.rar.visible = false;
				this.inv14.lev.visible = false;
			}
			else {
				this.inv14.pixs.visible = true;
				this.inv14.rar.visible = true;
				this.inv14.lev.visible = true;
				this.inv14.pixs.gotoAndStop(Math.min(24, inventory[13].level));
				this.inv14.rar.text = shortt(inventory[13].rarity);
				this.inv14.lev.text = Math.round(inventory[13].level);
			}
			
			
			if (inventory[14].speed == 0) { //empty
				this.inv15.pixs.visible = false;
				this.inv15.rar.visible = false;
				this.inv15.lev.visible = false;
			}
			else {
				this.inv15.pixs.visible = true;
				this.inv15.rar.visible = true;
				this.inv15.lev.visible = true;
				this.inv15.pixs.gotoAndStop(Math.min(24, inventory[14].level));
				this.inv15.rar.text = shortt(inventory[14].rarity);
				this.inv15.lev.text = Math.round(inventory[14].level);
			}
			
			
			if (inventory[15].speed == 0) { //empty
				this.inv16.pixs.visible = false;
				this.inv16.rar.visible = false;
				this.inv16.lev.visible = false;
			}
			else {
				this.inv16.pixs.visible = true;
				this.inv16.rar.visible = true;
				this.inv16.lev.visible = true;
				this.inv16.pixs.gotoAndStop(Math.min(24, inventory[15].level));
				this.inv16.rar.text = shortt(inventory[15].rarity);
				this.inv16.lev.text = Math.round(inventory[15].level);
			}
		}
		
		
		
		
		//main upgrades
		this.addEventListener("tick", main4.bind(this));
		function main4() {
			for (var i = 0 ; i < 9 ; ++i) {
				upgrades[i].nowCost = upgrades[i].baseCost.times(upgrades[i].costInc.pow(upgrades[i].lv));
				upgrades[i].totalCost = upgrades[i].nowCost;
			}
		
			cChance = 0.05 + (1 - Math.pow(0.999, upgrades[0].lv))*0.95;
			cChance_next = 0.05 + (1 - Math.pow(0.999, upgrades[0].lv+1))*0.95;
		
			cSpd2 = 1 + upgrades[1].lv*0.1;
			cSpd2_next = 1 + (upgrades[1].lv+1)*0.1;
		
			x2chance = (1 - Math.pow(0.99, upgrades[2].lv));
			x2chance_next = (1 - Math.pow(0.99, upgrades[2].lv+1));
		
			pDamage = nd(1 + upgrades[3].lv*0.05);
			pDamage_next = nd(1.05 + upgrades[3].lv*0.05);
		
			craftCrMax = nd(1+upgrades[4].lv);
			craftCrMax_next = nd(2+upgrades[4].lv);
		
			sellPrice = nd(1 + upgrades[5].lv*0.1);
			sellPrice_next = nd(1.1 + upgrades[5].lv*0.1);
		
			betterCraft = nd(1+upgrades[6].lv);
			betterCraft_next = nd(2+upgrades[6].lv);
		
			betterSpd = nd(1 + upgrades[7].lv*0.05);
			betterSpd_next = nd(1.05 + upgrades[7].lv*0.05);
		
			passiveGems = nd(upgrades[8].lv);
			passiveGems_next = nd(upgrades[8].lv+1);
			
			
			this.upgWindow.u1.namee.text = "水晶几率";
			this.upgWindow.u1.change.text = Math.round(cChance*1000)/10 + "% -> " + Math.round(cChance_next*1000)/10 + "%";
			this.upgWindow.u1.cost.text = format(upgrades[0].totalCost) + "$";
			
			this.upgWindow.u2.namee.text = "移动速度";
			this.upgWindow.u2.change.text = "x" + Math.round(cSpd2*100)/100 + " -> x" + Math.round(cSpd2_next*100)/100;
			this.upgWindow.u2.cost.text = format(upgrades[1].totalCost) + "$";
			
			this.upgWindow.u3.namee.text = "x2 矿石几率";
			this.upgWindow.u3.change.text = Math.round(x2chance*10000)/100 + "% -> " + Math.round(x2chance_next*10000)/100 + "%";
			this.upgWindow.u3.cost.text = format(upgrades[2].totalCost) + "$";
			
			this.upgWindow.u4.namee.text = "镐子伤害";
			this.upgWindow.u4.change.text = "x" + format(pDamage) + " -> x" + format(pDamage_next);
			this.upgWindow.u4.cost.text = format(upgrades[3].totalCost) + "$";
			
			this.upgWindow.u5.namee.text = "最大工艺水晶";
			this.upgWindow.u5.change.text = format(craftCrMax) + " -> " + format(craftCrMax_next);
			this.upgWindow.u5.cost.text = format(upgrades[4].totalCost) + "$";
			
			this.upgWindow.u6.namee.text = "出售价格";
			this.upgWindow.u6.change.text = "x" + format(sellPrice) + " -> x" + format(sellPrice_next);
			this.upgWindow.u6.cost.text = format(upgrades[5].totalCost) + "$";
			
			this.upgWindow.u7.namee.text = "更好的工艺";
			this.upgWindow.u7.change.text = "等级." + format(betterCraft) + " -> Lv." + format(betterCraft_next);
			this.upgWindow.u7.cost.text = format(upgrades[6].totalCost) + "$";
			
			this.upgWindow.u8.namee.text = "镐子速度";
			this.upgWindow.u8.change.text = "x" + format(betterSpd) + " -> x" + format(betterSpd_next);
			this.upgWindow.u8.cost.text = format(upgrades[7].totalCost) + "$";
			
			this.upgWindow.u9.namee.text = "被动水晶";
			this.upgWindow.u9.change.text = format(passiveGems.times(gemMult)) + "/min -> " + format(passiveGems_next.times(gemMult)) + "/min";
			this.upgWindow.u9.cost.text = format(upgrades[8].totalCost) + "$";
			
		
		}
		
		
		this.addEventListener("tick", main5.bind(this));
		function main5() {
			this.scroller.y = 141 + (shiftY)*0.14;
			this.scroller.x = 1144;
			
			if (scrollmake) {
				shiftY = Math.max(0, Math.min((mousePosY - 141)*7.45, 2800));
			}
			
			this.res.ress.y = 250 - shiftY*0.252;
		}
		
		
		var prClicks = 5;	
		
		//prestige and inf mults
		this.addEventListener("tick", main6.bind(this));
		function main6() {
			if (stageMax >= 50) {
				this.prestigeBt.visible = true;
			}
			else {
				this.prestigeBt.visible = false;
			}
			
			dmgBonus = nd(1.01).pow(prestigeLv);
			fallSpd = 1 + prestigeLv/50;
			gemMult = nd(1 + prestigeLv/100);
			
			dmgBonus_next = nd(1.01).pow(Math.max(prestigeLv, stageMax));
			fallSpd_next = 1 + Math.max(prestigeLv, stageMax)/50;
			gemMult_next = nd(1 + Math.max(prestigeLv, stageMax)/100);
			
			this.presPopup.st1.text = "镐子伤害: x" + format(dmgBonus) + " -> " + format(dmgBonus_next);
			this.presPopup.st2.text = "掉落速度: x" + format(nd(fallSpd)) + " -> " + format(nd(fallSpd_next));
			this.presPopup.st3.text = "水晶增益: x" + format(nd(gemMult)) + " -> " + format(nd(gemMult_next));
			
			this.presPopup.st4.text = "点击 " + Math.round(prClicks) + " 次以声望";
			
			
			if (stagei < 120) {
				infMult = nd(1);
			}
			else {
				infMult = nd(1.1487).pow(stagei - 119);
			}
			
			if (craftLv < 25) {
				infMult2 = nd(1);
			}
			else {
				infMult2 = nd(2).pow(craftLv - 24);
			}
			
			
			if (tutVis) {
				this.tutor.visible = true;
				stage.addChild(this.tutor);
			}
			else {
				this.tutor.visible = false;
			}
			
		}
		
		
		
		this.prestigeBt.addEventListener("mouseover", showPPopup.bind(this));
		function showPPopup() {
			this.presPopup.visible = true;
		}
		
		this.prestigeBt.addEventListener("mouseout", hidePPopup.bind(this));
		function hidePPopup() {
			this.presPopup.visible = false;
		}
		
		
		this.prestigeBt.addEventListener("click", PRESTIGE.bind(this));
		function PRESTIGE() {
			if (prClicks > 1) {
				prClicks -= 1;
			}
			else {
				
				cChance = 0.05;
				cSpd2 = 1;
				x2chance = 0;
				pDamage = nd(1);
				craftCrMax = nd(1);
				sellPrice = nd(1);
				betterCraft = nd(1);
				betterSpd = nd(1);
				passiveGems = nd(0);
				
				
				prestigeLv = Math.max(prestigeLv, stageMax);
				dmgBonus = nd(1.01).pow(prestigeLv);
				fallSpd = 1 + prestigeLv/50;
				gemMult = nd(1 + prestigeLv/100);
				
			
				phase = 0;
				phaseProgress = 0;
		
				catTick = 0;
				catHit = false;
				catSpeed = 2;
				catMove = 1;
		
		
				stagei = 0;
				stageMax = 0;
		
				stageProg = 0;
		
				money = nd(0);
				crystals = nd(0);
					
					
				blockMHP = [nd(5), nd(5), nd(5), nd(5), nd(5),
							nd(5), nd(5), nd(5), nd(5), nd(5),
							nd(5), nd(5), nd(5), nd(5), nd(5),
							nd(5), nd(5), nd(5), nd(5), nd(5),
							nd(5), nd(5), nd(5), nd(5), nd(5),
							nd(5), nd(5), nd(5), nd(5), nd(5),
							nd(5), nd(5), nd(5), nd(5), nd(5),
							nd(5), nd(5), nd(5), nd(5), nd(5),
							nd(5), nd(5), nd(5), nd(5), nd(5),
							nd(5), nd(5), nd(5), nd(5), nd(5),
							nd(5), nd(5), nd(5), nd(5), nd(5),
							nd(5), nd(5), nd(5), nd(5), nd(5),
							nd(5), nd(5), nd(5), nd(5), nd(5),
							nd(5), nd(5), nd(5), nd(5), nd(5),
							nd(5), nd(5), nd(5), nd(5), nd(5),
							nd(5), nd(5), nd(5), nd(5), nd(5),
							nd(5), nd(5), nd(5), nd(5), nd(5),
							nd(5), nd(5), nd(5), nd(5), nd(5),
							nd(5), nd(5), nd(5), nd(5), nd(5),
							nd(5), nd(5), nd(5), nd(5), nd(5),
							nd(5), nd(5), nd(5), nd(5), nd(5),
							nd(5), nd(5), nd(5), nd(5), nd(5),
							nd(5), nd(5), nd(5), nd(5), nd(5),
							nd(5), nd(5), nd(5), nd(5), nd(5)];
		
		
				blockHP = [nd(5), nd(5), nd(5), nd(5), nd(5),
							nd(5), nd(5), nd(5), nd(5), nd(5),
							nd(5), nd(5), nd(5), nd(5), nd(5),
							nd(5), nd(5), nd(5), nd(5), nd(5),
							nd(5), nd(5), nd(5), nd(5), nd(5),
							nd(5), nd(5), nd(5), nd(5), nd(5),
							nd(5), nd(5), nd(5), nd(5), nd(5),
							nd(5), nd(5), nd(5), nd(5), nd(5),
							nd(5), nd(5), nd(5), nd(5), nd(5),
							nd(5), nd(5), nd(5), nd(5), nd(5),
							nd(5), nd(5), nd(5), nd(5), nd(5),
							nd(5), nd(5), nd(5), nd(5), nd(5),
							nd(5), nd(5), nd(5), nd(5), nd(5),
							nd(5), nd(5), nd(5), nd(5), nd(5),
							nd(5), nd(5), nd(5), nd(5), nd(5),
							nd(5), nd(5), nd(5), nd(5), nd(5),
							nd(5), nd(5), nd(5), nd(5), nd(5),
							nd(5), nd(5), nd(5), nd(5), nd(5),
							nd(5), nd(5), nd(5), nd(5), nd(5),
							nd(5), nd(5), nd(5), nd(5), nd(5),
							nd(5), nd(5), nd(5), nd(5), nd(5),
							nd(5), nd(5), nd(5), nd(5), nd(5),
							nd(5), nd(5), nd(5), nd(5), nd(5),
							nd(5), nd(5), nd(5), nd(5), nd(5)];
		
		
		
		
				blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
						  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
						  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
						  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
						  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
						  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
						  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
						  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
						  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
						  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
						  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
						  0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		
		
		
				chances = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
						   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		
		
		
				resources = [nd(0), nd(0), nd(0), nd(0), nd(0), 
							 nd(0), nd(0), nd(0), nd(0), nd(0), 
							 nd(0), nd(0), nd(0), nd(0), nd(0), 
							 nd(0), nd(0), nd(0), nd(0), nd(0), 
							 nd(0), nd(0), nd(0), nd(0), nd(0)];
							 
							 
				setChances();
				setBlocks();
		
				pick = new pix(0, 50, 1);
		
		
		
				inventory = [new pix(0, 0, 0), new pix(0, 0, 0), new pix(0, 0, 0), new pix(0, 0, 0),
							 new pix(0, 0, 0), new pix(0, 0, 0), new pix(0, 0, 0), new pix(0, 0, 0),
							 new pix(0, 0, 0), new pix(0, 0, 0), new pix(0, 0, 0), new pix(0, 0, 0),
							 new pix(0, 0, 0), new pix(0, 0, 0), new pix(0, 0, 0), new pix(0, 0, 0)];
		
		
			//craft
		
				craftLv = 0;
				craftCr = nd(1);
				craftCost = nd(1);
		
		
				upgrades = [new upgrade(nd(10), nd(2)), new upgrade(nd(100), nd(3)), new upgrade(nd(500), nd(3)),
							new upgrade(nd(1000), nd(3)), new upgrade(nd(5000), nd(10)), new upgrade(nd(25000), nd(5)),
							new upgrade(nd(100000), nd(1.5)), new upgrade(nd(1000000), nd(2)), new upgrade(nd(2000000), nd(1000))];
		
		
		
				shiftY = 0;
				prClicks = 5;
			}
		}
		
		
		function setChances() {
			if (stagei == 0) {
				chances = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
						   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			}
			else if (stagei == 1) {
				chances = [0.9, 0.1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
						   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			}
			else if (stagei == 2) {
				chances = [0.8, 0.2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
						   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			}
			else if (stagei == 3) {
				chances = [0.7, 0.3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
						   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			}
			else if (stagei == 4) {
				chances = [0.5, 0.5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
						   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			}
			else if (stagei == 5) {
				chances = [0.55, 0.3, 0.15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
						   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			}
			else if (stagei == 6) {
				chances = [0.5, 0.2, 0.3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
						   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			}
			else if (stagei == 7) {
				chances = [0.5, 0.15, 0.35, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
						   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			}
			else if (stagei == 8) {
				chances = [0.4, 0.1, 0.5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
						   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			}
			else if (stagei == 9) {
				chances = [0.35, 0.05, 0.6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
						   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			}
			else if (stagei == 10) {
				chances = [0.3, 0.02, 0.55, 0.13, 0, 0, 0, 0, 0, 0, 0, 0, 0,
						   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			}
			else if (stagei == 11) {
				chances = [0.2, 0, 0.55, 0.25, 0, 0, 0, 0, 0, 0, 0, 0, 0,
						   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			}
			else if (stagei == 12) {
				chances = [0.15, 0, 0.55, 0.3, 0, 0, 0, 0, 0, 0, 0, 0, 0,
						   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			}
			else if (stagei == 13) {
				chances = [0.1, 0, 0.6, 0.3, 0, 0, 0, 0, 0, 0, 0, 0, 0,
						   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			}
			else if (stagei == 14) {
				chances = [0, 0, 0.5, 0.5, 0, 0, 0, 0, 0, 0, 0, 0, 0,
						   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			}
			else if (stagei == 15) {
				chances = [0, 0, 0.45, 0.45, 0.1, 0, 0, 0, 0, 0, 0, 0, 0,
						   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			}
			else if (stagei == 16) {
				chances = [0, 0, 0.4, 0.4, 0.2, 0, 0, 0, 0, 0, 0, 0, 0,
						   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			}
			else if (stagei == 17) {
				chances = [0, 0, 0.4, 0.3, 0.3, 0, 0, 0, 0, 0, 0, 0, 0,
						   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			}
			else if (stagei == 18) {
				chances = [0, 0, 0.35, 0.3, 0.35, 0, 0, 0, 0, 0, 0, 0, 0,
						   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			}
			else if (stagei == 19) {
				chances = [0, 0, 0.3, 0.2, 0.5, 0, 0, 0, 0, 0, 0, 0, 0,
						   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			}
			else if (stagei == 20) {
				chances = [0, 0, 0.3, 0.15, 0.45, 0.1, 0, 0, 0, 0, 0, 0, 0,
						   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			}
			else if (stagei == 21) {
				chances = [0, 0, 0.3, 0.1, 0.4, 0.2, 0, 0, 0, 0, 0, 0, 0,
						   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			}
			else if (stagei == 22) {
				chances = [0, 0, 0.3, 0.05, 0.35, 0.3, 0, 0, 0, 0, 0, 0, 0,
						   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			}
			else if (stagei == 23) {
				chances = [0, 0, 0.3, 0, 0.3, 0.4, 0, 0, 0, 0, 0, 0, 0,
						   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			}
			else if (stagei == 24) {
				chances = [0, 0, 0.25, 0, 0.25, 0.5, 0, 0, 0, 0, 0, 0, 0,
						   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			}
			else if (stagei == 25) {
				chances = [0, 0, 0.2, 0, 0.2, 0.5, 0.1, 0, 0, 0, 0, 0, 0,
						   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			}
			else if (stagei == 26) {
				chances = [0, 0, 0.15, 0, 0.15, 0.4, 0.3, 0, 0, 0, 0, 0, 0,
						   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			}
			else if (stagei == 27) {
				chances = [0, 0, 0.1, 0, 0.1, 0.4, 0.4, 0, 0, 0, 0, 0, 0,
						   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			}
			else if (stagei == 28) {
				chances = [0, 0, 0.05, 0, 0.05, 0.3, 0.6, 0, 0, 0, 0, 0, 0,
						   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			}
			else if (stagei == 29) {
				chances = [0, 0, 0, 0, 0, 0.3, 0.7, 0, 0, 0, 0, 0, 0,
						   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			}
			else if (stagei == 30) {
				chances = [0, 0, 0, 0, 0, 0.25, 0.65, 0.1, 0, 0, 0, 0, 0,
						   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			}
			else if (stagei == 31) {
				chances = [0, 0, 0, 0, 0, 0.2, 0.6, 0.2, 0, 0, 0, 0, 0,
						   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			}
			else if (stagei == 32) {
				chances = [0, 0, 0, 0, 0, 0.15, 0.55, 0.3, 0, 0, 0, 0, 0,
						   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			}
			else if (stagei == 33) {
				chances = [0, 0, 0, 0, 0, 0.1, 0.5, 0.4, 0, 0, 0, 0, 0,
						   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			}
			else if (stagei == 34) {
				chances = [0, 0, 0, 0, 0, 0.05, 0.45, 0.5, 0, 0, 0, 0, 0,
						   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			}
			else if (stagei == 35) {
				chances = [0, 0, 0, 0, 0, 0, 0.45, 0.45, 0.1, 0, 0, 0, 0,
						   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			}
			else if (stagei == 36) {
				chances = [0, 0, 0, 0, 0, 0, 0.4, 0.4, 0.2, 0, 0, 0, 0,
						   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			}
			else if (stagei == 37) {
				chances = [0, 0, 0, 0, 0, 0, 0.3, 0.4, 0.3, 0, 0, 0, 0,
						   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			}
			else if (stagei == 38) {
				chances = [0, 0, 0, 0, 0, 0, 0.2, 0.3, 0.5, 0, 0, 0, 0,
						   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			}
			else if (stagei == 39) {
				chances = [0, 0, 0, 0, 0, 0, 0.15, 0.25, 0.6, 0, 0, 0, 0,
						   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			}
			else if (stagei == 40) {
				chances = [0, 0, 0, 0, 0, 0, 0.1, 0.2, 0.6, 0.1, 0, 0, 0,
						   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			}
			else if (stagei == 41) {
				chances = [0, 0, 0, 0, 0, 0, 0.05, 0.15, 0.55, 0.25, 0, 0, 0,
						   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			}
			else if (stagei == 42) {
				chances = [0, 0, 0, 0, 0, 0, 0, 0.1, 0.5, 0.4, 0, 0, 0,
						   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			}
			else if (stagei == 43) {
				chances = [0, 0, 0, 0, 0, 0, 0, 0.05, 0.45, 0.5, 0, 0, 0,
						   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			}
			else if (stagei == 44) {
				chances = [0, 0, 0, 0, 0, 0, 0, 0, 0.4, 0.6, 0, 0, 0,
						   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			}
			else if (stagei == 45) {
				chances = [0, 0, 0, 0, 0, 0, 0, 0, 0.35, 0.55, 0.1, 0, 0,
						   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			}
			else if (stagei == 46) {
				chances = [0, 0, 0, 0, 0, 0, 0, 0, 0.3, 0.5, 0.2, 0, 0,
						   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			}
			else if (stagei == 47) {
				chances = [0, 0, 0, 0, 0, 0, 0, 0, 0.2, 0.5, 0.3, 0, 0,
						   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			}
			else if (stagei == 48) {
				chances = [0, 0, 0, 0, 0, 0, 0, 0, 0.1, 0.5, 0.4, 0, 0,
						   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			}
			else if (stagei == 49) {
				chances = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0.4, 0.6, 0, 0,
						   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			}
			else if (stagei == 50) {
				chances = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0.35, 0.55, 0.1, 0,
						   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			}
			else if (stagei == 51) {
				chances = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0.3, 0.5, 0.2, 0,
						   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			}
			else if (stagei == 52) {
				chances = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0.2, 0.45, 0.35, 0,
						   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			}
			else if (stagei == 53) {
				chances = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0.1, 0.4, 0.5, 0,
						   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			}
			else if (stagei == 54) {
				chances = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.35, 0.65, 0,
						   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			}
			else if (stagei == 55) {
				chances = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.3, 0.6, 0.1,
						   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			}
			else if (stagei == 56) {
				chances = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.25, 0.55, 0.2,
						   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			}
			else if (stagei == 57) {
				chances = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.2, 0.5, 0.3,
						   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			}
			else if (stagei == 58) {
				chances = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.1, 0.4, 0.5,
						   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			}
			else if (stagei == 59) {
				chances = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.3, 0.7,
						   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			}
			else if (stagei == 60) {
				chances = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.25, 0.6,
						   0.15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			}
			else if (stagei == 61) {
				chances = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.2, 0.5,
						   0.3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			}
			else if (stagei == 62) {
				chances = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.15, 0.45,
						   0.4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			}
			else if (stagei == 63) {
				chances = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.1, 0.4,
						   0.5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			}
			else if (stagei == 64) {
				chances = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.35,
						   0.65, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			}
			else if (stagei == 65) {
				chances = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.3,
						   0.6, 0.1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			}
			else if (stagei == 66) {
				chances = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.25,
						   0.55, 0.2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			}
			else if (stagei == 67) {
				chances = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.2,
						   0.5, 0.3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			}
			else if (stagei == 68) {
				chances = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.1,
						   0.4, 0.5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			}
			else if (stagei == 69) {
				chances = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
						   0.3, 0.7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			}
			else if (stagei == 70) {
				chances = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
						   0.25, 0.65, 0.1, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			}
			else if (stagei == 71) {
				chances = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
						   0.2, 0.6, 0.2, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			}
			else if (stagei == 72) {
				chances = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
						   0.15, 0.55, 0.3, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			}
			else if (stagei == 73) {
				chances = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
						   0.1, 0.5, 0.4, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			}
			else if (stagei == 74) {
				chances = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
						   0.05, 0.45, 0.5, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			}
			else if (stagei == 75) {
				chances = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
						   0, 0.4, 0.5, 0.1, 0, 0, 0, 0, 0, 0, 0, 0];
			}
			else if (stagei == 76) {
				chances = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
						   0, 0.3, 0.4, 0.3, 0, 0, 0, 0, 0, 0, 0, 0];
			}
			else if (stagei == 77) {
				chances = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
						   0, 0.2, 0.3, 0.5, 0, 0, 0, 0, 0, 0, 0, 0];
			}
			else if (stagei == 78) {
				chances = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
						   0, 0.1, 0.3, 0.6, 0, 0, 0, 0, 0, 0, 0, 0];
			}
			else if (stagei == 79) {
				chances = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
						   0, 0, 0.3, 0.7, 0, 0, 0, 0, 0, 0, 0, 0];
			}
			else if (stagei == 80) {
				chances = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
						   0, 0, 0.25, 0.65, 0.1, 0, 0, 0, 0, 0, 0, 0];
			}
			else if (stagei == 81) {
				chances = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
						   0, 0, 0.2, 0.6, 0.2, 0, 0, 0, 0, 0, 0, 0];
			}
			else if (stagei == 82) {
				chances = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
						   0, 0, 0.15, 0.55, 0.3, 0, 0, 0, 0, 0, 0, 0];
			}
			else if (stagei == 83) {
				chances = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
						   0, 0, 0.1, 0.5, 0.4, 0, 0, 0, 0, 0, 0, 0];
			}
			else if (stagei == 84) {
				chances = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
						   0, 0, 0.05, 0.45, 0.5, 0, 0, 0, 0, 0, 0, 0];
			}
			else if (stagei == 85) {
				chances = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
						   0, 0, 0, 0.4, 0.5, 0.1, 0, 0, 0, 0, 0, 0];
			}
			else if (stagei == 86) {
				chances = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
						   0, 0, 0, 0.35, 0.45, 0.2, 0, 0, 0, 0, 0, 0];
			}
			else if (stagei == 87) {
				chances = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
						   0, 0, 0, 0.3, 0.4, 0.3, 0, 0, 0, 0, 0, 0];
			}
			else if (stagei == 88) {
				chances = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
						   0, 0, 0, 0.25, 0.35, 0.4, 0, 0, 0, 0, 0, 0];
			}
			else if (stagei == 89) {
				chances = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
						   0, 0, 0, 0.2, 0.3, 0.5, 0, 0, 0, 0, 0, 0];
			}
			else if (stagei == 90) {
				chances = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
						   0, 0, 0, 0.15, 0.25, 0.45, 0.15, 0, 0, 0, 0, 0];
			}
			else if (stagei == 91) {
				chances = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
						   0, 0, 0, 0.1, 0.2, 0.4, 0.3, 0, 0, 0, 0, 0];
			}
			else if (stagei == 92) {
				chances = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
						   0, 0, 0, 0.05, 0.15, 0.35, 0.45, 0, 0, 0, 0, 0];
			}
			else if (stagei == 93) {
				chances = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
						   0, 0, 0, 0, 0.1, 0.3, 0.6, 0, 0, 0, 0, 0];
			}
			else if (stagei == 94) {
				chances = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
						   0, 0, 0, 0, 0.05, 0.25, 0.7, 0, 0, 0, 0, 0];
			}
			else if (stagei == 95) {
				chances = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
						   0, 0, 0, 0, 0, 0.25, 0.65, 0.1, 0, 0, 0, 0];
			}
			else if (stagei == 96) {
				chances = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
						   0, 0, 0, 0, 0, 0.2, 0.6, 0.2, 0, 0, 0, 0];
			}
			else if (stagei == 97) {
				chances = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
						   0, 0, 0, 0, 0, 0.15, 0.55, 0.3, 0, 0, 0, 0];
			}
			else if (stagei == 98) {
				chances = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
						   0, 0, 0, 0, 0, 0.1, 0.5, 0.4, 0, 0, 0, 0];
			}
			else if (stagei == 99) {
				chances = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
						   0, 0, 0, 0, 0, 0.1, 0.45, 0.45, 0, 0, 0, 0];
			}
			else if (stagei == 100) {
				chances = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
						   0, 0, 0, 0, 0, 0.05, 0.4, 0.45, 0.1, 0, 0, 0];
			}
			else if (stagei == 101) {
				chances = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
						   0, 0, 0, 0, 0, 0.05, 0.35, 0.4, 0.2, 0, 0, 0];
			}
			else if (stagei == 102) {
				chances = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
						   0, 0, 0, 0, 0, 0, 0.3, 0.4, 0.3, 0, 0, 0];
			}
			else if (stagei == 103) {
				chances = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
						   0, 0, 0, 0, 0, 0, 0.25, 0.35, 0.4, 0, 0, 0];
			}
			else if (stagei == 104) {
				chances = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
						   0, 0, 0, 0, 0, 0, 0.2, 0.3, 0.5, 0, 0, 0];
			}
			else if (stagei == 105) {
				chances = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
						   0, 0, 0, 0, 0, 0, 0.1, 0.25, 0.45, 0.2, 0, 0];
			}
			else if (stagei == 106) {
				chances = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
						   0, 0, 0, 0, 0, 0, 0, 0.2, 0.4, 0.4, 0, 0];
			}
			else if (stagei == 107) {
				chances = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
						   0, 0, 0, 0, 0, 0, 0, 0.15, 0.35, 0.5, 0, 0];
			}
			else if (stagei == 108) {
				chances = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
						   0, 0, 0, 0, 0, 0, 0, 0.1, 0.3, 0.6, 0, 0];
			}
			else if (stagei == 109) {
				chances = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
						   0, 0, 0, 0, 0, 0, 0, 0, 0.25, 0.75, 0, 0];
			}
			else if (stagei == 110) {
				chances = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
						   0, 0, 0, 0, 0, 0, 0, 0, 0.2, 0.6, 0.2, 0];
			}
			else if (stagei == 111) {
				chances = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
						   0, 0, 0, 0, 0, 0, 0, 0, 0.15, 0.5, 0.35, 0];
			}
			else if (stagei == 112) {
				chances = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
						   0, 0, 0, 0, 0, 0, 0, 0, 0.1, 0.4, 0.5, 0];
			}
			else if (stagei == 113) {
				chances = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
						   0, 0, 0, 0, 0, 0, 0, 0, 0.05, 0.3, 0.65, 0];
			}
			else if (stagei == 114) {
				chances = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
						   0, 0, 0, 0, 0, 0, 0, 0, 0, 0.2, 0.8, 0];
			}
			else if (stagei == 115) {
				chances = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
						   0, 0, 0, 0, 0, 0, 0, 0, 0, 0.1, 0.6, 0.3];
			}
			else if (stagei == 116) {
				chances = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
						   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.5, 0.5];
			}
			else if (stagei == 117) {
				chances = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
						   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.3, 0.7];
			}
			else if (stagei == 118) {
				chances = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
						   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.1, 0.9];
			}
			else if (stagei == 119) {
				chances = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
						   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1];
			}
			else if (stagei >= 120) {
				chances = [0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01,
						   0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.02, 0.75];
			}
		}
		
		
		
		function retBlock() {
			var cha = Math.random();
			if (cha < chances[0]) {
				return 0;
			}
			else if (cha < chances[0]+chances[1]) {
				return 1;
			}
			else if (cha < chances[0]+chances[1]+chances[2]) {
				return 2;
			}
			else if (cha < chances[0]+chances[1]+chances[2]+chances[3]) {
				return 3;
			}
			else if (cha < chances[0]+chances[1]+chances[2]+chances[3]+chances[4]) {
				return 4;
			}
			else if (cha < chances[0]+chances[1]+chances[2]+chances[3]+chances[4]+chances[5]) {
				return 5;
			}
			else if (cha < chances[0]+chances[1]+chances[2]+chances[3]+chances[4]+chances[5]+chances[6]) {
				return 6;
			}
			else if (cha < chances[0]+chances[1]+chances[2]+chances[3]+chances[4]+chances[5]+chances[6]+chances[7]) {
				return 7;
			}
			else if (cha < chances[0]+chances[1]+chances[2]+chances[3]+chances[4]+chances[5]+chances[6]+chances[7]+chances[8]) {
				return 8;
			}
			else if (cha < chances[0]+chances[1]+chances[2]+chances[3]+chances[4]+chances[5]+chances[6]+chances[7]+chances[8]+chances[9]) {
				return 9;
			}
			else if (cha < chances[0]+chances[1]+chances[2]+chances[3]+chances[4]+chances[5]+chances[6]+chances[7]+chances[8]+chances[9]+chances[10]) {
				return 10;
			}
			else if (cha < chances[0]+chances[1]+chances[2]+chances[3]+chances[4]+chances[5]+chances[6]+chances[7]+chances[8]+chances[9]+chances[10]+chances[11]) {
				return 11;
			}
			else if (cha < chances[0]+chances[1]+chances[2]+chances[3]+chances[4]+chances[5]+chances[6]+chances[7]+chances[8]+chances[9]+chances[10]+chances[11]+chances[12]) {
				return 12;
			}
			else if (cha < chances[0]+chances[1]+chances[2]+chances[3]+chances[4]+chances[5]+chances[6]+chances[7]+chances[8]+chances[9]+chances[10]+chances[11]+chances[12]+chances[13]) {
				return 13;
			}
			else if (cha < chances[0]+chances[1]+chances[2]+chances[3]+chances[4]+chances[5]+chances[6]+chances[7]+chances[8]+chances[9]+chances[10]+chances[11]+chances[12]+chances[13]+chances[14]) {
				return 14;
			}
			else if (cha < chances[0]+chances[1]+chances[2]+chances[3]+chances[4]+chances[5]+chances[6]+chances[7]+chances[8]+chances[9]+chances[10]+chances[11]+chances[12]+chances[13]+chances[14]+chances[15]) {
				return 15;
			}
			else if (cha < chances[0]+chances[1]+chances[2]+chances[3]+chances[4]+chances[5]+chances[6]+chances[7]+chances[8]+chances[9]+chances[10]+chances[11]+chances[12]+chances[13]+chances[14]+chances[15]+chances[16]) {
				return 16;
			}
			else if (cha < chances[0]+chances[1]+chances[2]+chances[3]+chances[4]+chances[5]+chances[6]+chances[7]+chances[8]+chances[9]+chances[10]+chances[11]+chances[12]+chances[13]+chances[14]+chances[15]+chances[16]+chances[17]) {
				return 17;
			}
			else if (cha < chances[0]+chances[1]+chances[2]+chances[3]+chances[4]+chances[5]+chances[6]+chances[7]+chances[8]+chances[9]+chances[10]+chances[11]+chances[12]+chances[13]+chances[14]+chances[15]+chances[16]+chances[17]+chances[18]) {
				return 18;
			}
			else if (cha < chances[0]+chances[1]+chances[2]+chances[3]+chances[4]+chances[5]+chances[6]+chances[7]+chances[8]+chances[9]+chances[10]+chances[11]+chances[12]+chances[13]+chances[14]+chances[15]+chances[16]+chances[17]+chances[18]+chances[19]) {
				return 19;
			}
			else if (cha < chances[0]+chances[1]+chances[2]+chances[3]+chances[4]+chances[5]+chances[6]+chances[7]+chances[8]+chances[9]+chances[10]+chances[11]+chances[12]+chances[13]+chances[14]+chances[15]+chances[16]+chances[17]+chances[18]+chances[19]+chances[20]) {
				return 20;
			}
			else if (cha < chances[0]+chances[1]+chances[2]+chances[3]+chances[4]+chances[5]+chances[6]+chances[7]+chances[8]+chances[9]+chances[10]+chances[11]+chances[12]+chances[13]+chances[14]+chances[15]+chances[16]+chances[17]+chances[18]+chances[19]+chances[20]+chances[21]) {
				return 21;
			}
			else if (cha < chances[0]+chances[1]+chances[2]+chances[3]+chances[4]+chances[5]+chances[6]+chances[7]+chances[8]+chances[9]+chances[10]+chances[11]+chances[12]+chances[13]+chances[14]+chances[15]+chances[16]+chances[17]+chances[18]+chances[19]+chances[20]+chances[21]+chances[22]) {
				return 22;
			}
			else if (cha < chances[0]+chances[1]+chances[2]+chances[3]+chances[4]+chances[5]+chances[6]+chances[7]+chances[8]+chances[9]+chances[10]+chances[11]+chances[12]+chances[13]+chances[14]+chances[15]+chances[16]+chances[17]+chances[18]+chances[19]+chances[20]+chances[21]+chances[22]+chances[23]) {
				return 23;
			}
			else if (cha < chances[0]+chances[1]+chances[2]+chances[3]+chances[4]+chances[5]+chances[6]+chances[7]+chances[8]+chances[9]+chances[10]+chances[11]+chances[12]+chances[13]+chances[14]+chances[15]+chances[16]+chances[17]+chances[18]+chances[19]+chances[20]+chances[21]+chances[22]+chances[23]+chances[24]) {
				return 24;
			}
		}
		
		
		function setBlocks() {
			for (var i = 0 ; i < 120 ; ++i) {
				if (stagei < 120) {
					infMult = nd(1);
				}
				else {
					infMult = nd(1.1487).pow(stagei - 119);
				}
				blocks[i] = retBlock();
				blockMHP[i] = blockHPset(blocks[i]).times(infMult);
				blockHP[i] = blockMHP[i];
			}
		}
		
		
		function blockHPset(type) {
			var levMult = nd(1);
			if (stagei >= 10) {
				levMult = levMult.times(nd(1.01).pow(stagei - 10));
			}
			if (type == 0) {
				return nd(2).times(levMult);
			}
			else if (type == 1) {
				return nd(5).times(levMult);
			}
			else if (type == 2) {
				return nd(12).times(levMult);
			}
			else if (type == 3) {
				return nd(36).times(levMult);
			}
			else if (type == 4) {
				return nd(110).times(levMult);
			}
			else if (type == 5) {
				return nd(400).times(levMult);
			}
			else if (type == 6) {
				return nd(1500).times(levMult);
			}
			else if (type == 7) {
				return nd(6000).times(levMult);
			}
			else if (type == 8) {
				return nd(22000).times(levMult);
			}
			else if (type == 9) {
				return nd(90000).times(levMult);
			}
			else if (type == 10) {
				return nd(350000).times(levMult);
			}
			else if (type == 11) {
				return nd(1500000).times(levMult);
			}
			else if (type == 12) {
				return nd(6000000).times(levMult);
			}
			else if (type == 13) {
				return nd(25000000).times(levMult);
			}
			else if (type == 14) {
				return nd(100000000).times(levMult);
			}
			else if (type == 15) {
				return nd(4e8).times(levMult);
			}
			else if (type == 16) {
				return nd(2e9).times(levMult);
			}
			else if (type == 17) {
				return nd(1e10).times(levMult);
			}
			else if (type == 18) {
				return nd(5e10).times(levMult);
			}
			else if (type == 19) {
				return nd(3e11).times(levMult);
			}
			else if (type == 20) {
				return nd(1.5e12).times(levMult);
			}
			else if (type == 21) {
				return nd(6e12).times(levMult);
			}
			else if (type == 22) {
				return nd(2.5e13).times(levMult);
			}
			else if (type == 23) {
				return nd(1e14).times(levMult);
			}
			else if (type == 24) {
				return nd(1e15).times(levMult);
			}
		}
		
		
		
		
		this.minusLv.addEventListener("click", setMinus.bind(this));
		function setMinus() {
			stagei -= 1;
			setChances();
			setBlocks();
			cooldownMove = 5;
		}
		
		
		
		this.plusLv.addEventListener("click", setPlus.bind(this));
		function setPlus() {
			stagei += 1;
			setChances();
			setBlocks();
			cooldownMove = 5;
		}
		
		
		this.sellP1.addEventListener("click", setSell1.bind(this));
		function setSell1() {
			sellPart = 1;
		}
		
		this.sellP2.addEventListener("click", setSell2.bind(this));
		function setSell2() {
			sellPart = 2;
		}
		
		this.sellP3.addEventListener("click", setSell3.bind(this));
		function setSell3() {
			sellPart = 3;
		}
		
		this.sellP4.addEventListener("click", setSell4.bind(this));
		function setSell4() {
			sellPart = 4;
		}
		
		
		
		
		
		function rarPrefix(rar) {
			if (rar < 20) {
				return "糟糕的";
			}
			else if (rar < 30) {
				return "坏的";
			}
			else if (rar < 40) {
				return "垃圾的";
			}
			else if (rar < 60) {
				return "普通的";
			}
			else if (rar < 90) {
				return "不错的";
			}
			else if (rar < 120) {
				return "伟大的";
			}
			else if (rar < 300) {
				return "神奇的";
			}
			else if (rar < 1000) {
				return "超级的";
			}
			else if (rar < 10000) {
				return "哇噻的";
			}
			else {
				return "神佑的";
			}
		}
		
		
		function matName(mat) {
			if (mat == 0) return "泥";
			else if (mat == 1) return "纸";
			else if (mat == 2) return "石头";
			else if (mat == 3) return "煤";
			else if (mat == 4) return "骨头";
			else if (mat == 5) return "铜";
			else if (mat == 6) return "铁";
			else if (mat == 7) return "石英";
			else if (mat == 8) return "银";
			else if (mat == 9) return "黄玉";
			else if (mat == 10) return "祖母绿";
			else if (mat == 11) return "红宝石";
			else if (mat == 12) return "蓝宝石";
			else if (mat == 13) return "黄金";
			else if (mat == 14) return "铂金";
			else if (mat == 15) return "钻石";
			else if (mat == 16) return "秘银";
			else if (mat == 17) return "黑曜石";
			else if (mat == 18) return "基岩";
			else if (mat == 19) return "隐石";
			else if (mat == 20) return "光石";
			else if (mat == 21) return "暗石";
			else if (mat == 22) return "圣石";
			else if (mat == 23) return "狱石";
			else if (mat >= 24) return "无限";
		}
		
		
		this.autoProg.addEventListener("click", setAP.bind(this));
		function setAP() {
			if (!autoP) { autoP = true;}
			else {
				autoP = false;
			}
		}
		
		var sellCh = 0;
		
		this.addEventListener("tick", mainSell.bind(this));
		function mainSell() {
			this.popupSale.sale1.text = "出售 1 得到 " + format(costs[sellCh].times(sellPrice)) + "$";
			var part = nd(0);
			if (sellPart == 1) {
				part = nd(1);
			}
			else if (sellPart == 2) {
				part = resources[sellCh].times(0.1).ceil();
			}
			else if (sellPart == 3) {
				part = resources[sellCh].times(0.5).ceil();
			}
			else if (sellPart == 4) {
				part = resources[sellCh];
			}
			this.popupSale.sale1.text = "出售 1 得到 " + format(costs[sellCh].times(sellPrice)) + "$";
			this.popupSale.sale2.text = "出售 "+ format(part) + " 得到 " + format(costs[sellCh].times(part).times(sellPrice)) + "$";
			
		}
		
		
		
		this.res.ress.sell1.addEventListener("click", sellR1.bind(this));
		function sellR1() {
			if (sellPart == 1) {
				if (resources[0].gte(1)) {
					resources[0] = resources[0].sub(1);
					money = money.plus(costs[0].times(sellPrice));
				}
			}
			else if (sellPart == 2) {
				var part = resources[0].times(0.1).ceil();
				resources[0] = resources[0].sub(part);
				money = money.plus(costs[0].times(part).times(sellPrice));
			}
			else if (sellPart == 3) {
				var part = resources[0].times(0.5).ceil();
				resources[0] = resources[0].sub(part);
				money = money.plus(costs[0].times(part).times(sellPrice));
			}
			else if (sellPart == 4) {
				var part = resources[0];
				resources[0] = resources[0].sub(part);
				money = money.plus(costs[0].times(part).times(sellPrice));
			}
		}
		
		
		this.res.ress.sell1.addEventListener("mouseover", sellpp1.bind(this));
		function sellpp1() {
			this.popupSale.visible = true;
			this.popupSale.x = this.res.ress.sell1.x + 600;
			this.popupSale.y = this.res.ress.sell1.y + 40 - shiftY*0.252;
			sellCh = 0;
		}
		
		
		this.res.ress.sell1.addEventListener("mouseout", sellppo1.bind(this));
		function sellppo1() {
			this.popupSale.visible = false;
		}
		
		this.res.ress.sell2.addEventListener("click", sellR2.bind(this));
		function sellR2() {
			if (sellPart == 1) {
				if (resources[1].gte(1)) {
					resources[1] = resources[1].sub(1);
					money = money.plus(costs[1].times(sellPrice));
				}
			}
			else if (sellPart == 2) {
				var part = resources[1].times(0.1).ceil();
				resources[1] = resources[1].sub(part);
				money = money.plus(costs[1].times(part).times(sellPrice));
			}
			else if (sellPart == 3) {
				var part = resources[1].times(0.5).ceil();
				resources[1] = resources[1].sub(part);
				money = money.plus(costs[1].times(part).times(sellPrice));
			}
			else if (sellPart == 4) {
				var part = resources[1];
				resources[1] = resources[1].sub(part);
				money = money.plus(costs[1].times(part).times(sellPrice));
			}
		}
		
		
		
		this.res.ress.sell2.addEventListener("mouseover", sellpp2.bind(this));
		function sellpp2() {
			this.popupSale.visible = true;
			this.popupSale.x = this.res.ress.sell2.x + 600;
			this.popupSale.y = this.res.ress.sell2.y + 40 - shiftY*0.252;
			sellCh = 1;
		}
		
		
		this.res.ress.sell2.addEventListener("mouseout", sellppo2.bind(this));
		function sellppo2() {
			this.popupSale.visible = false;
		}
		
		this.res.ress.sell3.addEventListener("click", sellR3.bind(this));
		function sellR3() {
			if (sellPart == 1) {
				if (resources[2].gte(1)) {
					resources[2] = resources[2].sub(1);
					money = money.plus(costs[2].times(sellPrice));
				}
			}
			else if (sellPart == 2) {
				var part = resources[2].times(0.1).ceil();
				resources[2] = resources[2].sub(part);
				money = money.plus(costs[2].times(part).times(sellPrice));
			}
			else if (sellPart == 3) {
				var part = resources[2].times(0.5).ceil();
				resources[2] = resources[2].sub(part);
				money = money.plus(costs[2].times(part).times(sellPrice));
			}
			else if (sellPart == 4) {
				var part = resources[2];
				resources[2] = resources[2].sub(part);
				money = money.plus(costs[2].times(part).times(sellPrice));
			}
		}
		
		
		this.res.ress.sell3.addEventListener("mouseover", sellpp3.bind(this));
		function sellpp3() {
			this.popupSale.visible = true;
			this.popupSale.x = this.res.ress.sell3.x + 600;
			this.popupSale.y = this.res.ress.sell3.y + 40 - shiftY*0.252;
			sellCh = 2;
		}
		
		
		this.res.ress.sell3.addEventListener("mouseout", sellppo3.bind(this));
		function sellppo3() {
			this.popupSale.visible = false;
		}
		
		this.res.ress.sell4.addEventListener("click", sellR4.bind(this));
		function sellR4() {
			if (sellPart == 1) {
				if (resources[3].gte(1)) {
					resources[3] = resources[3].sub(1);
					money = money.plus(costs[3].times(sellPrice));
				}
			}
			else if (sellPart == 2) {
				var part = resources[3].times(0.1).ceil();
				resources[3] = resources[3].sub(part);
				money = money.plus(costs[3].times(part).times(sellPrice));
			}
			else if (sellPart == 3) {
				var part = resources[3].times(0.5).ceil();
				resources[3] = resources[3].sub(part);
				money = money.plus(costs[3].times(part).times(sellPrice));
			}
			else if (sellPart == 4) {
				var part = resources[3];
				resources[3] = resources[3].sub(part);
				money = money.plus(costs[3].times(part).times(sellPrice));
			}
		}
		
		
		this.res.ress.sell4.addEventListener("mouseover", sellpp4.bind(this));
		function sellpp4() {
			this.popupSale.visible = true;
			this.popupSale.x = this.res.ress.sell4.x + 600;
			this.popupSale.y = this.res.ress.sell4.y + 40 - shiftY*0.252;
			sellCh = 3;
		}
		
		
		this.res.ress.sell4.addEventListener("mouseout", sellppo4.bind(this));
		function sellppo4() {
			this.popupSale.visible = false;
		}
		
		this.res.ress.sell5.addEventListener("click", sellR5.bind(this));
		function sellR5() {
			if (sellPart == 1) {
				if (resources[4].gte(1)) {
					resources[4] = resources[4].sub(1);
					money = money.plus(costs[4].times(sellPrice));
				}
			}
			else if (sellPart == 2) {
				var part = resources[4].times(0.1).ceil();
				resources[4] = resources[4].sub(part);
				money = money.plus(costs[4].times(part).times(sellPrice));
			}
			else if (sellPart == 3) {
				var part = resources[4].times(0.5).ceil();
				resources[4] = resources[4].sub(part);
				money = money.plus(costs[4].times(part).times(sellPrice));
			}
			else if (sellPart == 4) {
				var part = resources[4];
				resources[4] = resources[4].sub(part);
				money = money.plus(costs[4].times(part).times(sellPrice));
			}
		}
		
		
		this.res.ress.sell5.addEventListener("mouseover", sellpp5.bind(this));
		function sellpp5() {
			this.popupSale.visible = true;
			this.popupSale.x = this.res.ress.sell5.x + 600;
			this.popupSale.y = this.res.ress.sell5.y + 40 - shiftY*0.252;
			sellCh = 4;
		}
		
		
		this.res.ress.sell5.addEventListener("mouseout", sellppo5.bind(this));
		function sellppo5() {
			this.popupSale.visible = false;
		}
		
		this.res.ress.sell6.addEventListener("click", sellR6.bind(this));
		function sellR6() {
			if (sellPart == 1) {
				if (resources[5].gte(1)) {
					resources[5] = resources[5].sub(1);
					money = money.plus(costs[5].times(sellPrice));
				}
			}
			else if (sellPart == 2) {
				var part = resources[5].times(0.1).ceil();
				resources[5] = resources[5].sub(part);
				money = money.plus(costs[5].times(part).times(sellPrice));
			}
			else if (sellPart == 3) {
				var part = resources[5].times(0.5).ceil();
				resources[5] = resources[5].sub(part);
				money = money.plus(costs[5].times(part).times(sellPrice));
			}
			else if (sellPart == 4) {
				var part = resources[5];
				resources[5] = resources[5].sub(part);
				money = money.plus(costs[5].times(part).times(sellPrice));
			}
		}
		
		
		this.res.ress.sell6.addEventListener("mouseover", sellpp6.bind(this));
		function sellpp6() {
			this.popupSale.visible = true;
			this.popupSale.x = this.res.ress.sell6.x + 600;
			this.popupSale.y = this.res.ress.sell6.y + 40 - shiftY*0.252;
			sellCh = 5;
		}
		
		
		this.res.ress.sell6.addEventListener("mouseout", sellppo6.bind(this));
		function sellppo6() {
			this.popupSale.visible = false;
		}
		
		
		this.res.ress.sell7.addEventListener("click", sellR7.bind(this));
		function sellR7() {
			if (sellPart == 1) {
				if (resources[6].gte(1)) {
					resources[6] = resources[6].sub(1);
					money = money.plus(costs[6].times(sellPrice));
				}
			}
			else if (sellPart == 2) {
				var part = resources[6].times(0.1).ceil();
				resources[6] = resources[6].sub(part);
				money = money.plus(costs[6].times(part).times(sellPrice));
			}
			else if (sellPart == 3) {
				var part = resources[6].times(0.5).ceil();
				resources[6] = resources[6].sub(part);
				money = money.plus(costs[6].times(part).times(sellPrice));
			}
			else if (sellPart == 4) {
				var part = resources[6];
				resources[6] = resources[6].sub(part);
				money = money.plus(costs[6].times(part).times(sellPrice));
			}
		}
		
		
		this.res.ress.sell7.addEventListener("mouseover", sellpp7.bind(this));
		function sellpp7() {
			this.popupSale.visible = true;
			this.popupSale.x = this.res.ress.sell7.x + 600;
			this.popupSale.y = this.res.ress.sell7.y + 40 - shiftY*0.252;
			sellCh = 6;
		}
		
		
		this.res.ress.sell7.addEventListener("mouseout", sellppo7.bind(this));
		function sellppo7() {
			this.popupSale.visible = false;
		}
		
		this.res.ress.sell8.addEventListener("click", sellR8.bind(this));
		function sellR8() {
			if (sellPart == 1) {
				if (resources[7].gte(1)) {
					resources[7] = resources[7].sub(1);
					money = money.plus(costs[7].times(sellPrice));
				}
			}
			else if (sellPart == 2) {
				var part = resources[7].times(0.1).ceil();
				resources[7] = resources[7].sub(part);
				money = money.plus(costs[7].times(part).times(sellPrice));
			}
			else if (sellPart == 3) {
				var part = resources[7].times(0.5).ceil();
				resources[7] = resources[7].sub(part);
				money = money.plus(costs[7].times(part).times(sellPrice));
			}
			else if (sellPart == 4) {
				var part = resources[7];
				resources[7] = resources[7].sub(part);
				money = money.plus(costs[7].times(part).times(sellPrice));
			}
		}
		
		
		this.res.ress.sell8.addEventListener("mouseover", sellpp8.bind(this));
		function sellpp8() {
			this.popupSale.visible = true;
			this.popupSale.x = this.res.ress.sell8.x + 600;
			this.popupSale.y = this.res.ress.sell8.y + 40 - shiftY*0.252;
			sellCh = 7;
		}
		
		
		this.res.ress.sell8.addEventListener("mouseout", sellppo8.bind(this));
		function sellppo8() {
			this.popupSale.visible = false;
		}
		
		
		this.res.ress.sell9.addEventListener("click", sellR9.bind(this));
		function sellR9() {
			if (sellPart == 1) {
				if (resources[8].gte(1)) {
					resources[8] = resources[8].sub(1);
					money = money.plus(costs[8].times(sellPrice));
				}
			}
			else if (sellPart == 2) {
				var part = resources[8].times(0.1).ceil();
				resources[8] = resources[8].sub(part);
				money = money.plus(costs[8].times(part).times(sellPrice));
			}
			else if (sellPart == 3) {
				var part = resources[8].times(0.5).ceil();
				resources[8] = resources[8].sub(part);
				money = money.plus(costs[8].times(part).times(sellPrice));
			}
			else if (sellPart == 4) {
				var part = resources[8];
				resources[8] = resources[8].sub(part);
				money = money.plus(costs[8].times(part).times(sellPrice));
			}
		}
		
		
		this.res.ress.sell9.addEventListener("mouseover", sellpp9.bind(this));
		function sellpp9() {
			this.popupSale.visible = true;
			this.popupSale.x = this.res.ress.sell9.x + 600;
			this.popupSale.y = this.res.ress.sell9.y + 40 - shiftY*0.252;
			sellCh = 8;
		}
		
		
		this.res.ress.sell9.addEventListener("mouseout", sellppo9.bind(this));
		function sellppo9() {
			this.popupSale.visible = false;
		}
		
		this.res.ress.sell10.addEventListener("click", sellR10.bind(this));
		function sellR10() {
			if (sellPart == 1) {
				if (resources[9].gte(1)) {
					resources[9] = resources[9].sub(1);
					money = money.plus(costs[9].times(sellPrice));
				}
			}
			else if (sellPart == 2) {
				var part = resources[9].times(0.1).ceil();
				resources[9] = resources[9].sub(part);
				money = money.plus(costs[9].times(part).times(sellPrice));
			}
			else if (sellPart == 3) {
				var part = resources[9].times(0.5).ceil();
				resources[9] = resources[9].sub(part);
				money = money.plus(costs[9].times(part).times(sellPrice));
			}
			else if (sellPart == 4) {
				var part = resources[9];
				resources[9] = resources[9].sub(part);
				money = money.plus(costs[9].times(part).times(sellPrice));
			}
		}
		
		
		this.res.ress.sell10.addEventListener("mouseover", sellpp10.bind(this));
		function sellpp10() {
			this.popupSale.visible = true;
			this.popupSale.x = this.res.ress.sell10.x + 600;
			this.popupSale.y = this.res.ress.sell10.y + 40 - shiftY*0.252;
			sellCh = 9;
		}
		
		
		this.res.ress.sell10.addEventListener("mouseout", sellppo10.bind(this));
		function sellppo10() {
			this.popupSale.visible = false;
		}
		
		
		this.res.ress.sell11.addEventListener("click", sellR11.bind(this));
		function sellR11() {
			if (sellPart == 1) {
				if (resources[10].gte(1)) {
					resources[10] = resources[10].sub(1);
					money = money.plus(costs[10].times(sellPrice));
				}
			}
			else if (sellPart == 2) {
				var part = resources[10].times(0.1).ceil();
				resources[10] = resources[10].sub(part);
				money = money.plus(costs[10].times(part).times(sellPrice));
			}
			else if (sellPart == 3) {
				var part = resources[10].times(0.5).ceil();
				resources[10] = resources[10].sub(part);
				money = money.plus(costs[10].times(part).times(sellPrice));
			}
			else if (sellPart == 4) {
				var part = resources[10];
				resources[10] = resources[10].sub(part);
				money = money.plus(costs[10].times(part).times(sellPrice));
			}
		}
		
		
		this.res.ress.sell11.addEventListener("mouseover", sellpp11.bind(this));
		function sellpp11() {
			this.popupSale.visible = true;
			this.popupSale.x = this.res.ress.sell11.x + 600;
			this.popupSale.y = this.res.ress.sell11.y + 40 - shiftY*0.252;
			sellCh = 10;
		}
		
		
		this.res.ress.sell11.addEventListener("mouseout", sellppo11.bind(this));
		function sellppo11() {
			this.popupSale.visible = false;
		}
		
		
		this.res.ress.sell12.addEventListener("click", sellR12.bind(this));
		function sellR12() {
			if (sellPart == 1) {
				if (resources[11].gte(1)) {
					resources[11] = resources[11].sub(1);
					money = money.plus(costs[11].times(sellPrice));
				}
			}
			else if (sellPart == 2) {
				var part = resources[11].times(0.1).ceil();
				resources[11] = resources[11].sub(part);
				money = money.plus(costs[11].times(part).times(sellPrice));
			}
			else if (sellPart == 3) {
				var part = resources[11].times(0.5).ceil();
				resources[11] = resources[11].sub(part);
				money = money.plus(costs[11].times(part).times(sellPrice));
			}
			else if (sellPart == 4) {
				var part = resources[11];
				resources[11] = resources[11].sub(part);
				money = money.plus(costs[11].times(part).times(sellPrice));
			}
		}
		
		
		this.res.ress.sell12.addEventListener("mouseover", sellpp12.bind(this));
		function sellpp12() {
			this.popupSale.visible = true;
			this.popupSale.x = this.res.ress.sell12.x + 600;
			this.popupSale.y = this.res.ress.sell12.y + 40 - shiftY*0.252;
			sellCh = 11;
		}
		
		
		this.res.ress.sell12.addEventListener("mouseout", sellppo12.bind(this));
		function sellppo12() {
			this.popupSale.visible = false;
		}
		
		
		this.res.ress.sell13.addEventListener("click", sellR13.bind(this));
		function sellR13() {
			if (sellPart == 1) {
				if (resources[12].gte(1)) {
					resources[12] = resources[12].sub(1);
					money = money.plus(costs[12].times(sellPrice));
				}
			}
			else if (sellPart == 2) {
				var part = resources[12].times(0.1).ceil();
				resources[12] = resources[12].sub(part);
				money = money.plus(costs[12].times(part).times(sellPrice));
			}
			else if (sellPart == 3) {
				var part = resources[12].times(0.5).ceil();
				resources[12] = resources[12].sub(part);
				money = money.plus(costs[12].times(part).times(sellPrice));
			}
			else if (sellPart == 4) {
				var part = resources[12];
				resources[12] = resources[12].sub(part);
				money = money.plus(costs[12].times(part).times(sellPrice));
			}
		}
		
		
		this.res.ress.sell13.addEventListener("mouseover", sellpp13.bind(this));
		function sellpp13() {
			this.popupSale.visible = true;
			this.popupSale.x = this.res.ress.sell13.x + 600;
			this.popupSale.y = this.res.ress.sell13.y + 40 - shiftY*0.252;
			sellCh = 12;
		}
		
		
		this.res.ress.sell13.addEventListener("mouseout", sellppo13.bind(this));
		function sellppo13() {
			this.popupSale.visible = false;
		}
		
		
		this.res.ress.sell14.addEventListener("click", sellR14.bind(this));
		function sellR14() {
			if (sellPart == 1) {
				if (resources[13].gte(1)) {
					resources[13] = resources[13].sub(1);
					money = money.plus(costs[13].times(sellPrice));
				}
			}
			else if (sellPart == 2) {
				var part = resources[13].times(0.1).ceil();
				resources[13] = resources[13].sub(part);
				money = money.plus(costs[13].times(part).times(sellPrice));
			}
			else if (sellPart == 3) {
				var part = resources[13].times(0.5).ceil();
				resources[13] = resources[13].sub(part);
				money = money.plus(costs[13].times(part).times(sellPrice));
			}
			else if (sellPart == 4) {
				var part = resources[13];
				resources[13] = resources[13].sub(part);
				money = money.plus(costs[13].times(part).times(sellPrice));
			}
		}
		
		
		this.res.ress.sell14.addEventListener("mouseover", sellpp14.bind(this));
		function sellpp14() {
			this.popupSale.visible = true;
			this.popupSale.x = this.res.ress.sell14.x + 600;
			this.popupSale.y = this.res.ress.sell14.y + 40 - shiftY*0.252;
			sellCh = 13;
		}
		
		
		this.res.ress.sell14.addEventListener("mouseout", sellppo14.bind(this));
		function sellppo14() {
			this.popupSale.visible = false;
		}
		
		
		this.res.ress.sell15.addEventListener("click", sellR15.bind(this));
		function sellR15() {
			if (sellPart == 1) {
				if (resources[14].gte(1)) {
					resources[14] = resources[14].sub(1);
					money = money.plus(costs[14].times(sellPrice));
				}
			}
			else if (sellPart == 2) {
				var part = resources[14].times(0.1).ceil();
				resources[14] = resources[14].sub(part);
				money = money.plus(costs[14].times(part).times(sellPrice));
			}
			else if (sellPart == 3) {
				var part = resources[14].times(0.5).ceil();
				resources[14] = resources[14].sub(part);
				money = money.plus(costs[14].times(part).times(sellPrice));
			}
			else if (sellPart == 4) {
				var part = resources[14];
				resources[14] = resources[14].sub(part);
				money = money.plus(costs[14].times(part).times(sellPrice));
			}
		}
		
		
		this.res.ress.sell15.addEventListener("mouseover", sellpp15.bind(this));
		function sellpp15() {
			this.popupSale.visible = true;
			this.popupSale.x = this.res.ress.sell15.x + 600;
			this.popupSale.y = this.res.ress.sell15.y + 40 - shiftY*0.252;
			sellCh = 14;
		}
		
		
		this.res.ress.sell15.addEventListener("mouseout", sellppo15.bind(this));
		function sellppo15() {
			this.popupSale.visible = false;
		}
		
		
		this.res.ress.sell16.addEventListener("click", sellR16.bind(this));
		function sellR16() {
			if (sellPart == 1) {
				if (resources[15].gte(1)) {
					resources[15] = resources[15].sub(1);
					money = money.plus(costs[15].times(sellPrice));
				}
			}
			else if (sellPart == 2) {
				var part = resources[15].times(0.1).ceil();
				resources[15] = resources[15].sub(part);
				money = money.plus(costs[15].times(part).times(sellPrice));
			}
			else if (sellPart == 3) {
				var part = resources[15].times(0.5).ceil();
				resources[15] = resources[15].sub(part);
				money = money.plus(costs[15].times(part).times(sellPrice));
			}
			else if (sellPart == 4) {
				var part = resources[15];
				resources[15] = resources[15].sub(part);
				money = money.plus(costs[15].times(part).times(sellPrice));
			}
		}
		
		
		this.res.ress.sell16.addEventListener("mouseover", sellpp16.bind(this));
		function sellpp16() {
			this.popupSale.visible = true;
			this.popupSale.x = this.res.ress.sell16.x + 600;
			this.popupSale.y = this.res.ress.sell16.y + 40 - shiftY*0.252;
			sellCh = 15;
		}
		
		
		this.res.ress.sell16.addEventListener("mouseout", sellppo16.bind(this));
		function sellppo16() {
			this.popupSale.visible = false;
		}
		
		
		this.res.ress.sell17.addEventListener("click", sellR17.bind(this));
		function sellR17() {
			if (sellPart == 1) {
				if (resources[16].gte(1)) {
					resources[16] = resources[16].sub(1);
					money = money.plus(costs[16].times(sellPrice));
				}
			}
			else if (sellPart == 2) {
				var part = resources[16].times(0.1).ceil();
				resources[16] = resources[16].sub(part);
				money = money.plus(costs[16].times(part).times(sellPrice));
			}
			else if (sellPart == 3) {
				var part = resources[16].times(0.5).ceil();
				resources[16] = resources[16].sub(part);
				money = money.plus(costs[16].times(part).times(sellPrice));
			}
			else if (sellPart == 4) {
				var part = resources[16];
				resources[16] = resources[16].sub(part);
				money = money.plus(costs[16].times(part).times(sellPrice));
			}
		}
		
		
		this.res.ress.sell17.addEventListener("mouseover", sellpp17.bind(this));
		function sellpp17() {
			this.popupSale.visible = true;
			this.popupSale.x = this.res.ress.sell17.x + 600;
			this.popupSale.y = this.res.ress.sell17.y + 40 - shiftY*0.252;
			sellCh = 16;
		}
		
		
		this.res.ress.sell17.addEventListener("mouseout", sellppo17.bind(this));
		function sellppo17() {
			this.popupSale.visible = false;
		}
		
		
		this.res.ress.sell18.addEventListener("click", sellR18.bind(this));
		function sellR18() {
			if (sellPart == 1) {
				if (resources[17].gte(1)) {
					resources[17] = resources[17].sub(1);
					money = money.plus(costs[17].times(sellPrice));
				}
			}
			else if (sellPart == 2) {
				var part = resources[17].times(0.1).ceil();
				resources[17] = resources[17].sub(part);
				money = money.plus(costs[17].times(part).times(sellPrice));
			}
			else if (sellPart == 3) {
				var part = resources[17].times(0.5).ceil();
				resources[17] = resources[17].sub(part);
				money = money.plus(costs[17].times(part).times(sellPrice));
			}
			else if (sellPart == 4) {
				var part = resources[17];
				resources[17] = resources[17].sub(part);
				money = money.plus(costs[17].times(part).times(sellPrice));
			}
		}
		
		
		this.res.ress.sell18.addEventListener("mouseover", sellpp18.bind(this));
		function sellpp18() {
			this.popupSale.visible = true;
			this.popupSale.x = this.res.ress.sell18.x + 600;
			this.popupSale.y = this.res.ress.sell18.y + 40 - shiftY*0.252;
			sellCh = 17;
		}
		
		
		this.res.ress.sell18.addEventListener("mouseout", sellppo18.bind(this));
		function sellppo18() {
			this.popupSale.visible = false;
		}
		
		
		this.res.ress.sell19.addEventListener("click", sellR19.bind(this));
		function sellR19() {
			if (sellPart == 1) {
				if (resources[18].gte(1)) {
					resources[18] = resources[18].sub(1);
					money = money.plus(costs[18].times(sellPrice));
				}
			}
			else if (sellPart == 2) {
				var part = resources[18].times(0.1).ceil();
				resources[18] = resources[18].sub(part);
				money = money.plus(costs[18].times(part).times(sellPrice));
			}
			else if (sellPart == 3) {
				var part = resources[18].times(0.5).ceil();
				resources[18] = resources[18].sub(part);
				money = money.plus(costs[18].times(part).times(sellPrice));
			}
			else if (sellPart == 4) {
				var part = resources[18];
				resources[18] = resources[18].sub(part);
				money = money.plus(costs[18].times(part).times(sellPrice));
			}
		}
		
		
		this.res.ress.sell19.addEventListener("mouseover", sellpp19.bind(this));
		function sellpp19() {
			this.popupSale.visible = true;
			this.popupSale.x = this.res.ress.sell19.x + 600;
			this.popupSale.y = this.res.ress.sell19.y + 40 - shiftY*0.252;
			sellCh = 18;
		}
		
		
		this.res.ress.sell19.addEventListener("mouseout", sellppo19.bind(this));
		function sellppo19() {
			this.popupSale.visible = false;
		}
		
		
		this.res.ress.sell20.addEventListener("click", sellR20.bind(this));
		function sellR20() {
			if (sellPart == 1) {
				if (resources[19].gte(1)) {
					resources[19] = resources[19].sub(1);
					money = money.plus(costs[19].times(sellPrice));
				}
			}
			else if (sellPart == 2) {
				var part = resources[19].times(0.1).ceil();
				resources[19] = resources[19].sub(part);
				money = money.plus(costs[19].times(part).times(sellPrice));
			}
			else if (sellPart == 3) {
				var part = resources[19].times(0.5).ceil();
				resources[19] = resources[19].sub(part);
				money = money.plus(costs[19].times(part).times(sellPrice));
			}
			else if (sellPart == 4) {
				var part = resources[19];
				resources[19] = resources[19].sub(part);
				money = money.plus(costs[19].times(part).times(sellPrice));
			}
		}
		
		
		this.res.ress.sell20.addEventListener("mouseover", sellpp20.bind(this));
		function sellpp20() {
			this.popupSale.visible = true;
			this.popupSale.x = this.res.ress.sell20.x + 600;
			this.popupSale.y = this.res.ress.sell20.y + 40 - shiftY*0.252;
			sellCh = 19;
		}
		
		
		this.res.ress.sell20.addEventListener("mouseout", sellppo20.bind(this));
		function sellppo20() {
			this.popupSale.visible = false;
		}
		
		
		this.res.ress.sell21.addEventListener("click", sellR21.bind(this));
		function sellR21() {
			if (sellPart == 1) {
				if (resources[20].gte(1)) {
					resources[20] = resources[20].sub(1);
					money = money.plus(costs[20].times(sellPrice));
				}
			}
			else if (sellPart == 2) {
				var part = resources[20].times(0.1).ceil();
				resources[20] = resources[20].sub(part);
				money = money.plus(costs[20].times(part).times(sellPrice));
			}
			else if (sellPart == 3) {
				var part = resources[20].times(0.5).ceil();
				resources[20] = resources[20].sub(part);
				money = money.plus(costs[20].times(part).times(sellPrice));
			}
			else if (sellPart == 4) {
				var part = resources[20];
				resources[20] = resources[20].sub(part);
				money = money.plus(costs[20].times(part).times(sellPrice));
			}
		}
		
		
		this.res.ress.sell21.addEventListener("mouseover", sellpp21.bind(this));
		function sellpp21() {
			this.popupSale.visible = true;
			this.popupSale.x = this.res.ress.sell21.x + 600;
			this.popupSale.y = this.res.ress.sell21.y + 40 - shiftY*0.252;
			sellCh = 20;
		}
		
		
		this.res.ress.sell21.addEventListener("mouseout", sellppo21.bind(this));
		function sellppo21() {
			this.popupSale.visible = false;
		}
		
		
		this.res.ress.sell22.addEventListener("click", sellR22.bind(this));
		function sellR22() {
			if (sellPart == 1) {
				if (resources[21].gte(1)) {
					resources[21] = resources[21].sub(1);
					money = money.plus(costs[21].times(sellPrice));
				}
			}
			else if (sellPart == 2) {
				var part = resources[21].times(0.1).ceil();
				resources[21] = resources[21].sub(part);
				money = money.plus(costs[21].times(part).times(sellPrice));
			}
			else if (sellPart == 3) {
				var part = resources[21].times(0.5).ceil();
				resources[21] = resources[21].sub(part);
				money = money.plus(costs[21].times(part).times(sellPrice));
			}
			else if (sellPart == 4) {
				var part = resources[21];
				resources[21] = resources[21].sub(part);
				money = money.plus(costs[21].times(part).times(sellPrice));
			}
		}
		
		
		this.res.ress.sell22.addEventListener("mouseover", sellpp22.bind(this));
		function sellpp22() {
			this.popupSale.visible = true;
			this.popupSale.x = this.res.ress.sell22.x + 600;
			this.popupSale.y = this.res.ress.sell22.y + 40 - shiftY*0.252;
			sellCh = 21;
		}
		
		
		this.res.ress.sell22.addEventListener("mouseout", sellppo22.bind(this));
		function sellppo22() {
			this.popupSale.visible = false;
		}
		
		
		this.res.ress.sell23.addEventListener("click", sellR23.bind(this));
		function sellR23() {
			if (sellPart == 1) {
				if (resources[22].gte(1)) {
					resources[22] = resources[22].sub(1);
					money = money.plus(costs[22].times(sellPrice));
				}
			}
			else if (sellPart == 2) {
				var part = resources[22].times(0.1).ceil();
				resources[22] = resources[22].sub(part);
				money = money.plus(costs[22].times(part).times(sellPrice));
			}
			else if (sellPart == 3) {
				var part = resources[22].times(0.5).ceil();
				resources[22] = resources[22].sub(part);
				money = money.plus(costs[22].times(part).times(sellPrice));
			}
			else if (sellPart == 4) {
				var part = resources[22];
				resources[22] = resources[22].sub(part);
				money = money.plus(costs[22].times(part).times(sellPrice));
			}
		}
		
		
		this.res.ress.sell23.addEventListener("mouseover", sellpp23.bind(this));
		function sellpp23() {
			this.popupSale.visible = true;
			this.popupSale.x = this.res.ress.sell23.x + 600;
			this.popupSale.y = this.res.ress.sell23.y + 40 - shiftY*0.252;
			sellCh = 22;
		}
		
		
		this.res.ress.sell23.addEventListener("mouseout", sellppo23.bind(this));
		function sellppo23() {
			this.popupSale.visible = false;
		}
		
		
		this.res.ress.sell24.addEventListener("click", sellR24.bind(this));
		function sellR24() {
			if (sellPart == 1) {
				if (resources[23].gte(1)) {
					resources[23] = resources[23].sub(1);
					money = money.plus(costs[23].times(sellPrice));
				}
			}
			else if (sellPart == 2) {
				var part = resources[23].times(0.1).ceil();
				resources[23] = resources[23].sub(part);
				money = money.plus(costs[23].times(part).times(sellPrice));
			}
			else if (sellPart == 3) {
				var part = resources[23].times(0.5).ceil();
				resources[23] = resources[23].sub(part);
				money = money.plus(costs[23].times(part).times(sellPrice));
			}
			else if (sellPart == 4) {
				var part = resources[23];
				resources[23] = resources[23].sub(part);
				money = money.plus(costs[23].times(part).times(sellPrice));
			}
		}
		
		
		this.res.ress.sell24.addEventListener("mouseover", sellpp24.bind(this));
		function sellpp24() {
			this.popupSale.visible = true;
			this.popupSale.x = this.res.ress.sell24.x + 600;
			this.popupSale.y = this.res.ress.sell24.y + 40 - shiftY*0.252;
			sellCh = 23;
		}
		
		
		this.res.ress.sell24.addEventListener("mouseout", sellppo24.bind(this));
		function sellppo24() {
			this.popupSale.visible = false;
		}
		
		
		this.res.ress.sell25.addEventListener("click", sellR25.bind(this));
		function sellR25() {
			if (sellPart == 1) {
				if (resources[24].gte(1)) {
					resources[24] = resources[24].sub(1);
					money = money.plus(costs[24].times(sellPrice));
				}
			}
			else if (sellPart == 2) {
				var part = resources[24].times(0.1).ceil();
				resources[24] = resources[24].sub(part);
				money = money.plus(costs[24].times(part).times(sellPrice));
			}
			else if (sellPart == 3) {
				var part = resources[24].times(0.5).ceil();
				resources[24] = resources[24].sub(part);
				money = money.plus(costs[24].times(part).times(sellPrice));
			}
			else if (sellPart == 4) {
				var part = resources[24];
				resources[24] = resources[24].sub(part);
				money = money.plus(costs[24].times(part).times(sellPrice));
			}
		}
		
		
		this.res.ress.sell25.addEventListener("mouseover", sellpp25.bind(this));
		function sellpp25() {
			this.popupSale.visible = true;
			this.popupSale.x = this.res.ress.sell25.x + 600;
			this.popupSale.y = this.res.ress.sell25.y + 40 - shiftY*0.252;
			sellCh = 24;
		}
		
		
		this.res.ress.sell25.addEventListener("mouseout", sellppo25.bind(this));
		function sellppo25() {
			this.popupSale.visible = false;
		}
		
		this.upTier.addEventListener("click", upTTT.bind(this));
		function upTTT() {
			craftLv += 1;
		}
		
		this.downTier.addEventListener("click", downTTT.bind(this));
		function downTTT() {
			craftLv -= 1;
		}
		
		
		this.upCrys.addEventListener("click", upCCC.bind(this));
		function upCCC() {
			craftCr = craftCr.plus(1);
		}
		
		this.downCrys.addEventListener("click", downCCC.bind(this));
		function downCCC() {
			craftCr = craftCr.sub(1);
		}
		
		this.forgeBt.addEventListener("click", forgeTT.bind(this));
		function forgeTT() {
			freePlace = 0;
			for (var i = 0 ; i < 16 ; ++i) {
				if (inventory[i].speed == 0) {
					freePlace += 1;
				}
			}
			
			firstFree = 0
			if (freePlace > 0) {
				while (inventory[firstFree].speed != 0) {
					firstFree += 1;
				}
			}
			
			
			if (money.gte(craftCost) && resources[Math.min(24, craftLv)].gte(nd(10).times(infMult2)) && crystals.gte(craftCr) && freePlace > 0) {
				money = money.sub(craftCost);
				resources[Math.min(24, craftLv)] = resources[Math.min(24, craftLv)].sub(nd(10).times(infMult2));
				crystals = crystals.sub(craftCr);
				
				var maxRand = 0;
				
				for (var i = 0 ; i < craftCr ; ++i) {
					var mr = Math.random();
					
					mr = Math.pow(mr, Math.pow(0.98, betterCraft.toNumber()));
					
					
					if (mr < 0.99) {
						mr = Math.ceil(mr*100);
					}
					else {
						mr = 1 / (1 - mr);
					}
					
					
					if (mr > maxRand) {
						maxRand = mr;
					}
				}
				
				
				
				var newPix = new pix(craftLv, maxRand , (0.5+Math.random()*1.5)/betterSpd);
				
				inventory[firstFree] = newPix;
				
			}
			
		}
		
		
		
		
		this.eqB.addEventListener("click", setEq.bind(this));
		function setEq() {
			equip = true;
		}
		
		
		this.sellB.addEventListener("click", setEqno.bind(this));
		function setEqno() {
			equip = false;
		}
		
		
		var curInv = 0;
		
		this.addEventListener("tick", main_inv.bind(this));
		function main_inv() {
			this.popupEq.dmg.text = "伤害: " + format(inventory[curInv].damage);
			this.popupEq.dps.text = "DPS: " + format(inventory[curInv].dps);
			this.popupEq.spd.text = "速度: " + Math.round(inventory[curInv].speed*100)/100 + "s";
			
			this.popupEq.sellfor.text = "出售得到 " + format(itemsCosts[curInv]) + " $";
		}
		
		
		
		this.inv1.hov.addEventListener("click", eqOrSell1.bind(this));
		function eqOrSell1() {
			if (equip && inventory[0].speed != 0) {
				var item1 = new pix(pick.level, pick.rarity, pick.speed);
				var item2 = new pix(inventory[0].level, inventory[0].rarity, inventory[0].speed);
				
				inventory[0] = item1;
				pick = item2;
				
			}
			else {
				money = money.plus(itemsCosts[0]);
				inventory[0].speed = 0;
			}
		}
		
		
		
		this.inv1.hov.addEventListener("mouseover", showEq1.bind(this));
		function showEq1() {
			if (inventory[0].speed != 0) {
				this.popupEq.visible = true;
				this.popupEq.x = this.inv1.x - 60;
				this.popupEq.y = this.inv1.y - 87;
				curInv = 0;
			}
		}
		
		this.inv1.hov.addEventListener("mouseout", hideEq1.bind(this));
		function hideEq1() {
			this.popupEq.visible = false;
		}
		
		
		this.inv2.hov.addEventListener("click", eqOrSell2.bind(this));
		function eqOrSell2() {
			if (equip && inventory[1].speed != 0) {
				var item1 = new pix(pick.level, pick.rarity, pick.speed);
				var item2 = new pix(inventory[1].level, inventory[1].rarity, inventory[1].speed);
				
				inventory[1] = item1;
				pick = item2;
				
			}
			else {
				money = money.plus(itemsCosts[1]);
				inventory[1].speed = 0;
			}
		}
		
		
		this.inv2.hov.addEventListener("mouseover", showEq2.bind(this));
		function showEq2() {
			if (inventory[1].speed != 0) {
				this.popupEq.visible = true;
				this.popupEq.x = this.inv2.x - 60;
				this.popupEq.y = this.inv2.y - 87;
				curInv = 1;
			}
		}
		
		this.inv2.hov.addEventListener("mouseout", hideEq2.bind(this));
		function hideEq2() {
			this.popupEq.visible = false;
		}
		
		
		
		this.inv3.hov.addEventListener("click", eqOrSell3.bind(this));
		function eqOrSell3() {
			if (equip && inventory[2].speed != 0) {
				var item1 = new pix(pick.level, pick.rarity, pick.speed);
				var item2 = new pix(inventory[2].level, inventory[2].rarity, inventory[2].speed);
				
				inventory[2] = item1;
				pick = item2;
				
			}
			else {
				money = money.plus(itemsCosts[2]);
				inventory[2].speed = 0;
			}
		}
		
		
		this.inv3.hov.addEventListener("mouseover", showEq3.bind(this));
		function showEq3() {
			if (inventory[2].speed != 0) {
				this.popupEq.visible = true;
				this.popupEq.x = this.inv3.x - 60;
				this.popupEq.y = this.inv3.y - 87;
				curInv = 2;
			}
		}
		
		this.inv3.hov.addEventListener("mouseout", hideEq3.bind(this));
		function hideEq3() {
			this.popupEq.visible = false;
		}
		
		
		
		
		
		this.inv4.hov.addEventListener("click", eqOrSell4.bind(this));
		function eqOrSell4() {
			if (equip && inventory[3].speed != 0) {
				var item1 = new pix(pick.level, pick.rarity, pick.speed);
				var item2 = new pix(inventory[3].level, inventory[3].rarity, inventory[3].speed);
				
				inventory[3] = item1;
				pick = item2;
				
			}
			else {
				money = money.plus(itemsCosts[3]);
				inventory[3].speed = 0;
			}
		}
		
		
		this.inv4.hov.addEventListener("mouseover", showEq4.bind(this));
		function showEq4() {
			if (inventory[3].speed != 0) {
				this.popupEq.visible = true;
				this.popupEq.x = this.inv4.x - 60;
				this.popupEq.y = this.inv4.y - 87;
				curInv = 3;
			}
		}
		
		this.inv4.hov.addEventListener("mouseout", hideEq4.bind(this));
		function hideEq4() {
			this.popupEq.visible = false;
		}
		
		
		
		
		this.inv5.hov.addEventListener("click", eqOrSell5.bind(this));
		function eqOrSell5() {
			if (equip && inventory[4].speed != 0) {
				var item1 = new pix(pick.level, pick.rarity, pick.speed);
				var item2 = new pix(inventory[4].level, inventory[4].rarity, inventory[4].speed);
				
				inventory[4] = item1;
				pick = item2;
				
			}
			else {
				money = money.plus(itemsCosts[4]);
				inventory[4].speed = 0;
			}
		}
		
		
		this.inv5.hov.addEventListener("mouseover", showEq5.bind(this));
		function showEq5() {
			if (inventory[4].speed != 0) {
				this.popupEq.visible = true;
				this.popupEq.x = this.inv5.x - 60;
				this.popupEq.y = this.inv5.y - 87;
				curInv = 4;
			}
		}
		
		this.inv5.hov.addEventListener("mouseout", hideEq5.bind(this));
		function hideEq5() {
			this.popupEq.visible = false;
		}
		
		
		
		this.inv6.hov.addEventListener("click", eqOrSell6.bind(this));
		function eqOrSell6() {
			if (equip && inventory[5].speed != 0) {
				var item1 = new pix(pick.level, pick.rarity, pick.speed);
				var item2 = new pix(inventory[5].level, inventory[5].rarity, inventory[5].speed);
				
				inventory[5] = item1;
				pick = item2;
				
			}
			else {
				money = money.plus(itemsCosts[5]);
				inventory[5].speed = 0;
			}
		}
		
		
		this.inv6.hov.addEventListener("mouseover", showEq6.bind(this));
		function showEq6() {
			if (inventory[5].speed != 0) {
				this.popupEq.visible = true;
				this.popupEq.x = this.inv6.x - 60;
				this.popupEq.y = this.inv6.y - 87;
				curInv = 5;
			}
		}
		
		this.inv6.hov.addEventListener("mouseout", hideEq6.bind(this));
		function hideEq6() {
			this.popupEq.visible = false;
		}
		
		
		this.inv7.hov.addEventListener("click", eqOrSell7.bind(this));
		function eqOrSell7() {
			if (equip && inventory[6].speed != 0) {
				var item1 = new pix(pick.level, pick.rarity, pick.speed);
				var item2 = new pix(inventory[6].level, inventory[6].rarity, inventory[6].speed);
				
				inventory[6] = item1;
				pick = item2;
				
			}
			else {
				money = money.plus(itemsCosts[6]);
				inventory[6].speed = 0;
			}
		}
		
		
		this.inv7.hov.addEventListener("mouseover", showEq7.bind(this));
		function showEq7() {
			if (inventory[6].speed != 0) {
				this.popupEq.visible = true;
				this.popupEq.x = this.inv7.x - 60;
				this.popupEq.y = this.inv7.y - 87;
				curInv = 6;
			}
		}
		
		this.inv7.hov.addEventListener("mouseout", hideEq7.bind(this));
		function hideEq7() {
			this.popupEq.visible = false;
		}
		
		
		
		this.inv8.hov.addEventListener("click", eqOrSell8.bind(this));
		function eqOrSell8() {
			if (equip && inventory[7].speed != 0) {
				var item1 = new pix(pick.level, pick.rarity, pick.speed);
				var item2 = new pix(inventory[7].level, inventory[7].rarity, inventory[7].speed);
				
				inventory[7] = item1;
				pick = item2;
				
			}
			else {
				money = money.plus(itemsCosts[7]);
				inventory[7].speed = 0;
			}
		}
		
		
		this.inv8.hov.addEventListener("mouseover", showEq8.bind(this));
		function showEq8() {
			if (inventory[7].speed != 0) {
				this.popupEq.visible = true;
				this.popupEq.x = this.inv8.x - 60;
				this.popupEq.y = this.inv8.y - 87;
				curInv = 7;
			}
		}
		
		this.inv8.hov.addEventListener("mouseout", hideEq8.bind(this));
		function hideEq8() {
			this.popupEq.visible = false;
		}
		
		
		
		this.inv9.hov.addEventListener("click", eqOrSell9.bind(this));
		function eqOrSell9() {
			if (equip && inventory[8].speed != 0) {
				var item1 = new pix(pick.level, pick.rarity, pick.speed);
				var item2 = new pix(inventory[8].level, inventory[8].rarity, inventory[8].speed);
				
				inventory[8] = item1;
				pick = item2;
				
			}
			else {
				money = money.plus(itemsCosts[8]);
				inventory[8].speed = 0;
			}
		}
		
		
		this.inv9.hov.addEventListener("mouseover", showEq9.bind(this));
		function showEq9() {
			if (inventory[8].speed != 0) {
				this.popupEq.visible = true;
				this.popupEq.x = this.inv9.x - 60;
				this.popupEq.y = this.inv9.y - 87;
				curInv = 8;
			}
		}
		
		this.inv9.hov.addEventListener("mouseout", hideEq9.bind(this));
		function hideEq9() {
			this.popupEq.visible = false;
		}
		
		
		
		this.inv10.hov.addEventListener("click", eqOrSell10.bind(this));
		function eqOrSell10() {
			if (equip && inventory[9].speed != 0) {
				var item1 = new pix(pick.level, pick.rarity, pick.speed);
				var item2 = new pix(inventory[9].level, inventory[9].rarity, inventory[9].speed);
				
				inventory[9] = item1;
				pick = item2;
				
			}
			else {
				money = money.plus(itemsCosts[9]);
				inventory[9].speed = 0;
			}
		}
		
		
		this.inv10.hov.addEventListener("mouseover", showEq10.bind(this));
		function showEq10() {
			if (inventory[9].speed != 0) {
				this.popupEq.visible = true;
				this.popupEq.x = this.inv10.x - 60;
				this.popupEq.y = this.inv10.y - 87;
				curInv = 9;
			}
		}
		
		this.inv10.hov.addEventListener("mouseout", hideEq10.bind(this));
		function hideEq10() {
			this.popupEq.visible = false;
		}
		
		
		
		this.inv11.hov.addEventListener("click", eqOrSell11.bind(this));
		function eqOrSell11() {
			if (equip && inventory[10].speed != 0) {
				var item1 = new pix(pick.level, pick.rarity, pick.speed);
				var item2 = new pix(inventory[10].level, inventory[10].rarity, inventory[10].speed);
				
				inventory[10] = item1;
				pick = item2;
				
			}
			else {
				money = money.plus(itemsCosts[10]);
				inventory[10].speed = 0;
			}
		}
		
		
		this.inv11.hov.addEventListener("mouseover", showEq11.bind(this));
		function showEq11() {
			if (inventory[10].speed != 0) {
				this.popupEq.visible = true;
				this.popupEq.x = this.inv11.x - 60;
				this.popupEq.y = this.inv11.y - 87;
				curInv = 10;
			}
		}
		
		this.inv11.hov.addEventListener("mouseout", hideEq11.bind(this));
		function hideEq11() {
			this.popupEq.visible = false;
		}
		
		
		this.inv12.hov.addEventListener("click", eqOrSell12.bind(this));
		function eqOrSell12() {
			if (equip && inventory[11].speed != 0) {
				var item1 = new pix(pick.level, pick.rarity, pick.speed);
				var item2 = new pix(inventory[11].level, inventory[11].rarity, inventory[11].speed);
				
				inventory[11] = item1;
				pick = item2;
				
			}
			else {
				money = money.plus(itemsCosts[11]);
				inventory[11].speed = 0;
			}
		}
		
		
		this.inv12.hov.addEventListener("mouseover", showEq12.bind(this));
		function showEq12() {
			if (inventory[11].speed != 0) {
				this.popupEq.visible = true;
				this.popupEq.x = this.inv12.x - 60;
				this.popupEq.y = this.inv12.y - 87;
				curInv = 11;
			}
		}
		
		this.inv12.hov.addEventListener("mouseout", hideEq12.bind(this));
		function hideEq12() {
			this.popupEq.visible = false;
		}
		
		
		this.inv13.hov.addEventListener("click", eqOrSell13.bind(this));
		function eqOrSell13() {
			if (equip && inventory[12].speed != 0) {
				var item1 = new pix(pick.level, pick.rarity, pick.speed);
				var item2 = new pix(inventory[12].level, inventory[12].rarity, inventory[12].speed);
				
				inventory[12] = item1;
				pick = item2;
				
			}
			else {
				money = money.plus(itemsCosts[12]);
				inventory[12].speed = 0;
			}
		}
		
		
		this.inv13.hov.addEventListener("mouseover", showEq13.bind(this));
		function showEq13() {
			if (inventory[12].speed != 0) {
				this.popupEq.visible = true;
				this.popupEq.x = this.inv13.x - 60;
				this.popupEq.y = this.inv13.y - 87;
				curInv = 12;
			}
		}
		
		this.inv13.hov.addEventListener("mouseout", hideEq13.bind(this));
		function hideEq13() {
			this.popupEq.visible = false;
		}
		
		
		this.inv14.hov.addEventListener("click", eqOrSell14.bind(this));
		function eqOrSell14() {
			if (equip && inventory[13].speed != 0) {
				var item1 = new pix(pick.level, pick.rarity, pick.speed);
				var item2 = new pix(inventory[13].level, inventory[13].rarity, inventory[13].speed);
				
				inventory[13] = item1;
				pick = item2;
				
			}
			else {
				money = money.plus(itemsCosts[13]);
				inventory[13].speed = 0;
			}
		}
		
		
		this.inv14.hov.addEventListener("mouseover", showEq14.bind(this));
		function showEq14() {
			if (inventory[13].speed != 0) {
				this.popupEq.visible = true;
				this.popupEq.x = this.inv14.x - 60;
				this.popupEq.y = this.inv14.y - 87;
				curInv = 13;
			}
		}
		
		this.inv14.hov.addEventListener("mouseout", hideEq14.bind(this));
		function hideEq14() {
			this.popupEq.visible = false;
		}
		
		
		this.inv15.hov.addEventListener("click", eqOrSell15.bind(this));
		function eqOrSell15() {
			if (equip && inventory[14].speed != 0) {
				var item1 = new pix(pick.level, pick.rarity, pick.speed);
				var item2 = new pix(inventory[14].level, inventory[14].rarity, inventory[14].speed);
				
				inventory[14] = item1;
				pick = item2;
				
			}
			else {
				money = money.plus(itemsCosts[14]);
				inventory[14].speed = 0;
			}
		}
		
		
		this.inv15.hov.addEventListener("mouseover", showEq15.bind(this));
		function showEq15() {
			if (inventory[14].speed != 0) {
				this.popupEq.visible = true;
				this.popupEq.x = this.inv15.x - 60;
				this.popupEq.y = this.inv15.y - 87;
				curInv = 14;
			}
		}
		
		this.inv15.hov.addEventListener("mouseout", hideEq15.bind(this));
		function hideEq15() {
			this.popupEq.visible = false;
		}
		
		
		this.inv16.hov.addEventListener("click", eqOrSell16.bind(this));
		function eqOrSell16() {
			if (equip && inventory[15].speed != 0) {
				var item1 = new pix(pick.level, pick.rarity, pick.speed);
				var item2 = new pix(inventory[15].level, inventory[15].rarity, inventory[15].speed);
				
				inventory[15] = item1;
				pick = item2;
				
			}
			else {
				money = money.plus(itemsCosts[15]);
				inventory[15].speed = 0;
			}
		}
		
		
		this.inv16.hov.addEventListener("mouseover", showEq16.bind(this));
		function showEq16() {
			if (inventory[15].speed != 0) {
				this.popupEq.visible = true;
				this.popupEq.x = this.inv16.x - 60;
				this.popupEq.y = this.inv16.y - 87;
				curInv = 15;
			}
		}
		
		this.inv16.hov.addEventListener("mouseout", hideEq16.bind(this));
		function hideEq16() {
			this.popupEq.visible = false;
		}
		
		
		this.motivator.addEventListener("click", motiv.bind(this));
		function motiv() {
			if (cspd < 2) {
				cspd += 0.01;
			}
		}
		
		
		
		
		this.res.ress.icon1.addEventListener("mouseover", showName1.bind(this));
		function showName1() {
			this.popupName.visible = true;
			this.popupName.x = this.res.ress.icon1.x + 880;
			this.popupName.y = this.res.ress.icon1.y - shiftY*0.252;
			this.popupName.namee.text = matName(0);
		}
		
		
		this.res.ress.icon1.addEventListener("mouseout", hideName1.bind(this));
		function hideName1() {
			this.popupName.visible = false;
		}
		
		
		
		this.res.ress.icon2.addEventListener("mouseover", showName2.bind(this));
		function showName2() {
			this.popupName.visible = true;
			this.popupName.x = this.res.ress.icon2.x + 880;
			this.popupName.y = this.res.ress.icon2.y - shiftY*0.252;
			this.popupName.namee.text = matName(1);
		}
		
		
		this.res.ress.icon2.addEventListener("mouseout", hideName2.bind(this));
		function hideName2() {
			this.popupName.visible = false;
		}
		
		
		
		this.res.ress.icon3.addEventListener("mouseover", showName3.bind(this));
		function showName3() {
			this.popupName.visible = true;
			this.popupName.x = this.res.ress.icon3.x + 880;
			this.popupName.y = this.res.ress.icon3.y - shiftY*0.252;
			this.popupName.namee.text = matName(2);
		}
		
		
		this.res.ress.icon3.addEventListener("mouseout", hideName3.bind(this));
		function hideName3() {
			this.popupName.visible = false;
		}
		
		this.res.ress.icon4.addEventListener("mouseover", showName4.bind(this));
		function showName4() {
			this.popupName.visible = true;
			this.popupName.x = this.res.ress.icon4.x + 880;
			this.popupName.y = this.res.ress.icon4.y - shiftY*0.252;
			this.popupName.namee.text = matName(3);
		}
		
		
		this.res.ress.icon4.addEventListener("mouseout", hideName4.bind(this));
		function hideName4() {
			this.popupName.visible = false;
		}
		
		this.res.ress.icon5.addEventListener("mouseover", showName5.bind(this));
		function showName5() {
			this.popupName.visible = true;
			this.popupName.x = this.res.ress.icon5.x + 880;
			this.popupName.y = this.res.ress.icon5.y - shiftY*0.252;
			this.popupName.namee.text = matName(4);
		}
		
		
		this.res.ress.icon5.addEventListener("mouseout", hideName5.bind(this));
		function hideName5() {
			this.popupName.visible = false;
		}
		
		this.res.ress.icon6.addEventListener("mouseover", showName6.bind(this));
		function showName6() {
			this.popupName.visible = true;
			this.popupName.x = this.res.ress.icon6.x + 880;
			this.popupName.y = this.res.ress.icon6.y - shiftY*0.252;
			this.popupName.namee.text = matName(5);
		}
		
		
		this.res.ress.icon6.addEventListener("mouseout", hideName6.bind(this));
		function hideName6() {
			this.popupName.visible = false;
		}
		
		
		this.res.ress.icon7.addEventListener("mouseover", showName7.bind(this));
		function showName7() {
			this.popupName.visible = true;
			this.popupName.x = this.res.ress.icon7.x + 880;
			this.popupName.y = this.res.ress.icon7.y - shiftY*0.252;
			this.popupName.namee.text = matName(6);
		}
		
		
		this.res.ress.icon7.addEventListener("mouseout", hideName7.bind(this));
		function hideName7() {
			this.popupName.visible = false;
		}
		
		
		this.res.ress.icon8.addEventListener("mouseover", showName8.bind(this));
		function showName8() {
			this.popupName.visible = true;
			this.popupName.x = this.res.ress.icon8.x + 880;
			this.popupName.y = this.res.ress.icon8.y - shiftY*0.252;
			this.popupName.namee.text = matName(7);
		}
		
		
		this.res.ress.icon8.addEventListener("mouseout", hideName8.bind(this));
		function hideName8() {
			this.popupName.visible = false;
		}
		
		
		this.res.ress.icon9.addEventListener("mouseover", showName9.bind(this));
		function showName9() {
			this.popupName.visible = true;
			this.popupName.x = this.res.ress.icon9.x + 880;
			this.popupName.y = this.res.ress.icon9.y - shiftY*0.252;
			this.popupName.namee.text = matName(8);
		}
		
		
		this.res.ress.icon9.addEventListener("mouseout", hideName9.bind(this));
		function hideName9() {
			this.popupName.visible = false;
		}
		
		
		this.res.ress.icon10.addEventListener("mouseover", showName10.bind(this));
		function showName10() {
			this.popupName.visible = true;
			this.popupName.x = this.res.ress.icon10.x + 880;
			this.popupName.y = this.res.ress.icon10.y - shiftY*0.252;
			this.popupName.namee.text = matName(9);
		}
		
		
		this.res.ress.icon10.addEventListener("mouseout", hideName10.bind(this));
		function hideName10() {
			this.popupName.visible = false;
		}
		
		
		this.res.ress.icon11.addEventListener("mouseover", showName11.bind(this));
		function showName11() {
			this.popupName.visible = true;
			this.popupName.x = this.res.ress.icon11.x + 880;
			this.popupName.y = this.res.ress.icon11.y - shiftY*0.252;
			this.popupName.namee.text = matName(10);
		}
		
		
		this.res.ress.icon11.addEventListener("mouseout", hideName11.bind(this));
		function hideName11() {
			this.popupName.visible = false;
		}
		
		
		this.res.ress.icon12.addEventListener("mouseover", showName12.bind(this));
		function showName12() {
			this.popupName.visible = true;
			this.popupName.x = this.res.ress.icon12.x + 880;
			this.popupName.y = this.res.ress.icon12.y - shiftY*0.252;
			this.popupName.namee.text = matName(11);
		}
		
		
		this.res.ress.icon12.addEventListener("mouseout", hideName12.bind(this));
		function hideName12() {
			this.popupName.visible = false;
		}
		
		
		this.res.ress.icon13.addEventListener("mouseover", showName13.bind(this));
		function showName13() {
			this.popupName.visible = true;
			this.popupName.x = this.res.ress.icon13.x + 880;
			this.popupName.y = this.res.ress.icon13.y - shiftY*0.252;
			this.popupName.namee.text = matName(12);
		}
		
		
		this.res.ress.icon13.addEventListener("mouseout", hideName13.bind(this));
		function hideName13() {
			this.popupName.visible = false;
		}
		
		
		this.res.ress.icon14.addEventListener("mouseover", showName14.bind(this));
		function showName14() {
			this.popupName.visible = true;
			this.popupName.x = this.res.ress.icon14.x + 880;
			this.popupName.y = this.res.ress.icon14.y - shiftY*0.252;
			this.popupName.namee.text = matName(13);
		}
		
		
		this.res.ress.icon14.addEventListener("mouseout", hideName14.bind(this));
		function hideName14() {
			this.popupName.visible = false;
		}
		
		
		this.res.ress.icon15.addEventListener("mouseover", showName15.bind(this));
		function showName15() {
			this.popupName.visible = true;
			this.popupName.x = this.res.ress.icon15.x + 880;
			this.popupName.y = this.res.ress.icon15.y - shiftY*0.252;
			this.popupName.namee.text = matName(14);
		}
		
		
		this.res.ress.icon15.addEventListener("mouseout", hideName15.bind(this));
		function hideName15() {
			this.popupName.visible = false;
		}
		
		
		
		this.res.ress.icon16.addEventListener("mouseover", showName16.bind(this));
		function showName16() {
			this.popupName.visible = true;
			this.popupName.x = this.res.ress.icon16.x + 880;
			this.popupName.y = this.res.ress.icon16.y - shiftY*0.252;
			this.popupName.namee.text = matName(15);
		}
		
		
		this.res.ress.icon16.addEventListener("mouseout", hideName16.bind(this));
		function hideName16() {
			this.popupName.visible = false;
		}
		
		
		this.res.ress.icon17.addEventListener("mouseover", showName17.bind(this));
		function showName17() {
			this.popupName.visible = true;
			this.popupName.x = this.res.ress.icon17.x + 880;
			this.popupName.y = this.res.ress.icon17.y - shiftY*0.252;
			this.popupName.namee.text = matName(16);
		}
		
		
		this.res.ress.icon17.addEventListener("mouseout", hideName17.bind(this));
		function hideName17() {
			this.popupName.visible = false;
		}
		
		
		this.res.ress.icon18.addEventListener("mouseover", showName18.bind(this));
		function showName18() {
			this.popupName.visible = true;
			this.popupName.x = this.res.ress.icon18.x + 880;
			this.popupName.y = this.res.ress.icon18.y - shiftY*0.252;
			this.popupName.namee.text = matName(17);
		}
		
		
		this.res.ress.icon18.addEventListener("mouseout", hideName18.bind(this));
		function hideName18() {
			this.popupName.visible = false;
		}
		
		
		this.res.ress.icon19.addEventListener("mouseover", showName19.bind(this));
		function showName19() {
			this.popupName.visible = true;
			this.popupName.x = this.res.ress.icon19.x + 880;
			this.popupName.y = this.res.ress.icon19.y - shiftY*0.252;
			this.popupName.namee.text = matName(18);
		}
		
		
		this.res.ress.icon19.addEventListener("mouseout", hideName19.bind(this));
		function hideName19() {
			this.popupName.visible = false;
		}
		
		
		this.res.ress.icon20.addEventListener("mouseover", showName20.bind(this));
		function showName20() {
			this.popupName.visible = true;
			this.popupName.x = this.res.ress.icon20.x + 880;
			this.popupName.y = this.res.ress.icon20.y - shiftY*0.252;
			this.popupName.namee.text = matName(19);
		}
		
		
		this.res.ress.icon20.addEventListener("mouseout", hideName20.bind(this));
		function hideName20() {
			this.popupName.visible = false;
		}
		this.res.ress.icon21.addEventListener("mouseover", showName21.bind(this));
		function showName21() {
			this.popupName.visible = true;
			this.popupName.x = this.res.ress.icon21.x + 880;
			this.popupName.y = this.res.ress.icon21.y - shiftY*0.252;
			this.popupName.namee.text = matName(20);
		}
		
		
		this.res.ress.icon21.addEventListener("mouseout", hideName21.bind(this));
		function hideName21() {
			this.popupName.visible = false;
		}
		
		
		this.res.ress.icon22.addEventListener("mouseover", showName22.bind(this));
		function showName22() {
			this.popupName.visible = true;
			this.popupName.x = this.res.ress.icon22.x + 880;
			this.popupName.y = this.res.ress.icon22.y - shiftY*0.252;
			this.popupName.namee.text = matName(21);
		}
		
		
		this.res.ress.icon22.addEventListener("mouseout", hideName22.bind(this));
		function hideName22() {
			this.popupName.visible = false;
		}
		
		
		this.res.ress.icon23.addEventListener("mouseover", showName23.bind(this));
		function showName23() {
			this.popupName.visible = true;
			this.popupName.x = this.res.ress.icon23.x + 880;
			this.popupName.y = this.res.ress.icon23.y - shiftY*0.252;
			this.popupName.namee.text = matName(22);
		}
		
		
		this.res.ress.icon23.addEventListener("mouseout", hideName23.bind(this));
		function hideName23() {
			this.popupName.visible = false;
		}
		
		
		this.res.ress.icon24.addEventListener("mouseover", showName24.bind(this));
		function showName24() {
			this.popupName.visible = true;
			this.popupName.x = this.res.ress.icon24.x + 880;
			this.popupName.y = this.res.ress.icon24.y - shiftY*0.252;
			this.popupName.namee.text = matName(23);
		}
		
		
		this.res.ress.icon24.addEventListener("mouseout", hideName24.bind(this));
		function hideName24() {
			this.popupName.visible = false;
		}
		
		
		this.res.ress.icon25.addEventListener("mouseover", showName25.bind(this));
		function showName25() {
			this.popupName.visible = true;
			this.popupName.x = this.res.ress.icon25.x + 880;
			this.popupName.y = this.res.ress.icon25.y - shiftY*0.252;
			this.popupName.namee.text = matName(24);
		}
		
		
		this.res.ress.icon25.addEventListener("mouseout", hideName25.bind(this));
		function hideName25() {
			this.popupName.visible = false;
		}
		
		
		this.uButton.addEventListener("click", showU.bind(this));
		function showU() {
			this.upgWindow.visible = true;
		}
		
		
		this.upgWindow.clos.addEventListener("click", hideU.bind(this));
		function hideU() {
			this.upgWindow.visible = false;
		}
		
		
		this.upgWindow.u1.hover.addEventListener("click", buyU1.bind(this));
		function buyU1() {
			if (money.gte(upgrades[0].totalCost)) {
				money = money.sub(upgrades[0].totalCost);
				upgrades[0].lv += upgrades[0].buyAmo;
			}
		}
		
		this.upgWindow.u2.hover.addEventListener("click", buyU2.bind(this));
		function buyU2() {
			if (money.gte(upgrades[1].totalCost)) {
				money = money.sub(upgrades[1].totalCost);
				upgrades[1].lv += upgrades[1].buyAmo;
			}
		}
		
		this.upgWindow.u3.hover.addEventListener("click", buyU3.bind(this));
		function buyU3() {
			if (money.gte(upgrades[2].totalCost)) {
				money = money.sub(upgrades[2].totalCost);
				upgrades[2].lv += upgrades[2].buyAmo;
			}
		}
		
		this.upgWindow.u4.hover.addEventListener("click", buyU4.bind(this));
		function buyU4() {
			if (money.gte(upgrades[3].totalCost)) {
				money = money.sub(upgrades[3].totalCost);
				upgrades[3].lv += upgrades[3].buyAmo;
			}
		}
		
		this.upgWindow.u5.hover.addEventListener("click", buyU5.bind(this));
		function buyU5() {
			if (money.gte(upgrades[4].totalCost)) {
				money = money.sub(upgrades[4].totalCost);
				upgrades[4].lv += upgrades[4].buyAmo;
			}
		}
		
		this.upgWindow.u6.hover.addEventListener("click", buyU6.bind(this));
		function buyU6() {
			if (money.gte(upgrades[5].totalCost)) {
				money = money.sub(upgrades[5].totalCost);
				upgrades[5].lv += upgrades[5].buyAmo;
			}
		}
		
		this.upgWindow.u7.hover.addEventListener("click", buyU7.bind(this));
		function buyU7() {
			if (money.gte(upgrades[6].totalCost)) {
				money = money.sub(upgrades[6].totalCost);
				upgrades[6].lv += upgrades[6].buyAmo;
			}
		}
		
		this.upgWindow.u8.hover.addEventListener("click", buyU8.bind(this));
		function buyU8() {
			if (money.gte(upgrades[7].totalCost)) {
				money = money.sub(upgrades[7].totalCost);
				upgrades[7].lv += upgrades[7].buyAmo;
			}
		}
		
		this.upgWindow.u9.hover.addEventListener("click", buyU9.bind(this));
		function buyU9() {
			if (money.gte(upgrades[8].totalCost)) {
				money = money.sub(upgrades[8].totalCost);
				upgrades[8].lv += upgrades[8].buyAmo;
			}
		}
		
		var scrollmake = false;
		
		this.scroller.addEventListener("mousedown", scr1.bind(this));
		function scr1() {
			scrollmake = true;
		}
		
		
		window.addEventListener("mouseup", scr2.bind(this));
		function scr2() {
			scrollmake = false;
		}
		
		
		this.scrollBar.addEventListener("click", setset.bind(this));
		function setset() {
			shiftY = Math.max(0, Math.min((mousePosY - 141)*7.45, 2800));
		}
		
		this.goUP.addEventListener("click", setset2.bind(this));
		function setset2() {
			shiftY = Math.max(0, Math.min(shiftY - 500, 2800));
		}
		
		this.goDOWN.addEventListener("click", setset3.bind(this));
		function setset3() {
			shiftY = Math.max(0, Math.min(shiftY + 500, 2800));
		}
		
		
		
		function shortt(num) {
			if (num < 1000) {
				return Math.round(num);
			}
			else if (num < 10000) {
				return Math.round(num/100)/10 + "K";
			}
			else if (num < 1000000) {
				return Math.round(num/1000) + "K";
			}
			else if (num < 10000000) {
				return Math.round(num/100000)/10 + "M";
			}
			else if (num < 1000000000) {
				return Math.round(num/1000000) + "M";
			}
			else {
				return Math.round(num/100000000)/10 + "B";
			}
		}
		
		
		
		this.tutor.addEventListener("click", hideTutor.bind(this));
		function hideTutor() {
			tutVis = false;
		}
		
		
		this.tutShow.addEventListener("click", showTutor.bind(this));
		function showTutor() {
			tutVis = true;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// tutor
	this.tutor = new lib.tutor();
	this.tutor.name = "tutor";
	this.tutor.setTransform(0,359.4,0.9035,1,0,0,0,0,359.4);
	new cjs.ButtonHelper(this.tutor, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.tutor).wait(1));

	// format
	this.cGames = new lib.cGamess();
	this.cGames.name = "cGames";
	this.cGames.setTransform(280.05,714.85,1.0847,1.0847,0,0,0,0.4,60.3);
	new cjs.ButtonHelper(this.cGames, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.cGames).wait(1));

	// cgames
	this.helpSplash = new cjs.Text(":)", "bold 14px 'Arial'", "#009900");
	this.helpSplash.name = "helpSplash";
	this.helpSplash.textAlign = "center";
	this.helpSplash.lineHeight = 18;
	this.helpSplash.lineWidth = 122;
	this.helpSplash.parent = this;
	this.helpSplash.setTransform(87.1255,531.7307,1.0635,1.0607);

	this.adButton = new lib.adButtont();
	this.adButton.name = "adButton";
	this.adButton.setTransform(117.35,695.05,0.7735,0.7715,0,0,0,81.7,22.6);

	this.speedUP_b = new lib.speedUP_b();
	this.speedUP_b.name = "speedUP_b";
	this.speedUP_b.setTransform(31.55,657.4,0.7258,0.7239,0,0,0,0.1,0.1);

	this.spdTime = new cjs.Text("1h 30m 59s", "bold 18px 'Consolas'");
	this.spdTime.name = "spdTime";
	this.spdTime.textAlign = "center";
	this.spdTime.lineHeight = 23;
	this.spdTime.lineWidth = 161;
	this.spdTime.parent = this;
	this.spdTime.setTransform(114.95,655.8,0.7879,0.7858);

	this.spdUP = new cjs.Text("加速 (x2, 最多 1小时)", "bold 18px 'Consolas'");
	this.spdUP.name = "spdUP";
	this.spdUP.textAlign = "center";
	this.spdUP.lineHeight = 23;
	this.spdUP.lineWidth = 208;
	this.spdUP.parent = this;
	this.spdUP.setTransform(116.0074,640.5,0.6023,0.6007);

	this.midAd = new lib.midAd();
	this.midAd.name = "midAd";
	this.midAd.setTransform(-142.75,227.3,0.7932,0.7932,0,0,0,109.6,55.5);

	this.chipG = new lib.chipG();
	this.chipG.name = "chipG";
	this.chipG.setTransform(-180.45,21.95,0.6729,0.6729,0,0,0,9,-10.2);
	new cjs.ButtonHelper(this.chipG, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.chipG},{t:this.midAd},{t:this.spdUP},{t:this.spdTime},{t:this.speedUP_b},{t:this.adButton},{t:this.helpSplash}]}).wait(1));

	// upgrades
	this.upgWindow = new lib.upgWindow();
	this.upgWindow.name = "upgWindow";
	this.upgWindow.setTransform(592.95,335.85,1,1,0,0,0,346.2,229.9);

	this.timeline.addTween(cjs.Tween.get(this.upgWindow).wait(1));

	// popups
	this.presPopup = new lib.presPopup();
	this.presPopup.name = "presPopup";
	this.presPopup.setTransform(13.4,116.1,1.682,1.682,0,0,0,0,0.1);

	this.popupEq = new lib.popupEq();
	this.popupEq.name = "popupEq";
	this.popupEq.setTransform(533.75,403.25,1,1,0,0,0,57.1,38.8);

	this.popupSale = new lib.popupSale();
	this.popupSale.name = "popupSale";
	this.popupSale.setTransform(801.35,98.55,1,1,0,0,0,80.5,21.6);

	this.popupName = new lib.popupName();
	this.popupName.name = "popupName";
	this.popupName.setTransform(824.15,55.45,1,1,0,0,0,39.8,10.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.popupName},{t:this.popupSale},{t:this.popupEq},{t:this.presPopup}]}).wait(1));

	// main
	this.tutShow = new lib.tutShow();
	this.tutShow.name = "tutShow";
	this.tutShow.setTransform(842.1,17.9,1,1,0,0,0,15.3,15.3);
	new cjs.ButtonHelper(this.tutShow, 0, 1, 2);

	this.prestigeBt = new lib.prestigeBt();
	this.prestigeBt.name = "prestigeBt";
	this.prestigeBt.setTransform(53.7,97.8,1,1,0,0,0,41.5,12.1);
	new cjs.ButtonHelper(this.prestigeBt, 0, 1, 2);

	this.scroller = new lib.scroller();
	this.scroller.name = "scroller";
	this.scroller.setTransform(1143.85,141,1.1468,1,0,0,0,-0.1,-0.1);

	this.scrollBar = new lib.scrollBar();
	this.scrollBar.name = "scrollBar";
	this.scrollBar.setTransform(1143.8,342.85,1,1,0,0,0,15.1,219.5);

	this.goDOWN = new lib.goUP();
	this.goDOWN.name = "goDOWN";
	this.goDOWN.setTransform(1145.3,558.85,1,1,180,0,0,15.5,17.8);
	new cjs.ButtonHelper(this.goDOWN, 0, 1, 1);

	this.goUP = new lib.goUP();
	this.goUP.name = "goUP";
	this.goUP.setTransform(1143.95,104.9,1,1,0,0,0,15.5,17.8);
	new cjs.ButtonHelper(this.goUP, 0, 1, 1);

	this.uButton = new lib.uButton();
	this.uButton.name = "uButton";
	this.uButton.setTransform(23.1,17.85,1.5755,1.5755);
	new cjs.ButtonHelper(this.uButton, 0, 1, 2);

	this.res = new lib.res();
	this.res.name = "res";
	this.res.setTransform(995.25,104.9,1,1,0,0,0,126,70.2);

	this.text = new cjs.Text("点击加速!", "bold 20px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 204;
	this.text.parent = this;
	this.text.setTransform(361.8,601.25);

	this.cspd = new cjs.Text("小猫速度: 200%", "bold 20px 'Arial'");
	this.cspd.name = "cspd";
	this.cspd.textAlign = "center";
	this.cspd.lineHeight = 24;
	this.cspd.lineWidth = 204;
	this.cspd.parent = this;
	this.cspd.setTransform(361.8,559.3);

	this.motivator = new lib.motivator();
	this.motivator.name = "motivator";
	this.motivator.setTransform(204.05,588.65,1.4799,1.4759,0,0,0,31.2,35.9);
	new cjs.ButtonHelper(this.motivator, 0, 1, 2);

	this.sellB = new lib.sellB();
	this.sellB.name = "sellB";
	this.sellB.setTransform(740.55,431.4,1.4327,1.4327,0,0,0,24.4,7.7);

	this.eqB = new lib.eqB();
	this.eqB.name = "eqB";
	this.eqB.setTransform(662.6,431.4,1.4327,1.4327,0,0,0,24.4,7.7);

	this.inv16 = new lib.invCell();
	this.inv16.name = "inv16";
	this.inv16.setTransform(744.45,664.35,1,1,0,0,0,31.4,30.4);

	this.inv15 = new lib.invCell();
	this.inv15.name = "inv15";
	this.inv15.setTransform(682.6,664.35,1,1,0,0,0,31.4,30.4);

	this.inv14 = new lib.invCell();
	this.inv14.name = "inv14";
	this.inv14.setTransform(620.75,664.35,1,1,0,0,0,31.4,30.4);

	this.inv13 = new lib.invCell();
	this.inv13.name = "inv13";
	this.inv13.setTransform(558.9,664.35,1,1,0,0,0,31.4,30.4);

	this.inv12 = new lib.invCell();
	this.inv12.name = "inv12";
	this.inv12.setTransform(744.45,603.45,1,1,0,0,0,31.4,30.4);

	this.inv11 = new lib.invCell();
	this.inv11.name = "inv11";
	this.inv11.setTransform(682.6,603.45,1,1,0,0,0,31.4,30.4);

	this.inv10 = new lib.invCell();
	this.inv10.name = "inv10";
	this.inv10.setTransform(620.75,603.45,1,1,0,0,0,31.4,30.4);

	this.inv9 = new lib.invCell();
	this.inv9.name = "inv9";
	this.inv9.setTransform(558.9,603.45,1,1,0,0,0,31.4,30.4);

	this.inv8 = new lib.invCell();
	this.inv8.name = "inv8";
	this.inv8.setTransform(744.45,542.55,1,1,0,0,0,31.4,30.4);

	this.inv7 = new lib.invCell();
	this.inv7.name = "inv7";
	this.inv7.setTransform(682.6,542.55,1,1,0,0,0,31.4,30.4);

	this.inv6 = new lib.invCell();
	this.inv6.name = "inv6";
	this.inv6.setTransform(620.75,542.55,1,1,0,0,0,31.4,30.4);

	this.inv5 = new lib.invCell();
	this.inv5.name = "inv5";
	this.inv5.setTransform(558.9,542.55,1,1,0,0,0,31.4,30.4);

	this.inv4 = new lib.invCell();
	this.inv4.name = "inv4";
	this.inv4.setTransform(744.45,481.65,1,1,0,0,0,31.4,30.4);

	this.inv3 = new lib.invCell();
	this.inv3.name = "inv3";
	this.inv3.setTransform(682.6,481.65,1,1,0,0,0,31.4,30.4);

	this.inv2 = new lib.invCell();
	this.inv2.name = "inv2";
	this.inv2.setTransform(620.75,481.65,1,1,0,0,0,31.4,30.4);

	this.inv1 = new lib.invCell();
	this.inv1.name = "inv1";
	this.inv1.setTransform(558.7,481.65,1,1,0,0,0,31.2,30.4);

	this.forgeBt = new lib.forgeBt();
	this.forgeBt.name = "forgeBt";
	this.forgeBt.setTransform(649.05,393.4,1.1237,1.1237,0,0,0,52.1,16.6);
	new cjs.ButtonHelper(this.forgeBt, 0, 1, 2);

	this.upCrys = new lib.plusLv();
	this.upCrys.name = "upCrys";
	this.upCrys.setTransform(798.25,315.05,1.3926,1.3926,0,0,0,9.7,9.7);
	new cjs.ButtonHelper(this.upCrys, 0, 1, 2);

	this.downCrys = new lib.minusLv();
	this.downCrys.name = "downCrys";
	this.downCrys.setTransform(761,315.05,1.3926,1.3926,0,0,0,9.7,9.7);
	new cjs.ButtonHelper(this.downCrys, 0, 1, 2);

	this.crcst = new cjs.Text("成本: 162,000", "bold 22px 'Arial'", "#806600");
	this.crcst.name = "crcst";
	this.crcst.lineHeight = 27;
	this.crcst.lineWidth = 173;
	this.crcst.parent = this;
	this.crcst.setTransform(577,342.05);

	this.crcr = new cjs.Text("水晶: 12", "bold 22px 'Arial'", "#660099");
	this.crcr.name = "crcr";
	this.crcr.lineHeight = 27;
	this.crcr.lineWidth = 164;
	this.crcr.parent = this;
	this.crcr.setTransform(567.1,302.35);

	this.instance = new lib.coin();
	this.instance.setTransform(552.3,351.55,1,1,0,0,0,16.2,16.9);

	this.instance_1 = new lib.crys();
	this.instance_1.setTransform(548.35,312.65,1,1,0,0,0,9.7,16.1);

	this.instance_2 = new lib.coin();
	this.instance_2.setTransform(896.3,657.55,1,1,0,0,0,16.2,16.9);

	this.instance_3 = new lib.crys();
	this.instance_3.setTransform(893.2,698.25,1,1,0,0,0,9.7,16.1);

	this.upTier = new lib.plusLv();
	this.upTier.name = "upTier";
	this.upTier.setTransform(769.25,240.65,1.3467,1.3467,0,0,0,9.7,9.7);
	new cjs.ButtonHelper(this.upTier, 0, 1, 2);

	this.downTier = new lib.minusLv();
	this.downTier.name = "downTier";
	this.downTier.setTransform(769.25,275.15,1.3467,1.3467,0,0,0,9.7,9.7);
	new cjs.ButtonHelper(this.downTier, 0, 1, 2);

	this.needMat = new cjs.Text("隐石 x10,000", "bold 22px 'Arial'");
	this.needMat.name = "needMat";
	this.needMat.textAlign = "center";
	this.needMat.lineHeight = 27;
	this.needMat.lineWidth = 216;
	this.needMat.parent = this;
	this.needMat.setTransform(665.1011,247.2,0.7707,0.7707);

	this.mate = new lib.material();
	this.mate.name = "mate";
	this.mate.setTransform(521.7,235.4);

	this.mlv = new cjs.Text("25", "bold 22px 'Arial'");
	this.mlv.name = "mlv";
	this.mlv.textAlign = "center";
	this.mlv.lineHeight = 27;
	this.mlv.lineWidth = 32;
	this.mlv.parent = this;
	this.mlv.setTransform(520.2,276.75,0.5018,0.5018);

	this.text_1 = new cjs.Text("制作", "bold 22px 'Arial'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 27;
	this.text_1.lineWidth = 100;
	this.text_1.parent = this;
	this.text_1.setTransform(645.35,172.2,1.6962,1.6962);

	this.autoProg = new lib.autoProg();
	this.autoProg.name = "autoProg";
	this.autoProg.setTransform(415.9,69.1,1.5943,1.5943,0,0,0,17.6,6.5);

	this.spd = new cjs.Text("速度: 0.96s", "bold 18px 'Arial'");
	this.spd.name = "spd";
	this.spd.textAlign = "center";
	this.spd.lineHeight = 22;
	this.spd.lineWidth = 166;
	this.spd.parent = this;
	this.spd.setTransform(733,131.8);

	this.dps = new cjs.Text("DPS: 147", "bold 20px 'Arial'");
	this.dps.name = "dps";
	this.dps.textAlign = "center";
	this.dps.lineHeight = 24;
	this.dps.lineWidth = 198;
	this.dps.parent = this;
	this.dps.setTransform(716.6,105.85);

	this.dmg = new cjs.Text("168", "bold 30px 'Arial'");
	this.dmg.name = "dmg";
	this.dmg.textAlign = "center";
	this.dmg.lineHeight = 36;
	this.dmg.lineWidth = 198;
	this.dmg.parent = this;
	this.dmg.setTransform(716.1,68.35);

	this.namee = new cjs.Text("普通泥镐", "bold 18px 'Arial'");
	this.namee.name = "namee";
	this.namee.textAlign = "center";
	this.namee.lineHeight = 22;
	this.namee.lineWidth = 198;
	this.namee.parent = this;
	this.namee.setTransform(716.1,21.75);

	this.rar = new cjs.Text("12345", "bold 18px 'Arial'");
	this.rar.name = "rar";
	this.rar.textAlign = "center";
	this.rar.lineHeight = 22;
	this.rar.lineWidth = 62;
	this.rar.parent = this;
	this.rar.setTransform(501.5819,28,0.5418,0.5418);

	this.lev = new cjs.Text("123", "bold 18px 'Arial'");
	this.lev.name = "lev";
	this.lev.textAlign = "center";
	this.lev.lineHeight = 22;
	this.lev.lineWidth = 32;
	this.lev.parent = this;
	this.lev.setTransform(631.75,132.25);

	this.pixs = new lib.pix();
	this.pixs.name = "pixs";
	this.pixs.setTransform(521,123.9,1,1,-37.0565,0,0,11.2,45.1);

	this.sellP3 = new lib.sellP();
	this.sellP3.name = "sellP3";
	this.sellP3.setTransform(1081.3,18.7,1.5006,1.5006,0,0,0,13.2,8);

	this.sellP4 = new lib.sellP();
	this.sellP4.name = "sellP4";
	this.sellP4.setTransform(1128.75,18.7,1.5006,1.5006,0,0,0,13.2,8);

	this.sellP1 = new lib.sellP();
	this.sellP1.name = "sellP1";
	this.sellP1.setTransform(986.55,18.7,1.5006,1.5006,0,0,0,13.2,8);

	this.sellP2 = new lib.sellP();
	this.sellP2.name = "sellP2";
	this.sellP2.setTransform(1033.95,18.7,1.5006,1.5006,0,0,0,13.2,8);

	this.cryst = new cjs.Text("水晶: 100,000", "bold 22px 'Arial'");
	this.cryst.name = "cryst";
	this.cryst.lineHeight = 27;
	this.cryst.lineWidth = 232;
	this.cryst.parent = this;
	this.cryst.setTransform(922.25,688.15);

	this.moneyt = new cjs.Text("金钱: 100,000", "bold 22px 'Arial'");
	this.moneyt.name = "moneyt";
	this.moneyt.lineHeight = 27;
	this.moneyt.lineWidth = 232;
	this.moneyt.parent = this;
	this.moneyt.setTransform(922.25,648);

	this.plusLv = new lib.plusLv();
	this.plusLv.name = "plusLv";
	this.plusLv.setTransform(435.6,40.35,1.3848,1.3848,0,0,0,9.7,9.7);
	new cjs.ButtonHelper(this.plusLv, 0, 1, 2);

	this.minusLv = new lib.minusLv();
	this.minusLv.name = "minusLv";
	this.minusLv.setTransform(398.8,40.35,1.3848,1.3848,0,0,0,9.7,9.7);
	new cjs.ButtonHelper(this.minusLv, 0, 1, 2);

	this.prog = new cjs.Text("0/10", "bold 12px 'Arial'");
	this.prog.name = "prog";
	this.prog.textAlign = "center";
	this.prog.lineHeight = 16;
	this.prog.lineWidth = 114;
	this.prog.parent = this;
	this.prog.setTransform(277.25,64.05,1.2307,1.2307);

	this.mineLv = new cjs.Text("矿山等级: 0", "bold 12px 'Arial'");
	this.mineLv.name = "mineLv";
	this.mineLv.textAlign = "center";
	this.mineLv.lineHeight = 16;
	this.mineLv.lineWidth = 114;
	this.mineLv.parent = this;
	this.mineLv.setTransform(270.9,30.4,1.9872,1.9872);

	this.cat = new lib.cat();
	this.cat.name = "cat";
	this.cat.setTransform(405.1,140.85);

	this.blocks = new lib.blocks();
	this.blocks.name = "blocks";
	this.blocks.setTransform(283.55,384,1,1,0,0,0,173.8,215.4);

	this.instance_4 = new lib.bg();
	this.instance_4.setTransform(283.65,307.9,1,1,0,0,0,173.9,220.8);

	this.instance_5 = new lib.CachedBmp_1();
	this.instance_5.setTransform(108.75,-0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.blocks},{t:this.cat},{t:this.mineLv},{t:this.prog},{t:this.minusLv},{t:this.plusLv},{t:this.moneyt},{t:this.cryst},{t:this.sellP2},{t:this.sellP1},{t:this.sellP4},{t:this.sellP3},{t:this.pixs},{t:this.lev},{t:this.rar},{t:this.namee},{t:this.dmg},{t:this.dps},{t:this.spd},{t:this.autoProg},{t:this.text_1},{t:this.mlv},{t:this.mate},{t:this.needMat},{t:this.downTier},{t:this.upTier},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.crcr},{t:this.crcst},{t:this.downCrys},{t:this.upCrys},{t:this.forgeBt},{t:this.inv1},{t:this.inv2},{t:this.inv3},{t:this.inv4},{t:this.inv5},{t:this.inv6},{t:this.inv7},{t:this.inv8},{t:this.inv9},{t:this.inv10},{t:this.inv11},{t:this.inv12},{t:this.inv13},{t:this.inv14},{t:this.inv15},{t:this.inv16},{t:this.eqB},{t:this.sellB},{t:this.motivator},{t:this.cspd},{t:this.text},{t:this.res},{t:this.uButton},{t:this.goUP},{t:this.goDOWN},{t:this.scrollBar},{t:this.scroller},{t:this.prestigeBt},{t:this.tutShow}]}).wait(1));

	// bg
	this.instance_6 = new lib.Растровоеизображение5();

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(348.7,359,813.3999999999999,932.9000000000001);
// library properties:
lib.properties = {
	id: '3A365ED01C47B0419DCA38EF42464A84',
	width: 1160,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedBmp_156.png?1635258010983", id:"CachedBmp_156"},
		{src:"images/CachedBmp_174.png?1635258010983", id:"CachedBmp_174"},
		{src:"images/CachedBmp_167.png?1635258010983", id:"CachedBmp_167"},
		{src:"images/Растровоеизображение16.png?1635258010983", id:"Растровоеизображение16"},
		{src:"images/Растровоеизображение3111.png?1635258010983", id:"Растровоеизображение3111"},
		{src:"images/Растровоеизображение5.png?1635258010983", id:"Растровоеизображение5"},
		{src:"images/CachedBmp_1.png?1635258010984", id:"CachedBmp_1"},
		{src:"images/index_atlas_1.png?1635258010847", id:"index_atlas_1"},
		{src:"images/index_atlas_2.png?1635258010848", id:"index_atlas_2"},
		{src:"images/index_atlas_3.png?1635258010848", id:"index_atlas_3"},
		{src:"images/index_atlas_4.png?1635258010848", id:"index_atlas_4"},
		{src:"images/index_atlas_5.png?1635258010849", id:"index_atlas_5"},
		{src:"images/index_atlas_6.png?1635258010850", id:"index_atlas_6"},
		{src:"images/index_atlas_7.png?1635258010850", id:"index_atlas_7"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['3A365ED01C47B0419DCA38EF42464A84'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;