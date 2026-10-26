# `start/onDiscoveryFailed`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `host/extensions/mcp/extension.ts` · [README do módulo](../../../../../../modules/host/extensions/mcp/extension-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:702487-702487](../../../../../../../reference/runtime/host-main.cjs#L702487-L702487) | `ArrowFunctionExpression` | não | `failure3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:702487-702487](../../../../../../../reference/runtime/host-main.cjs#L702487-L702487) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em host:702487 usa retorno implícito de arrow function.

### host:702487

Chamadas escritas diretamente neste corpo: `context2.deps.telemetry.logs.reportMcpDiscoveryFailed`.

SHA-256 do trecho: `8672940a7e747ccb8ad4444371821643ecb50f3310ac8ae59bbba9f76319d568`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
