# `SandAgentIdentityService.runDeleteFlight`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/agent-identity/agent-identity-service.ts` · [README do módulo](../../../../../../modules/host/extensions/agent-identity/agent-identity-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:495663-495707](../../../../../../../reference/runtime/host-main.cjs#L495663-L495707) | `method` | sim | `agentIds` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:495663-495707](../../../../../../../reference/runtime/host-main.cjs#L495663-L495707) | 4 | 3 | 2 | 2 | 1 | 2 |

### host:495663

Chamadas escritas diretamente neste corpo: `agentIds.filter`, `confirmed.join`, `errorMessage`, `intents.push`, `new Map`, `this.deletedAgents.forget`, `this.deletedAgents.has`, `this.deletedAgents.isDone`, `this.deletedAgents.record`, `this.deletedAgents.settle`, `this.deps.deleteLocalAgents`, `this.deps.log`, `this.removeDeletedAgentDirs`, `this.runSerialized`, `this.serverBindings.get`, `verdicts.set`.

Alvos de atribuição ou incremento: `local`.

Alvos de lançamento explícito: `error64`.

SHA-256 do trecho: `fc7e0433fae8c8221cb35e9b57bcbfd48a96fd953dc0eab62f475fd970f0ea75`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
