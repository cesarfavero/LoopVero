# `channel.disconnect`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/sand-state-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-state-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:763040-763042](../../../../../../../reference/runtime/host-main.cjs#L763040-L763042) | `ArrowFunctionExpression` | sim | `args, deps, need` |
| [evaluation:555650-555652](../../../../../../../reference/runtime/sand-eval-runner.cjs#L555650-L555652) | `ArrowFunctionExpression` | sim | `args, deps, need` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:763040-763042](../../../../../../../reference/runtime/host-main.cjs#L763040-L763042) | 0 | 0 | 1 | 0 | 0 | 0 |

A ocorrência em host:763040 usa retorno implícito de arrow function.
| [evaluation:555650-555652](../../../../../../../reference/runtime/sand-eval-runner.cjs#L555650-L555652) | 0 | 0 | 1 | 0 | 0 | 0 |

A ocorrência em evaluation:555650 usa retorno implícito de arrow function.

### host:763040

Chamadas escritas diretamente neste corpo: `deps.state.disconnectChannel`, `need`.

SHA-256 do trecho: `0fbf8d83911490e9ec5f189b69d362e3859b620145f9e75204197e59bf212e23`.

### evaluation:555650

Chamadas escritas diretamente neste corpo: `deps.state.disconnectChannel`, `need`.

SHA-256 do trecho: `0fbf8d83911490e9ec5f189b69d362e3859b620145f9e75204197e59bf212e23`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
