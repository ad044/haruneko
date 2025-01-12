// Auto-Generated export from HakuNeko Legacy
//import { Tags } from '../Tags';
import icon from './UnEmployedScans.webp';
import { DecoratableMangaScraper } from '../providers/MangaPlugin';
import * as Madara from './decorators/WordPressMadara';
import * as Common from './decorators/Common';

@Madara.MangaCSS(/^https?:\/\/unemployedscans\.com\/manga\/[^/]+\/$/)
@Madara.MangasMultiPageAJAX()
@Madara.ChaptersSinglePageAJAXv1()
@Madara.PagesSinglePageCSS()
@Common.ImageDirect()
export default class extends DecoratableMangaScraper {

    public constructor() {
        super('unemployedscans', 'Unemployed Scans', 'https://unemployedscans.com'/*, Tags.Media., Tags.Language.*/);
    }

    public override get Icon() {
        return icon;
    }
}

// Original Source
/*
class UnEmployedScans extends WordPressMadara {

    constructor() {
        super();
        super.id = 'unemployedscans';
        super.label = 'Unemployed Scans';
        this.tags = ['webtoon', 'english'];
        this.url = 'https://unemployedscans.com';
    }
}
*/