# `parseExtractedMemories`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/memory/README.md).

**Módulo:** `core/runner/sand-memory.ts` · [README do módulo](../../../../../modules/core/runner/sand-memory-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:536218-536244](../../../../../../reference/runtime/sand-eval-runner.cjs#L536218-L536244) | `FunctionDeclaration` | não | `raw, existingMemories` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:536218-536244](../../../../../../reference/runtime/sand-eval-runner.cjs#L536218-L536244) | 8 | 1 | 0 | 2 | 0 | 0 |

### evaluation:536218

Chamadas escritas diretamente neste corpo: `CATEGORY_LINE.exec`, `additions.push`, `bare.toUpperCase`, `category[computed].toLowerCase`, `existingMemories.map`, `memoryDedupeKey`, `new Set`, `normalizeMemoryContent`, `raw.trim`, `removals.push`, `seen.add`, `seen.has`, `stripLineMarkers`, `trimmed.split`, `trimmed.toUpperCase`.

SHA-256 do trecho: `dd89bb313e30aa4b31524782df649ae5d8deb6b03e907a6f5b57f942823e29ea`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
