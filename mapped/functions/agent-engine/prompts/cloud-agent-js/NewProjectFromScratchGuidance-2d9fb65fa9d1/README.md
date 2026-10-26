# `NewProjectFromScratchGuidance`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-engine/prompts/cloud-agent.js` · [README do módulo](../../../../../modules/agent-engine/prompts/cloud-agent-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:636179-636183](../../../../../../reference/runtime/host-main.cjs#L636179-L636183) | `FunctionDeclaration` | não | `{ agentPreviewCard = false, preferMarkdownPreviewLink = false, skipPreviewScreenshot = false, agentPreviewCardXmllint = false, appsPublishPill = false, seededEmptyRoot = false, sendMessageToolName } = {}` |
| [evaluation:424235-424239](../../../../../../reference/runtime/sand-eval-runner.cjs#L424235-L424239) | `FunctionDeclaration` | não | `{ agentPreviewCard = false, preferMarkdownPreviewLink = false, skipPreviewScreenshot = false, agentPreviewCardXmllint = false, appsPublishPill = false, seededEmptyRoot = false, sendMessageToolName } = {}` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:636179-636183](../../../../../../reference/runtime/host-main.cjs#L636179-L636183) | 10 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:424235-424239](../../../../../../reference/runtime/sand-eval-runner.cjs#L424235-L424239) | 10 | 0 | 0 | 1 | 0 | 0 |

### host:636179

Chamadas escritas diretamente neste corpo: `jsx`, `jsxs`.

SHA-256 do trecho: `24cec035d91a6afcd3ece304f96752ce1420cf383434f858c24f6da747a83b02`.

### evaluation:424235

Chamadas escritas diretamente neste corpo: `jsx`, `jsxs`.

SHA-256 do trecho: `24cec035d91a6afcd3ece304f96752ce1420cf383434f858c24f6da747a83b02`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
