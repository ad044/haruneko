import { Tags } from '../Tags';
import icon from './BestManhua.webp';
import { DecoratableMangaScraper } from '../providers/MangaPlugin';
import * as Madara from './decorators/WordPressMadara';
import * as Common from './decorators/Common';

@Madara.MangaCSS(/^https?:\/\/bestmanhua\.com\/manga\/[^/]+\/$/)
@Madara.MangasMultiPageAJAX()
@Madara.ChaptersSinglePageAJAXv1()
@Madara.PagesSinglePageCSS('ul.blocks-gallery-grid li.blocks-gallery-item figure img')
@Common.ImageDirect()
// TODO: Website no longer exist?
export default class extends DecoratableMangaScraper {

    public constructor() {
        super('bestmanhua', 'Best Manhua', 'https://bestmanhua.com', Tags.Media.Manhwa, Tags.Media.Manhua, Tags.Language.English);
    }

    public override get Icon() {
        return icon;
    }
}