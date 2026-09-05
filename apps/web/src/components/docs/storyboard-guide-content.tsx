/** 分镜成片工作流使用文档正文（.markdown-doc 内容，完整迁移） */
export function StoryboardGuideContent() {
 return (
 <article className="rounded-[32px] border border-slate-700 bg-slate-800/60 backdrop-blur-xs px-6 md:px-10 py-8 md:py-10 shadow-[0_28px_80px_rgba(2,8,23,0.34)]">
 <header className="doc-header">
 <h1 className="doc-title">VidSpark 分镜成片工作流使用文档</h1>
 <div className="doc-video-grid">
 <figure className="doc-video-card">
 <video
 controls
 controlsList="nodownload"
 disablePictureInPicture
 preload="metadata"
 className="doc-video"
 >
 <source src="/guide-assets/小猫下班vlog.mov" type="video/quicktime" />
 <source src="/guide-assets/小猫下班vlog.mov" type="video/mp4" /> 当前浏览器不支持视频播放。{' '}
 </video>
 <figcaption className="doc-video-caption">PixVerse-v6 示例</figcaption>
 </figure>
 <figure className="doc-video-card">
 <video
 controls
 controlsList="nodownload"
 disablePictureInPicture
 preload="metadata"
 className="doc-video"
 >
 <source src="/guide-assets/飞天成片.mov" type="video/quicktime" />
 <source src="/guide-assets/飞天成片.mov" type="video/mp4" /> 当前浏览器不支持视频播放。{' '}
 </video>
 <figcaption className="doc-video-caption">Seedance2.0 参考图生视频示例</figcaption>
 </figure>
 </div>
 </header>
 <div className="markdown-doc">
 <hr />
 <h2 id="一、这篇文档能帮你做什么">一、这篇文档能帮你做什么</h2>
 <p>通过这篇文档，你可以完成下面这条标准创作链路：</p>
 <p>
 <code>一句话创意 -&gt; 内容创作 -&gt; 分镜方案创作 -&gt; 分镜成片工作流 -&gt; 生成片段 -&gt; 剪辑</code>
 </p>
 <p></p>
 <figure className="doc-image">
 <img src="/guide-assets/image.png" alt="" />
 </figure>
 <p></p>
 <p>文档中会重点说明这些能力：</p>
 <ul>
 <li>内容创作：输入简单创意，自动扩写剧情内容</li>
 <li>分镜方案创作：基于剧情生成专业分镜提示词</li>
 <li>分镜成片工作流：按片段生成视频，并支持逐段编辑</li>
 <li>单镜头重做：某一个镜头效果不理想时，可以单独重生成</li>
 <li>四种生成模式：文生视频、首帧生视频、首尾帧生视频、参考图生视频</li>
 <li>支持模型：Seedance 2.0、PixVerse V6</li>
 <li>工作流特点：不用排队、可控、可编辑、可迭代</li>
 </ul>
 <blockquote>
 <p>适用场景示例：剧情类短视频、视觉风格片段、参考图一致性创作等。</p>
 </blockquote>
 <hr />
 <h2 id="二、开始前准备">二、开始前准备</h2>
 <p>建议先准备以下内容：</p>
 <ul>
 <li>一个明确的创意描述，哪怕只有一句话</li>
 <li>你想做的视频大致风格，例如写实、梦幻、超现实、日常 vlog</li>
 <li>如果打算使用首帧、首尾帧或参考图模式，提前准备好图片素材</li>
 </ul>
 <hr />
 <h2 id="三、标准工作流：从一句话到视频片段">三、标准工作流：从一句话到视频片段</h2>
 <h3 id="31-第一步：内容创作">3.1 第一步：内容创作</h3>
 <p>
 进入 <code>内容创作</code> 页面后，先输入你的创意描述。
 <br />
 本文使用的主示例为：
 </p>
 <blockquote>
 <p>
 拟人化的小猫 vlog。周五下午，辛苦了一周的小猫期待下班回家享受周末，时间一到，眼神从疲倦立刻变成神采奕奕，快速收拾东西，蹑手蹑脚离开工位，出了公司，开心地奔跑回家。
 </p>
 </blockquote>
 <p>输入完成后：</p>
 <ol>
 <li>选择合适的创作类型</li>
 <li>
 选择 <code>视频脚本</code>
 </li>
 <li>
 将时长设置为 <code>1-3 分钟</code>
 </li>
 <li>点击生成</li>
 </ol>
 <p>系统会自动把原始创意扩展成更完整的剧情内容。生成结果通常不只是正文，还会包含：</p>
 <ul>
 <li>更完整的故事细节</li>
 <li>更清晰的情节推进</li>
 <li>可传播的表达方向</li>
 <li>可继续用于后续分镜创作的剧情文本</li>
 </ul>
 <p>这个阶段的目标，不是直接出片，而是先把一个零散念头整理成可执行的故事方案。</p>
 <p></p>
 <figure className="doc-image">
 <img src="/guide-assets/image-1.png" alt="" />
 </figure>
 <br />
 <figure className="doc-image">
 <img src="/guide-assets/image-6.png" alt="" />
 </figure>
 <p></p>
 <h3 id="操作建议">操作建议</h3>
 <ul>
 <li>创意描述尽量包含主角、场景、时间和动作变化</li>
 <li>如果你的目标是剧情类短片，描述里最好写出情绪反差或转折点</li>
 <li>这里生成的剧情越清晰，后面的分镜拆解通常越顺畅</li>
 </ul>
 <hr />
 <h3 id="32-第二步：分镜方案创作">3.2 第二步：分镜方案创作</h3>
 <p>
 拿到剧情内容后，进入 <code>分镜方案创作</code> 页面。
 </p>
 <p>在这个页面中，你需要把上一步生成的剧情内容粘贴进来，然后补充分镜相关设置，例如：</p>
 <ul>
 <li>视频风格</li>
 <li>光影氛围</li>
 <li>运镜方式</li>
 <li>转场方式</li>
 </ul>
 <p>如果你暂时不想逐项设置，也可以使用默认的 AI 自动设置。</p>
 <p>
 设置完成后点击生成，系统会自动分析剧情结构，并拆解成多个镜头片段。每个片段会给出相对专业的分镜提示词，通常会包含：
 </p>
 <ul>
 <li>时间划分</li>
 <li>画面描述</li>
 <li>角色动作</li>
 <li>运镜信息</li>
 <li>光线、角度、风格等生成要素</li>
 </ul>
 <p></p>
 <figure className="doc-image">
 <img src="/guide-assets/image-2.png" alt="" />
 </figure>
 <p></p>
 <p></p>
 <figure className="doc-image">
 <img src="/guide-assets/image-3.png" alt="" />
 </figure>
 <p></p>
 <h3 id="这一步的产出价值">这一步的产出价值</h3>
 <ul>
 <li>把剧情文本转换成可执行的专业镜头语言</li>
 <li>降低手写提示词的门槛</li>
 <li>让每个镜头在风格和表达上更完整</li>
 <li>支持生成多个方案，方便你做对比和筛选</li>
 </ul>
 <hr />
 <h3 id="33-第三步：进入分镜成片工作流">3.3 第三步：进入分镜成片工作流</h3>
 <p>
 选定一个合适的分镜方案后，点击进入 <code>分镜成片工作流</code>。
 </p>
 <p>在这个页面里，所有镜头会以片段形式展示。你可以逐个片段检查提示词、绑定素材、设置参数，然后再开始生成。</p>
 <p>这是整条链路里最关键的一步，因为从这里开始，你不再只是看脚本，而是真正开始把分镜变成可预览、可调整的视频片段。</p>
 <p></p>
 <figure className="doc-image">
 <img src="/guide-assets/image-4.png" alt="" />
 </figure>
 <p></p>
 <hr />
 <h2 id="四、分镜成片工作流怎么用">四、分镜成片工作流怎么用</h2>
 <h3 id="41-片段级编辑">4.1 片段级编辑</h3>
 <p>每个片段都可以单独查看和编辑提示词。</p>
 <p>
 如果你觉得某个镜头描述不够准确，或者希望加入更明确的动作、角色状态、画面元素，可以直接修改当前片段的脚本内容，而不需要推翻整个项目。
 </p>
 <p>这意味着你可以把 AI 生成的提示词当作初稿，再结合自己的想法进行二次调整。</p>
 <hr />
 <h3 id="42-选择生成模式">4.2 选择生成模式</h3>
 <p>VidSpark 当前支持四种生成模式，你可以根据片段需求灵活选择：</p>
 <h3 id="1-文生视频">1. 文生视频</h3>
 <p>适合没有任何参考素材，直接根据文字描述生成画面的场景。</p>
 <p>适用情况：</p>
 <ul>
 <li>新创意验证</li>
 <li>没有角色图或场景图</li>
 <li>想先快速看镜头方向</li>
 </ul>
 <h3 id="2-首帧生视频">2. 首帧生视频</h3>
 <p>上传一张首帧图片，模型会基于这张图和提示词继续生成后续画面。</p>
 <p>适用情况：</p>
 <ul>
 <li>你已经有某个角色或场景的起始画面</li>
 <li>希望片头画面更加稳定</li>
 </ul>
 <h3 id="3-首尾帧生视频">3. 首尾帧生视频</h3>
 <p>同时上传首帧和尾帧图片，模型会生成两个画面之间的过渡过程。</p>
 <p>适用情况：</p>
 <ul>
 <li>转场镜头</li>
 <li>状态变化明显的镜头</li>
 <li>从一个空间切换到另一个空间的过渡段</li>
 </ul>
 <h3 id="4-参考图生视频">4. 参考图生视频</h3>
 <p>上传参考图片，模型会尽量在参考图风格基础上生成视频。</p>
 <p>适用情况：</p>
 <ul>
 <li>需要保持角色形象一致</li>
 <li>需要保持场景风格统一</li>
 <li>对视觉连续性要求较高的项目</li>
 </ul>
 <p>
 需要注意的是，目前 <code>参考图生视频</code> 仅支持 <code>Seedance 2.0</code> 和{' '}
 <code>Seedance 2.0 Fast</code>。
 </p>
 <hr />
 <h3 id="43-单镜头重做">4.3 单镜头重做</h3>
 <p>这是分镜成片工作流里非常关键的能力。</p>
 <p>如果某一个镜头生成后出现以下情况：</p>
 <ul>
 <li>动作不自然</li>
 <li>氛围不对</li>
 <li>角色表情不理想</li>
 <li>画面和原本分镜预期偏差较大</li>
 </ul>
 <p>你不需要整条视频全部重跑。可以只针对当前这个镜头重新生成，其他已经满意的片段不受影响。</p>
 <p>这种方式特别适合需要反复打磨局部镜头的创作流程，也能明显减少重复等待和重复生成。</p>
 <p></p>
 <figure className="doc-image">
 <img src="/guide-assets/image-5.png" alt="" />
 </figure>
 <p></p>
 <hr />
 <h2 id="五、模型选择建议">五、模型选择建议</h2>
 <p>当前工作流支持的主要模型包括：</p>
 <ul>
 <li>
 <code>Seedance 2.0</code>
 </li>
 <li>
 <code>PixVerse V6</code>
 </li>
 </ul>
 <p>从当前示例经验来看：</p>
 <ul>
 <li>
 <code>Seedance 2.0</code> 更适合对复杂动作、人物动画、风格一致性要求较高的镜头
 </li>
 <li>
 <code>PixVerse V6</code> 更适合日常创作中追求效率和性价比的片段
 </li>
 </ul>
 <p>
 如果你使用的是参考图生视频模式，优先确认当前模式是否需要使用 <code>Seedance 2.0</code> 系列模型。
 </p>
 <hr />
 <h2 id="六、使用建议">六、使用建议</h2>
 <p>为了让第一次体验更顺畅，建议按下面的方式操作：</p>
 <ul>
 <li>内容创作阶段先把故事讲清楚，不要一开始就纠结每个镜头</li>
 <li>分镜方案阶段选择一个最喜欢的方案，再进入成片工作流</li>
 <li>对一致性要求高的项目，尽量提前准备角色图、场景图或参考图</li>
 </ul>
 <hr />
 <h2 id="七、常见问题">七、常见问题</h2>
 <h3 id="1-是不是必须自己写很专业的提示词？">1. 是不是必须自己写很专业的提示词？</h3>
 <p>不是。你可以先用内容创作和分镜方案生成功能拿到初稿，再在工作流里做局部编辑。</p>
 <h3 id="2-某一个镜头不满意怎么办？">2. 某一个镜头不满意怎么办？</h3>
 <p>可以直接单独重做该镜头，不需要把整条视频重新生成一遍。</p>
 <h3 id="3-不同片段可以用不同模式吗？">3. 不同片段可以用不同模式吗？</h3>
 <p>可以。你可以根据镜头需求选择文生视频、首帧生视频、首尾帧生视频或参考图生视频。</p>
 <h3 id="4-参考图生视频能用哪些模型？">4. 参考图生视频能用哪些模型？</h3>
 <p>
 当前文档确认的信息是：<code>参考图生视频</code> 支持 <code>Seedance 2.0</code> 和{' '}
 <code>Seedance 2.0 Fast</code>。
 </p>
 <hr />
 <h2 id="八、总结">八、总结</h2>
 <p>VidSpark 这条分镜成片工作流，核心不是单纯“生成视频”，而是把内容创作、分镜拆解、片段生成和局部重做串成一条可反复迭代的链路。</p>
 <p>如果你想要的不是一次性碰碰运气，而是一套更可控的 AI 视频创作方式，这条工作流会更适合你。</p>
 </div>
 </article>
 );
}
