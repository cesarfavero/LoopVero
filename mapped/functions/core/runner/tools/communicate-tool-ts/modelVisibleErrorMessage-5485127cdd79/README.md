# `modelVisibleErrorMessage`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/communicate-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/communicate-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:725067-725071](../../../../../../../reference/runtime/host-main.cjs#L725067-L725071) | `FunctionDeclaration` | não | `ctx, toolName, error64, infrastructureErrorMessage` |
| [evaluation:480038-480042](../../../../../../../reference/runtime/sand-eval-runner.cjs#L480038-L480042) | `FunctionDeclaration` | não | `ctx, toolName, error63, infrastructureErrorMessage` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:725067-725071](../../../../../../../reference/runtime/host-main.cjs#L725067-L725071) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:480038-480042](../../../../../../../reference/runtime/sand-eval-runner.cjs#L480038-L480042) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:725067

Chamadas escritas diretamente neste corpo: `classifyToolError`, `errorMessageWithErrorDetailsReason`, `recordToolCallError`.

SHA-256 do trecho: `ff78ef9badd1d8e43991cef75fd294d5a5cd6878095ea2ee92533af98d66b790`.

### evaluation:480038

Chamadas escritas diretamente neste corpo: `classifyToolError`, `errorMessageWithErrorDetailsReason`, `recordToolCallError`.

SHA-256 do trecho: `d1bc2a9554c2823ccbd4c64b791e629606046adcce723de8595caa9bd4df3e16`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
