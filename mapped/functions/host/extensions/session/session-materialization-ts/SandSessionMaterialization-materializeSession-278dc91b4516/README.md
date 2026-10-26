# `SandSessionMaterialization.materializeSession`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/session/session-materialization.ts` · [README do módulo](../../../../../../modules/host/extensions/session/session-materialization-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:721455-721516](../../../../../../../reference/runtime/host-main.cjs#L721455-L721516) | `method` | sim | `agentId, profile, origin, options2 = {}` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:721455-721516](../../../../../../../reference/runtime/host-main.cjs#L721455-L721516) | 7 | 1 | 1 | 1 | 0 | 0 |

### host:721455

Chamadas escritas diretamente neste corpo: `.createAgentStore`, `assertValidSandAgentId`, `automationStoreForDbPath`, `automations.upsert`, `channelStoreForDbPath`, `createSandProfile`, `db.set`, `db.setAgentOrigin`, `db.setAgentPurpose`, `getAgentDbPath`, `getSandSettingsPath`, `new AgentStore2`, `prepareAgentMediaStoreRoots`, `profile.avatarColor.trim`, `profile.avatarShape.trim`, `profile.description.trim`, `profile.name.trim`, `profile.title.trim`, `skillStoreForDbPath`, `this.blobStoreFor`, `this.host.createAgentDb`, `this.host.memory`, `writeSandSettingsFile`.

Alvos de atribuição ou incremento: `namedBy`.

SHA-256 do trecho: `a62b8aae0b2863ffb76d8a707f873051116d2462182cc20576202f9e8c0a12d8`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
