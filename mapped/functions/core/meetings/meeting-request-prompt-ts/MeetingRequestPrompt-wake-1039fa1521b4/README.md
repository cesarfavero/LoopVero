# `_MeetingRequestPrompt.wake`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/meetings/meeting-request-prompt.ts` · [README do módulo](../../../../../modules/core/meetings/meeting-request-prompt-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:754041-754060](../../../../../../reference/runtime/host-main.cjs#L754041-L754060) | `method` | não | `turn` |
| [evaluation:535837-535856](../../../../../../reference/runtime/sand-eval-runner.cjs#L535837-L535856) | `method` | não | `turn` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:754041-754060](../../../../../../reference/runtime/host-main.cjs#L754041-L754060) | 4 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:535837-535856](../../../../../../reference/runtime/sand-eval-runner.cjs#L535837-L535856) | 4 | 0 | 0 | 1 | 0 | 0 |

### host:754041

Chamadas escritas diretamente neste corpo: `_MeetingRequestPrompt.postOutcomes`, `_MeetingRequestPrompt.wakeLines`, `withReplyReminder`.

SHA-256 do trecho: `9efcd091c6937b9353bd940b56e34f00164691b04b0f25bbc171139a47e223b5`.

### evaluation:535837

Chamadas escritas diretamente neste corpo: `_MeetingRequestPrompt.postOutcomes`, `_MeetingRequestPrompt.wakeLines`, `withReplyReminder`.

SHA-256 do trecho: `9efcd091c6937b9353bd940b56e34f00164691b04b0f25bbc171139a47e223b5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
