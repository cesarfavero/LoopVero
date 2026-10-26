# `getLastEntryFromTranscript`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/session/session-projection.ts` · [README do módulo](../../../../../../modules/host/extensions/session/session-projection-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:722462-722501](../../../../../../../reference/runtime/host-main.cjs#L722462-L722501) | `FunctionDeclaration` | não | `entries` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:722462-722501](../../../../../../../reference/runtime/host-main.cjs#L722462-L722501) | 12 | 1 | 0 | 7 | 0 | 0 |

### host:722462

Chamadas escritas diretamente neste corpo: `boundedPreviewSource`, `buildAttachmentLastEntry`, `getMainTranscriptEntries`, `hostSessionPreview`, `isAgentPeerMessageEntry`, `isLocalizableSessionPreview`, `isSessionPreviewLink`, `peerMessageLastEntry`, `sessionPreviewForSendMessage`, `sessionPreviewForWidget`.

Alvos de atribuição ou incremento: `i`.

SHA-256 do trecho: `7c2c5d32850664ccd018f8ce477a5bcf6b0226e8f9ee1a259cd2ce395bada90c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
