'use client';

import { useEffect, useState } from 'react';

import { useRouter } from 'next/navigation';

/** 出片工作台（加载动画 → 工作区；返回分镜工作室） */
export function WorkbenchView() {
 const router = useRouter();
 const [loaded, setLoaded] = useState(false);

 /* 保留原站加载动效，900ms 后展示工作区 */
 useEffect(() => {
 const timer = setTimeout(() => setLoaded(true), 900);
 return () => clearTimeout(timer);
 }, []);

 return (
 <div id="app">
 <div className="vw-page">
 <header className="vw-header">
 <div className="vw-header-left">
 <button title="返回" className="vw-back-btn" onClick={() => router.push('/storyboard-studio')}>
 <i className="fa-solid fa-arrow-left"></i>
 </button>
 <div className="vw-header-info">
 <h1 className="vw-title">方案B：沉浸穿梭-视频工作流</h1>
 <p className="vw-subtitle">
 <span className="vw-status-dot dot-draft"></span>
 <span className="vw-status-text">待配置</span>
 <span className="vw-sep">/</span>
 <span>0 of 2 片段完成</span>
 </p>
 </div>
 </div>
 <div className="vw-header-right">
 <div className="vw-model-select">
 <label className="vw-model-label">模型</label>
 <div className="el-select vw-el-select-model el-select--small">
 <div className="el-input el-input--small el-input--suffix">
 <input type="text" readOnly autoComplete="off" placeholder="已选模型" className="el-input__inner" />
 <span className="el-input__suffix">
 <span className="el-input__suffix-inner">
 <i className="el-select__caret el-input__icon el-icon-arrow-up"></i>
 </span>
 </span>
 </div>
 <div className="el-select-dropdown el-popper" style={{ display: 'none', minWidth: '190px' }}>
 <div className="el-scrollbar">
 <div
 className="el-select-dropdown__wrap el-scrollbar__wrap"
 style={{ marginBottom: '-15px', marginRight: '-15px' }}
 >
 <ul className="el-scrollbar__view el-select-dropdown__list">
 <li className="el-select-dropdown__item selected">
 <div className="vw-model-option">
 <span>Seedance 2.0 Fast</span>
 </div>
 </li>
 <li className="el-select-dropdown__item">
 <div className="vw-model-option">
 <span>Seedance 2.0</span>
 </div>
 </li>
 <li className="el-select-dropdown__item">
 <div className="vw-model-option">
 <span>Seedance 1.5 Pro</span>
 </div>
 </li>
 <li className="el-select-dropdown__item">
 <div className="vw-model-option">
 <span>PixVerse V6</span>
 </div>
 </li>
 </ul>
 </div>
 <div className="el-scrollbar__bar is-horizontal">
 <div className="el-scrollbar__thumb" style={{ transform: 'translateX(0%)' }}></div>
 </div>
 <div className="el-scrollbar__bar is-vertical">
 <div className="el-scrollbar__thumb" style={{ transform: 'translateY(0%)' }}></div>
 </div>
 </div>
 </div>
 </div>
 </div>
 <div className="vw-model-select">
 <label className="vw-model-label">尺寸</label>
 <div className="el-select vw-el-select-model el-select--small">
 <div className="el-input el-input--small el-input--suffix">
 <input type="text" readOnly autoComplete="off" placeholder="已选尺寸" className="el-input__inner" />
 <span className="el-input__suffix">
 <span className="el-input__suffix-inner">
 <i className="el-select__caret el-input__icon el-icon-arrow-up"></i>
 </span>
 </span>
 </div>
 <div className="el-select-dropdown el-popper" style={{ display: 'none', minWidth: '110px' }}>
 <div className="el-scrollbar">
 <div
 className="el-select-dropdown__wrap el-scrollbar__wrap"
 style={{ marginBottom: '-15px', marginRight: '-15px' }}
 >
 <ul className="el-scrollbar__view el-select-dropdown__list">
 <li className="el-select-dropdown__item">
 <span>21:9</span>
 </li>
 <li className="el-select-dropdown__item selected">
 <span>16:9</span>
 </li>
 <li className="el-select-dropdown__item">
 <span>4:3</span>
 </li>
 <li className="el-select-dropdown__item">
 <span>1:1</span>
 </li>
 <li className="el-select-dropdown__item">
 <span>3:4</span>
 </li>
 <li className="el-select-dropdown__item">
 <span>9:16</span>
 </li>
 </ul>
 </div>
 <div className="el-scrollbar__bar is-horizontal">
 <div className="el-scrollbar__thumb" style={{ transform: 'translateX(0%)' }}></div>
 </div>
 <div className="el-scrollbar__bar is-vertical">
 <div className="el-scrollbar__thumb" style={{ transform: 'translateY(0%)' }}></div>
 </div>
 </div>
 </div>
 </div>
 </div>
 <div className="vw-model-select">
 <label className="vw-model-label">分辨率</label>
 <div className="el-select vw-el-select-model el-select--small">
 <div className="el-input el-input--small el-input--suffix">
 <input type="text" readOnly autoComplete="off" placeholder="已选分辨率" className="el-input__inner" />
 <span className="el-input__suffix">
 <span className="el-input__suffix-inner">
 <i className="el-select__caret el-input__icon el-icon-arrow-up"></i>
 </span>
 </span>
 </div>
 <div className="el-select-dropdown el-popper" style={{ display: 'none', minWidth: '110px' }}>
 <div className="el-scrollbar">
 <div
 className="el-select-dropdown__wrap el-scrollbar__wrap"
 style={{ marginBottom: '-15px', marginRight: '-15px' }}
 >
 <ul className="el-scrollbar__view el-select-dropdown__list">
 <li className="el-select-dropdown__item selected">
 <span>480P</span>
 </li>
 <li className="el-select-dropdown__item">
 <span>720P</span>
 </li>
 </ul>
 </div>
 <div className="el-scrollbar__bar is-horizontal">
 <div className="el-scrollbar__thumb" style={{ transform: 'translateX(0%)' }}></div>
 </div>
 <div className="el-scrollbar__bar is-vertical">
 <div className="el-scrollbar__thumb" style={{ transform: 'translateY(0%)' }}></div>
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 </header>
 {!loaded && (
 <div className="vw-loading">
 <i className="fa-solid fa-circle-notch fa-spin"></i>
 <span>加载工作流...</span>
 </div>
 )}
 <div className="vw-main" style={{ display: loaded ? '' : 'none' }}>
 <aside className="vw-panel vw-assets">
 <div className="vw-panel-head" style={{ justifyContent: 'flex-start', gap: '16px' }}>
 <h2>资产库</h2>
 <div className="el-dropdown">
 <button
 className="vw-btn-upload el-dropdown-selfdefine"
 aria-haspopup="listbox"
 aria-controls="dropdown-menu-2404"
 role="button"
 tabIndex={0}
 >
 <i className="fa-solid fa-plus"></i>
 <span>上传</span>
 </button>
 <ul
 className="el-dropdown-menu el-popper el-dropdown-menu--medium"
 id="dropdown-menu-2404"
 style={{ display: 'none' }}
 >
 <li tabIndex={-1} className="el-dropdown-menu__item">
 上传角色
 </li>
 <li tabIndex={-1} className="el-dropdown-menu__item">
 上传场景
 </li>
 <li tabIndex={-1} className="el-dropdown-menu__item">
 上传参考图
 </li>
 </ul>
 </div>
 <input type="file" accept="image/*" className="vw-hidden" />
 </div>
 <div className="vw-asset-scroll custom-scrollbar">
 <div className="vw-asset-group">
 <div className="vw-group-head">
 <span className="vw-group-name">角色</span>
 </div>
 <div className="vw-empty-state">
 <span>暂无角色</span>
 </div>
 </div>
 <div className="vw-asset-group">
 <div className="vw-group-head">
 <span className="vw-group-name">场景</span>
 </div>
 <div className="vw-empty-state">
 <span>暂无场景</span>
 </div>
 </div>
 <div className="vw-asset-group">
 <div className="vw-group-head">
 <span className="vw-group-name">参考图</span>
 </div>
 <div className="vw-asset-grid">
 <div className="vw-asset-card">
 <div className="vw-asset-thumb">
 <img
 src="https://vidspark-1329542098.cos.ap-shanghai.myqcloud.com/storyboard-video/3454/2382/252/assets/reference-5357b5768cf44a6ab9300e64a0f1fc1d.png"
 alt="AI AGent.png"
 />
 <div className="vw-asset-actions">
 <button title="删除" className="vw-btn-del">
 <i className="fa-solid fa-trash-can"></i>
 </button>
 </div>
 </div>
 <div className="vw-asset-info">
 <span className="vw-asset-name">AI AGent.png</span>
 </div>
 </div>
 </div>
 </div>
 </div>
 </aside>
 <section className="vw-panel vw-shots">
 <div className="vw-panel-head">
 <div className="vw-panel-title" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
 <h2>片段提示词</h2>
 <span className="vw-count">2 个片段</span>
 </div>
 </div>
 <div className="vw-shot-scroll custom-scrollbar">
 <div className="vw-shot-card">
 <div className="vw-shot-head">
 <div className="vw-shot-title-area">
 <span className="vw-shot-title">片段 1</span>
 <div className="vw-param-item" style={{ marginLeft: '12px' }}>
 <span className="vw-param-label">时长 (s)</span>
 <div className="vw-num-input el-input-number el-input-number--mini is-controls-right">
 <span role="button" className="el-input-number__decrease">
 <i className="el-icon-arrow-down"></i>
 </span>
 <span role="button" className="el-input-number__increase is-disabled">
 <i className="el-icon-arrow-up"></i>
 </span>
 <div className="el-input el-input--mini">
 <input
 type="text"
 autoComplete="off"
 max={15}
 min={4}
 className="el-input__inner"
 role="spinbutton"
 aria-valuemax={15}
 aria-valuemin={4}
 aria-valuenow={15}
 aria-disabled={false}
 />
 </div>
 </div>
 </div>
 <div className="vw-param-item" style={{ marginLeft: '8px' }}>
 <span className="vw-param-label">模式</span>
 <div className="el-select vw-mode-select el-select--mini">
 <div className="el-input el-input--mini el-input--suffix">
 <input
 type="text"
 readOnly
 autoComplete="off"
 placeholder="Select"
 className="el-input__inner"
 />
 <span className="el-input__suffix">
 <span className="el-input__suffix-inner">
 <i className="el-select__caret el-input__icon el-icon-arrow-up"></i>
 </span>
 </span>
 </div>
 <div className="el-select-dropdown el-popper" style={{ display: 'none', minWidth: '128px' }}>
 <div className="el-scrollbar">
 <div
 className="el-select-dropdown__wrap el-scrollbar__wrap"
 style={{ marginBottom: '-15px', marginRight: '-15px' }}
 >
 <ul className="el-scrollbar__view el-select-dropdown__list">
 <li className="el-select-dropdown__item selected">
 <span>文生视频</span>
 </li>
 <li className="el-select-dropdown__item">
 <span>首帧生视频</span>
 </li>
 <li className="el-select-dropdown__item">
 <span>首尾帧生视频</span>
 </li>
 <li className="el-select-dropdown__item">
 <span>参考图生视频</span>
 </li>
 </ul>
 </div>
 <div className="el-scrollbar__bar is-horizontal">
 <div className="el-scrollbar__thumb" style={{ transform: 'translateX(0%)' }}></div>
 </div>
 <div className="el-scrollbar__bar is-vertical">
 <div className="el-scrollbar__thumb" style={{ transform: 'translateY(0%)' }}></div>
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 <div className="vw-shot-cost">
 <span className="vw-shot-cost-icon">✦</span>
 <strong className="vw-shot-cost-value">285</strong>
 </div>
 <div className="vw-shot-ops">
 <span className="el-tooltip vw-op-tooltip" aria-describedby="el-tooltip-4667" tabIndex={0}>
 <button className="vw-op-btn">
 <i className="fa-solid fa-save"></i>
 </button>
 </span>
 <span className="el-tooltip vw-op-tooltip" aria-describedby="el-tooltip-2821" tabIndex={0}>
 <button className="vw-op-btn vw-op-btn-generate">
 <i className="fa-solid fa-play"></i>
 </button>
 </span>
 <span className="el-tooltip vw-op-tooltip" aria-describedby="el-tooltip-1433" tabIndex={0}>
 <button className="vw-op-btn">
 <i className="fa-regular fa-copy"></i>
 </button>
 </span>
 <span className="el-tooltip vw-op-tooltip" aria-describedby="el-tooltip-7993" tabIndex={0}>
 <button className="vw-op-btn vw-op-btn-delete">
 <i className="fa-solid fa-trash-can"></i>
 </button>
 </span>
 </div>
 </div>
 <div className="vw-shot-body">
 <div className="vw-shot-main">
 <div className="vw-prompt-area">
 <textarea placeholder="输入该片段的画面描述与动作提示词..." className="vw-prompt-input"></textarea>
 </div>
 </div>
 </div>
 </div>
 <div className="vw-shot-card">
 <div className="vw-shot-head">
 <div className="vw-shot-title-area">
 <span className="vw-shot-title">片段 2</span>
 <div className="vw-param-item" style={{ marginLeft: '12px' }}>
 <span className="vw-param-label">时长 (s)</span>
 <div className="vw-num-input el-input-number el-input-number--mini is-controls-right">
 <span role="button" className="el-input-number__decrease">
 <i className="el-icon-arrow-down"></i>
 </span>
 <span role="button" className="el-input-number__increase">
 <i className="el-icon-arrow-up"></i>
 </span>
 <div className="el-input el-input--mini">
 <input
 type="text"
 autoComplete="off"
 max={15}
 min={4}
 className="el-input__inner"
 role="spinbutton"
 aria-valuemax={15}
 aria-valuemin={4}
 aria-valuenow={5}
 aria-disabled={false}
 />
 </div>
 </div>
 </div>
 <div className="vw-param-item" style={{ marginLeft: '8px' }}>
 <span className="vw-param-label">模式</span>
 <div className="el-select vw-mode-select el-select--mini">
 <div className="el-input el-input--mini el-input--suffix">
 <input
 type="text"
 readOnly
 autoComplete="off"
 placeholder="Select"
 className="el-input__inner"
 />
 <span className="el-input__suffix">
 <span className="el-input__suffix-inner">
 <i className="el-select__caret el-input__icon el-icon-arrow-up"></i>
 </span>
 </span>
 </div>
 <div className="el-select-dropdown el-popper" style={{ display: 'none', minWidth: '117.2px' }}>
 <div className="el-scrollbar">
 <div
 className="el-select-dropdown__wrap el-scrollbar__wrap"
 style={{ marginBottom: '-15px', marginRight: '-15px' }}
 >
 <ul className="el-scrollbar__view el-select-dropdown__list">
 <li className="el-select-dropdown__item">
 <span>文生视频</span>
 </li>
 <li className="el-select-dropdown__item selected">
 <span>首帧生视频</span>
 </li>
 <li className="el-select-dropdown__item">
 <span>首尾帧生视频</span>
 </li>
 <li className="el-select-dropdown__item">
 <span>参考图生视频</span>
 </li>
 </ul>
 </div>
 <div className="el-scrollbar__bar is-horizontal">
 <div className="el-scrollbar__thumb" style={{ transform: 'translateX(0%)' }}></div>
 </div>
 <div className="el-scrollbar__bar is-vertical">
 <div className="el-scrollbar__thumb" style={{ transform: 'translateY(0%)' }}></div>
 </div>
 </div>
 </div>
 </div>
 </div>
 <div className="vw-frame-inline" style={{ marginLeft: '8px' }}>
 <span className="vw-param-label">首帧</span>
 <div className="vw-frame-inline-box">
 <i className="fa-solid fa-plus"></i>
 </div>
 </div>
 </div>
 <div className="vw-shot-cost">
 <span className="vw-shot-cost-icon">✦</span>
 <strong className="vw-shot-cost-value">95</strong>
 </div>
 <div className="vw-shot-ops">
 <span className="el-tooltip vw-op-tooltip" aria-describedby="el-tooltip-8881" tabIndex={0}>
 <button className="vw-op-btn">
 <i className="fa-solid fa-save"></i>
 </button>
 </span>
 <span className="el-tooltip vw-op-tooltip" aria-describedby="el-tooltip-6368" tabIndex={0}>
 <button className="vw-op-btn vw-op-btn-generate">
 <i className="fa-solid fa-play"></i>
 </button>
 </span>
 <span className="el-tooltip vw-op-tooltip" aria-describedby="el-tooltip-6482" tabIndex={0}>
 <button className="vw-op-btn">
 <i className="fa-regular fa-copy"></i>
 </button>
 </span>
 <span className="el-tooltip vw-op-tooltip" aria-describedby="el-tooltip-4623" tabIndex={0}>
 <button className="vw-op-btn vw-op-btn-delete">
 <i className="fa-solid fa-trash-can"></i>
 </button>
 </span>
 </div>
 </div>
 <div className="vw-shot-body">
 <div className="vw-shot-main">
 <div className="vw-prompt-area">
 <textarea placeholder="输入该片段的画面描述与动作提示词..." className="vw-prompt-input"></textarea>
 </div>
 </div>
 <div className="vw-shot-warning">
 <i className="fa-solid fa-circle-info"></i>
 <span>当前模式需要首帧图</span>
 </div>
 </div>
 </div>
 <div className="vw-add-shot-card">
 <button className="vw-add-shot-btn">
 <span className="vw-add-shot-line"></span>
 <span className="vw-add-shot-content">
 <span className="vw-add-shot-icon">
 <i className="fa-solid fa-plus"></i>
 </span>
 <span className="vw-add-shot-title">新增片段</span>
 </span>
 <span className="vw-add-shot-line"></span>
 </button>
 </div>
 </div>
 </section>
 <aside className="vw-panel vw-results">
 <div className="vw-panel-head">
 <h2>生成结果</h2>
 <span className="vw-count">0/2</span>
 </div>
 <div className="vw-result-scroll custom-scrollbar">
 <div className="vw-result-empty">
 <div className="vw-empty-icon">
 <i className="fa-solid fa-film"></i>
 </div>
 <p>暂无视频</p>
 <span>点击配置项的"生成"按钮即可展示</span>
 </div>
 </div>
 </aside>
 </div>
 <div className="el-dialog__wrapper" style={{ display: 'none' }}>
 <div
 role="dialog"
 aria-modal="true"
 aria-label="选择首帧图"
 className="el-dialog vw-dialog"
 style={{ marginTop: '15vh', width: '560px' }}
 >
 <div className="el-dialog__header">
 <span className="el-dialog__title">选择首帧图</span>
 <button type="button" aria-label="Close" className="el-dialog__headerbtn">
 <i className="el-dialog__close el-icon el-icon-close"></i>
 </button>
 </div>
 <div className="el-dialog__footer">
 <button className="vw-btn vw-btn-default">取消</button>
 <button disabled className="vw-btn vw-btn-primary">
 确认选择
 </button>
 </div>
 </div>
 </div>
 <div className="el-dialog__wrapper" style={{ display: 'none' }}>
 <div
 role="dialog"
 aria-modal="true"
 aria-label="选择参考图"
 className="el-dialog vw-dialog"
 style={{ marginTop: '15vh', width: '680px' }}
 >
 <div className="el-dialog__header">
 <span className="el-dialog__title">选择参考图</span>
 <button type="button" aria-label="Close" className="el-dialog__headerbtn">
 <i className="el-dialog__close el-icon el-icon-close"></i>
 </button>
 </div>
 <div className="el-dialog__footer">
 <button className="vw-btn vw-btn-default">取消</button>
 <button disabled className="vw-btn vw-btn-primary">
 确认选择
 </button>
 </div>
 </div>
 </div>
 </div>
 </div>
 );
}
