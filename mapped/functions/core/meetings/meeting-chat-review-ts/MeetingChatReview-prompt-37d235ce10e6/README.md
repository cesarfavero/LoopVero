# `_MeetingChatReview.prompt`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/meetings/meeting-chat-review.ts` · [README do módulo](../../../../../modules/core/meetings/meeting-chat-review-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:760053-760059](../../../../../../reference/runtime/host-main.cjs#L760053-L760059) | `method` | não | `input2` |
| [evaluation:550868-550874](../../../../../../reference/runtime/sand-eval-runner.cjs#L550868-L550874) | `method` | não | `input2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:760053-760059](../../../../../../reference/runtime/host-main.cjs#L760053-L760059) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:550868-550874](../../../../../../reference/runtime/sand-eval-runner.cjs#L550868-L550874) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:760053

Chamadas escritas diretamente neste corpo: `JSON.stringify`, `_MeetingChatReview.payload`.

SHA-256 do trecho: `1ec47e54340aaaa14461b4425a764fc006179edc770b315c6c74d3d00b958d4e`.

### evaluation:550868

Chamadas escritas diretamente neste corpo: `JSON.stringify`, `_MeetingChatReview.payload`.

SHA-256 do trecho: `1ec47e54340aaaa14461b4425a764fc006179edc770b315c6c74d3d00b958d4e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
