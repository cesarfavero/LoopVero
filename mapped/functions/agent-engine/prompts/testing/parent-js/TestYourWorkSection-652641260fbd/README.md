# `TestYourWorkSection`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-engine/prompts/testing/parent.js` · [README do módulo](../../../../../../modules/agent-engine/prompts/testing/parent-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:636333-636335](../../../../../../../reference/runtime/host-main.cjs#L636333-L636335) | `FunctionDeclaration` | não | `{ computerUseSubagentName, additionalInstructions, isCodexModel, isOpus, trimmed = false, stepNumber, planStepNumber }` |
| [evaluation:424386-424388](../../../../../../../reference/runtime/sand-eval-runner.cjs#L424386-L424388) | `FunctionDeclaration` | não | `{ computerUseSubagentName, additionalInstructions, isCodexModel, isOpus, trimmed = false, stepNumber, planStepNumber }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:636333-636335](../../../../../../../reference/runtime/host-main.cjs#L636333-L636335) | 3 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:424386-424388](../../../../../../../reference/runtime/sand-eval-runner.cjs#L424386-L424388) | 3 | 0 | 0 | 1 | 0 | 0 |

### host:636333

Chamadas escritas diretamente neste corpo: `additionalInstructions.map`, `jsx`, `jsxs`.

SHA-256 do trecho: `2cfeddf9b0c169823ec17500b5303e52ec70a2bc5515c27c7bea85b4993e4db8`.

### evaluation:424386

Chamadas escritas diretamente neste corpo: `additionalInstructions.map`, `jsx`, `jsxs`.

SHA-256 do trecho: `2cfeddf9b0c169823ec17500b5303e52ec70a2bc5515c27c7bea85b4993e4db8`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
