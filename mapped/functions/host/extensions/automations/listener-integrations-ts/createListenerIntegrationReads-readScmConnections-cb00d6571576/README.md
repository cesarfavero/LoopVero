# `createListenerIntegrationReads/readScmConnections`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/automations/README.md).

**Módulo:** `host/extensions/automations/listener-integrations.ts` · [README do módulo](../../../../../../modules/host/extensions/automations/listener-integrations-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:505424-505453](../../../../../../../reference/runtime/host-main.cjs#L505424-L505453) | `ArrowFunctionExpression` | sim | `providers` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:505424-505453](../../../../../../../reference/runtime/host-main.cjs#L505424-L505453) | 1 | 0 | 1 | 2 | 0 | 0 |

### host:505424

Chamadas escritas diretamente neste corpo: `.getScmConnectionStatuses`, `dashboard`, `new GetScmConnectionStatusesRequest`, `new Map`, `new Set`, `providers.map`, `response.statuses.map`.

SHA-256 do trecho: `5f165073b2ae9578586104dba9a40bca8c691bc0ff826336c610c9e9ff329e81`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
