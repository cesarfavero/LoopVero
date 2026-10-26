# `applySandStateUpdate/need`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/sand-state-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-state-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:763060-763065](../../../../../../../reference/runtime/host-main.cjs#L763060-L763065) | `ArrowFunctionExpression` | não | `value, field` |
| [evaluation:555670-555675](../../../../../../../reference/runtime/sand-eval-runner.cjs#L555670-L555675) | `ArrowFunctionExpression` | não | `value, field` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:763060-763065](../../../../../../../reference/runtime/host-main.cjs#L763060-L763065) | 1 | 0 | 0 | 1 | 1 | 0 |
| [evaluation:555670-555675](../../../../../../../reference/runtime/sand-eval-runner.cjs#L555670-L555675) | 1 | 0 | 0 | 1 | 1 | 0 |

### host:763060

Chamadas escritas diretamente neste corpo: `new SandToolInputError`.

Alvos de lançamento explícito: `SandToolInputError`.

SHA-256 do trecho: `85add39b60c41355d8e8f758e35728ebe6e5ad532dc8f8f4dff76beb494d1b5a`.

### evaluation:555670

Chamadas escritas diretamente neste corpo: `new SandToolInputError`.

Alvos de lançamento explícito: `SandToolInputError`.

SHA-256 do trecho: `85add39b60c41355d8e8f758e35728ebe6e5ad532dc8f8f4dff76beb494d1b5a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
