# `_MeetingChatSender.postOnce`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/meetings/meeting-chat-sender.ts` · [README do módulo](../../../../../modules/core/meetings/meeting-chat-sender-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:760451-760479](../../../../../../reference/runtime/host-main.cjs#L760451-L760479) | `method` | sim | `meetingId, {     once: once2,     signal,     trace: trace2   }, post` |
| [evaluation:551266-551294](../../../../../../reference/runtime/sand-eval-runner.cjs#L551266-L551294) | `method` | sim | `meetingId, {     once: once2,     signal,     trace: trace2   }, post` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:760451-760479](../../../../../../reference/runtime/host-main.cjs#L760451-L760479) | 4 | 0 | 4 | 3 | 0 | 0 |
| [evaluation:551266-551294](../../../../../../reference/runtime/sand-eval-runner.cjs#L551266-L551294) | 4 | 0 | 4 | 3 | 0 | 0 |

### host:760451

Chamadas escritas diretamente neste corpo: `Date.now`, `_MeetingChatSender.notPosted`, `_MeetingChatSender.postOutcome`, `once2.claim`, `once2.posted`, `once2.release`, `post`, `this.deps.mark`, `this.posted`.

Alvos de atribuição ou incremento: `sent`, `trace2.outcome`.

SHA-256 do trecho: `89b6eba5ec625de2d022bfe8bc67e4623cd3f88d703e6d68eb2df2878b938421`.

### evaluation:551266

Chamadas escritas diretamente neste corpo: `Date.now`, `_MeetingChatSender.notPosted`, `_MeetingChatSender.postOutcome`, `once2.claim`, `once2.posted`, `once2.release`, `post`, `this.deps.mark`, `this.posted`.

Alvos de atribuição ou incremento: `sent`, `trace2.outcome`.

SHA-256 do trecho: `89b6eba5ec625de2d022bfe8bc67e4623cd3f88d703e6d68eb2df2878b938421`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
