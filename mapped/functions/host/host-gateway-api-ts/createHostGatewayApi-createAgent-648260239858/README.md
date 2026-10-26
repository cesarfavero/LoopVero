# `createHostGatewayApi/createAgent`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/gateway/README.md).

**Módulo:** `host/host-gateway-api.ts` · [README do módulo](../../../../modules/host/host-gateway-api-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:492587-492602](../../../../../reference/runtime/host-main.cjs#L492587-L492602) | `ArrowFunctionExpression` | não | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:492587-492602](../../../../../reference/runtime/host-main.cjs#L492587-L492602) | 3 | 1 | 0 | 3 | 0 | 0 |

### host:492587

Chamadas escritas diretamente neste corpo: `.catch`, `createAgentMintsByNonce.delete`, `createAgentMintsByNonce.get`, `createAgentMintsByNonce.keys`, `createAgentMintsByNonce.set`, `mintAgent`.

SHA-256 do trecho: `b2ea16a25f605442748de9b7638ca4eedea9ccb404283f59804e1225e9f51df7`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
