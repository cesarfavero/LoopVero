# `sandMemoryWriteReport`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/sand-state-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-state-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:762654-762664](../../../../../../../reference/runtime/host-main.cjs#L762654-L762664) | `FunctionDeclaration` | não | `args, deps, outcome` |
| [evaluation:555264-555274](../../../../../../../reference/runtime/sand-eval-runner.cjs#L555264-L555274) | `FunctionDeclaration` | não | `args, deps, outcome` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:762654-762664](../../../../../../../reference/runtime/host-main.cjs#L762654-L762664) | 4 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:555264-555274](../../../../../../../reference/runtime/sand-eval-runner.cjs#L555264-L555274) | 4 | 0 | 0 | 3 | 0 | 0 |

### host:762654

Chamadas escritas diretamente neste corpo: `memoryFactBytes`, `memoryScope`.

SHA-256 do trecho: `2c3759850456be1ea7dcf7c79ac7be9ef5fac0efe67472238ea6c4ee75815f9f`.

### evaluation:555264

Chamadas escritas diretamente neste corpo: `memoryFactBytes`, `memoryScope`.

SHA-256 do trecho: `2c3759850456be1ea7dcf7c79ac7be9ef5fac0efe67472238ea6c4ee75815f9f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
