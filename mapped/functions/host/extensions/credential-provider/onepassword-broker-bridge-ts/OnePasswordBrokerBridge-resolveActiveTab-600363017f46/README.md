# `OnePasswordBrokerBridge.resolveActiveTab`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/credential-provider/onepassword-broker-bridge.ts` · [README do módulo](../../../../../../modules/host/extensions/credential-provider/onepassword-broker-bridge-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:550190-550227](../../../../../../../reference/runtime/host-main.cjs#L550190-L550227) | `method` | sim | `cdpPort` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:550190-550227](../../../../../../../reference/runtime/host-main.cjs#L550190-L550227) | 5 | 0 | 2 | 7 | 0 | 1 |

### host:550190

Chamadas escritas diretamente neste corpo: `.int`, `.max`, `.nonnegative`, `.nullable`, `.safeParse`, `array`, `decodeJson`, `errorLogTag`, `evaluateOnTarget2`, `number2`, `object`, `string2`, `this.findServiceWorker`, `this.options.log`.

Alvos de atribuição ou incremento: `raw`.

SHA-256 do trecho: `a85b35c34f5d1a9d0098c647d5dad444f32164028164b9cfed1fb70e45e70f98`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
