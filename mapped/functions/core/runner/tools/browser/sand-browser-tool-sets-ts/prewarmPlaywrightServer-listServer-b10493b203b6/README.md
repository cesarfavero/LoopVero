# `prewarmPlaywrightServer/listServer`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/browser/sand-browser-tool-sets.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/browser/sand-browser-tool-sets-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:751543-751543](../../../../../../../../reference/runtime/host-main.cjs#L751543-L751543) | `ArrowFunctionExpression` | sim | `(nenhum)` |
| [evaluation:524394-524394](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L524394-L524394) | `ArrowFunctionExpression` | sim | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:751543-751543](../../../../../../../../reference/runtime/host-main.cjs#L751543-L751543) | 0 | 0 | 1 | 0 | 0 | 0 |

A ocorrência em host:751543 usa retorno implícito de arrow function.
| [evaluation:524394-524394](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L524394-L524394) | 0 | 0 | 1 | 0 | 0 | 0 |

A ocorrência em evaluation:524394 usa retorno implícito de arrow function.

### host:751543

Chamadas escritas diretamente neste corpo: `mcpExec.listTools`.

SHA-256 do trecho: `f2f46caf08e2a54cafa844b137462927aacfab5f784600085fbae5f019f4e344`.

### evaluation:524394

Chamadas escritas diretamente neste corpo: `mcpExec.listTools`.

SHA-256 do trecho: `f2f46caf08e2a54cafa844b137462927aacfab5f784600085fbae5f019f4e344`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
