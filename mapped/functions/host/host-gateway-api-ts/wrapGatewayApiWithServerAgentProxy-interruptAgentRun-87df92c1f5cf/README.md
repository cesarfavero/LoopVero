# `wrapGatewayApiWithServerAgentProxy/interruptAgentRun`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/gateway/README.md).

**Módulo:** `host/host-gateway-api.ts` · [README do módulo](../../../../modules/host/host-gateway-api-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:492035-492043](../../../../../reference/runtime/host-main.cjs#L492035-L492043) | `ArrowFunctionExpression` | sim | `interruptArgs` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:492035-492043](../../../../../reference/runtime/host-main.cjs#L492035-L492043) | 2 | 0 | 1 | 2 | 0 | 0 |

### host:492035

Chamadas escritas diretamente neste corpo: `act`, `api.interruptAgentRun`, `proxy.isProxiedAgent`.

SHA-256 do trecho: `6df494e451632cdb7e2b52fb4a7298ca3cf87d150ab46706115ce25eec08ab32`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
