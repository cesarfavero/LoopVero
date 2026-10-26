# `SandAgentIdentityService.mint`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/agent-identity/agent-identity-service.ts` · [README do módulo](../../../../../../modules/host/extensions/agent-identity/agent-identity-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:496048-496178](../../../../../../../reference/runtime/host-main.cjs#L496048-L496178) | `method` | sim | `agentId, createIntent` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:496048-496178](../../../../../../../reference/runtime/host-main.cjs#L496048-L496178) | 12 | 0 | 4 | 12 | 0 | 0 |

### host:496048

Chamadas escritas diretamente neste corpo: `brandedOrInvalidId`, `identityInput`, `logFields`, `readSandProfileFile`, `readSandProfileServerId`, `this.deletedAgents.has`, `this.deps.getCreationPolicy`, `this.deps.log`, `this.deps.report`, `this.mintedServerIds.set`, `this.profilePathFor`, `this.readLocalAvatarForUpload`, `this.rememberLocalAvatarIfItDoesNotMatchRow`, `this.runWrite`, `this.stampFromRemote`, `toRemoteGrokBotAgent`, `withGeneratedMark`.

SHA-256 do trecho: `63aa1ea1d88561866fcd4c88d6ed5cae5996871ad6ec56ee67fddead4294e047`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
