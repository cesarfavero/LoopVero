# `describeWriteFailure2`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/canvas/edit-canvas-tool.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/canvas/edit-canvas-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:775572-775620](../../../../../../../../reference/runtime/host-main.cjs#L775572-L775620) | `FunctionDeclaration` | não | `result, stored = "untouched"` |
| [evaluation:575216-575264](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L575216-L575264) | `FunctionDeclaration` | não | `result, stored = "untouched"` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:775572-775620](../../../../../../../../reference/runtime/host-main.cjs#L775572-L775620) | 11 | 0 | 0 | 8 | 0 | 0 |
| [evaluation:575216-575264](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L575216-L575264) | 11 | 0 | 0 | 8 | 0 | 0 |

### host:775572

Chamadas escritas diretamente neste corpo: `.join`, `.map`.

SHA-256 do trecho: `699e19e2cd009b765c6ca5800b1846a2f4caf5903b6210ef344675f46fe08f01`.

### evaluation:575216

Chamadas escritas diretamente neste corpo: `.join`, `.map`.

SHA-256 do trecho: `699e19e2cd009b765c6ca5800b1846a2f4caf5903b6210ef344675f46fe08f01`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
