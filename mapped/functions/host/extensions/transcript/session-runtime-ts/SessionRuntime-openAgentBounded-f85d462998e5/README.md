# `SessionRuntime.openAgentBounded`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/session-runtime.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/session-runtime-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:738104-738137](../../../../../../../reference/runtime/host-main.cjs#L738104-L738137) | `method` | sim | `agentId, readLive, readCold` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:738104-738137](../../../../../../../reference/runtime/host-main.cjs#L738104-L738137) | 3 | 0 | 3 | 4 | 0 | 0 |

### host:738104

Chamadas escritas diretamente neste corpo: `Date.now`, `readCold`, `readLive`, `reply2.entries.at`, `reply3.entries.at`, `this.activateSession`, `this.announceActivation`, `this.announcedAgentId`, `this.emitActivationGap`, `this.invalidateDeferredActivation`, `this.markSessionLeftBehind`, `this.reannounceAfterRedirect`, `this.resolveLiveSession`, `this.scheduleWindowedActivation`, `this.tm.sessionStore.markAgentViewed`.

SHA-256 do trecho: `4ee21d06dcd745eb0dee5ef429b5a54bee71f3a198ec293ada8876aab26b9034`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
