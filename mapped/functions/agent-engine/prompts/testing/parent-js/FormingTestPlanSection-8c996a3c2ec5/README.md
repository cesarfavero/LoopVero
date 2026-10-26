# `FormingTestPlanSection`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-engine/prompts/testing/parent.js` · [README do módulo](../../../../../../modules/agent-engine/prompts/testing/parent-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:636327-636329](../../../../../../../reference/runtime/host-main.cjs#L636327-L636329) | `FunctionDeclaration` | não | `{ computerUseSubagentName, isCodexModel, stepNumber, trimmed = false }` |
| [evaluation:424380-424382](../../../../../../../reference/runtime/sand-eval-runner.cjs#L424380-L424382) | `FunctionDeclaration` | não | `{ computerUseSubagentName, isCodexModel, stepNumber, trimmed = false }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:636327-636329](../../../../../../../reference/runtime/host-main.cjs#L636327-L636329) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:424380-424382](../../../../../../../reference/runtime/sand-eval-runner.cjs#L424380-L424382) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:636327

Chamadas escritas diretamente neste corpo: `jsx`, `jsxs`.

SHA-256 do trecho: `78519c6dd7f663b5da6e0b40e9f246caefd360c373ea67375693b4fe2fc3603e`.

### evaluation:424380

Chamadas escritas diretamente neste corpo: `jsx`, `jsxs`.

SHA-256 do trecho: `78519c6dd7f663b5da6e0b40e9f246caefd360c373ea67375693b4fe2fc3603e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
