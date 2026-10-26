# `createHostGatewayApi/connectChannel`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/gateway/README.md).

**Módulo:** `host/host-gateway-api.ts` · [README do módulo](../../../../modules/host/host-gateway-api-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:492889-492898](../../../../../reference/runtime/host-main.cjs#L492889-L492898) | `ArrowFunctionExpression` | sim | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:492889-492898](../../../../../reference/runtime/host-main.cjs#L492889-L492898) | 3 | 0 | 0 | 1 | 2 | 0 |

### host:492889

Chamadas escritas diretamente neste corpo: `automations.getAgentChannels`, `fail`, `manager.connectChannel`.

Alvos de lançamento explícito: `fail`.

SHA-256 do trecho: `1678dbe616f97624f08bf7f8e85af9b967a42006656016d734a49d25cffa7298`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
