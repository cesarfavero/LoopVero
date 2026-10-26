# `createTurnAgentComposition/buildAgentForRun/toolsGenerator`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/turn-agent-composition.ts` · [README do módulo](../../../../../modules/core/runner/turn-agent-composition-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:588330-588444](../../../../../../reference/runtime/sand-eval-runner.cjs#L588330-L588444) | `ArrowFunctionExpression` | não | `props` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:588330-588444](../../../../../../reference/runtime/sand-eval-runner.cjs#L588330-L588444) | 7 | 0 | 0 | 1 | 0 | 0 |

### evaluation:588330

Chamadas escritas diretamente neste corpo: `.some`, `bindFirstPartyToolMocks`, `createSandSummarizationHandler`, `createSkillTool`, `host.buildTurnTools`, `host.mcpConfigJsonForTurn`, `host.promptGlue.createToolResultTextWriter`, `lastReportedContextWindow`, `new Set`, `session.getModelId`, `subagentLaunch.registerReviewer`, `toolSetHandle.getDynamicTools`, `toolSetHandle.transformToolsInPlace`, `turnToolHost.gates.hackySymbolicToolCalls`, `turnToolHost.gates.skillSearch`, `turnTools.getAllTools`.

Alvos de atribuição ou incremento: `uploadFileListed`.

SHA-256 do trecho: `565a010778405cdd4aacab36bd2146fd945ab8e8efacd447ffcf65f0a1ae4b60`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
