import Page from './page';
import utl   from '../../utilities/common-utilities';

class YelpPage extends Page {
     /**
    * define elements
    */

    get searchInput () { return $('#find_desc');}
    get restaurantOpt() { return $('#header_find_form > div > div:nth-child(1) > div > div > ul > li:nth-child(1)');}
    get searchInput2() { return $('#search_description');}
    get searchicon () { return $('#header_find_form > div > div.lemon--div__373c0__1mboc.buttons-arrange-unit__373c0__3npNo.arrange-unit__373c0__o3tjT.border-color--default__373c0__3-ifU > div > div:nth-child(2) > button');}
    get totalNroResult () { return $('#wrap > div:nth-child(4) > div.lemon--div__373c0__1mboc.spinnerContainer__373c0__3ES0p.spinner-container__373c0__N6Hff.border-color--default__373c0__Y1Kuj.background-color--white__373c0__32NQ1 > div > div.lemon--div__373c0__1mboc.leftRailContainer__373c0__1yof8.border-color--default__373c0__3-ifU > div.lemon--div__373c0__1mboc.padding-r5__373c0__126QE.padding-b5__373c0__3XORh.padding-l5__373c0__2Dc5X.border-color--default__373c0__3-ifU > div > div:nth-child(2) > div.lemon--div__373c0__1mboc.border--top__373c0__3gXLy.border-color--default__373c0__3-ifU > div > div.lemon--div__373c0__1mboc.padding-b2__373c0__euId7.border-color--default__373c0__2Kz-q.text-align--center__373c0__1GKbi > span');}
    get allFilterBTN () { return $('#wrap > div:nth-child(4) > div.lemon--div__373c0__1mboc.spinnerContainer__373c0__3ES0p.spinner-container__373c0__N6Hff.border-color--default__373c0__Y1Kuj.background-color--white__373c0__32NQ1 > div > div.lemon--div__373c0__1mboc.leftRailContainer__373c0__1yof8.border-color--default__373c0__3-ifU > div.lemon--div__373c0__1mboc.padding-r5__373c0__126QE.padding-b5__373c0__3XORh.padding-l5__373c0__2Dc5X.border-color--default__373c0__3-ifU > div > div.lemon--div__373c0__1mboc.margin-b3__373c0__q1DuY.padding-t3__373c0__1gw9E.border-color--default__373c0__3-ifU > div.lemon--div__373c0__1mboc.margin-t3__373c0__1l90z.border-color--default__373c0__3-ifU > div.lemon--div__373c0__1mboc.suggestedFilterContainer__373c0__3AOde.border-color--default__373c0__3-ifU > span > div:nth-child(1) > button > span.lemon--span__373c0__3997G.display--inline__373c0__3JqBP.margin-r1__373c0__zyKmV.border-color--default__373c0__3-ifU > span');}
    get restaurantsBTN () { return $('#wrap > div:nth-child(4) > div.lemon--div__373c0__1mboc.spinnerContainer__373c0__3ES0p.spinner-container__373c0__N6Hff.border-color--default__373c0__Y1Kuj.background-color--white__373c0__32NQ1 > div > div.lemon--div__373c0__1mboc.leftRailContainer__373c0__1yof8.border-color--default__373c0__3-ifU > div.lemon--div__373c0__1mboc.padding-r5__373c0__126QE.padding-b5__373c0__3XORh.padding-l5__373c0__2Dc5X.border-color--default__373c0__3-ifU > div > div.lemon--div__373c0__1mboc.margin-b3__373c0__q1DuY.padding-t3__373c0__1gw9E.border-color--default__373c0__3-ifU > div.lemon--div__373c0__1mboc.margin-t3__373c0__1l90z.border-color--default__373c0__3-ifU > div.lemon--div__373c0__1mboc.expandedSectionContainer__373c0__24LKi.isExpanded__373c0__qPCbQ.border--top__373c0__3gXLy.border--bottom__373c0__3qNtD.border-color--default__373c0__3-ifU > div > div > div:nth-child(5) > div > div:nth-child(2) > div:nth-child(1) > label > div > div:nth-child(1) > input');}
    get DeliveryBTN () { return $('#wrap > div:nth-child(4) > div.lemon--div__373c0__1mboc.spinnerContainer__373c0__3ES0p.spinner-container__373c0__N6Hff.border-color--default__373c0__Y1Kuj.background-color--white__373c0__32NQ1 > div > div.lemon--div__373c0__1mboc.leftRailContainer__373c0__1yof8.border-color--default__373c0__3-ifU > div.lemon--div__373c0__1mboc.padding-r5__373c0__126QE.padding-b5__373c0__3XORh.padding-l5__373c0__2Dc5X.border-color--default__373c0__3-ifU > div > div.lemon--div__373c0__1mboc.margin-b3__373c0__q1DuY.padding-t3__373c0__1gw9E.border-color--default__373c0__3-ifU > div.lemon--div__373c0__1mboc.margin-t3__373c0__1l90z.border-color--default__373c0__3-ifU > div.lemon--div__373c0__1mboc.expandedSectionContainer__373c0__24LKi.isExpanded__373c0__qPCbQ.border--top__373c0__3gXLy.border--bottom__373c0__3qNtD.border-color--default__373c0__3-ifU > div.lemon--div__373c0__1mboc.allFilters__373c0__2lfkO.isExpanded__373c0__qPCbQ.padding-t2__373c0__11Iek.padding-b1__373c0__3erWW.border-color--default__373c0__3-ifU > div > div:nth-child(4) > div > div:nth-child(2) > div:nth-child(1) > label > div > div:nth-child(1) > input');}
    get firstResult () { return $('#wrap > div:nth-child(4) > div.lemon--div__373c0__1mboc.spinnerContainer__373c0__3ES0p.spinner-container__373c0__N6Hff.border-color--default__373c0__Y1Kuj.background-color--white__373c0__32NQ1 > div > div.lemon--div__373c0__1mboc.leftRailContainer__373c0__1yof8.border-color--default__373c0__3-ifU > div.lemon--div__373c0__1mboc.padding-r5__373c0__126QE.padding-b5__373c0__3XORh.padding-l5__373c0__2Dc5X.border-color--default__373c0__3-ifU > div > div:nth-child(2) > ul > li:nth-child(2) > div > div');}
    get phoneN () { return $('#wrap > div.main-content-wrap.main-content-wrap--full > div > div.lemon--div__373c0__1mboc.spinner-container__373c0__N6Hff.border-color--default__373c0__YEvMS > div.lemon--div__373c0__1mboc.u-space-t3.u-space-b6.border-color--default__373c0__2oFDT > div > div > div.lemon--div__373c0__1mboc.stickySidebar--heightContext__373c0__133M8.tableLayoutFixed__373c0__12cEm.arrange__373c0__UHqhV.u-space-b6.u-padding-b4.border--bottom__373c0__uPbXS.border-color--default__373c0__2oFDT > div.lemon--div__373c0__1mboc.stickySidebar--fullHeight__373c0__1szWY.arrange-unit__373c0__1piwO.arrange-unit-grid-column--4__373c0__3oeu6.border-color--default__373c0__2oFDT > div > div > section.lemon--section__373c0__fNwDM.u-space-b3.border-color--default__373c0__2oFDT > div > div:nth-child(2) > div > div.lemon--div__373c0__1mboc.arrange-unit__373c0__1piwO.arrange-unit-fill__373c0__17z0h.border-color--default__373c0__2oFDT > p:nth-child(2)');}
    get websiteLink () { return $('#wrap > div.main-content-wrap.main-content-wrap--full > div > div.lemon--div__373c0__1mboc.spinner-container__373c0__N6Hff.border-color--default__373c0__YEvMS > div.lemon--div__373c0__1mboc.u-space-t3.u-space-b6.border-color--default__373c0__2oFDT > div > div > div.lemon--div__373c0__1mboc.stickySidebar--heightContext__373c0__133M8.tableLayoutFixed__373c0__12cEm.arrange__373c0__UHqhV.u-space-b6.u-padding-b4.border--bottom__373c0__uPbXS.border-color--default__373c0__2oFDT > div.lemon--div__373c0__1mboc.stickySidebar--fullHeight__373c0__1szWY.arrange-unit__373c0__1piwO.arrange-unit-grid-column--4__373c0__3oeu6.border-color--default__373c0__2oFDT > div > div > section.lemon--section__373c0__fNwDM.u-space-b3.border-color--default__373c0__2oFDT > div > div:nth-child(2) > div > div.lemon--div__373c0__1mboc.arrange-unit__373c0__1piwO.arrange-unit-fill__373c0__17z0h.border-color--default__373c0__2oFDT > p.lemon--p__373c0__3Qnnj.text__373c0__2pB8f.text-color--normal__373c0__K_MKN.text-align--left__373c0__2pnx_.text--offscreen__373c0__1SeFX');}
    get firstReview () { return $('#wrap > div.main-content-wrap.main-content-wrap--full > div > div.lemon--div__373c0__1mboc.spinner-container__373c0__N6Hff.border-color--default__373c0__YEvMS > div.lemon--div__373c0__1mboc.u-space-t3.u-space-b6.border-color--default__373c0__2oFDT > div > div > div.lemon--div__373c0__1mboc.stickySidebar--heightContext__373c0__133M8.tableLayoutFixed__373c0__12cEm.arrange__373c0__UHqhV.u-space-b6.u-padding-b4.border--bottom__373c0__uPbXS.border-color--default__373c0__2oFDT > div.lemon--div__373c0__1mboc.arrange-unit__373c0__1piwO.arrange-unit-grid-column--8__373c0__2yTAx.u-padding-r6.border-color--default__373c0__2oFDT > section:nth-child(9) > div > section.lemon--section__373c0__fNwDM.u-space-t4.u-padding-t4.border--top__373c0__19Owr.border-color--default__373c0__2oFDT > div.lemon--div__373c0__1mboc.spinner-container__373c0__N6Hff.border-color--default__373c0__YEvMS > div > ul > li:nth-child(1) > div > div.lemon--div__373c0__1mboc.arrange-unit__373c0__1piwO.arrange-unit-grid-column--8__373c0__2yTAx.border-color--default__373c0__2oFDT > div:nth-child(3) > p > span');}
    get secondReview () { return $('#wrap > div.main-content-wrap.main-content-wrap--full > div > div.lemon--div__373c0__1mboc.spinner-container__373c0__N6Hff.border-color--default__373c0__YEvMS > div.lemon--div__373c0__1mboc.u-space-t3.u-space-b6.border-color--default__373c0__2oFDT > div > div > div.lemon--div__373c0__1mboc.stickySidebar--heightContext__373c0__133M8.tableLayoutFixed__373c0__12cEm.arrange__373c0__UHqhV.u-space-b6.u-padding-b4.border--bottom__373c0__uPbXS.border-color--default__373c0__2oFDT > div.lemon--div__373c0__1mboc.arrange-unit__373c0__1piwO.arrange-unit-grid-column--8__373c0__2yTAx.u-padding-r6.border-color--default__373c0__2oFDT > section:nth-child(9) > div > section.lemon--section__373c0__fNwDM.u-space-t4.u-padding-t4.border--top__373c0__19Owr.border-color--default__373c0__2oFDT > div.lemon--div__373c0__1mboc.spinner-container__373c0__N6Hff.border-color--default__373c0__YEvMS > div > ul > li:nth-child(2) > div > div.lemon--div__373c0__1mboc.arrange-unit__373c0__1piwO.arrange-unit-grid-column--8__373c0__2yTAx.border-color--default__373c0__2oFDT > div:nth-child(3) > p > span');}
    get thirdReview () { return $('#wrap > div.main-content-wrap.main-content-wrap--full > div > div.lemon--div__373c0__1mboc.spinner-container__373c0__N6Hff.border-color--default__373c0__YEvMS > div.lemon--div__373c0__1mboc.u-space-t3.u-space-b6.border-color--default__373c0__2oFDT > div > div > div.lemon--div__373c0__1mboc.stickySidebar--heightContext__373c0__133M8.tableLayoutFixed__373c0__12cEm.arrange__373c0__UHqhV.u-space-b6.u-padding-b4.border--bottom__373c0__uPbXS.border-color--default__373c0__2oFDT > div.lemon--div__373c0__1mboc.arrange-unit__373c0__1piwO.arrange-unit-grid-column--8__373c0__2yTAx.u-padding-r6.border-color--default__373c0__2oFDT > section:nth-child(9) > div > section.lemon--section__373c0__fNwDM.u-space-t4.u-padding-t4.border--top__373c0__19Owr.border-color--default__373c0__2oFDT > div.lemon--div__373c0__1mboc.spinner-container__373c0__N6Hff.border-color--default__373c0__YEvMS > div > ul > li:nth-child(3) > div > div.lemon--div__373c0__1mboc.arrange-unit__373c0__1piwO.arrange-unit-grid-column--8__373c0__2yTAx.border-color--default__373c0__2oFDT > div:nth-child(3) > p > span');}
    get resultList () {return $('#wrap > div:nth-child(4) > div.lemon--div__373c0__1mboc.spinnerContainer__373c0__3ES0p.spinner-container__373c0__N6Hff.border-color--default__373c0__Y1Kuj.background-color--white__373c0__32NQ1 > div > div.lemon--div__373c0__1mboc.leftRailContainer__373c0__1yof8.border-color--default__373c0__3-ifU > div.lemon--div__373c0__1mboc.padding-r5__373c0__126QE.padding-b5__373c0__3XORh.padding-l5__373c0__2Dc5X.border-color--default__373c0__3-ifU > div > div:nth-child(2)');}
    get firstRati () { return $('#wrap > div:nth-child(4) > div.lemon--div__373c0__1mboc.spinnerContainer__373c0__3ES0p.spinner-container__373c0__N6Hff.border-color--default__373c0__Y1Kuj.background-color--white__373c0__32NQ1 > div > div.lemon--div__373c0__1mboc.leftRailContainer__373c0__1yof8.border-color--default__373c0__3-ifU > div.lemon--div__373c0__1mboc.padding-r5__373c0__126QE.padding-b5__373c0__3XORh.padding-l5__373c0__2Dc5X.border-color--default__373c0__3-ifU > div > div:nth-child(2) > ul > li:nth-child(2) > div > div > div > div.lemon--div__373c0__1mboc.arrange-unit__373c0__o3tjT.arrange-unit-fill__373c0__3Sfw1.border-color--default__373c0__3-ifU > div:nth-child(1) > div > div.lemon--div__373c0__1mboc.mainAttributes__373c0__1r0QA.arrange-unit__373c0__o3tjT.arrange-unit-fill__373c0__3Sfw1.border-color--default__373c0__3-ifU > div > div:nth-child(2) > div > div > div.lemon--div__373c0__1mboc.attribute__373c0__1hPI_.display--inline-block__373c0__1ZKqC.margin-r1__373c0__zyKmV.border-color--default__373c0__3-ifU > span > div');}
    get titleRestaurant () { return $('#wrap > div.main-content-wrap.main-content-wrap--full > div > div.lemon--div__373c0__1mboc.spinner-container__373c0__N6Hff.border-color--default__373c0__YEvMS > div.lemon--div__373c0__1mboc.u-space-t3.u-space-b6.border-color--default__373c0__2oFDT > div > div > div.lemon--div__373c0__1mboc.stickySidebar--heightContext__373c0__133M8.tableLayoutFixed__373c0__12cEm.arrange__373c0__UHqhV.u-space-b6.u-padding-b4.border--bottom__373c0__uPbXS.border-color--default__373c0__2oFDT > div.lemon--div__373c0__1mboc.arrange-unit__373c0__1piwO.arrange-unit-grid-column--8__373c0__2yTAx.u-padding-r6.border-color--default__373c0__2oFDT > div.lemon--div__373c0__1mboc.u-space-b3.border-color--default__373c0__2oFDT > div > div:nth-child(1) > h1');}
    get website () { return $('#wrap > div.main-content-wrap.main-content-wrap--full > div > div.lemon--div__373c0__1mboc.spinner-container__373c0__N6Hff.border-color--default__373c0__YEvMS > div.lemon--div__373c0__1mboc.u-space-t3.u-space-b6.border-color--default__373c0__2oFDT > div > div > div.lemon--div__373c0__1mboc.stickySidebar--heightContext__373c0__133M8.tableLayoutFixed__373c0__12cEm.arrange__373c0__UHqhV.u-space-b6.u-padding-b4.border--bottom__373c0__uPbXS.border-color--default__373c0__2oFDT > div.lemon--div__373c0__1mboc.stickySidebar--fullHeight__373c0__1szWY.arrange-unit__373c0__1piwO.arrange-unit-grid-column--4__373c0__3oeu6.border-color--default__373c0__2oFDT > div > div > section.lemon--section__373c0__fNwDM.u-space-b3.border-color--default__373c0__2oFDT > div > div:nth-child(1) > div > div.lemon--div__373c0__1mboc.arrange-unit__373c0__1piwO.arrange-unit-fill__373c0__17z0h.border-color--default__373c0__2oFDT > a');}
    get tlNum () { return $('#wrap > div.main-content-wrap.main-content-wrap--full > div > div.lemon--div__373c0__1mboc.spinner-container__373c0__N6Hff.border-color--default__373c0__YEvMS > div.lemon--div__373c0__1mboc.u-space-t3.u-space-b6.border-color--default__373c0__2oFDT > div > div > div.lemon--div__373c0__1mboc.stickySidebar--heightContext__373c0__133M8.tableLayoutFixed__373c0__12cEm.arrange__373c0__UHqhV.u-space-b6.u-padding-b4.border--bottom__373c0__uPbXS.border-color--default__373c0__2oFDT > div.lemon--div__373c0__1mboc.stickySidebar--fullHeight__373c0__1szWY.arrange-unit__373c0__1piwO.arrange-unit-grid-column--4__373c0__3oeu6.border-color--default__373c0__2oFDT > div > div > section.lemon--section__373c0__fNwDM.u-space-b3.border-color--default__373c0__2oFDT > div > div:nth-child(2) > div > div.lemon--div__373c0__1mboc.arrange-unit__373c0__1piwO.arrange-unit-fill__373c0__17z0h.border-color--default__373c0__2oFDT > p:nth-child(2)');}
    get linkAddress () { return $('#wrap > div.main-content-wrap.main-content-wrap--full > div > div.lemon--div__373c0__1mboc.spinner-container__373c0__N6Hff.border-color--default__373c0__YEvMS > div.lemon--div__373c0__1mboc.u-space-t3.u-space-b6.border-color--default__373c0__2oFDT > div > div > div.lemon--div__373c0__1mboc.stickySidebar--heightContext__373c0__133M8.tableLayoutFixed__373c0__12cEm.arrange__373c0__UHqhV.u-space-b6.u-padding-b4.border--bottom__373c0__uPbXS.border-color--default__373c0__2oFDT > div.lemon--div__373c0__1mboc.stickySidebar--fullHeight__373c0__1szWY.arrange-unit__373c0__1piwO.arrange-unit-grid-column--4__373c0__3oeu6.border-color--default__373c0__2oFDT > div > div > section.lemon--section__373c0__fNwDM.u-space-b3.border-color--default__373c0__2oFDT > div > div:nth-child(3) > div > div.lemon--div__373c0__1mboc.arrange-unit__373c0__1piwO.arrange-unit-fill__373c0__17z0h.border-color--default__373c0__2oFDT > a');}
    get onereview () { return $('#wrap > div.main-content-wrap.main-content-wrap--full > div > div.lemon--div__373c0__1mboc.spinner-container__373c0__N6Hff.border-color--default__373c0__YEvMS > div.lemon--div__373c0__1mboc.u-space-t3.u-space-b6.border-color--default__373c0__2oFDT > div > div > div.lemon--div__373c0__1mboc.stickySidebar--heightContext__373c0__133M8.tableLayoutFixed__373c0__12cEm.arrange__373c0__UHqhV.u-space-b6.u-padding-b4.border--bottom__373c0__uPbXS.border-color--default__373c0__2oFDT > div.lemon--div__373c0__1mboc.arrange-unit__373c0__1piwO.arrange-unit-grid-column--8__373c0__2yTAx.u-padding-r6.border-color--default__373c0__2oFDT > section:nth-child(9) > div > section.lemon--section__373c0__fNwDM.u-space-t4.u-padding-t4.border--top__373c0__19Owr.border-color--default__373c0__2oFDT > div.lemon--div__373c0__1mboc.spinner-container__373c0__N6Hff.border-color--default__373c0__YEvMS > div > ul > li:nth-child(1) > div > div.lemon--div__373c0__1mboc.arrange-unit__373c0__1piwO.arrange-unit-grid-column--8__373c0__2yTAx.border-color--default__373c0__2oFDT > div.lemon--div__373c0__1mboc.u-space-b2.border-color--default__373c0__2oFDT > p > span');}
    get tworeview () { return $('#wrap > div.main-content-wrap.main-content-wrap--full > div > div.lemon--div__373c0__1mboc.spinner-container__373c0__N6Hff.border-color--default__373c0__YEvMS > div.lemon--div__373c0__1mboc.u-space-t3.u-space-b6.border-color--default__373c0__2oFDT > div > div > div.lemon--div__373c0__1mboc.stickySidebar--heightContext__373c0__133M8.tableLayoutFixed__373c0__12cEm.arrange__373c0__UHqhV.u-space-b6.u-padding-b4.border--bottom__373c0__uPbXS.border-color--default__373c0__2oFDT > div.lemon--div__373c0__1mboc.arrange-unit__373c0__1piwO.arrange-unit-grid-column--8__373c0__2yTAx.u-padding-r6.border-color--default__373c0__2oFDT > section:nth-child(9) > div > section.lemon--section__373c0__fNwDM.u-space-t4.u-padding-t4.border--top__373c0__19Owr.border-color--default__373c0__2oFDT > div.lemon--div__373c0__1mboc.spinner-container__373c0__N6Hff.border-color--default__373c0__YEvMS > div > ul > li:nth-child(2) > div > div.lemon--div__373c0__1mboc.arrange-unit__373c0__1piwO.arrange-unit-grid-column--8__373c0__2yTAx.border-color--default__373c0__2oFDT > div.lemon--div__373c0__1mboc.u-space-b2.border-color--default__373c0__2oFDT > p > span');}
    get threereview () { return $('#wrap > div.main-content-wrap.main-content-wrap--full > div > div.lemon--div__373c0__1mboc.spinner-container__373c0__N6Hff.border-color--default__373c0__YEvMS > div.lemon--div__373c0__1mboc.u-space-t3.u-space-b6.border-color--default__373c0__2oFDT > div > div > div.lemon--div__373c0__1mboc.stickySidebar--heightContext__373c0__133M8.tableLayoutFixed__373c0__12cEm.arrange__373c0__UHqhV.u-space-b6.u-padding-b4.border--bottom__373c0__uPbXS.border-color--default__373c0__2oFDT > div.lemon--div__373c0__1mboc.arrange-unit__373c0__1piwO.arrange-unit-grid-column--8__373c0__2yTAx.u-padding-r6.border-color--default__373c0__2oFDT > section:nth-child(9) > div > section.lemon--section__373c0__fNwDM.u-space-t4.u-padding-t4.border--top__373c0__19Owr.border-color--default__373c0__2oFDT > div.lemon--div__373c0__1mboc.spinner-container__373c0__N6Hff.border-color--default__373c0__YEvMS > div > ul > li:nth-child(3) > div > div.lemon--div__373c0__1mboc.arrange-unit__373c0__1piwO.arrange-unit-grid-column--8__373c0__2yTAx.border-color--default__373c0__2oFDT > div:nth-child(3) > p > span');}
    get locationSub () { return $('#wrap > div.main-content-wrap.main-content-wrap--full > div > div.lemon--div__373c0__1mboc.spinner-container__373c0__N6Hff.border-color--default__373c0__YEvMS > div.lemon--div__373c0__1mboc.u-space-t3.u-space-b6.border-color--default__373c0__2oFDT > div > div > div.lemon--div__373c0__1mboc.stickySidebar--heightContext__373c0__133M8.tableLayoutFixed__373c0__12cEm.arrange__373c0__UHqhV.u-space-b6.u-padding-b4.border--bottom__373c0__uPbXS.border-color--default__373c0__2oFDT > div.lemon--div__373c0__1mboc.arrange-unit__373c0__1piwO.arrange-unit-grid-column--8__373c0__2yTAx.u-padding-r6.border-color--default__373c0__2oFDT > section:nth-child(4) > div.lemon--div__373c0__1mboc.arrange__373c0__UHqhV.vertical-align-middle__373c0__2TQsQ.u-space-b2.border-color--default__373c0__2oFDT > div > h3');}
    get considerSub () { return $('#wrap > div.main-content-wrap.main-content-wrap--full > div > div.lemon--div__373c0__1mboc.spinner-container__373c0__N6Hff.border-color--default__373c0__YEvMS > div.lemon--div__373c0__1mboc.u-space-t3.u-space-b6.border-color--default__373c0__2oFDT > div > div > div.lemon--div__373c0__1mboc.stickySidebar--heightContext__373c0__133M8.tableLayoutFixed__373c0__12cEm.arrange__373c0__UHqhV.u-space-b6.u-padding-b4.border--bottom__373c0__uPbXS.border-color--default__373c0__2oFDT > div.lemon--div__373c0__1mboc.arrange-unit__373c0__1piwO.arrange-unit-grid-column--8__373c0__2yTAx.u-padding-r6.border-color--default__373c0__2oFDT > section:nth-child(5) > div > div.lemon--div__373c0__1mboc.arrange__373c0__UHqhV.gutter-12__373c0__3kguh.vertical-align-middle__373c0__2TQsQ.border-color--default__373c0__2oFDT > div.lemon--div__373c0__1mboc.arrange-unit__373c0__1piwO.border-color--default__373c0__2oFDT.nowrap__373c0__1_N1j > h3');}
    get amenitiesSub () { return $('#wrap > div.main-content-wrap.main-content-wrap--full > div > div.lemon--div__373c0__1mboc.spinner-container__373c0__N6Hff.border-color--default__373c0__YEvMS > div.lemon--div__373c0__1mboc.u-space-t3.u-space-b6.border-color--default__373c0__2oFDT > div > div > div.lemon--div__373c0__1mboc.stickySidebar--heightContext__373c0__133M8.tableLayoutFixed__373c0__12cEm.arrange__373c0__UHqhV.u-space-b6.u-padding-b4.border--bottom__373c0__uPbXS.border-color--default__373c0__2oFDT > div.lemon--div__373c0__1mboc.arrange-unit__373c0__1piwO.arrange-unit-grid-column--8__373c0__2yTAx.u-padding-r6.border-color--default__373c0__2oFDT > section:nth-child(6) > div.lemon--div__373c0__1mboc.arrange__373c0__UHqhV.vertical-align-middle__373c0__2TQsQ.u-space-b2.border-color--default__373c0__2oFDT > div > h3');}
    get askSub () { return $('#wrap > div.main-content-wrap.main-content-wrap--full > div > div.lemon--div__373c0__1mboc.spinner-container__373c0__N6Hff.border-color--default__373c0__YEvMS > div.lemon--div__373c0__1mboc.u-space-t3.u-space-b6.border-color--default__373c0__2oFDT > div > div > div.lemon--div__373c0__1mboc.stickySidebar--heightContext__373c0__133M8.tableLayoutFixed__373c0__12cEm.arrange__373c0__UHqhV.u-space-b6.u-padding-b4.border--bottom__373c0__uPbXS.border-color--default__373c0__2oFDT > div.lemon--div__373c0__1mboc.arrange-unit__373c0__1piwO.arrange-unit-grid-column--8__373c0__2yTAx.u-padding-r6.border-color--default__373c0__2oFDT > section:nth-child(9) > div > section:nth-child(1) > div.lemon--div__373c0__1mboc.arrange__373c0__UHqhV.vertical-align-middle__373c0__2TQsQ.u-space-b2.border-color--default__373c0__2oFDT > div > h3');}
    get aboutSub () { return $('#wrap > div.main-content-wrap.main-content-wrap--full > div > div.lemon--div__373c0__1mboc.spinner-container__373c0__N6Hff.border-color--default__373c0__YEvMS > div.lemon--div__373c0__1mboc.u-space-t3.u-space-b6.border-color--default__373c0__2oFDT > div > div > div.lemon--div__373c0__1mboc.stickySidebar--heightContext__373c0__133M8.tableLayoutFixed__373c0__12cEm.arrange__373c0__UHqhV.u-space-b6.u-padding-b4.border--bottom__373c0__uPbXS.border-color--default__373c0__2oFDT > div.lemon--div__373c0__1mboc.arrange-unit__373c0__1piwO.arrange-unit-grid-column--8__373c0__2yTAx.u-padding-r6.border-color--default__373c0__2oFDT > section:nth-child(8) > div.lemon--div__373c0__1mboc.arrange__373c0__UHqhV.vertical-align-middle__373c0__2TQsQ.u-space-b2.border-color--default__373c0__2oFDT > div > h3');}


    getwebsite () {
      return this.website.getText();
    }

    showWebsiteInfo () {
   
      console.log("Website link: " + this.website.getText());
      browser.pause(2000);
    }

    showTelephoneInfo () {
      console.log("Telephone number: "+ this.tlNum.getText());
      browser.pause(1000);
    }

    show1review () {
      console.log("First review: "+ this.onereview.getText());
      browser.pause(1000);
    }

    show2review () {
      console.log("Second review: "+ this.tworeview.getText());
      browser.pause(1000);
    }

    show3review () {
      console.log("Second review: "+ this.threereview.getText());
      browser.pause(1000);
    }
    




open () {
        super.open('https://www.yelp.com/')       //provide your additional URL if any. this will append to the baseUrl to form complete URL
        browser.pause(3000);
    }

searchBarClick () {
        this.searchInput.click();
       // browser.pause(2000);
      }

restaurantOptClick () {
    this.restaurantOpt.click();
    browser.pause(1000);
}

enterPizzaText (item) {
    
    this.searchInput2.click();
    browser.pause(500);
    this.searchInput2.setValue(item);
    browser.pause(1000);
  }

  searchiconClick () {
    this.searchicon.click();
  }

  isSearched () {
    this.resultList.waitForDisplayed(1000);
    return this.resultList.isDisplayed();
    
  }

  firstResultStars () {
   
    console.log("First result rating: " + this.firstRati.getAttribute('aria-label'));
  }

  getAddresslink () {
    console.log("Address link: " + this.linkAddress.getAttribute('href'));

  }

  totalResult (){
   // var nroT = this.totalNroResult.getText();
    //console.log(nroT);
   return this.totalNroResult.getText();
    
  }

  seeTotalRes () {
    //Takes the value after the second space
  var str = this.totalNroResult.getText();

  var index = str.indexOf( ' ', str.indexOf( ' ' ) + 1 );

  var firstChunk = index >= 0 ? str.substr( 0, index ) : str.substr( index + 1 );
    if ( index >= 0 )
    var secondChunk = str.substr( index + 1 );
    //Takes the value after the second space

    console.log(secondChunk + " total search results");
    browser.pause(2000);
  }

  allFilterBTNClick () {
    //click the all filter button
    this.allFilterBTN.click();
    browser.pause(2000);
  }

  restaurantsBTNClick () {
    this.restaurantsBTN.click();
    
   //browser.pause(3000);
    // this.restaurantsBTN.click();
    // browser.pause(3000);
  }

  deliveryCheckClick () {
    this.DeliveryBTN.click();
    //this.DeliveryBTN.click();
    //browser.pause(500);
    // this.DeliveryBTN.click();
    browser.pause(2000);
  }

  waitBrowser () {
    browser.pause(2000);
  }

  firstResultClick () {
    browser.pause(1000);
    this.firstResult.click();
    browser.pause(2000);
  }

  //SCROLLING DOWN
  movetoTitle () {
    this.titleRestaurant.scrollIntoView();
    browser.pause(1000);
  }

  movetoLocationSub () {
    this.locationSub.scrollIntoView();
    browser.pause(1000);
  }

  movetoConsiderSub () {
    this.considerSub.scrollIntoView();
    browser.pause(1000);
  }

  movetoAmenitiesSub () {
    this.amenitiesSub.scrollIntoView();
    browser.pause(2000);
  }

  movetoAboutSub () {
    this.aboutSub.scrollIntoView();
    browser.pause(1000);
  }

  // movetoAskSub () {
  //   this.askSub.scrollIntoView();
  //   browser.pause(1000);
  // }



  phonelInfo () {
    this.phoneN.getText();
  }

   seePhoneInfo () {
    //Takes the value after the second space
  var phonenumb = this.phoneN.getText();
  console.log(phonenumb);

  }

  webInfo () {
    this.websiteLink.getText();
  }

     seewebInfo () {
    //Takes the value after the second space
  var wblink = this.websiteLink.getText();
  console.log(wblink);
  
  }



  firstReviewInfo () {
    this.firstReview.getText();
    browser.pause(2000);
  }

 seefirstReviewInfo () {
    //Takes the value after the second space
  var review1 = this.firstReview.getText();
  console.log(review1);
  
  }



  secondReviewInfo () {
    this.secondReview.getText();
    browser.pause(2000);
  }

   seesecondReviewInfo () {
    //Takes the value after the second space
  var review2 = this.secondReview.getText();
  console.log(review2);
  
  }




  thirdReviewInfo () {
    this.thirdReview.getText();
    browser.pause(2000);
  }

   seethirdReviewInfo () {
    //Takes the value after the second space
  var review3 = this.thirdReview.getText();
  console.log(review3);
  }


}
export default new YelpPage();