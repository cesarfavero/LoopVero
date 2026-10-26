# `meetingDraftMessage`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/draft-external-message-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/draft-external-message-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:755371-755407](../../../../../../../reference/runtime/host-main.cjs#L755371-L755407) | `FunctionDeclaration` | sim | `meetings, { meetingId, body }` |
| [evaluation:541251-541287](../../../../../../../reference/runtime/sand-eval-runner.cjs#L541251-L541287) | `FunctionDeclaration` | sim | `meetings, { meetingId, body }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:755371-755407](../../../../../../../reference/runtime/host-main.cjs#L755371-L755407) | 6 | 0 | 2 | 1 | 5 | 0 |
| [evaluation:541251-541287](../../../../../../../reference/runtime/sand-eval-runner.cjs#L541251-L541287) | 6 | 0 | 2 | 1 | 5 | 0 |

### host:755371

Chamadas escritas diretamente neste corpo: `MeetingChannelAddress.of`, `meetings.getMeeting`, `meetings.readMarkedInternal`, `new DraftRefusedError`.

Alvos de lançamento explícito: `DraftRefusedError`.

SHA-256 do trecho: `2a092b0cd4b455b6300e91f00de780b4c480bd88bcca346c550b724bf42a5dfe`.

### evaluation:541251

Chamadas escritas diretamente neste corpo: `MeetingChannelAddress.of`, `meetings.getMeeting`, `meetings.readMarkedInternal`, `new DraftRefusedError`.

Alvos de lançamento explícito: `DraftRefusedError`.

SHA-256 do trecho: `2a092b0cd4b455b6300e91f00de780b4c480bd88bcca346c550b724bf42a5dfe`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
