# `SandAgentIdentityService.mintRemoteFirst`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/agent-identity/agent-identity-service.ts` · [README do módulo](../../../../../../modules/host/extensions/agent-identity/agent-identity-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:495500-495559](../../../../../../../reference/runtime/host-main.cjs#L495500-L495559) | `method` | sim | `{     create,     agentId,     fields: fields3,     wantsTemporal,     avatarDataUrl   }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:495500-495559](../../../../../../../reference/runtime/host-main.cjs#L495500-L495559) | 6 | 0 | 2 | 1 | 3 | 0 |

### host:495500

Chamadas escritas diretamente neste corpo: `brandedOrInvalidId`, `defaultedName`, `invariant`, `logFields`, `new ConnectError`, `new SandBoxHarnessCreateRefusedError`, `this.deps.report`, `this.rememberServerIdentity`, `this.requestMint`, `this.rollbackRemoteAgent`, `this.serverAvatarVersions.set`, `toRemoteGrokBotAgent`.

Alvos de lançamento explícito: `ConnectError`, `SandBoxHarnessCreateRefusedError`.

SHA-256 do trecho: `02b519b2fb09587852101d763f0bf9980cbcf6f0bcad3d73486a72ca989540cc`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
