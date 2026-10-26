# `formatFixtureDocuments`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/evals/web-search-fixtures.ts` · [README do módulo](../../../../../modules/core/evals/web-search-fixtures-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:596893-596897](../../../../../../reference/runtime/sand-eval-runner.cjs#L596893-L596897) | `FunctionDeclaration` | não | `documents` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:596893-596897](../../../../../../reference/runtime/sand-eval-runner.cjs#L596893-L596897) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:596893

Chamadas escritas diretamente neste corpo: `.join`, `documents.map`.

SHA-256 do trecho: `4f1b5414db7a1281bc27cb3722922171be7df7d802df1cb7701867e834db9c1e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
