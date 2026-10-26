# `SandAgentSessionStore.removeAgentSkill`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/session/agent-session.ts` · [README do módulo](../../../../../../modules/host/extensions/session/agent-session-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:723617-723621](../../../../../../../reference/runtime/host-main.cjs#L723617-L723621) | `method` | não | `agentId, workflowId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:723617-723621](../../../../../../../reference/runtime/host-main.cjs#L723617-L723621) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:723617

Chamadas escritas diretamente neste corpo: `limitSurfacedSkills`, `store.listAll`, `store.remove`, `this.skillStoreFor`.

SHA-256 do trecho: `e467e50e7994aca2a692b129084d17dc63859dbd965c1613369349f28a88b302`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
