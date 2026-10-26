# `SandAgentIdentityService.dropTemporalMirrors`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/agent-identity/agent-identity-service.ts` · [README do módulo](../../../../../../modules/host/extensions/agent-identity/agent-identity-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:495858-495882](../../../../../../../reference/runtime/host-main.cjs#L495858-L495882) | `method` | sim | `candidateIds` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:495858-495882](../../../../../../../reference/runtime/host-main.cjs#L495858-L495882) | 1 | 2 | 1 | 2 | 0 | 1 |

### host:495858

Chamadas escritas diretamente neste corpo: `candidateIds.filter`, `logFields`, `this.clock.monotonicNow`, `this.deps.deleteLocalAgents`, `this.deps.log`, `this.deps.onTemporalMirrorsDropped`, `this.deps.report`, `this.droppedUnlistedIds.add`, `this.reportDropFailure`, `this.serverBindings.delete`, `unlisted.join`.

SHA-256 do trecho: `436e5c3510b8e6128673b0f1a0348c5cf91747ed0ac0c84561d6b6b0204345fb`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
