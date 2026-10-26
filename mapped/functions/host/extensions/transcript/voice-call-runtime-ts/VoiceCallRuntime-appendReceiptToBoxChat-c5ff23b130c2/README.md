# `_VoiceCallRuntime.appendReceiptToBoxChat`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/voice-call-runtime.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/voice-call-runtime-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:742365-742393](../../../../../../../reference/runtime/host-main.cjs#L742365-L742393) | `method` | sim | `agentId, record3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:742365-742393](../../../../../../../reference/runtime/host-main.cjs#L742365-L742393) | 3 | 2 | 2 | 2 | 1 | 1 |

### host:742365

Chamadas escritas diretamente neste corpo: `__callDispose`, `__using`, `new SandVoiceCallReceiptUndeliverableError`, `session.db.appendTranscriptEntry`, `this.leaseReceiptSession`, `this.tm.appendEntry`, `this.tm.roster.emit`, `this.tm.roster.emitAgentUpdate`, `voiceCallHangupEntries`.

Alvos de lançamento explícito: `SandVoiceCallReceiptUndeliverableError`.

SHA-256 do trecho: `9e441c9e37722ec2614e4ed81f2a75a9a38239c6390dcf4c68f1fa5029bc9b19`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
