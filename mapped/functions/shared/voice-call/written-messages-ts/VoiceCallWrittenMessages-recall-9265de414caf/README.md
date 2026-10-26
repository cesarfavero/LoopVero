# `_VoiceCallWrittenMessages.recall`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/voice-call/written-messages.ts` · [README do módulo](../../../../../modules/shared/voice-call/written-messages-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:490587-490600](../../../../../../reference/runtime/host-main.cjs#L490587-L490600) | `method` | sim | `readTail, limit3 = VOICE_CALL_SENT_MESSAGE_LIMIT` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:490587-490600](../../../../../../reference/runtime/host-main.cjs#L490587-L490600) | 2 | 1 | 1 | 1 | 0 | 0 |

### host:490587

Chamadas escritas diretamente neste corpo: `_VoiceCallWrittenMessages.fills`, `_VoiceCallWrittenMessages.ofTranscript`, `collected.unshift`, `readTail`.

Alvos de atribuição ou incremento: `beforeSeq`, `page`.

SHA-256 do trecho: `c44a7df84b698363e3c109acf457b561419e9b0296db032eac67f4f214f2eae5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
