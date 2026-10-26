# `memoryDedupeKey`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/memory/README.md).

**Módulo:** `core/runner/sand-memory.ts` · [README do módulo](../../../../../modules/core/runner/sand-memory-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:702649-702651](../../../../../../reference/runtime/host-main.cjs#L702649-L702651) | `FunctionDeclaration` | não | `content` |
| [evaluation:536151-536153](../../../../../../reference/runtime/sand-eval-runner.cjs#L536151-L536153) | `FunctionDeclaration` | não | `content` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:702649-702651](../../../../../../reference/runtime/host-main.cjs#L702649-L702651) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:536151-536153](../../../../../../reference/runtime/sand-eval-runner.cjs#L536151-L536153) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:702649

Chamadas escritas diretamente neste corpo: `.toLowerCase`, `normalizeMemoryContent`.

SHA-256 do trecho: `1983ca25e36c038ba85ef603dd7c3701b6ffc909315117fc9fd6ae49c5945ebc`.

### evaluation:536151

Chamadas escritas diretamente neste corpo: `.toLowerCase`, `normalizeMemoryContent`.

SHA-256 do trecho: `1983ca25e36c038ba85ef603dd7c3701b6ffc909315117fc9fd6ae49c5945ebc`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
