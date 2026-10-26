# `wrapGatewayApiWithServerAgentProxy/handBackForeverBox`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/gateway/README.md).

**Módulo:** `host/host-gateway-api.ts` · [README do módulo](../../../../modules/host/host-gateway-api-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:492184-492210](../../../../../reference/runtime/host-main.cjs#L492184-L492210) | `ArrowFunctionExpression` | sim | `handBackArgs` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:492184-492210](../../../../../reference/runtime/host-main.cjs#L492184-L492210) | 3 | 0 | 1 | 1 | 1 | 0 |

### host:492184

Chamadas escritas diretamente neste corpo: `act`, `api.handBackForeverBox`, `new ServerAgentProxyRefusedError`, `parseAgentId`, `proxy.activityOverlayFor`, `proxy.isProxiedAgent`.

Alvos de lançamento explícito: `ServerAgentProxyRefusedError`.

SHA-256 do trecho: `8a9ac0cf811362bb9f85bc75b899a3c1e549bb2fdd04880e4cc6b17e12ecab64`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
