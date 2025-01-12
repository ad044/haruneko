// Auto-Generated export from HakuNeko Legacy
//import { Tags } from '../Tags';
import icon from './MangaClash.webp';
import { DecoratableMangaScraper } from '../providers/MangaPlugin';
import * as Madara from './decorators/WordPressMadara';
import * as Common from './decorators/Common';

@Madara.MangaCSS(/^https?:\/\/mangaclash\.com\/manga\/[^/]+\/$/)
@Madara.MangasMultiPageAJAX()
@Madara.ChaptersSinglePageAJAXv1()
@Madara.PagesSinglePageCSS()
@Common.ImageDirect()
export default class extends DecoratableMangaScraper {

    public constructor() {
        super('mangaclash', 'Manga Clash', 'https://mangaclash.com'/*, Tags.Media., Tags.Language.*/);
    }

    public override get Icon() {
        return icon;
    }
}

// Original Source
/*
class MangaClash extends WordPressMadara {

    constructor() {
        super();
        super.id = 'mangaclash';
        super.label = 'Manga Clash';
        this.tags = [ 'manga', 'webtoon', 'english' ];
        this.url = 'https://mangaclash.com';
    }
}
*/