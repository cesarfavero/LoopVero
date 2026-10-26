# `createBackgroundWatches/watchBackgroundShell`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/background-work.ts` · [README do módulo](../../../../../modules/core/runner/background-work-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:490619-490672](../../../../../../reference/runtime/sand-eval-runner.cjs#L490619-L490672) | `ArrowFunctionExpression` | não | `shellId, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:490619-490672](../../../../../../reference/runtime/sand-eval-runner.cjs#L490619-L490672) | 5 | 0 | 0 | 3 | 0 | 0 |

### evaluation:490619

Chamadas escritas diretamente neste corpo: `.listWork`, `.some`, `asyncTaskFallbackLabel`, `definedProvenance`, `host.getConversationId`, `host.pendingWakeArmedHandler`, `host.pollShellTerminalFile`, `registry3`, `shellId.trim`, `shellRewatches.has`, `shellRewatches.set`.

Alvos de atribuição ou incremento: `labelDescriptor`.

SHA-256 do trecho: `4d75db21ddc87b32e6a60c35bc9affa32b3181afabcdf6cd1e5c77c9f818d40c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
