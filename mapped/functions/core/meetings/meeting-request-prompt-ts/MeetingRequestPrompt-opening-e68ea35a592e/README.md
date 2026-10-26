# `_MeetingRequestPrompt.opening`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/meetings/meeting-request-prompt.ts` · [README do módulo](../../../../../modules/core/meetings/meeting-request-prompt-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:754099-754112](../../../../../../reference/runtime/host-main.cjs#L754099-L754112) | `method` | não | `request5` |
| [evaluation:535895-535908](../../../../../../reference/runtime/sand-eval-runner.cjs#L535895-L535908) | `method` | não | `request3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:754099-754112](../../../../../../reference/runtime/host-main.cjs#L754099-L754112) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:535895-535908](../../../../../../reference/runtime/sand-eval-runner.cjs#L535895-L535908) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:754099

Chamadas escritas diretamente neste corpo: `_MeetingRequestPrompt.headerLines`, `withReplyReminder`.

SHA-256 do trecho: `bbd7130b2b94aee8dd810fd8d726fe79b9a038a49594868d2c22f2936bc43280`.

### evaluation:535895

Chamadas escritas diretamente neste corpo: `_MeetingRequestPrompt.headerLines`, `withReplyReminder`.

SHA-256 do trecho: `e574cf22a2a8796d16cf78bce23012318aaa1408492a40b9bb1636d952864be0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
