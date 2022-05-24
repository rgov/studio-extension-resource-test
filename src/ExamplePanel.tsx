import { PanelExtensionContext, RenderState } from "@foxglove/studio";
import { useLayoutEffect, useEffect, useState } from "react";
import ReactDOM from "react-dom";

function ExamplePanel({ context }: { context: PanelExtensionContext }): JSX.Element {

  const [renderDone, setRenderDone] = useState<(() => void) | undefined>();

  useLayoutEffect(() => {
    context.onRender = (_renderState: RenderState, done) => {
      setRenderDone(() => done);
    };
  }, []);

  // invoke the done callback once the render is complete
  useEffect(() => {
    renderDone?.();
  }, [renderDone]);

  return (
    <>
      <div>{topics?.join(",")}</div>
      <div>{messages?.length}</div>
    </>
  );
}

export function initExamplePanel(context: PanelExtensionContext) {
  ReactDOM.render(<ExamplePanel context={context} />, context.panelElement);
}
