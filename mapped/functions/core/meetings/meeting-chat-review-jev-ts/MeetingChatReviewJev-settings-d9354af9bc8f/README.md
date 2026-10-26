# `_MeetingChatReviewJev.settings`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/meetings/meeting-chat-review-jev.ts` · [README do módulo](../../../../../modules/core/meetings/meeting-chat-review-jev-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:760213-760230](../../../../../../reference/runtime/host-main.cjs#L760213-L760230) | `method` | não | `raw` |
| [evaluation:551028-551045](../../../../../../reference/runtime/sand-eval-runner.cjs#L551028-L551045) | `method` | não | `raw` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:760213-760230](../../../../../../reference/runtime/host-main.cjs#L760213-L760230) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:551028-551045](../../../../../../reference/runtime/sand-eval-runner.cjs#L551028-L551045) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:760213

Chamadas escritas diretamente neste corpo: `Math.floor`, `pick2`.

SHA-256 do trecho: `19134ac5b0bd2aed0e216999bee21305f85ea1606d831a8b0db1ab45ebbaf82d`.

### evaluation:551028

Chamadas escritas diretamente neste corpo: `Math.floor`, `pick2`.

SHA-256 do trecho: `19134ac5b0bd2aed0e216999bee21305f85ea1606d831a8b0db1ab45ebbaf82d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
