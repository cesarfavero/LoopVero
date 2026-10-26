# `SandAgentSessionStore.createAgentAutomation`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/session/agent-session.ts` · [README do módulo](../../../../../../modules/host/extensions/session/agent-session-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:723583-723587](../../../../../../../reference/runtime/host-main.cjs#L723583-L723587) | `method` | não | `agentId, spec, provenance = "user"` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:723583-723587](../../../../../../../reference/runtime/host-main.cjs#L723583-L723587) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:723583

Chamadas escritas diretamente neste corpo: `.slice`, `store.list`, `store.upsert`, `this.automationStoreFor`.

SHA-256 do trecho: `798b1fb24258d2e9618bf89d987123683a4928e8dcf40a60d3befae3ec795287`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
