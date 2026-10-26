# `createWakeParentTool`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/wake-parent/wake-parent-tool.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/wake-parent/wake-parent-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:768628-768646](../../../../../../../../reference/runtime/host-main.cjs#L768628-L768646) | `FunctionDeclaration` | não | `deps` |
| [evaluation:564143-564161](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564143-L564161) | `FunctionDeclaration` | não | `deps` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:768628-768646](../../../../../../../../reference/runtime/host-main.cjs#L768628-L768646) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:564143-564161](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564143-L564161) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:768628

Chamadas escritas diretamente neste corpo: `.describe`, `.min`, `.trim`, `defineCommunicateTool`, `external_exports2.object`, `external_exports2.string`.

SHA-256 do trecho: `5cb41b49538674dd9ca6a0d26bbb86bd025cd33a06de1f61f2768374a6d8470f`.

### evaluation:564143

Chamadas escritas diretamente neste corpo: `.describe`, `.min`, `.trim`, `defineCommunicateTool`, `external_exports3.object`, `external_exports3.string`.

SHA-256 do trecho: `5db865b35012d27f3eef5cf5f57e1b1e016139712070abd9e83f7fda5c764cbf`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
