# `SandAgentIdentityService.reconcileAvatar`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/agent-identity/agent-identity-service.ts` · [README do módulo](../../../../../../modules/host/extensions/agent-identity/agent-identity-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:495905-495937](../../../../../../../reference/runtime/host-main.cjs#L495905-L495937) | `method` | sim | `agent, signal` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:495905-495937](../../../../../../../reference/runtime/host-main.cjs#L495905-L495937) | 5 | 0 | 4 | 7 | 0 | 1 |

### host:495905

Chamadas escritas diretamente neste corpo: `errorMessage`, `signal.throwIfAborted`, `this.applyRemoteAvatar`, `this.deps.fetchRemoteAvatarBytes`, `this.deps.getLocalAvatar`, `this.deps.log`, `this.locallyChangedAvatarIds.has`, `this.serverAvatarVersions.set`, `this.unresolvedAvatarBaselines.delete`, `this.unresolvedAvatarBaselines.set`, `this.unsupportedLocalAvatarBaselines.delete`.

Alvos de atribuição ou incremento: `bytes`.

SHA-256 do trecho: `1d2bdcbc9431123a33627eed520c9db9bbf58df42555dacea0d02897ce6be3d7`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
