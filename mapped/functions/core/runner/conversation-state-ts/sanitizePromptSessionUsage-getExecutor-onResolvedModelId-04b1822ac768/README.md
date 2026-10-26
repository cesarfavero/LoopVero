# `sanitizePromptSessionUsage/getExecutor/onResolvedModelId`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/conversation-state.ts` · [README do módulo](../../../../../modules/core/runner/conversation-state-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:529646-529655](../../../../../../reference/runtime/sand-eval-runner.cjs#L529646-L529655) | `ArrowFunctionExpression` | não | `modelId, response, usage` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:529646-529655](../../../../../../reference/runtime/sand-eval-runner.cjs#L529646-L529655) | 2 | 0 | 0 | 1 | 0 | 0 |

### evaluation:529646

Chamadas escritas diretamente neste corpo: `onResolvedModelId`, `session.getModelId`, `toSafeTokenCount2`.

Alvos de atribuição ou incremento: `earlyCompaction`, `resolvedModelId`.

SHA-256 do trecho: `597c913a3daf9691c1bf0534dd9e4773d1c59d801047938a9e9c13a301a24d70`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
