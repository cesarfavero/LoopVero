# `createHostGatewayApi/resolveConnectorGrant`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/gateway/README.md).

**Módulo:** `host/host-gateway-api.ts` · [README do módulo](../../../../modules/host/host-gateway-api-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:492504-492507](../../../../../reference/runtime/host-main.cjs#L492504-L492507) | `ArrowFunctionExpression` | sim | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:492504-492507](../../../../../reference/runtime/host-main.cjs#L492504-L492507) | 0 | 0 | 0 | 0 | 1 | 0 |

### host:492504

Chamadas escritas diretamente neste corpo: `.analytics.markActive`, `deps.extensions.api`, `fail`.

Alvos de lançamento explícito: `fail`.

SHA-256 do trecho: `506377fecfe7f3a704f8d1baed2214038ec592fbc6d6097d0a446262b6bbed22`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
