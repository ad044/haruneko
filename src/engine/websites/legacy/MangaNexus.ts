// Auto-Generated export from HakuNeko Legacy
// See: https://gist.github.com/ronny1982/0c8d5d4f0bd9c1f1b21dbf9a2ffbfec9

//import { Tags } from '../../Tags';
import icon from './MangaNexus.webp';
import { DecoratableMangaScraper } from '../../providers/MangaPlugin';

export default class extends DecoratableMangaScraper {

    public constructor() {
        super('manganexus', `MangaNexus`, 'https://manganexus.net' /*, Tags.Language.English, Tags ... */);
    }

    public override get Icon() {
        return icon;
    }
}

// Original Source
/*
class MangaNexus extends Connector {

    constructor() {
        super();
        super.id = 'manganexus';
        super.label = 'MangaNexus';
        this.tags = ['manga', 'webtoon', 'portuguese'];
        this.url = 'https://manganexus.net';
        this.key = 'M_dDS-6KdyeTRJm-ZYL7E';
    }

    async _getMangaFromURI(uri) {
        const id = uri.split('/').pop();
        const url = new URL(`/_next/data/${this.key}/manga/${id}.json`, this.url);
        const request = new Request(url, this.requestOptions);
        const { pageProps: data } = await this.fetchJSON(request);
        return new Manga(this, id, data.manga.name);
    }

    async _getMangas() {
        const uri = new URL(`/_next/data/${this.key}/index.json`, this.url);
        const request = new Request(uri, this.requestOptions);
        const { pageProps: data } = await this.fetchJSON(request);
        const mangas = [...data.releases.mangas, ...data.releases.manhuas, ...data.releases.webtoons];
        return mangas.map(manga => {
            return {
                id: manga.slug,
                title: manga.name
            };
        });
    }

    async _getChapters(manga) {
        const uri = new URL(`/_next/data/${this.key}/manga/${manga.id}.json`, this.url);
        const request = new Request(uri, this.requestOptions);
        const { pageProps: data } = await this.fetchJSON(request);
        return data.chapters.map(chapter => {
            return {
                id: chapter.slug,
                title: `Capítulo ${chapter.number}${chapter.name.length != 0 ? ' - ' + chapter.name : ''}`,
                language: '',
            };
        });
    }

    async _getPages(chapter) {
        const uri = new URL(`/_next/data/${this.key}/manga/${chapter.manga.id}/capitulo/${chapter.id}.json`, this.url);
        const request = new Request(uri, this.requestOptions);
        const { pageProps: data } = await this.fetchJSON(request);
        return data.chapter.pages;
    }
}
*/