# `createServerAgentProxy/getAgentTranscriptTail`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/server-agent-proxy/server-agent-proxy.ts` · [README do módulo](../../../../../../modules/host/extensions/server-agent-proxy/server-agent-proxy-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:714902-714905](../../../../../../../reference/runtime/host-main.cjs#L714902-L714905) | `ArrowFunctionExpression` | não | `args, signal` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:714902-714905](../../../../../../../reference/runtime/host-main.cjs#L714902-L714905) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:714902

Chamadas escritas diretamente neste corpo: `ensureTailStarted`, `tail.getAgentTranscriptTail`.

SHA-256 do trecho: `11ed92d075f528e0bbbf9c5b50dbb2d8eff96d4c02894c6d159b6055a157e405`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
