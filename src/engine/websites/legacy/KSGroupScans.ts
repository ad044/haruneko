// Auto-Generated export from HakuNeko Legacy
// See: https://gist.github.com/ronny1982/0c8d5d4f0bd9c1f1b21dbf9a2ffbfec9

//import { Tags } from '../../Tags';
import icon from './KSGroupScans.webp';
import { DecoratableMangaScraper } from '../../providers/MangaPlugin';

export default class extends DecoratableMangaScraper {

    public constructor() {
        super('ksgroupscans', `KSGroupScans`, 'https://ksgroupscans.com' /*, Tags.Language.English, Tags ... */);
    }

    public override get Icon() {
        return icon;
    }
}

// Original Source
/*
class KSGroupScans extends FlatManga {

    constructor() {
        super();
        super.id = 'ksgroupscans';
        super.label = 'KSGroupScans';
        this.tags = [ 'manga', 'english', 'scanlation' ];
        this.url = 'https://ksgroupscans.com';

        this.queryChapters = 'ul.list-chapters > a';
        this.queryChapterTitle = 'div.chapter-name';
        this.queryPages = 'div.chapter-content source';
        this.language = '';
    }

    async _getMangas() {
        let mangaList = [];
        let uri = new URL('/manga-list.html', this.url);
        let request = new Request(uri, this.requestOptions);
        let data = await this.fetchDOM(request, 'ul.pagination a:last-of-type');
        let pageCount = parseInt(data[0].href.match(/page=(\d+)/)[1]);
        for(let page = 1; page <= pageCount; page++) {
            let mangas = await this._getMangasFromPage(page);
            mangaList.push(...mangas);
        }
        return mangaList;
    }

    async _getMangasFromPage(page) {
        let uri = new URL('/manga-list.html?page=' + page, this.url);
        let request = new Request(uri, this.requestOptions);
        let data = await this.fetchDOM(request, 'div.card-body div.thumb-item-flow div.series-title a');
        return data.map(element => {
            return {
                id: this.getRootRelativeOrAbsoluteLink(element, this.url),
                title: element.text.trim()
            };
        });
    }
}
*/