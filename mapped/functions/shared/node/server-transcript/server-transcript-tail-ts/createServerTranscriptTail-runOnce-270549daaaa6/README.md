# `createServerTranscriptTail/runOnce`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `shared/node/server-transcript/server-transcript-tail.ts` · [README do módulo](../../../../../../modules/shared/node/server-transcript/server-transcript-tail-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:713830-713902](../../../../../../../reference/runtime/host-main.cjs#L713830-L713902) | `ArrowFunctionExpression` | sim | `signal, onProvenHealthy` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:713830-713902](../../../../../../../reference/runtime/host-main.cjs#L713830-L713902) | 11 | 2 | 2 | 4 | 2 | 1 |

### host:713830

Chamadas escritas diretamente neste corpo: `AbortSignal.any`, `activate`, `armStall`, `backendReturn.noteAnswered`, `clock.monotonicNow`, `connectedStreamIds.add`, `cursorsForConnect`, `deps.client.isEnabled`, `deps.client.watch`, `deps.onConnected`, `deps.onDisconnected`, `disarmStall`, `handleFrame`, `hasRequiredAgents`, `new AbortController`, `new ServerTranscriptTailStallError`, `new Set`, `onProvenHealthy`, `opened.deferredReplacement.dispose`, `recheckGateWhileOpen`, `signal.addEventListener`, `signal.removeEventListener`, `stopRecheck`, `updateLegacyEnabled`.

Alvos de atribuição ou incremento: `connectedAt`, `openStream`.

Alvos de lançamento explícito: `ServerTranscriptTailStallError`, `error64`.

SHA-256 do trecho: `72878f14eb71c54502817680b64efc29ac9542a4c8f1100294c8548d68cd1421`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
