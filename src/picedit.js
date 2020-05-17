import 'es6-promise/auto';
import 'fabric-history';
import loadFontList from '../font/fontList.js';
var _ = require('lodash');
feather.replace();
const defaultFont = { name: 'Noto Serif JP', type: 'google' };
WebFont.load({
  google: {
    families: [defaultFont.name]
  },
  active: function () {
    const file = document.querySelector('input[type=file]');
    const download = document.querySelector('#dl');
    const crop = document.querySelector('#crop');
    const keikaku = document.querySelector('#keikaku');
    const balloon1 = document.querySelector('#balloon1');
    const balloon2 = document.querySelector('#balloon2');
    const balloon3 = document.querySelector('#balloon3');
    const clip1 = document.querySelector('#clip1');
    const addText = document.querySelector('#addText');
    const copyRight = document.querySelector('#copyRight');
    const textRange = document.querySelector('#textRange');
    const textRangeValue = document.querySelector('#textRangeValue');
    const remove = document.querySelector('#remove');
    const zUp = document.querySelector('#zUp');
    const zDown = document.querySelector('#zDown');
    const gifAnimation = document.querySelector('#gifAnimation');
    const invert = document.querySelector('#invert');
    const grayscale = document.querySelector('#grayscale');
    const brownie = document.querySelector('#brownie');
    const vintage = document.querySelector('#vintage');
    const technicolor = document.querySelector('#technicolor');
    const kodachrome = document.querySelector('#kodachrome');
    const polaroid = document.querySelector('#polaroid');
    const blackwhite = document.querySelector('#blackwhite');
    const canvasWrapper = document.querySelector('#canvasWrapper');
    const sizeHalf = document.querySelector('#sizeHalf');
    const size2 = document.querySelector('#size2');
    const sizeReset = document.querySelector('#sizeReset');
    const menuLoad = document.querySelector('#menuLoad');
    const menuDl = document.querySelector('#menuDl');
    const opacity = document.querySelector('#opacity');
    const opacityValue = document.querySelector('#opacityValue');
    const matrixTransform = document.querySelector('#matrixTransform');
    const font = document.querySelector('#font');
    const fontBold = document.querySelector('#fontBold');
    const fontItalic = document.querySelector('#fontItalic');
    const fontUnderline = document.querySelector('#fontUnderline');
    const fontColor = document.querySelector('#fontColor');
    const undo = document.querySelector('#undo');
    const redo = document.querySelector('#redo');
    const zoom = document.querySelector('#zoom');
    const zoomValue = document.querySelector('#zoomValue');

    const canvas = new fabric.Canvas('canvas1');
    const defaultFontName = defaultFont.name;
    let fontList = {};
    fontList[defaultFontName] = defaultFont.type;
    fontList = { ...fontList, ...loadFontList };
    const loadfontList = [defaultFont.name];
    const addedTextAndBalloon = [];
    let image;

    const sortedKeys =
      _.unzip(
        _.orderBy(
          _.zip(
            _.keys(fontList),
            _.keys(fontList).map((f) => f.toLowerCase())), 1))[0];

    sortedKeys.forEach((key) => {
      const defaultFontOption = document.createElement("option");
      defaultFontOption.text = key;
      defaultFontOption.value = key;
      font.add(defaultFontOption);

      if (fontList[key] == "google") {
        WebFont.load({
          google: {
            families: [key]
          },
          active: function () {
            loadfontList.push(key);
            _.each(_.filter(font.options, (option) => option.value == key), (option) => {
              option.style.fontFamily = key;
            });
          }
        });
      }
    });

    $('#fileDialog').modal({
      keyboard: false
    }).modal('show');

    fabric.Object.prototype.set({
      transparentCorners: false,
      borderColor: '#ff00ff',
      cornerColor: '#ff0000'
    });

    file.addEventListener('change',
      function (e) {
        const fileData = e.target.files[0];
        const reader = new FileReader();
        new Promise((resolve) => {
          reader.onload = () => {
            resolve(reader.result)
          }
          reader.readAsDataURL(fileData);
        }).then((result) => {
          fabric.Image.fromURL(result, (img) => {
            canvas.clear();
            canvas.setWidth(img.width);
            canvas.setHeight(img.height);
            img.selectable = false;
            fabric.textureSize = Math.max(img.width, img.height);
            canvas.add(img);
            image = img;
            canvas.clearHistory();
            canvas.renderAll();
          });
          $('#fileDialog').modal('hide');
        });
      }, false);

    sizeHalf.addEventListener('click',
      function (e) {
        if (image == null) return;
        changeZoom(canvas.getZoom() * 1 / 2);
      }, false);

    size2.addEventListener('click',
      function (e) {
        if (image == null) return;
        changeZoom(canvas.getZoom() * 2);
      }, false);

    sizeReset.addEventListener('click',
      function (e) {
        if (image == null) return;
        changeZoom(1);
      }, false);

    let cropBox;
    crop.addEventListener('click',
      function (e) {
        if (cropBox == null) {
          cropBox = new fabric.Textbox('この矩形のサイズを調整した後\nもう一度切り抜きボタンを押すと\n矩形にあわせて切り抜きます',
            {
              backgroundColor: 'blue', left: 10, top: 10, fontFamily: defaultFontName, fill: '#fff', opacity: 0.5,
            });

          canvas.add(cropBox);
          canvas.renderAll();
        } else {
          const rect = cropBox.getBoundingRect();
          image.cloneAsImage((img) => {
            canvas.clear();
            canvas.setWidth(rect.width);
            canvas.setHeight(rect.height);
            img.selectable = false;
            canvas.add(img);
            image = img;
            cropBox = null;
            canvas.renderAll();
          }, {
            left: rect.left,
            top: rect.top,
            width: rect.width,
            height: rect.height
          });
        }
      }, false);

    download.addEventListener('click',
      (e) => {
        const rawUrl = canvas.toDataURL({
          format: 'png',
          quality: 1
        });

        const parse = rawUrl.slice(5).split(/[,;]/);
        const binStr = atob(parse.pop());
        const l = binStr.length;
        const array = new Uint8Array(l);

        for (let i = 0; i < l; i++) {
          array[i] = binStr.charCodeAt(i);
        }
        const blob = new Blob([array], { type: parse[0] });
        if (window.navigator.msSaveBlob) {
          window.navigator.msSaveBlob(blob, "output.png");
          return;
        }

        const blobUrl = URL.createObjectURL(blob);
        const tmpLink = document.createElement('a');
        tmpLink.href = blobUrl;
        tmpLink.download = "output.png";
        tmpLink.click();
        setTimeout(function () {
          document.body.removeChild(tmpLink);
          URL.revokeObjectURL(blobUrl);
        }, 60000);
      }, false);

    keikaku.addEventListener('click',
      (e) => {
        const rect = image.getBoundingRect();
        const textSize = rect.height / 5;
        const smallTextSize = textSize / 5;
        const textBox = new fabric.Textbox('計\n画\n通\nり', {
          left: 10,
          top: 10,
          fontSize: textSize,
          fill: '#000000',
          shadow: '#ffffff 0px 0px 20px',
          fontWeight: 'bold',
          fontFamily: defaultFontName,
          lineHeight: 1
        });

        const smallTextBox = new fabric.Textbox('\nけ\n\nい\n\n\nか\n\nく\n\n\nど\n\nお', {
          left: 10 + textSize + 5,
          top: 10,
          fontSize: smallTextSize,
          fill: '#000000',
          shadow: '#ffffff 0px 0px 10px',
          fontWeight: 'bold',
          fontFamily: defaultFontName,
          lineHeight: 1
        });
        createObjectPostProcess(textBox);
        canvas.add(textBox);
        canvas.setActiveObject(textBox);
        createObjectPostProcess(smallTextBox);
        canvas.add(smallTextBox);
        canvas.renderAll();
      }, false);

    balloon1.addEventListener('click',
      (e) => {
        loadSVGFile('svg/e0502_1.svg');
      }, false);

    balloon2.addEventListener('click',
      (e) => {
        loadSVGFile('svg/e0198_1.svg');
      }, false);

    balloon3.addEventListener('click',
      (e) => {
        loadSVGFile('svg/e0801_1.svg');
      }, false);

    clip1.addEventListener('click',
      (e) => {
        loadSVGFile('svg/reiwa-era-kanji.svg');
      }, false);

    function loadSVGFile(path) {
      var path = fabric.loadSVGFromURL(path, function (objects, options) {
        var obj = fabric.util.groupSVGElements(objects, options);
        obj.scaleX = canvas.width / obj.width / 2;
        obj.scaleY = canvas.height / obj.height / 2;
        canvas.setActiveObject(obj);
        addedTextAndBalloon.push(obj);
        createObjectPostProcess(obj);
        canvas.add(obj).renderAll();
      });
    }

    addText.addEventListener('click',
      (e) => {
        const textSize = image.height / 5;
        const textBox = new fabric.Textbox('Text', {
          left: 10,
          top: 10,
          fontSize: textSize,
          fill: '#000000',
          shadow: '#ffffff 0px 0px 3px',
          fontFamily: defaultFontName,
          lineHeight: 1
        });
        createObjectPostProcess(textBox);
        canvas.add(textBox);
        canvas.setActiveObject(textBox);
        addedTextAndBalloon.push(textBox);
        canvas.renderAll();

      }, false);

    copyRight.addEventListener('click',
      (e) => {
        const textSize = image.height / 5;
        const textBox = new fabric.Textbox('Copyright (C) SQUARE ENIX CO., LTD. All Rights Reserved.', {
          left: 10,
          top: 10,
          fontSize: 14,
          fill: '#ffffff',
          strokeWidth: 1,
          stroke: "#000000",
          fontFamily: defaultFontName,
          lineHeight: 1,
          fontWeight: 'bold',
          breakWords: false
        });
        createObjectPostProcess(textBox);
        canvas.add(textBox);
        canvas.setActiveObject(textBox);
        canvas.renderAll();
      }, false);

    textRange.addEventListener('input',
      (e) => {
        const object = canvas.getActiveObject();
        if (object == null) return;
        if (object.type == "textbox") {
          object.fontSize = e.currentTarget.value;
          textRangeValue.innerHTML = e.currentTarget.value;
        }
        canvas.renderAll();
      }, false);

    font.addEventListener('change', (e) => {
      const object = canvas.getActiveObject();
      if (object == null) return;
      if (object.type == "textbox") {
        const fontFamily = e.currentTarget.value;
        if (loadfontList.indexOf(fontFamily) != -1) {
          object.fontFamily = fontFamily;
          canvas.renderAll();

        } else {
          if (fontList[fontFamily] == "google") {
            WebFont.load({
              google: {
                families: [fontFamily]
              },
              active: function () {
                loadfontList.push(fontFamily);
                object.fontFamily = fontFamily;
                font.options[font.selectedIndex].style.fontFamily = fontFamily;
                canvas.renderAll();
              }
            });
          } else if (fontList[fontFamily] == "custom") {
            WebFont.load({
              custom: {
                families: [fontFamily],
                urls: ['font/' + fontFamily + '.css']
              },
              active: function () {
                loadfontList.push(fontFamily);
                object.fontFamily = fontFamily;
                font.options[font.selectedIndex].style.fontFamily = fontFamily;
                canvas.renderAll();
              }
            });
          }
        }
      }
    });

    fontBold.addEventListener('click',
      (e) => {
        const object = canvas.getActiveObject();
        if (object == null) return;
        if (object.type == "textbox") {
          if (object.fontWeight == 'normal') {
            object.fontWeight = 'bold';
          } else {
            object.fontWeight = 'normal';
          }
          canvas.renderAll();
        }
      }, false);

    fontItalic.addEventListener('click',
      (e) => {
        const object = canvas.getActiveObject();
        if (object == null) return;
        if (object.type == "textbox") {
          if (object.fontStyle == 'normal') {
            object.fontStyle = 'italic';
          } else {
            object.fontStyle = 'normal';
          }
          canvas.renderAll();
        }
      }, false);

    fontUnderline.addEventListener('click',
      (e) => {
        const object = canvas.getActiveObject();
        if (object == null) return;
        if (object.type == "textbox") {
          if (object.get('underline')) {
            object.set('underline', false);
          } else {
            object.set('underline', true);
          }
          canvas.renderAll();
        }
      }, false);

    fontColor.addEventListener('input',
      (e) => {
        const object = canvas.getActiveObject();
        if (object == null) return;
        if (object.type == "textbox") {
          object.set('fill', e.currentTarget.value);
          canvas.renderAll();
        }
      }, false);

    matrixTransform.addEventListener('click',
      (e) => {
        const object = canvas.getActiveObject();
        if (object == null) return;
        if (object.type == "textbox") {
          object.text = transformMatrix(object.text);
          canvas.renderAll();
        }
      }, false);

    function transformMatrix(src) {
      const t = src.split('\n');
      let mlen = 0;
      for (let i = 0, n = t.length; i < n; ++i) {
        if (mlen < t[i].length) mlen = t[i].length;
      }
      let result = "";
      for (let i = 0; i < mlen; ++i) {
        let line = "";
        for (let j = t.length - 1; j >= 0; --j) {
          line += t[j].length <= i ? " " : t[j].charAt(i);
        }
        if (i != mlen - 1) {
          line += '\n';
        }
        result += line;
      }
      return result;
    }

    opacity.addEventListener('input',
      (e) => {
        const object = canvas.getActiveObject();
        if (object == null) return;
        const opacity = e.currentTarget.value / 100;
        object.opacity = opacity;
        opacityValue.innerHTML = e.currentTarget.value;
        canvas.renderAll();
      }, false);

    zoom.addEventListener('input',
      (e) => {
        if (image == null) return;
        changeZoom(e.currentTarget.value / 100);
      }, false);

    function changeZoom(ratio) {
      canvas.setZoom(ratio);
      canvas.setWidth(image.width * ratio);
      canvas.setHeight(image.height * ratio);
      zoomValue.innerHTML = Math.floor(ratio * 100);
    }

    zUp.addEventListener('click',
      (e) => {
        const object = canvas.getActiveObject();
        if (object == null) return;
        object.moveTo(canvas._objects.length - 1);
        canvas.renderAll();
      }, false);

    zDown.addEventListener('click',
      (e) => {
        const object = canvas.getActiveObject();
        if (object == null) return;
        object.moveTo(1);
        canvas.renderAll();
      }, false);

    remove.addEventListener('click',
      (e) => {
        const object = canvas.getActiveObject();
        if (object == null) return;
        canvas.remove(object);
        canvas.renderAll();
      }, false);

    gifAnimation.addEventListener('click',
      (e) => {
        const encoder = new GIFEncoder();
        encoder.setRepeat(0); // 0 = loop
        encoder.setDelay(10); //go to next frame every n milliseconds
        encoder.start();
        const addedTextPos = [];
        for (let i = 0, n = addedTextAndBalloon.length; i < n; ++i) {
          addedTextPos.push([addedTextAndBalloon[i], addedTextAndBalloon[i].left, addedTextAndBalloon[i].top]);
        }
        for (let i = 0; i < 3; ++i) {
          for (let j = 0, n = addedTextPos.length; j < n; ++j) {
            let target = addedTextPos[j][0];
            let left = addedTextPos[j][1];
            let top = addedTextPos[j][2];
            target.left = left + Math.round(Math.random() * 10) - 5;
            target.top = top + Math.round(Math.random() * 20) - 10;
          }
          canvas.renderAll();
          encoder.addFrame(canvas.getContext());
        }
        encoder.finish();
        const binaryGIF = encoder.stream().getData();
        const rawUrl = 'data:image/gif;base64,' + encode64(binaryGIF);
        const parse = rawUrl.slice(5).split(/[,;]/);
        const binStr = atob(parse.pop());
        const l = binStr.length;
        const array = new Uint8Array(l);

        for (let i = 0; i < l; i++) {
          array[i] = binStr.charCodeAt(i);
        }
        const blob = new Blob([array], { type: parse[0] });
        if (window.navigator.msSaveBlob) {
          window.navigator.msSaveBlob(blob, "output.gif");
          return;
        }

        const blobUrl = URL.createObjectURL(blob);

        const tmpLink = document.createElement('a');
        tmpLink.href = blobUrl;
        tmpLink.download = "output.gif";
        tmpLink.click();
        setTimeout(function () {
          document.body.removeChild(tmpLink);
          URL.revokeObjectURL(blobUrl);
        }, 60000);
      }, false);

    invert.addEventListener('click',
      (e) => {
        e.currentTarget.checkd = applyFilter(new fabric.Image.filters.Invert());
      }, false);

    grayscale.addEventListener('click',
      (e) => {
        e.currentTarget.checkd = applyFilter(new fabric.Image.filters.Grayscale());
      }, false);

    brownie.addEventListener('click',
      (e) => {
        e.currentTarget.checkd = applyFilter(new fabric.Image.filters.Brownie());
      }, false);

    vintage.addEventListener('click',
      (e) => {
        e.currentTarget.checkd = applyFilter(new fabric.Image.filters.Vintage());
      }, false);

    technicolor.addEventListener('click',
      (e) => {
        e.currentTarget.checkd = applyFilter(new fabric.Image.filters.Technicolor());
      }, false);

    kodachrome.addEventListener('click',
      (e) => {
        e.currentTarget.checkd = applyFilter(new fabric.Image.filters.Kodachrome());
      }, false);

    polaroid.addEventListener('click',
      (e) => {
        e.currentTarget.checkd = applyFilter(new fabric.Image.filters.Polaroid());
      }, false);

    blackwhite.addEventListener('click',
      (e) => {
        e.currentTarget.checkd = applyFilter(new fabric.Image.filters.BlackWhite());
      }, false);

    function applyFilter(filter) {
      let found = false;
      for (let i = 0, n = image.filters.length; i < n; ++i) {
        if (image.filters[i].type == filter.type) {
          found = true;
          image.filters.splice(i, 1);
          image.applyFilters();
          break;
        }
      }
      if (!found) {
        image.filters.push(filter);
        image.applyFilters();
      }
      canvas.renderAll();
      return !found;
    }

    menuLoad.addEventListener('click',
      (e) => {
        $('#fileDialog').modal({
          keyboard: false
        }).modal('show');
      }, false);

    menuDl.addEventListener('click',
      (e) => {
        $('#dlDialog').modal({
          keyboard: false
        }).modal('show');
      }, false);

    undo.addEventListener('click',
      (e) => {
        canvas.undo();
      }, false);

    redo.addEventListener('click',
      (e) => {
        canvas.redo();
      }, false);

    function createObjectPostProcess(object) {
      object.on('selected', function () {
        opacity.value = object.opacity * 100;
        opacityValue.innerHTML = object.opacity * 100;
        if (object.type == 'textbox') {
          font.value = object.fontFamily;
          fontColor.value = object.get('fill');
          textRange.value = object.fontSize;
          textRangeValue.innerHTML = object.fontSize;
        }
      });
    }
  }
});

