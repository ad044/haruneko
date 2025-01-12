// Auto-Generated export from HakuNeko Legacy
// See: https://gist.github.com/ronny1982/0c8d5d4f0bd9c1f1b21dbf9a2ffbfec9

//import { Tags } from '../../Tags';
import icon from './ManhuaZ.webp';
import { DecoratableMangaScraper } from '../../providers/MangaPlugin';

export default class extends DecoratableMangaScraper {

    public constructor() {
        super('manhuaz', `ManhuaZ`, 'https://manhuaz.net' /*, Tags.Language.English, Tags ... */);
    }

    public override get Icon() {
        return icon;
    }
}

// Original Source
/*
class ManhuaZ extends FlatManga {

    constructor() {
        super();
        super.id = 'manhuaz';
        super.label = 'ManhuaZ';
        this.tags = ['webtoon', 'english'];
        this.url = 'https://manhuaz.net';
        this.path = '/manhua-list.html?page=';
        this.requestOptions.headers.set('x-referer', this.url);

        this.queryMangaTitle = 'ul.manga-info > h1 > span';
        this.queryMangas = 'div.series-title > a';
        this.queryPageCount = 'div.pagination-wrap > ul > li:nth-child(7) > a';
        this.queryChapters = 'ul.list-chapters > a';
    }

    async _getMangas() {
        const uri = new URL(this.path + 1, this.url);
        const request = new Request(uri, this.requestOptions);
        const pages = await this.fetchDOM(request, this.queryPageCount);
        let mangaList = [];
        for(let page = 1; page <= parseInt(pages[0].textContent); page++) {
            let mangas = await this._getMangasFromPage(page);
            mangaList.push(...mangas);
        }
        return mangaList;
    }

    async _getMangasFromPage(page) {
        const uri = new URL(this.path + page, this.url);
        const request = new Request(uri, this.requestOptions);
        let data = await this.fetchDOM(request, this.queryMangas);
        return data.map( element => {
            return {
                id: this.getRootRelativeOrAbsoluteLink(element, this.url),
                title: element.text.trim()
            };
        });
    }

    async _getChapters(manga) {
        const uri = new URL(manga.id, this.url);
        const request = new Request(uri, this.requestOptions);
        const data = await this.fetchDOM(request, this.queryChapters);
        return data.map(element => {
            return {
                id: this.getRootRelativeOrAbsoluteLink(element, this.url),
                title: element.title.trim(),
                language: ''
            };
        });
    }
}
*/