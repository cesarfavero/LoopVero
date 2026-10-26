# `avatar.set`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/sand-state-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-state-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:763043-763043](../../../../../../../reference/runtime/host-main.cjs#L763043-L763043) | `ArrowFunctionExpression` | sim | `args, deps, need` |
| [evaluation:555653-555653](../../../../../../../reference/runtime/sand-eval-runner.cjs#L555653-L555653) | `ArrowFunctionExpression` | sim | `args, deps, need` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:763043-763043](../../../../../../../reference/runtime/host-main.cjs#L763043-L763043) | 0 | 0 | 1 | 0 | 0 | 0 |

A ocorrência em host:763043 usa retorno implícito de arrow function.
| [evaluation:555653-555653](../../../../../../../reference/runtime/sand-eval-runner.cjs#L555653-L555653) | 0 | 0 | 1 | 0 | 0 | 0 |

A ocorrência em evaluation:555653 usa retorno implícito de arrow function.

### host:763043

Chamadas escritas diretamente neste corpo: `deps.state.setAvatar`, `need`.

SHA-256 do trecho: `a0de9a46c03d2ac71e2e852e70b20dfe671c0f44fef7c778cd789adb1d1ce2bf`.

### evaluation:555653

Chamadas escritas diretamente neste corpo: `deps.state.setAvatar`, `need`.

SHA-256 do trecho: `a0de9a46c03d2ac71e2e852e70b20dfe671c0f44fef7c778cd789adb1d1ce2bf`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
