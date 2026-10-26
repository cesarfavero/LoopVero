# `memoryJsonlFolderMemories`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/memory/README.md).

**Módulo:** `core/runner/memory-types/memory-jsonl.ts` · [README do módulo](../../../../../../modules/core/runner/memory-types/memory-jsonl-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:754622-754630](../../../../../../../reference/runtime/host-main.cjs#L754622-L754630) | `FunctionDeclaration` | não | `files` |
| [evaluation:537589-537597](../../../../../../../reference/runtime/sand-eval-runner.cjs#L537589-L537597) | `FunctionDeclaration` | não | `files` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:754622-754630](../../../../../../../reference/runtime/host-main.cjs#L754622-L754630) | 1 | 2 | 0 | 1 | 0 | 0 |
| [evaluation:537589-537597](../../../../../../../reference/runtime/sand-eval-runner.cjs#L537589-L537597) | 1 | 2 | 0 | 1 | 0 | 0 |

### host:754622

Chamadas escritas diretamente neste corpo: `out.push`, `parseMemoryJsonlFile`.

SHA-256 do trecho: `86ae9e9b72b4738dc2e472766e626eebe4002582b343342a9ba3b940bc7e2f2f`.

### evaluation:537589

Chamadas escritas diretamente neste corpo: `out.push`, `parseMemoryJsonlFile`.

SHA-256 do trecho: `86ae9e9b72b4738dc2e472766e626eebe4002582b343342a9ba3b940bc7e2f2f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
