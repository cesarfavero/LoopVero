# `memoryTypeTarget`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/memory/README.md).

**Módulo:** `core/runner/memory-types/memory-type-targets.ts` · [README do módulo](../../../../../../modules/core/runner/memory-types/memory-type-targets-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:771593-771595](../../../../../../../reference/runtime/host-main.cjs#L771593-L771595) | `FunctionDeclaration` | não | `args` |
| [evaluation:570826-570828](../../../../../../../reference/runtime/sand-eval-runner.cjs#L570826-L570828) | `FunctionDeclaration` | não | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:771593-771595](../../../../../../../reference/runtime/host-main.cjs#L771593-L771595) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:570826-570828](../../../../../../../reference/runtime/sand-eval-runner.cjs#L570826-L570828) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:771593

Chamadas escritas diretamente neste corpo: `folderTarget`, `shardTarget`.

SHA-256 do trecho: `21fd83acfb293b4e2c3661c3d932793c4d6bb5618e79c994dd5901bd3b8f368f`.

### evaluation:570826

Chamadas escritas diretamente neste corpo: `folderTarget`, `shardTarget`.

SHA-256 do trecho: `21fd83acfb293b4e2c3661c3d932793c4d6bb5618e79c994dd5901bd3b8f368f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
