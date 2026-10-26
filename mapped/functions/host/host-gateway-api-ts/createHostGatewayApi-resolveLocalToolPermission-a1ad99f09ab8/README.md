# `createHostGatewayApi/resolveLocalToolPermission`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/gateway/README.md).

**Módulo:** `host/host-gateway-api.ts` · [README do módulo](../../../../modules/host/host-gateway-api-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:492500-492503](../../../../../reference/runtime/host-main.cjs#L492500-L492503) | `ArrowFunctionExpression` | sim | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:492500-492503](../../../../../reference/runtime/host-main.cjs#L492500-L492503) | 0 | 0 | 1 | 0 | 0 | 0 |

### host:492500

Chamadas escritas diretamente neste corpo: `.analytics.markActive`, `deps.extensions.api`, `localToolPermission2.resolveAsk`.

SHA-256 do trecho: `1fe7a38cfe36749da707170471497c2d0c449ef7475da9bb4cb26f91a377f129`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
