# `isMemorySource`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/memory/README.md).

**Módulo:** `core/runner/memory-file-format.ts` · [README do módulo](../../../../../modules/core/runner/memory-file-format-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:702760-702762](../../../../../../reference/runtime/host-main.cjs#L702760-L702762) | `FunctionDeclaration` | não | `value` |
| [evaluation:536504-536506](../../../../../../reference/runtime/sand-eval-runner.cjs#L536504-L536506) | `FunctionDeclaration` | não | `value` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:702760-702762](../../../../../../reference/runtime/host-main.cjs#L702760-L702762) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:536504-536506](../../../../../../reference/runtime/sand-eval-runner.cjs#L536504-L536506) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:702760

Chamadas escritas diretamente neste corpo: `SAND_MEMORY_SOURCES.some`.

SHA-256 do trecho: `002c5d6ffc4228aeee8727749ca368e8c68355baa53c80b3f7b7cd1f5d9f11b7`.

### evaluation:536504

Chamadas escritas diretamente neste corpo: `SAND_MEMORY_SOURCES.some`.

SHA-256 do trecho: `002c5d6ffc4228aeee8727749ca368e8c68355baa53c80b3f7b7cd1f5d9f11b7`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
