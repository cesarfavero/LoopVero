# `NoopInteractionListener.query`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `agent-core/interaction-listener.js` · [README do módulo](../../../../modules/agent-core/interaction-listener-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:255092-255148](../../../../../reference/runtime/sand-eval-runner.cjs#L255092-L255148) | `method` | sim | `_ctx, query2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:255092-255148](../../../../../reference/runtime/sand-eval-runner.cjs#L255092-L255148) | 13 | 0 | 0 | 11 | 1 | 0 |

### evaluation:255092

Chamadas escritas diretamente neste corpo: `Responses.askQuestion`, `Responses.connectScmRejected`, `Responses.createPlan`, `Responses.generateImageApproved`, `Responses.mcpAuthRejected`, `Responses.prManagement`, `Responses.replaceEnv`, `Responses.setupVmEnvironment`, `Responses.switchModeRejected`, `Responses.webFetchApproved`, `Responses.webSearchApproved`, `createPrManagementNotAvailableResult`, `new AskQuestionRejected`, `new AskQuestionResult`, `new CreatePlanResult`, `new CreatePlanSuccess`, `new Error`, `new ReplaceEnvFailure`, `new ReplaceEnvResult`, `new SetupVmEnvironmentResult`, `new SetupVmEnvironmentSuccess`.

Alvos de lançamento explícito: `Error`.

SHA-256 do trecho: `db5e84d357f25a47896b09603b797d73b53598c1b2c5e6df7b5d294845b89171`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
