# `createToolHandoff/wrapTool/execute`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/tool-handoff.ts` · [README do módulo](../../../../../../modules/core/runner/tools/tool-handoff-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:569325-569337](../../../../../../../reference/runtime/sand-eval-runner.cjs#L569325-L569337) | `ArrowFunctionExpression` | sim | `ctx, interactionHandler, argsStream, meta3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:569325-569337](../../../../../../../reference/runtime/sand-eval-runner.cjs#L569325-L569337) | 1 | 0 | 1 | 1 | 1 | 0 |

### evaluation:569325

Chamadas escritas diretamente neste corpo: `active.add`, `active.delete`, `cancel`, `ctx.signal.throwIfAborted`, `ctx.withCancel`, `new ToolCallAbortedError`, `tool.execute`.

Alvos de lançamento explícito: `ToolCallAbortedError`.

SHA-256 do trecho: `7846b145bd4c0d0804d38b4050bbac38a0264119a3351868914460b6bd18de53`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
