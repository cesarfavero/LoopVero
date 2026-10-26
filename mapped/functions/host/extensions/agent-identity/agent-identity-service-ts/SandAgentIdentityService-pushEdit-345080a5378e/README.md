# `SandAgentIdentityService.pushEdit`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/agent-identity/agent-identity-service.ts` · [README do módulo](../../../../../../modules/host/extensions/agent-identity/agent-identity-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:496189-496270](../../../../../../../reference/runtime/host-main.cjs#L496189-L496270) | `method` | sim | `agentId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:496189-496270](../../../../../../../reference/runtime/host-main.cjs#L496189-L496270) | 18 | 0 | 3 | 7 | 0 | 0 |

### host:496189

Chamadas escritas diretamente neste corpo: `brandedOrInvalidId`, `changedAvatarUpdate`, `createSandProfile`, `identitiesMatch`, `identityInput`, `logFields`, `readSandProfileFile`, `this.deps.getLocalAvatar`, `this.deps.report`, `this.groupChatSeedPush`, `this.keptServerTitles.delete`, `this.keptServerTitles.get`, `this.keptServerTitles.set`, `this.locallyChangedAvatarIds.delete`, `this.profilePathFor`, `this.rememberServerIdentity`, `this.runWrite`, `this.serverAvatarVersions.get`, `this.serverAvatarVersions.set`, `this.serverBindingOf`, `this.serverIdentities.get`, `this.stampFromRemote`, `this.unresolvedAvatarBaselines.delete`, `this.unresolvedAvatarBaselines.get`, `this.unsupportedLocalAvatarBaselines.delete`, `this.unsupportedLocalAvatarBaselines.has`, `this.unsupportedLocalAvatarBaselines.set`, `toRemoteGrokBotAgent`.

Alvos de atribuição ou incremento: `avatar`.

SHA-256 do trecho: `4976bb8823b6205f9327119f06f948bf4018d5f72a98d2fa2d31f01b9d2a34b3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
