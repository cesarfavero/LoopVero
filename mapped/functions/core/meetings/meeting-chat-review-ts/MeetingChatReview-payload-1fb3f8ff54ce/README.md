# `_MeetingChatReview.payload`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/meetings/meeting-chat-review.ts` · [README do módulo](../../../../../modules/core/meetings/meeting-chat-review-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:760060-760087](../../../../../../reference/runtime/host-main.cjs#L760060-L760087) | `method` | não | `{ context: context2, draft }` |
| [evaluation:550875-550902](../../../../../../reference/runtime/sand-eval-runner.cjs#L550875-L550902) | `method` | não | `{ context: context2, draft }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:760060-760087](../../../../../../reference/runtime/host-main.cjs#L760060-L760087) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:550875-550902](../../../../../../reference/runtime/sand-eval-runner.cjs#L550875-L550902) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:760060

Chamadas escritas diretamente neste corpo: `_MeetingChatReview.newestWithin`, `context2.conversation.map`, `context2.recentLines.slice`, `notes.slice`.

SHA-256 do trecho: `aff801931840894ede6e75080e1bcb5ad8986387bbfe30dc69c21be41ffafda2`.

### evaluation:550875

Chamadas escritas diretamente neste corpo: `_MeetingChatReview.newestWithin`, `context2.conversation.map`, `context2.recentLines.slice`, `notes.slice`.

SHA-256 do trecho: `aff801931840894ede6e75080e1bcb5ad8986387bbfe30dc69c21be41ffafda2`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
