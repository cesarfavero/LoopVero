# `cloudAgentConfirmVerdict`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/cloud-agents/cloud-agent-confirm-policy.ts` · [README do módulo](../../../../../modules/core/cloud-agents/cloud-agent-confirm-policy-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:566821-566856](../../../../../../reference/runtime/sand-eval-runner.cjs#L566821-L566856) | `FunctionDeclaration` | sim | `args, deps` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:566821-566856](../../../../../../reference/runtime/sand-eval-runner.cjs#L566821-L566856) | 9 | 0 | 2 | 8 | 0 | 0 |

### evaluation:566821

Chamadas escritas diretamente neste corpo: `DESTRUCTIVE_ACTIONS.has`, `OWNED_PROJECT_ACTIONS.has`, `OWNER_ONLY_ACTIONS.has`, `USER_ONLY_ACTIONS.has`, `args.agent_id.trim`, `deps.api.get`, `deps.launchedIds.has`, `formatCloudAgentNotOwnedMessage`, `formatCloudAgentProjectArchiveMessage`, `formatCloudAgentUnknownKindArchiveMessage`, `readsAsOwnedProject`, `refused2`.

SHA-256 do trecho: `bc336f324bfe27a18ec54eb1b0c29ae649276e7df5c511dcb99b8d89b0e3c395`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
