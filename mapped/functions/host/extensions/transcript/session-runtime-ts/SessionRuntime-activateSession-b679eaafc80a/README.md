# `SessionRuntime.activateSession`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/session-runtime.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/session-runtime-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:738034-738068](../../../../../../../reference/runtime/host-main.cjs#L738034-L738068) | `method` | sim | `agentId, current2, viewedAt, mirror2, deferred` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:738034-738068](../../../../../../../reference/runtime/host-main.cjs#L738034-L738068) | 7 | 1 | 6 | 5 | 0 | 1 |

### host:738034

Chamadas escritas diretamente neste corpo: `__callDispose`, `__using`, `deferred.isSuperseded`, `nextSession.db.getTranscriptEntries`, `nextSession.db.getUnreadState`, `readActivationGap`, `this.forgetSettledOpen`, `this.isSessionStale`, `this.markSessionLeftBehind`, `this.mirrorActiveTranscript`, `this.openSessionOnce`, `this.pinSessionActivation`, `this.replaceSession`, `this.resolveLiveSession`, `this.setActiveTranscript`, `this.tm.sessionStore.markSessionViewed`, `this.tm.sessionStore.markSessionViewedNow`.

Alvos de atribuição ou incremento: `nextSession`, `this.loaded`.

SHA-256 do trecho: `5a2649c300550186e29ac3303d3d553cc88ab2919de3e20c01a6cb88927c6b00`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
