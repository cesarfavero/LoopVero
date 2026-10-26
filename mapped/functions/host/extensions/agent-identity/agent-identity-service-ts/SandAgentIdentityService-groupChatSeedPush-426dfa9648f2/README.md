# `SandAgentIdentityService.groupChatSeedPush`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/agent-identity/agent-identity-service.ts` · [README do módulo](../../../../../../modules/host/extensions/agent-identity/agent-identity-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:496315-496323](../../../../../../../reference/runtime/host-main.cjs#L496315-L496323) | `method` | não | `agentId, local` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:496315-496323](../../../../../../../reference/runtime/host-main.cjs#L496315-L496323) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:496315

Chamadas escritas diretamente neste corpo: `groupChatPeopleTitleOver`, `isSandDefaultAgentName`, `local.name.trim`, `serverName.trim`, `this.roomPeopleNames.get`, `this.serverIdentities.get`.

SHA-256 do trecho: `74c60314343d7ed2ce49f4d4709f5857fe08382e83ad88b7a1caa8de9da13263`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
