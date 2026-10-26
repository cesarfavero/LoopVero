# `createHostGatewayApi/listBoxMcpServers`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/gateway/README.md).

**Módulo:** `host/host-gateway-api.ts` · [README do módulo](../../../../modules/host/host-gateway-api-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:493103-493114](../../../../../reference/runtime/host-main.cjs#L493103-L493114) | `ArrowFunctionExpression` | sim | `{ serverIdentifiers }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:493103-493114](../../../../../reference/runtime/host-main.cjs#L493103-L493114) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:493103

Chamadas escritas diretamente neste corpo: `.listBoxServers`, `deps.extensions.api`, `servers.map`.

SHA-256 do trecho: `b56e61f7ac514d1a29c884f50f45410c65a3efd6d5cf1396ffff77f7729e9313`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
