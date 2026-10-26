# `SandAgentSessionStore.constructor`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/session/agent-session.ts` · [README do módulo](../../../../../../modules/host/extensions/session/agent-session-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:723016-723090](../../../../../../../reference/runtime/host-main.cjs#L723016-L723090) | `method` | não | `reportHostLog, rootDir = getSandAgentsRootDir(), resolveUserTimeZone = () => void 0, createBlobWorkerPool = () => new AgentWorkerPool({ reportHostLog }), seams = {}` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:723016-723090](../../../../../../../reference/runtime/host-main.cjs#L723016-L723090) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:723016

Chamadas escritas diretamente neste corpo: `createSandDurableFileOwner`, `getConnectorSecretsRoot`, `new SandConnectorSecretStore`, `new SandSessionConversationState`, `new SandSessionMaterialization`.

Alvos de atribuição ou incremento: `this.connectorSecrets`, `this.conversationState`, `this.createAgentDb`, `this.materialization`, `this.reportHostLog`, `this.resolveUserTimeZone`, `this.rootDir`, `this.statIfExists`.

SHA-256 do trecho: `9dda1742589ea79fa18eab92cb935d45aa66f36922676fa9e1c073a7e143c01d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
