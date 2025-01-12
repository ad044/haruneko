// Auto-Generated export from HakuNeko Legacy
// See: https://gist.github.com/ronny1982/0c8d5d4f0bd9c1f1b21dbf9a2ffbfec9

//import { Tags } from '../../Tags';
import icon from './FuryoSquad.webp';
import { DecoratableMangaScraper } from '../../providers/MangaPlugin';

export default class extends DecoratableMangaScraper {

    public constructor() {
        super('furyosquad', `Furyo Squad`, 'http://www.furyosquad.com' /*, Tags.Language.English, Tags ... */);
    }

    public override get Icon() {
        return icon;
    }
}

// Original Source
/*
class FuryoSquad extends Connector {

    constructor() {
        super();
        super.id = 'furyosquad';
        super.label = 'Furyo Squad';
        this.tags = [ 'manga', 'french', 'high-quality' ];
        this.url = 'http://www.furyosquad.com';
    }

    async _getMangas() {
        const categories = ['/', '/en-cours', '/termines', '/stoppes'];

        let mangas = [];
        for ( const category of categories) {
            let request = new Request(new URL(category, this.url), this.requestOptions);
            let data = await this.fetchDOM(request, 'div.fs-chap-container div.grid-item-container div.media-body a');
            mangas.push( ...data.map(manga => {
                return {
                    id: this.getRootRelativeOrAbsoluteLink(manga, this.url),
                    title: manga.title.trim()
                };
            }));
        }

        return mangas;
    }

    async _getChapters(manga) {
        const url = new URL(manga.id, this.url);
        const data = await this._fetchPOST(url, 'adult=true', 'div.list.fs-chapter-list div.title a');

        return [...data].map(chapter => {
            return {
                id: this.getRootRelativeOrAbsoluteLink(chapter, this.url),
                title: chapter.title.trim()
            };
        });
    }

    async _getPages(chapter) {
        const request = new Request(new URL(chapter.id, this.url), this.requestOptions);
        const data = await this.fetchDOM(request, 'div.fs-reader-page source');

        return data.map(page => this.getAbsolutePath(page.src, this.url));
    }

    async _fetchPOST(uri, body, selector) {
        const request = new Request(new URL(uri, this.url), {
            method: 'POST',
            body: body,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
        let data = await fetch(request);
        data = this.createDOM(await data.text());
        return data.querySelectorAll(selector);
    }
}
*/