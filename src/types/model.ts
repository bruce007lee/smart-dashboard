import { ElementType } from 'react';
import type { IDashboardLifecycle, IElementController, IElementLifecycle } from './interface';

/**
 * 上下文中的全局设置类参数
 */
export type DashBoardConfig = {
  /**
   * 是否限制拖控的一定区域
   */
  limitBounds?: boolean;
  /**
   * dnd的accept, 不设置为dashboard实例的id
   * 一般通过ElementsProvider来设置，这里设置这个属性
   */
  dndAccept?: string;
  /**
   * 是否可编辑
   */
  editable?: boolean;
  /**
   * 是否开启磁吸
   */
  enableMagnet?: boolean;
  /**
   * 触发吸附的距离阀值
   */
  magnetThreshold?: number;
  /**
   * 吸附时模块元素间距
   */
  magnetSpace?: number;
  /**
   * 缩放设置
   */
  scaleRatio?: number;
  /**
   * 事件监听器
   */
  eventsMonitor?: Partial<IDashboardLifecycle>;
};

export type Bounds = {
  x: number;
  y: number;
  width: number;
  height: number;
};

/**
 * 元素展示状态
 */
export type ElementStatus = {
  /**
   * 是否是拖控中
   */
  dragging?: boolean;
  /**
   * 是否是缩放中
   */
  resizing?: boolean;
  /**
   * 是否是锁定状态
   */
  locked?: boolean;
  /**
   * 是否是hover状态
   */
  hover?: boolean;
  /**
   * 是否是选中状态
   */
  selected?: boolean;
  /**
   * 是否是行内编辑状态
   */
  editing?: boolean;
};

export type ElementProps = {
  bounds?: Bounds;
};

/**
 * 元素实体json描述
 */
export type ElementSchema = {
  /**
   * 组件对应在ComponentMetadata中的componentName
   */
  componentName: string;
  /**
   * 对应组件实力的参数
   */
  props?: any;
  /**
   * 元素配置的参数
   */
  elementProps?: ElementProps;
  // @TODO: 目前不需要子节点处理
  children?: ElementSchema[];
  [key: string]: any;
};

/**
 * toolbar上编辑按钮的配置定义
 */
export type ActionMetadata = {
  actionName: string;
  props?: ActionProps;
  render?: (controller: IElementController) => ActionProps | void;
  invoker?: (controller: IElementController) => void;
};

/**
 * 组件属性设置器定义
 */
export type SetterMetadata = {
  /**
   * 组件名
   */
  componentName: string;
  /**
   * 组件实现react类
   */
  componentClass: ElementType;
};

/**
 * field的setter属性配置
 */
export type SetterType = {
  /**
   * 对用的setter组件名
   */
  componentName: string;
  /**
   * setter组件的属性props
   */
  props?: {
    [key: string]: any;
  };
  /**
   * 组件的默认值
   */
  defaultValue?: any;
};

/**
 * 组件的属性编辑定义
 */
export type FieldConfig = {
  label?: string;
  name?: string;
  setter?: SetterType;
  inlineSetter?: SetterType;
};

/**
 * 物料元件的实体
 */
export type ComponentMetadata = {
  /**
   * 组件名
   */
  componentName: string;
  /**
   * 组件实现react类
   */
  componentClass: ElementType;
  /**
   * 显示的组件名
   */
  displayName?: string;
  /**
   * 设置
   */
  configure?: {
    /**
     * 可编辑的属性定义
     */
    props?: FieldConfig[];
    /**
     * 组件元素toolbar上的actions，对应ActionMetadata中的actionName
     * 注意此配置会在默认的toolbarActions上添加，
     * 如果要覆盖请用toolbarActions
     */
    extraToolbarActions?: string[];
    /**
     * 组件元素toolbar上的actions,会替换default配置
     */
    toolbarActions?: string[];
    /**
     * 生命周期事件
     */
    lifecycle?: IElementLifecycle;
  };
};

export type ActionProps = {
  toolbarItemClass?: ElementType;
  label?: string;
  tip?: string;
  iconType?: string;
};
