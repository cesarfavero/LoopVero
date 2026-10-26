# `parseMemoryProvenanceLine`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/memory/README.md).

**Módulo:** `core/runner/memory-file-format.ts` · [README do módulo](../../../../../modules/core/runner/memory-file-format-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:702767-702779](../../../../../../reference/runtime/host-main.cjs#L702767-L702779) | `FunctionDeclaration` | não | `line` |
| [evaluation:536511-536523](../../../../../../reference/runtime/sand-eval-runner.cjs#L536511-L536523) | `FunctionDeclaration` | não | `line` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:702767-702779](../../../../../../reference/runtime/host-main.cjs#L702767-L702779) | 3 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:536511-536523](../../../../../../reference/runtime/sand-eval-runner.cjs#L536511-L536523) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:702767

Chamadas escritas diretamente neste corpo: `MEMORY_PROVENANCE_LINE.exec`, `MEMORY_TURN_ID.test`, `isMemorySource`.

SHA-256 do trecho: `8128c936be5418d3f700fcbe9291e4db9042c31284729418082114df5efbbe62`.

### evaluation:536511

Chamadas escritas diretamente neste corpo: `MEMORY_PROVENANCE_LINE.exec`, `MEMORY_TURN_ID.test`, `isMemorySource`.

SHA-256 do trecho: `8128c936be5418d3f700fcbe9291e4db9042c31284729418082114df5efbbe62`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
