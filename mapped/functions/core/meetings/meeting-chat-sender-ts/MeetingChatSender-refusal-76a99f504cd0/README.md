# `_MeetingChatSender.refusal`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/meetings/meeting-chat-sender.ts` · [README do módulo](../../../../../modules/core/meetings/meeting-chat-sender-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:760520-760541](../../../../../../reference/runtime/host-main.cjs#L760520-L760541) | `method` | não | `meetingId, reason, status` |
| [evaluation:551335-551356](../../../../../../reference/runtime/sand-eval-runner.cjs#L551335-L551356) | `method` | não | `meetingId, reason, status` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:760520-760541](../../../../../../reference/runtime/host-main.cjs#L760520-L760541) | 5 | 0 | 0 | 5 | 0 | 0 |
| [evaluation:551335-551356](../../../../../../reference/runtime/sand-eval-runner.cjs#L551335-L551356) | 5 | 0 | 0 | 5 | 0 | 0 |

### host:760520

Chamadas escritas diretamente neste corpo: `_MeetingChatSender.notPosted`.

SHA-256 do trecho: `b10baa484b99e29a9743f00b7c87dcf3c4e226f7a667d9f210b2026a2a6a2555`.

### evaluation:551335

Chamadas escritas diretamente neste corpo: `_MeetingChatSender.notPosted`.

SHA-256 do trecho: `b10baa484b99e29a9743f00b7c87dcf3c4e226f7a667d9f210b2026a2a6a2555`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
