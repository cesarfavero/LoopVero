# `createHostGatewayApi/writeLocalProfile`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/gateway/README.md).

**Módulo:** `host/host-gateway-api.ts` · [README do módulo](../../../../modules/host/host-gateway-api-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:492441-492457](../../../../../reference/runtime/host-main.cjs#L492441-L492457) | `ArrowFunctionExpression` | sim | `id, write4` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:492441-492457](../../../../../reference/runtime/host-main.cjs#L492441-L492457) | 2 | 0 | 1 | 1 | 2 | 0 |

### host:492441

Chamadas escritas diretamente neste corpo: `deps.extensions.api`, `identity.adoptServerAgentById`, `identity.expectLocalEdit`, `new ServerAgentProxyRefusedError`, `new ServerAgentProxyUnavailableError`.

Alvos de lançamento explícito: `ServerAgentProxyRefusedError`, `ServerAgentProxyUnavailableError`.

SHA-256 do trecho: `f8e067f1ce545522f26441e9a2a3a75e480db9ecc7f054be8ab675c392f11e69`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
