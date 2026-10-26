# `createHostGatewayApi/nudgeVoiceCall`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/gateway/README.md).

**Módulo:** `host/host-gateway-api.ts` · [README do módulo](../../../../modules/host/host-gateway-api-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:492800-492823](../../../../../reference/runtime/host-main.cjs#L492800-L492823) | `ArrowFunctionExpression` | sim | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:492800-492823](../../../../../reference/runtime/host-main.cjs#L492800-L492823) | 2 | 0 | 1 | 3 | 0 | 0 |

### host:492800

Chamadas escritas diretamente neste corpo: `deps.extensions.api`, `manager.nudgeVoiceCall`, `proxy.isProxiedAgent`, `voiceRelayKey`, `voiceRelaysInFlight.add`, `voiceRelaysInFlight.delete`, `voiceRelaysInFlight.has`.

SHA-256 do trecho: `a1406baf67da7611550f2702749801b2432bcaf84247e9b85c0b41f0c65d7bc3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
