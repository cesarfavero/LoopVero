# `createMcpAppEmitter/observeToolCall`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/runner/mcp-app/mcp-app-emitter.ts` · [README do módulo](../../../../../../modules/core/runner/mcp-app/mcp-app-emitter-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:585441-585453](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585441-L585453) | `FunctionDeclaration` | sim | `event, callId, toolCall2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:585441-585453](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585441-L585453) | 7 | 0 | 1 | 6 | 0 | 0 |

### evaluation:585441

Chamadas escritas diretamente neste corpo: `emitWhenApp`, `observedCallIds.add`, `observedCallIds.has`.

SHA-256 do trecho: `1311d032bf2663dedbd11d68977a1007e1796d8fb02b735a4d248f3bad07479c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
