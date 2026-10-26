# `createServerTranscriptTail/loop`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `shared/node/server-transcript/server-transcript-tail.ts` · [README do módulo](../../../../../../modules/shared/node/server-transcript/server-transcript-tail-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:713945-714018](../../../../../../../reference/runtime/host-main.cjs#L713945-L714018) | `ArrowFunctionExpression` | sim | `signal` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:713945-714018](../../../../../../../reference/runtime/host-main.cjs#L713945-L714018) | 15 | 1 | 5 | 4 | 0 | 1 |

### host:713945

Chamadas escritas diretamente neste corpo: `.catch`, `AbortSignal.any`, `backendReturn.arm`, `backendReturn.noteFailure`, `backendReturn.noteSilence`, `backendReturnWait.dispose`, `cleanReconnectPause.schedule`, `clock.monotonicNow`, `deps.log`, `endOutage`, `errorLogTag`, `fallBack`, `networkReturnJitter.schedule`, `new AbortController`, `park`, `probeWhileWaiting`, `retryBackoff.schedule`, `runOnce`, `settle3`, `watchLifetime.abort`.

Alvos de atribuição ou incremento: `failures2`, `outageStartedAt`, `outcome`, `pendingRetryWait`.

SHA-256 do trecho: `8a43f2316e5432eade22fbb24ea5e18a35f0c9cba4bcae2bb36e8f0350df5c6c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
