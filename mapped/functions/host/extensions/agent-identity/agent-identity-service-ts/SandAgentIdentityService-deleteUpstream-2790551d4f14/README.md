# `SandAgentIdentityService.deleteUpstream`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/agent-identity/agent-identity-service.ts` · [README do módulo](../../../../../../modules/host/extensions/agent-identity/agent-identity-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:496271-496307](../../../../../../../reference/runtime/host-main.cjs#L496271-L496307) | `method` | sim | `agentId, serverId, retries` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:496271-496307](../../../../../../../reference/runtime/host-main.cjs#L496271-L496307) | 5 | 0 | 1 | 3 | 0 | 0 |

### host:496271

Chamadas escritas diretamente neste corpo: `brandedOrInvalidId`, `errorLogTag`, `isUnansweredWrite`, `logFields`, `this.deps.report`, `this.locallyChangedAvatarIds.delete`, `this.mintedServerIds.delete`, `this.mintedServerIds.get`, `this.runWrite`, `this.serverAvatarVersions.delete`, `this.serverBindings.delete`, `this.serverIdentities.delete`, `this.unresolvedAvatarBaselines.delete`, `this.unsupportedLocalAvatarBaselines.delete`.

SHA-256 do trecho: `c8261c8f995bff239e9f8e41ee56af26657133fa465d84c2ffe423525628f61c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
