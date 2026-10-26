# `createSandBrowserTools`

[Componente: browser-computer](../../components/browser-computer/README.md) · [Índice](../../README.md)

**Fonte primária:** [host-main.cjs:778908-778937](../../../reference/runtime/host-main.cjs#L778908-L778937). Análise estática do snapshot original; nomes preservados do bundle.

## Responsabilidade

`createSandBrowserTools(context)` monta o conjunto browser que corresponde à superfície e às capacidades do host. Retorna uma lista de ferramentas, possivelmente vazia.

## Algoritmo

Resolve `browserSurface`; none interrompe a montagem. Para a superfície escolhida, passa operation harness, run-code, resource accessor da box, resource accessor MCP, revisão, display/janela, secure-value guard e gates de modo de código. Acrescenta contador de recusas de run-code a cada ferramenta.

## Separação de recursos

A operação usa `remoteBoxResourceAccessor`, enquanto partes de MCP/revisão podem usar o accessor de props. Essa distinção é relevante para não confundir browser da box com computador pessoal. O código recebe a resolução de display, não assume um monitor global.

## Wrappers posteriores

`gateSandBrowserTools` aplica lease de preenchimento de credenciais e contagem de falhas. O builder browser chama ambos. A factory não é a ação de navegação nem autorização final; a ferramenta montada ainda passará pelo caminho de execução.

## Limite

A análise confirma montagem condicional e dependências. Não demonstra que uma determinada superfície esteja habilitada em produção, que o browser esteja conectado, nem que um script tenha executado. Essas são verificações de runtime separadas.
