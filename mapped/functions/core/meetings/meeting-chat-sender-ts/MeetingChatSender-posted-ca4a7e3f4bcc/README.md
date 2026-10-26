# `_MeetingChatSender.posted`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/meetings/meeting-chat-sender.ts` · [README do módulo](../../../../../modules/core/meetings/meeting-chat-sender-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:760501-760519](../../../../../../reference/runtime/host-main.cjs#L760501-L760519) | `method` | não | `meetingId, post` |
| [evaluation:551316-551334](../../../../../../reference/runtime/sand-eval-runner.cjs#L551316-L551334) | `method` | não | `meetingId, post` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:760501-760519](../../../../../../reference/runtime/host-main.cjs#L760501-L760519) | 3 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:551316-551334](../../../../../../reference/runtime/sand-eval-runner.cjs#L551316-L551334) | 3 | 0 | 0 | 4 | 0 | 0 |

### host:760501

Chamadas escritas diretamente neste corpo: `MeetingChannelAddress.of`, `_MeetingChatSender.notPosted`, `this.refusal`.

SHA-256 do trecho: `17f1a35c7c26584a9f51194303fdb76c6069fbd3d4302aace4b1f526096c0e5a`.

### evaluation:551316

Chamadas escritas diretamente neste corpo: `MeetingChannelAddress.of`, `_MeetingChatSender.notPosted`, `this.refusal`.

SHA-256 do trecho: `17f1a35c7c26584a9f51194303fdb76c6069fbd3d4302aace4b1f526096c0e5a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
