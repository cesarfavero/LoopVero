# `parseMemoryFacts`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/memory/README.md).

**Módulo:** `core/runner/memory-file-format.ts` · [README do módulo](../../../../../modules/core/runner/memory-file-format-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:702785-702825](../../../../../../reference/runtime/host-main.cjs#L702785-L702825) | `FunctionDeclaration` | não | `raw, kind, base, path33` |
| [evaluation:536532-536572](../../../../../../reference/runtime/sand-eval-runner.cjs#L536532-L536572) | `FunctionDeclaration` | não | `raw, kind, base, path33` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:702785-702825](../../../../../../reference/runtime/host-main.cjs#L702785-L702825) | 7 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:536532-536572](../../../../../../reference/runtime/sand-eval-runner.cjs#L536532-L536572) | 7 | 1 | 0 | 1 | 0 | 0 |

### host:702785

Chamadas escritas diretamente neste corpo: `.entries`, `Date.parse`, `MEMORY_FACT_LINE.exec`, `Number.isFinite`, `facts.push`, `memoryIdFor`, `normalizeMemoryContent`, `parseMemoryProvenanceLine`, `raw.split`.

Alvos de atribuição ou incremento: `facts[computed]`, `order`, `untaggedFactAbove`.

SHA-256 do trecho: `4eacc6d65205de4ffbdf289c574272d693cd35620ac5f766800b2c4ac36dbeed`.

### evaluation:536532

Chamadas escritas diretamente neste corpo: `.entries`, `Date.parse`, `MEMORY_FACT_LINE.exec`, `Number.isFinite`, `facts.push`, `memoryIdFor`, `normalizeMemoryContent`, `parseMemoryProvenanceLine`, `raw.split`.

Alvos de atribuição ou incremento: `facts[computed]`, `order`, `untaggedFactAbove`.

SHA-256 do trecho: `4eacc6d65205de4ffbdf289c574272d693cd35620ac5f766800b2c4ac36dbeed`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
