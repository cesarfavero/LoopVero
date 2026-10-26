# `_MeetingChatSender.notApproved`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/meetings/meeting-chat-sender.ts` · [README do módulo](../../../../../modules/core/meetings/meeting-chat-sender-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:760487-760500](../../../../../../reference/runtime/host-main.cjs#L760487-L760500) | `method` | não | `verdict, meetingId` |
| [evaluation:551302-551315](../../../../../../reference/runtime/sand-eval-runner.cjs#L551302-L551315) | `method` | não | `verdict, meetingId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:760487-760500](../../../../../../reference/runtime/host-main.cjs#L760487-L760500) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:551302-551315](../../../../../../reference/runtime/sand-eval-runner.cjs#L551302-L551315) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:760487

Chamadas escritas diretamente neste corpo: `.join`, `_MeetingChatSender.notPosted`, `this.fallback.afterDeny`, `verdict.reasons.map`.

SHA-256 do trecho: `14a3642803e8422a50304832a3bceee61031312564a8fe2b75c29402a7cbf08c`.

### evaluation:551302

Chamadas escritas diretamente neste corpo: `.join`, `_MeetingChatSender.notPosted`, `this.fallback.afterDeny`, `verdict.reasons.map`.

SHA-256 do trecho: `14a3642803e8422a50304832a3bceee61031312564a8fe2b75c29402a7cbf08c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
