# `SandAgentSessionStore.listAgentChannels`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/session/agent-session.ts` · [README do módulo](../../../../../../modules/host/extensions/session/agent-session-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:723643-723647](../../../../../../../reference/runtime/host-main.cjs#L723643-L723647) | `method` | não | `agentId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:723643-723647](../../../../../../../reference/runtime/host-main.cjs#L723643-L723647) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:723643

Chamadas escritas diretamente neste corpo: `.filter`, `.listConnections`, `this.openChannelStore`.

SHA-256 do trecho: `eb9a5ff0d98c2379caa22820b3ce54f03e4ca0c131b841637c4c8e4928d8d2e3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
