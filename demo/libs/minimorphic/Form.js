var Form = (function () {
	/*
	 * Code taken from: http://www.playmycode.com/blog/2011/06/realtime-image-tinting-on-html5-canvas/
	 */
  function generateImageForChannel(img, w, h, pixels, rgbI) {
    return new Promise((resolve, reject) => {
      var canvas = document.createElement("canvas");
      canvas.width = w;
      canvas.height = h;

      var ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);
      var to = ctx.getImageData(0, 0, w, h);
      var toData = to.data;

      for (var i = 0, len = pixels.length; i < len; i += 4) {
        toData[i] = (rgbI === 0) ? pixels[i] : 0;
        toData[i + 1] = (rgbI === 1) ? pixels[i + 1] : 0;
        toData[i + 2] = (rgbI === 2) ? pixels[i + 2] : 0;
        toData[i + 3] = pixels[i + 3];
      }

      ctx.putImageData(to, 0, 0);

      // image is _slightly_ faster then canvas for this, so convert
      var imgComp = new Image();
      imgComp.onload = function () { resolve(imgComp); };
      imgComp.src = canvas.toDataURL();
    });
  }

	function generateRGBKs(img) {
		var w = img.width;
		var h = img.height;
		var rgbks = [];

		var canvas = document.createElement("canvas");
		canvas.width = w;
		canvas.height = h;

		var ctx = canvas.getContext("2d");
		ctx.drawImage(img, 0, 0);

		var pixels = ctx.getImageData(0, 0, w, h).data;

		// 4 is used to ask for 3 images: red, green, blue and
		// black in that order.
		for (var rgbI = 0; rgbI < 4; rgbI++) {
      rgbks.push(generateImageForChannel(img, w, h, pixels, rgbI));
		}
    return Promise.all(rgbks);
	}

	/*
	 * Code taken from: http://www.playmycode.com/blog/2011/06/realtime-image-tinting-on-html5-canvas/
	 */
	function generateTintImage(img, rgbks, red, green, blue) {
		var buff = document.createElement("canvas");
		buff.width = img.width;
		buff.height = img.height;

		var ctx = buff.getContext("2d");

		ctx.globalAlpha = 1;
		ctx.globalCompositeOperation = 'copy';
		ctx.drawImage(rgbks[3], 0, 0);

		ctx.globalCompositeOperation = 'lighter';
		if (red > 0) {
			ctx.globalAlpha = red / 255.0;
			ctx.drawImage(rgbks[0], 0, 0);
		}
		if (green > 0) {
			ctx.globalAlpha = green / 255.0;
			ctx.drawImage(rgbks[1], 0, 0);
		}
		if (blue > 0) {
			ctx.globalAlpha = blue / 255.0;
			ctx.drawImage(rgbks[2], 0, 0);
		}

		return buff;
	}

	return class Form {
		constructor(img) {
			//TODO: use private fields when it is on the ECMA standard
			this._img = img;
			this._extent = {
				w : img.width,
				h : img.height
			};

			/*
			 * Draw the image on an internal canvas in order to be able to use
			 * getImageData() to ask for the colors at a specific pixel.
			 */
			let canvas = document.createElement("canvas");
			canvas.width = img.width;
			canvas.height = img.height;
			let ctx = canvas.getContext("2d");
			ctx.drawImage(img, 0, 0);

      this._canvas = canvas;
      this._ctx = ctx;
		}
		get extent() {
			return this._extent;
		}
		get img() {
			return this._img;
		}

    colorAt(point) {
			var data = this._ctx.getImageData(point.x, point.y, 1, 1).data;
			return {
				r : data[0],
				g : data[1],
				b : data[2],
				a : data[3]
			};
		}
		alphaAt(point) {
			var data = this._ctx.getImageData(point.x, point.y, 1, 1).data;
			return data[3];
		}
		tint(r, g, b) {
      return new Promise((resolve, reject) => {
  			let img = this.img;
  			generateRGBKs(img).then(rgbks => {
          let tintImg = generateTintImage(img, rgbks, r, g, b);

    			let canvas = document.createElement("canvas");
    			canvas.width = img.width;
    			canvas.height = img.height;
    			let ctx = canvas.getContext("2d");
    			ctx.fillStyle = "black";
    			//ctx.fillRect(0, 0, canvas.width, canvas.height);
    			ctx.drawImage(tintImg, 0, 0);
    			let result = new Image();
          result.onload = function () {
            resolve(new Form(result));
          }
    			result.src = canvas.toDataURL();
        });
      });
		}
    static loadImage(src) {
      return new Promise((resolve, reject) => {
				let img = new Image();
				img.onload = function () {
          resolve(new Form(img));
				};
				img.src = src;
      });
    }
		static load(sources) {
      return Promise.all(sources.map(Form.loadImage));
		}
    static loadSpritesheet(src, w, h, max) {
      return new Promise((resolve, reject) => {
        let img = new Image();
        img.onload = function () {
          let rows = img.width / w;
          let cols = img.height / h;
          if (max == undefined) { max = rows * cols; }
          let pieces = [];
          for (let j = 0; j < cols; j++) {
            for (let i = 0; i < rows; i++) {
              if (pieces.length < max) {
          			let canvas = document.createElement("canvas");
          			canvas.width = w;
          			canvas.height = h;
          			let ctx = canvas.getContext("2d");
                ctx.drawImage(img, i*w, j*h, w, h, 0, 0, w, h);
                let temp = new Image();
                pieces.push(new Promise((resolve, reject) => {
                  temp.onload = function () {
                    resolve(new Form(temp));
                  }
            			temp.src = canvas.toDataURL();
                }));
              }
            }
          }
          Promise.all(pieces).then(resolve);
        };
        img.src = src;
      });
    }
	};
})();
