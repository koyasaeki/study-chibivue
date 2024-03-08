export interface RendererOptions<HostNode = RendererNode> {
  setElementText(node: HostNode, text: string): void;
}

export interface RendererNode {
  [key: string]: any;
}

export interface RendererElement extends RendererNode {}

export type RootRenderFunction<HostElement = RendererElement> = (
  message: string,
  container: HostElement
) => void;

/**
 * レンダリングエンジンのファクトリ
 *
 * レンダリングエンジンを作成する。
 * すなわち、レンダー関数を生成してくれる。
 * 現時点では、文字列と要素を渡すと、要素に文字列を書き込むレンダー関数を返してくれる。
 */
export function createRenderer(options: RendererOptions) {
  const { setElementText: hostElementText } = options;

  const render: RootRenderFunction = (message, container) => {
    hostElementText(container, message);
  };

  return { render };
}
