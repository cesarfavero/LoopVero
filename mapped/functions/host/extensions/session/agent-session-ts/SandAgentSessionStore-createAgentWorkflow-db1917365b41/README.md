# `SandAgentSessionStore.createAgentWorkflow`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/session/agent-session.ts` · [README do módulo](../../../../../../modules/host/extensions/session/agent-session-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:723607-723611](../../../../../../../reference/runtime/host-main.cjs#L723607-L723611) | `method` | não | `agentId, spec` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:723607-723611](../../../../../../../reference/runtime/host-main.cjs#L723607-L723611) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:723607

Chamadas escritas diretamente neste corpo: `limitSurfacedSkills`, `store.create`, `store.listAll`, `this.skillStoreFor`.

SHA-256 do trecho: `04486352201ff600dac510eb80a48338598fde4a42622bb05a7df56c46d5bda6`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
