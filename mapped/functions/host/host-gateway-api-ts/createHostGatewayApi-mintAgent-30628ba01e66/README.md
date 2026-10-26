# `createHostGatewayApi/mintAgent`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/gateway/README.md).

**Módulo:** `host/host-gateway-api.ts` · [README do módulo](../../../../modules/host/host-gateway-api-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:492351-492402](../../../../../reference/runtime/host-main.cjs#L492351-L492402) | `ArrowFunctionExpression` | sim | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:492351-492402](../../../../../reference/runtime/host-main.cjs#L492351-L492402) | 13 | 0 | 3 | 1 | 1 | 1 |

### host:492351

Chamadas escritas diretamente neste corpo: `.analytics.markActive`, `.analytics.trackEvent`, `brandedId`, `deps.extensions.api`, `identity.createRemoteAgentFirst`, `identity.isWriteEnabled`, `identity.noteAgentMinted`, `identity.rollbackRemoteAgent`, `isSandAgentPurpose`, `manager.createAgent`, `sandAgentAnalyticsOrigin`, `sanitizeTemplateId`.

Alvos de atribuição ou incremento: `config2`, `createOptions`, `result`.

Alvos de lançamento explícito: `error64`.

SHA-256 do trecho: `0afac1f0075a22d686d2e0969d74109752337a73d9d84905fd0552eef5485ab1`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
