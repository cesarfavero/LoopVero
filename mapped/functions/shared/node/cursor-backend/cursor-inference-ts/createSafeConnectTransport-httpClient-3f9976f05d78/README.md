# `createSafeConnectTransport/httpClient`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/inference/README.md).

**Módulo:** `shared/node/cursor-backend/cursor-inference.ts` · [README do módulo](../../../../../../modules/shared/node/cursor-backend/cursor-inference-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:225155-225157](../../../../../../../reference/runtime/host-main.cjs#L225155-L225157) | `ArrowFunctionExpression` | não | `request5` |
| [evaluation:512226-512228](../../../../../../../reference/runtime/sand-eval-runner.cjs#L512226-L512228) | `ArrowFunctionExpression` | não | `request3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225155-225157](../../../../../../../reference/runtime/host-main.cjs#L225155-L225157) | 1 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em host:225155 usa retorno implícito de arrow function.
| [evaluation:512226-512228](../../../../../../../reference/runtime/sand-eval-runner.cjs#L512226-L512228) | 1 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em evaluation:512226 usa retorno implícito de arrow function.

### host:225155

Chamadas escritas diretamente neste corpo: `httpClient`, `new AbortController`.

SHA-256 do trecho: `440c244451e086c108fb922c34dab21c2f3fcc510df97f8e742e289673bebaba`.

### evaluation:512226

Chamadas escritas diretamente neste corpo: `httpClient`, `new AbortController`.

SHA-256 do trecho: `fbc0d9d2949f1822d1cf65945528b488d4deeb2d12f5e3756460e8e5279b8663`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
