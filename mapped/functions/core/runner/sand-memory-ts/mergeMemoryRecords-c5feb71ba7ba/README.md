# `mergeMemoryRecords`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/memory/README.md).

**Módulo:** `core/runner/sand-memory.ts` · [README do módulo](../../../../../modules/core/runner/sand-memory-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:536391-536401](../../../../../../reference/runtime/sand-eval-runner.cjs#L536391-L536401) | `FunctionDeclaration` | não | `records2, compare, limit3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:536391-536401](../../../../../../reference/runtime/sand-eval-runner.cjs#L536391-L536401) | 1 | 1 | 0 | 1 | 0 | 0 |

### evaluation:536391

Chamadas escritas diretamente neste corpo: `.slice`, `.sort`, `byKey.get`, `byKey.set`, `byKey.values`, `memoryDedupeKey`, `new Map`.

SHA-256 do trecho: `a3110882fffa0d030adc548c94849562bc5a544d64a20d347fa7ef6f61e18d2e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
