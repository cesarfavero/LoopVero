# `createServerAgentProxy/openAgentTail`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/server-agent-proxy/server-agent-proxy.ts` · [README do módulo](../../../../../../modules/host/extensions/server-agent-proxy/server-agent-proxy-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:714898-714901](../../../../../../../reference/runtime/host-main.cjs#L714898-L714901) | `ArrowFunctionExpression` | não | `args, signal` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:714898-714901](../../../../../../../reference/runtime/host-main.cjs#L714898-L714901) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:714898

Chamadas escritas diretamente neste corpo: `ensureTailStarted`, `tail.openAgentTail`.

SHA-256 do trecho: `5574e56e181783b00098e14260b46f89c68ec23850bf72d62941626ebd387ba7`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
