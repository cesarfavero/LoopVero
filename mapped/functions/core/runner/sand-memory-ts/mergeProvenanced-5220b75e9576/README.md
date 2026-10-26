# `mergeProvenanced`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/memory/README.md).

**Módulo:** `core/runner/sand-memory.ts` · [README do módulo](../../../../../modules/core/runner/sand-memory-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:536402-536406](../../../../../../reference/runtime/sand-eval-runner.cjs#L536402-L536406) | `FunctionDeclaration` | não | `records2, compare, limit3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:536402-536406](../../../../../../reference/runtime/sand-eval-runner.cjs#L536402-L536406) | 2 | 0 | 0 | 2 | 0 | 0 |

### evaluation:536402

Chamadas escritas diretamente neste corpo: `Math.floor`, `Number.isFinite`, `mergeMemoryRecords`.

SHA-256 do trecho: `5288649884a947d186af78e65d234e2a153e4ba11e2a615c2e227c2464a58646`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
