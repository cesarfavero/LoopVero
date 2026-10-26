# `createServerAgentProxy/createTransport`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/server-agent-proxy/server-agent-proxy.ts` · [README do módulo](../../../../../../modules/host/extensions/server-agent-proxy/server-agent-proxy-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:714657-714667](../../../../../../../reference/runtime/host-main.cjs#L714657-L714667) | `ArrowFunctionExpression` | não | `{ baseUrl, interceptors }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:714657-714667](../../../../../../../reference/runtime/host-main.cjs#L714657-L714667) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em host:714657 usa retorno implícito de arrow function.

### host:714657

Chamadas escritas diretamente neste corpo: `createConnectTransport`, `createIdleDestroyingAgent`.

SHA-256 do trecho: `4e2c21fcede0e6bef8aa1f3fc338d82db6463501f5575326045384b89398db8c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
