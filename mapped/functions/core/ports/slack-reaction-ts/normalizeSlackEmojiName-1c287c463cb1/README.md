# `normalizeSlackEmojiName`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/ports/slack-reaction.ts` · [README do módulo](../../../../../modules/core/ports/slack-reaction-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:768189-768193](../../../../../../reference/runtime/host-main.cjs#L768189-L768193) | `FunctionDeclaration` | não | `raw` |
| [evaluation:563705-563709](../../../../../../reference/runtime/sand-eval-runner.cjs#L563705-L563709) | `FunctionDeclaration` | não | `raw` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:768189-768193](../../../../../../reference/runtime/host-main.cjs#L768189-L768193) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:563705-563709](../../../../../../reference/runtime/sand-eval-runner.cjs#L563705-L563709) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:768189

Chamadas escritas diretamente neste corpo: `.toLowerCase`, `SLACK_EMOJI_NAME_PATTERN.test`, `raw.trim`, `trimmed.endsWith`, `trimmed.slice`, `trimmed.startsWith`.

SHA-256 do trecho: `e6771f67c6472d6d340f1e8a6d644ed022e0df86831d5a1c1fd238ca2d8e916a`.

### evaluation:563705

Chamadas escritas diretamente neste corpo: `.toLowerCase`, `SLACK_EMOJI_NAME_PATTERN.test`, `raw.trim`, `trimmed.endsWith`, `trimmed.slice`, `trimmed.startsWith`.

SHA-256 do trecho: `e6771f67c6472d6d340f1e8a6d644ed022e0df86831d5a1c1fd238ca2d8e916a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
