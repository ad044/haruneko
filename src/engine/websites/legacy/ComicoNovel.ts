// Auto-Generated export from HakuNeko Legacy
// See: https://gist.github.com/ronny1982/0c8d5d4f0bd9c1f1b21dbf9a2ffbfec9

//import { Tags } from '../../Tags';
import icon from './ComicoNovel.webp';
import { DecoratableMangaScraper } from '../../providers/MangaPlugin';

export default class extends DecoratableMangaScraper {

    public constructor() {
        super('comico-novel', `Comico Novel (コミコ)`, 'https://novel.comico.jp' /*, Tags.Language.English, Tags ... */);
    }

    public override get Icon() {
        return icon;
    }
}

// Original Source
/*
class ComicoNovel extends Connector {

    constructor() {
        super();
        super.id = 'comico-novel';
        super.label = 'Comico Novel (コミコ)';
        this.tags = [ 'novel', 'japanese' ];
        this.url = 'https://novel.comico.jp';
    }

    _getTitleNumber(href) {
        let uri = new URL(href, this.url);
        return uri.pathname.match(/\/(\d+)\/?$/)[1];
    }

    async _getPages(chapter) {
        let darkmode = Engine.Settings.NovelColorProfile();
        let script = `
            new Promise((resolve, reject) => {
                let script = document.createElement('script');
                script.onload = async function() {
                    try {
                        let images = [];
                        let elements = [...document.querySelectorAll('div.cn-page div.cn-block > div[class*="cn-"]')];
                        for(let element of elements) {
                            if(element.className.includes('cn-picture')) {
                                images.push(...[...element.querySelectorAll('img.cn-picture__img')].map(img => img.src));
                                // TODO: include figcaption.cn-picture__caption
                            } else {
                                element.parentElement.style.margin = '0';
                                [...element.querySelectorAll(":not(:empty)")].forEach(ele => {
                                    ele.style.backgroundColor = '${darkmode.background}'
                                    ele.style.color = '${darkmode.text}'
                                })
                                element.style.backgroundColor = '${darkmode.background}'
                                element.style.color = '${darkmode.text}'
                                let canvas = await html2canvas(element);
                                images.push(canvas.toDataURL('image/png'));
                            }
                        }
                        resolve(images);
                    } catch(error) {
                        reject(error);
                    }
                }
                script.src = 'https://html2canvas.hertzen.com/dist/html2canvas.min.js';
                document.body.appendChild(script);
            });
        `;

        let uri = new URL(`/${chapter.manga.id}/${chapter.id}/`, this.url);
        let request = new Request(uri, this.requestOptions);
        return Engine.Request.fetchUI(request, script, 30000, true);
    }
}
*/