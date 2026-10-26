# `SandAgentSessionStore.getAgentSkill`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/session/agent-session.ts` · [README do módulo](../../../../../../modules/host/extensions/session/agent-session-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:723604-723606](../../../../../../../reference/runtime/host-main.cjs#L723604-L723606) | `method` | sim | `agentId, workflowId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:723604-723606](../../../../../../../reference/runtime/host-main.cjs#L723604-L723606) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:723604

Chamadas escritas diretamente neste corpo: `.get`, `this.skillStoreFor`.

SHA-256 do trecho: `0cc62e6b301b78cfe07b287a91df1976588ca94ea3661e43a398e1f2df19cbd0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
