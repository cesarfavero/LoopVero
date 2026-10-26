# `resolve6`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/sand-sort-memories-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-sort-memories-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:536714-536734](../../../../../../../reference/runtime/sand-eval-runner.cjs#L536714-L536734) | `FunctionDeclaration` | não | `{   facts,   from: from2,   settledIn }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:536714-536734](../../../../../../../reference/runtime/sand-eval-runner.cjs#L536714-L536734) | 4 | 1 | 0 | 1 | 0 | 0 |

### evaluation:536714

Chamadas escritas diretamente neste corpo: `destination.get`, `destination.has`, `found.set`, `found.values`, `indexFacts`, `memoryIdFor`, `missing.push`, `new Map`, `settled.set`, `settled.values`, `source.get`, `source.has`.

SHA-256 do trecho: `cd6be44740238ce45485e44fb16c4c7edd537a2cd3b9ffdeba84e4169d41d62c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
