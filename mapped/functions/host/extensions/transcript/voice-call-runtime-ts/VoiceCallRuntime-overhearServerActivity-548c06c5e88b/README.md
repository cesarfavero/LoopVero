# `_VoiceCallRuntime.overhearServerActivity`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/voice-call-runtime.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/voice-call-runtime-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:742255-742267](../../../../../../../reference/runtime/host-main.cjs#L742255-L742267) | `method` | não | `agentId, live` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:742255-742267](../../../../../../../reference/runtime/host-main.cjs#L742255-L742267) | 5 | 0 | 0 | 4 | 0 | 0 |

### host:742255

Chamadas escritas diretamente neste corpo: `_VoiceCallRuntime.ownerSessionServerStep`, `areAgentActivitiesEqual`, `isWorthOverhearing`, `overheardStep`, `this.deliverOverheard`, `this.isOverheardEnabled`, `this.serverStepHeardByAgent.delete`, `this.serverStepHeardByAgent.get`, `this.serverStepHeardByAgent.set`.

SHA-256 do trecho: `53d1344062dec885e0ea58243c81ea1f16d09e27604d99ee2a0d349d0e16af09`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
