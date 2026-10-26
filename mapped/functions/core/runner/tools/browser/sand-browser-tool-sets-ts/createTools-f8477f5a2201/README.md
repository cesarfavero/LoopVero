# `createTools`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/browser/sand-browser-tool-sets.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/browser/sand-browser-tool-sets-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:751582-751589](../../../../../../../../reference/runtime/host-main.cjs#L751582-L751589) | `ArrowFunctionExpression` | não | `deps` |
| [evaluation:524433-524440](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L524433-L524440) | `ArrowFunctionExpression` | não | `deps` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:751582-751589](../../../../../../../../reference/runtime/host-main.cjs#L751582-L751589) | 1 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em host:751582 usa retorno implícito de arrow function.
| [evaluation:524433-524440](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L524433-L524440) | 1 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em evaluation:524433 usa retorno implícito de arrow function.

### host:751582

Chamadas escritas diretamente neste corpo: `createPlaywrightBrowserTools`.

SHA-256 do trecho: `0ffad2970f130c1e01cc0202fc33903cb83bf5801787ff8b978780a974b57178`.

### evaluation:524433

Chamadas escritas diretamente neste corpo: `createPlaywrightBrowserTools`.

SHA-256 do trecho: `0ffad2970f130c1e01cc0202fc33903cb83bf5801787ff8b978780a974b57178`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
