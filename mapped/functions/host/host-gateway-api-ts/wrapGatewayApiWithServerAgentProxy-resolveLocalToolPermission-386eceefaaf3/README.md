# `wrapGatewayApiWithServerAgentProxy/resolveLocalToolPermission`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/gateway/README.md).

**Módulo:** `host/host-gateway-api.ts` · [README do módulo](../../../../modules/host/host-gateway-api-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:492138-492150](../../../../../reference/runtime/host-main.cjs#L492138-L492150) | `ArrowFunctionExpression` | sim | `permissionArgs` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:492138-492150](../../../../../reference/runtime/host-main.cjs#L492138-L492150) | 1 | 0 | 1 | 1 | 0 | 0 |

### host:492138

Chamadas escritas diretamente neste corpo: `act`, `api.resolveLocalToolPermission`, `proxy.isProxiedAgent`.

SHA-256 do trecho: `ff49dca5e81d5778e8cc3d34aa0a3d7c7895755a17aa97d3cb7b27874a178a0d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
