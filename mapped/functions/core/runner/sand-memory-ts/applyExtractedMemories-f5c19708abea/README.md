# `applyExtractedMemories`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/memory/README.md).

**Módulo:** `core/runner/sand-memory.ts` · [README do módulo](../../../../../modules/core/runner/sand-memory-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:536368-536381](../../../../../../reference/runtime/sand-eval-runner.cjs#L536368-L536381) | `FunctionDeclaration` | não | `store, extraction, now, knownMemories, provenance` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:536368-536381](../../../../../../reference/runtime/sand-eval-runner.cjs#L536368-L536381) | 3 | 2 | 0 | 1 | 0 | 0 |

### evaluation:536368

Chamadas escritas diretamente neste corpo: `added.push`, `knownKeys.has`, `knownMemories.map`, `memoryDedupeKey`, `new Set`, `removed.push`, `store.addMemory`, `store.removeMemoryByContent`.

SHA-256 do trecho: `1d83999d5c6b35c4c9890819a1fa29357129f3e24f18da12773ef237b7d84d7f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
