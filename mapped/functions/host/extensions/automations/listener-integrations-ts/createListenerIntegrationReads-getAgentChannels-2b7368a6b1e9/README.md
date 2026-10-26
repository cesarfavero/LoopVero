# `createListenerIntegrationReads/getAgentChannels`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/automations/README.md).

**Módulo:** `host/extensions/automations/listener-integrations.ts` · [README do módulo](../../../../../../modules/host/extensions/automations/listener-integrations-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:505566-505573](../../../../../../../reference/runtime/host-main.cjs#L505566-L505573) | `FunctionExpression` | sim | `agentId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:505566-505573](../../../../../../../reference/runtime/host-main.cjs#L505566-L505573) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:505566

Chamadas escritas diretamente neste corpo: `CONNECTOR_MANIFESTS.map`, `connections.filter`, `deps.transcript.getAgentChannels`, `new Set`.

SHA-256 do trecho: `a79fa9a7f04b7405059d13c407ec004711e16e337b25ff2b0b0519aa56b57927`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
