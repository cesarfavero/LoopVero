# `relevanceTokens`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/memory/README.md).

**Módulo:** `core/runner/sand-memory.ts` · [README do módulo](../../../../../modules/core/runner/sand-memory-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:702717-702724](../../../../../../reference/runtime/host-main.cjs#L702717-L702724) | `FunctionDeclaration` | não | `text3` |
| [evaluation:536294-536301](../../../../../../reference/runtime/sand-eval-runner.cjs#L536294-L536301) | `FunctionDeclaration` | não | `text3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:702717-702724](../../../../../../reference/runtime/host-main.cjs#L702717-L702724) | 1 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:536294-536301](../../../../../../reference/runtime/sand-eval-runner.cjs#L536294-L536301) | 1 | 1 | 0 | 1 | 0 | 0 |

### host:702717

Chamadas escritas diretamente neste corpo: `.matchAll`, `RELEVANCE_STOPWORDS.has`, `new Set`, `text3.toLowerCase`, `tokens.add`.

SHA-256 do trecho: `b4ea2c998e9f2e4fd99b8ad18604a5616feb54ee1a69ed6e1663f4d927fb2d1c`.

### evaluation:536294

Chamadas escritas diretamente neste corpo: `.matchAll`, `RELEVANCE_STOPWORDS.has`, `new Set`, `text3.toLowerCase`, `tokens.add`.

SHA-256 do trecho: `b4ea2c998e9f2e4fd99b8ad18604a5616feb54ee1a69ed6e1663f4d927fb2d1c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
