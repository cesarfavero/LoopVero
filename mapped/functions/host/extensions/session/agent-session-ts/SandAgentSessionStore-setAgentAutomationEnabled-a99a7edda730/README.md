# `SandAgentSessionStore.setAgentAutomationEnabled`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/session/agent-session.ts` · [README do módulo](../../../../../../modules/host/extensions/session/agent-session-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:723578-723582](../../../../../../../reference/runtime/host-main.cjs#L723578-L723582) | `method` | não | `agentId, automationId, isEnabled` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:723578-723582](../../../../../../../reference/runtime/host-main.cjs#L723578-L723582) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:723578

Chamadas escritas diretamente neste corpo: `.slice`, `store.list`, `store.setEnabled`, `this.automationStoreFor`.

SHA-256 do trecho: `b745e99d30cb56cb341410c4e0935de8791669aa7a137242d2da33648215c6c2`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
