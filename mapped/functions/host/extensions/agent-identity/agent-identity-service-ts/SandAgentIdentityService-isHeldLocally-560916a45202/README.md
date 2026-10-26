# `SandAgentIdentityService.isHeldLocally`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/agent-identity/agent-identity-service.ts` · [README do módulo](../../../../../../modules/host/extensions/agent-identity/agent-identity-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:495854-495857](../../../../../../../reference/runtime/host-main.cjs#L495854-L495857) | `method` | não | `agentId, now` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:495854-495857](../../../../../../../reference/runtime/host-main.cjs#L495854-L495857) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:495854

Chamadas escritas diretamente neste corpo: `this.deletedAgents.has`, `this.pendingLocalMaterializationIds.has`, `this.serverConfirmedAt.get`.

SHA-256 do trecho: `8633994c9d34264f3af9359f70df2ee1a6d05230703c4a7f2e1dfb7adbe8400e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
