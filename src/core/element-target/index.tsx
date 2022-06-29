import React, { FC, HTMLAttributes } from 'react';
import classNames from 'classnames';
import DropTargetWrapper from '../../components/drop-target-wrapper';
import { useElementsProviderContext, useRenderContext } from '../../hooks';
import { ElementSchema } from '../../types';
import { cloneDeep, elementUtil, sn } from '../../utils';

export type ElementTargetProps = HTMLAttributes<HTMLDivElement> & {};

const ElementTarget: FC<ElementTargetProps> = ({ children, className, ...others }) => {
  const context = useRenderContext();
  let accept = context.getConfig().dndAccept;
  const providerCtx = useElementsProviderContext();
  if (!accept && providerCtx) {
    accept = providerCtx.accept;
  }

  if (!accept) {
    return <div {...others}>{children}</div>;
  }

  return (
    <DropTargetWrapper
      {...others}
      className={classNames(sn('dnd-target'), className)}
      accept={accept}
      canDrop={(data: ElementSchema, monitor) => {
        // 不可编辑时不能添加
        return context.getConfig().editable;
      }}
      onDrop={(data: ElementSchema, monitor) => {
        const builder = context.getBuilder();

        // handle beforeDrop lifecycle event
        const meta = builder.getMaterialManager().findByName(data.componentName);
        const lifecycle = elementUtil.getLifecycle(meta);

        if (lifecycle.onBeforeDrop && lifecycle.onBeforeDrop(data, context) === false) {
          return;
        }

        const offset = monitor.getClientOffset();
        const ct = builder.getCanvasContainerRef().current;
        const rect = ct.getBoundingClientRect();
        data = cloneDeep(data);
        elementUtil.setBounds(data, {
          ...elementUtil.getBounds(data),
          x: Math.round(offset.x - rect.left),
          y: Math.round(offset.y - rect.top),
        });
        const elc = builder.addElement(data);

        // handle drop lifecycle event
        if (lifecycle.onDrop) {
          lifecycle.onDrop(elc, data, context);
        }
      }}
    >
      {children}
    </DropTargetWrapper>
  );
};

export default ElementTarget;
