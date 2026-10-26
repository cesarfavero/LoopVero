# `routine.delete`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/sand-state-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-state-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:763000-763005](../../../../../../../reference/runtime/host-main.cjs#L763000-L763005) | `ArrowFunctionExpression` | sim | `args, deps, need` |
| [evaluation:555610-555615](../../../../../../../reference/runtime/sand-eval-runner.cjs#L555610-L555615) | `ArrowFunctionExpression` | sim | `args, deps, need` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:763000-763005](../../../../../../../reference/runtime/host-main.cjs#L763000-L763005) | 1 | 0 | 1 | 2 | 0 | 0 |
| [evaluation:555610-555615](../../../../../../../reference/runtime/sand-eval-runner.cjs#L555610-L555615) | 1 | 0 | 1 | 2 | 0 | 0 |

### host:763000

Chamadas escritas diretamente neste corpo: `deps.state.deleteAutomation`, `need`, `refuseUnreviewableAutomationRemoval`.

SHA-256 do trecho: `4399ff266139322400f6334b5fb303c5ac847d700cfb50e19de5710555852e77`.

### evaluation:555610

Chamadas escritas diretamente neste corpo: `deps.state.deleteAutomation`, `need`, `refuseUnreviewableAutomationRemoval`.

SHA-256 do trecho: `4399ff266139322400f6334b5fb303c5ac847d700cfb50e19de5710555852e77`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
