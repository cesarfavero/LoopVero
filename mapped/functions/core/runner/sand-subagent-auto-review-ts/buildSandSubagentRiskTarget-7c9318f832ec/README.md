# `buildSandSubagentRiskTarget`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/subagents/README.md).

**Módulo:** `core/runner/sand-subagent-auto-review.ts` · [README do módulo](../../../../../modules/core/runner/sand-subagent-auto-review-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:780785-780804](../../../../../../reference/runtime/host-main.cjs#L780785-L780804) | `FunctionDeclaration` | não | `args` |
| [evaluation:581133-581152](../../../../../../reference/runtime/sand-eval-runner.cjs#L581133-L581152) | `FunctionDeclaration` | não | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:780785-780804](../../../../../../reference/runtime/host-main.cjs#L780785-L780804) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:581133-581152](../../../../../../reference/runtime/sand-eval-runner.cjs#L581133-L581152) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:780785

Chamadas escritas diretamente neste corpo: `buildProjectPermissionsContext`, `new SmartModeRiskTarget`, `structFromRecord`.

SHA-256 do trecho: `fc098493c6c2b9a2b44a44f9f9dc278ee5049e08c5d407298552f999cbd9c23e`.

### evaluation:581133

Chamadas escritas diretamente neste corpo: `buildProjectPermissionsContext`, `new SmartModeRiskTarget`, `structFromRecord`.

SHA-256 do trecho: `fc098493c6c2b9a2b44a44f9f9dc278ee5049e08c5d407298552f999cbd9c23e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
