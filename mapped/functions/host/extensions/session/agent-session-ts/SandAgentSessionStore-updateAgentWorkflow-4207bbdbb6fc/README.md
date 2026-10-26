# `SandAgentSessionStore.updateAgentWorkflow`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/session/agent-session.ts` · [README do módulo](../../../../../../modules/host/extensions/session/agent-session-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:723612-723616](../../../../../../../reference/runtime/host-main.cjs#L723612-L723616) | `method` | não | `agentId, workflowId, spec` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:723612-723616](../../../../../../../reference/runtime/host-main.cjs#L723612-L723616) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:723612

Chamadas escritas diretamente neste corpo: `limitSurfacedSkills`, `store.listAll`, `store.update`, `this.skillStoreFor`.

SHA-256 do trecho: `a868437c823d0e9fcdd1155d59de9c1eeb47a1f1072b0ac00637dfc28ee3c009`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
