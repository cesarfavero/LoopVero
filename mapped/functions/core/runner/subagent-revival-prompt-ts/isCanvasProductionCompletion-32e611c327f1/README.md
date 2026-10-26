# `isCanvasProductionCompletion`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/subagents/README.md).

**Módulo:** `core/runner/subagent-revival-prompt.ts` · [README do módulo](../../../../../modules/core/runner/subagent-revival-prompt-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:583895-583897](../../../../../../reference/runtime/sand-eval-runner.cjs#L583895-L583897) | `FunctionDeclaration` | não | `completion, canvasCursorAgentIds` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:583895-583897](../../../../../../reference/runtime/sand-eval-runner.cjs#L583895-L583897) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:583895

Chamadas escritas diretamente neste corpo: `canvasCursorAgentIds.has`, `hasUserStoreCanvasSourcePath`.

SHA-256 do trecho: `004dbd8bea09492ca70160b3297150b57957d42c659f82771fba8858daa00f41`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
