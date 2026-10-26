# `extractToolInfo`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-engine/prompts/system.js` · [README do módulo](../../../../../modules/agent-engine/prompts/system-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:636365-636392](../../../../../../reference/runtime/host-main.cjs#L636365-L636392) | `FunctionDeclaration` | não | `toolSetHandle` |
| [evaluation:424418-424445](../../../../../../reference/runtime/sand-eval-runner.cjs#L424418-L424445) | `FunctionDeclaration` | não | `toolSetHandle` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:636365-636392](../../../../../../reference/runtime/host-main.cjs#L636365-L636392) | 2 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:424418-424445](../../../../../../reference/runtime/sand-eval-runner.cjs#L424418-L424445) | 2 | 1 | 0 | 1 | 0 | 0 |

### host:636365

Chamadas escritas diretamente neste corpo: `automationsCommunicationToolNames.push`, `isAutomationsPlatformCommunicationToolName`, `promptVisibleTools.find`, `promptVisibleTools.includes`, `tool.descriptionTokenPartsGenerator`, `toolSetHandle.getAllTools`, `toolSetHandle.getDescriptionProps`, `toolSetHandle.getStaticTools`, `toolSetHandle.hasTool`.

Alvos de atribuição ou incremento: `availableSubagentModelsDescription`, `availableSubagentTypesDescription`.

SHA-256 do trecho: `3e7c4e26bf8b3366919748c9b80b8222d56ce0c9a67506159d3f47433a9619f0`.

### evaluation:424418

Chamadas escritas diretamente neste corpo: `automationsCommunicationToolNames.push`, `isAutomationsPlatformCommunicationToolName`, `promptVisibleTools.find`, `promptVisibleTools.includes`, `tool.descriptionTokenPartsGenerator`, `toolSetHandle.getAllTools`, `toolSetHandle.getDescriptionProps`, `toolSetHandle.getStaticTools`, `toolSetHandle.hasTool`.

Alvos de atribuição ou incremento: `availableSubagentModelsDescription`, `availableSubagentTypesDescription`.

SHA-256 do trecho: `3e7c4e26bf8b3366919748c9b80b8222d56ce0c9a67506159d3f47433a9619f0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
