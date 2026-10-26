# `_VoiceCallRuntime.record`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/voice-call-runtime.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/voice-call-runtime-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:742338-742364](../../../../../../../reference/runtime/host-main.cjs#L742338-L742364) | `method` | sim | `record3, sink` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:742338-742364](../../../../../../../reference/runtime/host-main.cjs#L742338-L742364) | 5 | 0 | 3 | 2 | 2 | 0 |

### host:742338

Chamadas escritas diretamente neste corpo: `isSafeFolderId`, `new SandVoiceCallReceiptUndeliverableError`, `parseAgentId`, `sink.publish`, `this.appendReceiptToBoxChat`, `this.liveCallByAgent.get`, `this.setVoiceCallPresence`, `writeRecordFile`.

Alvos de lançamento explícito: `SandVoiceCallReceiptUndeliverableError`.

SHA-256 do trecho: `15a817f9e610e390e440dc1aa9bb8b9b3fa5ce571d63a651800d30325705dc05`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
