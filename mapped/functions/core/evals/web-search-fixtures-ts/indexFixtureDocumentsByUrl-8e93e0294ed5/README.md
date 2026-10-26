# `indexFixtureDocumentsByUrl`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/evals/web-search-fixtures.ts` · [README do módulo](../../../../../modules/core/evals/web-search-fixtures-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:596930-596937](../../../../../../reference/runtime/sand-eval-runner.cjs#L596930-L596937) | `FunctionDeclaration` | não | `config2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:596930-596937](../../../../../../reference/runtime/sand-eval-runner.cjs#L596930-L596937) | 1 | 1 | 0 | 1 | 0 | 0 |

### evaluation:596930

Chamadas escritas diretamente neste corpo: `config2.rules.flatMap`, `documentsByUrl.has`, `documentsByUrl.set`, `new Map`, `schemeAndQueryOrderInsensitiveUrlKey`.

SHA-256 do trecho: `5c439be0c773528a8842a5ee37f6d7c3b41e04d8dc2f152c6266c9664b7efb26`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
