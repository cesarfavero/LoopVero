# `createUpdateAgentTool/execute`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/sand-agent-management-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-agent-management-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:757487-757501](../../../../../../../reference/runtime/host-main.cjs#L757487-L757501) | `ArrowFunctionExpression` | sim | `_ctx, args, m2` |
| [evaluation:543510-543524](../../../../../../../reference/runtime/sand-eval-runner.cjs#L543510-L543524) | `ArrowFunctionExpression` | sim | `_ctx, args, m2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:757487-757501](../../../../../../../reference/runtime/host-main.cjs#L757487-L757501) | 4 | 0 | 1 | 3 | 0 | 0 |
| [evaluation:543510-543524](../../../../../../../reference/runtime/sand-eval-runner.cjs#L543510-L543524) | 4 | 0 | 1 | 3 | 0 | 0 |

### host:757487

Chamadas escritas diretamente neste corpo: `m2.update`.

Alvos de atribuição ou incremento: `patch2.description`, `patch2.name`.

SHA-256 do trecho: `4685f3eaedf6a12a48471ffa6e075bffd802c1d77a1612773bf37106c3c3352c`.

### evaluation:543510

Chamadas escritas diretamente neste corpo: `m2.update`.

Alvos de atribuição ou incremento: `patch2.description`, `patch2.name`.

SHA-256 do trecho: `4685f3eaedf6a12a48471ffa6e075bffd802c1d77a1612773bf37106c3c3352c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
