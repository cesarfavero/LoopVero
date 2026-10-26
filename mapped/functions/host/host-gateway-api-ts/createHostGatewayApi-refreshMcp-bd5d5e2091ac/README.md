# `createHostGatewayApi/refreshMcp`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/gateway/README.md).

**Módulo:** `host/host-gateway-api.ts` · [README do módulo](../../../../modules/host/host-gateway-api-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:493096-493102](../../../../../reference/runtime/host-main.cjs#L493096-L493102) | `ArrowFunctionExpression` | sim | `{ completion }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:493096-493102](../../../../../reference/runtime/host-main.cjs#L493096-L493102) | 1 | 0 | 2 | 1 | 0 | 0 |

### host:493096

Chamadas escritas diretamente neste corpo: `.management.restart`, `deps.extensions.api`, `deps.handleDesktopMcpAuthCompletion`.

SHA-256 do trecho: `5ab2cd1d1f9aa52f9c3c0f296451f0d30c4df68dd26f9bb52a4b1428f565e210`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
