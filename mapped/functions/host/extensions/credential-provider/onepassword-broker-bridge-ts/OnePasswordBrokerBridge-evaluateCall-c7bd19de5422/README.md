# `OnePasswordBrokerBridge.evaluateCall`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/credential-provider/onepassword-broker-bridge.ts` · [README do módulo](../../../../../../modules/host/extensions/credential-provider/onepassword-broker-bridge-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:550036-550138](../../../../../../../reference/runtime/host-main.cjs#L550036-L550138) | `method` | sim | `workerUrl, cdpPort, method, params, resultSchema, timeoutMs, agenticModeParams` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:550036-550138](../../../../../../../reference/runtime/host-main.cjs#L550036-L550138) | 13 | 0 | 1 | 5 | 0 | 1 |

### host:550036

Chamadas escritas diretamente neste corpo: `.filter`, `.loose`, `.optional`, `.safeParse`, `JSON.stringify`, `apiStateOf`, `apiStatePrelude`, `decodeJson`, `errorCodeSchema.safeParse`, `errorLogTag`, `evaluateOnTarget2`, `failureEnvelopeSchema.safeParse`, `literal`, `loggableExtensionText`, `namespaces.join`, `object`, `resultSchema.safeParse`, `this.options.log`, `unknown`, `withApi`.

Alvos de atribuição ou incremento: `raw`.

SHA-256 do trecho: `da880368c3888c22e88fe1885da25c29663dee8d7ac48e12d1613afcc4afcfdc`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
