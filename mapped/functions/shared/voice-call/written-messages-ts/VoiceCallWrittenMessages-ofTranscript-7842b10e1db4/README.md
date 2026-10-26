# `_VoiceCallWrittenMessages.ofTranscript`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/voice-call/written-messages.ts` · [README do módulo](../../../../../modules/shared/voice-call/written-messages-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:490570-490583](../../../../../../reference/runtime/host-main.cjs#L490570-L490583) | `method` | não | `entries, limit3 = VOICE_CALL_SENT_MESSAGE_LIMIT` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:490570-490583](../../../../../../reference/runtime/host-main.cjs#L490570-L490583) | 4 | 1 | 0 | 1 | 0 | 0 |

### host:490570

Chamadas escritas diretamente neste corpo: `getChatTranscriptEntries`, `outlineSendMessageText`, `typedInTheChat`, `written.push`, `written.slice`.

SHA-256 do trecho: `a1ed56d745508c26365128c1647edd70cb281fd487fb5ea33a66364d9f37fa52`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
