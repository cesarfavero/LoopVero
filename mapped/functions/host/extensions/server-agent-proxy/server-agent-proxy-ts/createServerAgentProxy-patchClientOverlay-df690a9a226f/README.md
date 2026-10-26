# `createServerAgentProxy/patchClientOverlay`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/server-agent-proxy/server-agent-proxy.ts` · [README do módulo](../../../../../../modules/host/extensions/server-agent-proxy/server-agent-proxy-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:714611-714616](../../../../../../../reference/runtime/host-main.cjs#L714611-L714616) | `ArrowFunctionExpression` | não | `agentId, patch2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:714611-714616](../../../../../../../reference/runtime/host-main.cjs#L714611-L714616) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:714611

Chamadas escritas diretamente neste corpo: `activityOverlays.get`, `activityOverlays.set`, `boundRunStateChanged`, `patch2`.

SHA-256 do trecho: `d36822545d8c5b3be70867d187ed176ef7bae9f7c08fc7bc1eae1db1edb85508`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
