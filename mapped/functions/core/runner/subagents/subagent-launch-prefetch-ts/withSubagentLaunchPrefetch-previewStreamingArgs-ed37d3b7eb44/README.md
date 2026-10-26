# `withSubagentLaunchPrefetch/previewStreamingArgs`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/subagents/README.md).

**Módulo:** `core/runner/subagents/subagent-launch-prefetch.ts` · [README do módulo](../../../../../../modules/core/runner/subagents/subagent-launch-prefetch-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:763466-763470](../../../../../../../reference/runtime/host-main.cjs#L763466-L763470) | `ArrowFunctionExpression` | não | `ctx, interactionHandler, toolCallId` |
| [evaluation:556461-556465](../../../../../../../reference/runtime/sand-eval-runner.cjs#L556461-L556465) | `ArrowFunctionExpression` | não | `ctx, interactionHandler, toolCallId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:763466-763470](../../../../../../../reference/runtime/host-main.cjs#L763466-L763470) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:556461-556465](../../../../../../../reference/runtime/sand-eval-runner.cjs#L556461-L556465) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:763466

Chamadas escritas diretamente neste corpo: `launchPrefetch.start`, `preview`.

SHA-256 do trecho: `490f474200ed3c6e4f6fb9eff7903365ca499a2f2e51c1367f1317d51e6c94a3`.

### evaluation:556461

Chamadas escritas diretamente neste corpo: `launchPrefetch.start`, `preview`.

SHA-256 do trecho: `490f474200ed3c6e4f6fb9eff7903365ca499a2f2e51c1367f1317d51e6c94a3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
