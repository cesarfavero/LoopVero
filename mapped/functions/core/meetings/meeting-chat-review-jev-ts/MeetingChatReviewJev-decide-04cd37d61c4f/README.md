# `_MeetingChatReviewJev.decide`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/meetings/meeting-chat-review-jev.ts` · [README do módulo](../../../../../modules/core/meetings/meeting-chat-review-jev-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:760234-760261](../../../../../../reference/runtime/host-main.cjs#L760234-L760261) | `method` | não | `input2` |
| [evaluation:551049-551076](../../../../../../reference/runtime/sand-eval-runner.cjs#L551049-L551076) | `method` | não | `input2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:760234-760261](../../../../../../reference/runtime/host-main.cjs#L760234-L760261) | 6 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:551049-551076](../../../../../../reference/runtime/sand-eval-runner.cjs#L551049-L551076) | 6 | 0 | 0 | 2 | 0 | 0 |

### host:760234

Chamadas escritas diretamente neste corpo: `.trim`, `_MeetingChatReviewJev.route`, `alwaysOn.flatMap`, `atLeast`, `atMost`, `failed2.push`.

SHA-256 do trecho: `03b8b1556661579413b9f265b63cbc95ae31f0944d29f084aa426f2216004e29`.

### evaluation:551049

Chamadas escritas diretamente neste corpo: `.trim`, `_MeetingChatReviewJev.route`, `alwaysOn.flatMap`, `atLeast`, `atMost`, `failed.push`.

SHA-256 do trecho: `e7ab6dbdc916e707850f9af5d4bcd81d0bf9a303c70f162190d085edb99c7bad`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
