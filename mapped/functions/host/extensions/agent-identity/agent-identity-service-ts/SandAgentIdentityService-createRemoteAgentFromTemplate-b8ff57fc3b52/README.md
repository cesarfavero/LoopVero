# `SandAgentIdentityService.createRemoteAgentFromTemplate`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/agent-identity/agent-identity-service.ts` · [README do módulo](../../../../../../modules/host/extensions/agent-identity/agent-identity-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:495472-495492](../../../../../../../reference/runtime/host-main.cjs#L495472-L495492) | `method` | sim | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:495472-495492](../../../../../../../reference/runtime/host-main.cjs#L495472-L495492) | 2 | 0 | 1 | 1 | 0 | 0 |

### host:495472

Chamadas escritas diretamente neste corpo: `create`, `importedTemplateSetupForHarness`, `invariant`, `this.noteRoomPeople`, `this.rememberServerIdentity`, `this.serverAvatarVersions.set`, `toRemoteGrokBotAgent`.

SHA-256 do trecho: `11d85b8c94a26027aa103f14558fc88fa8e6c9614537eaa28ea972ca49d54f69`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
