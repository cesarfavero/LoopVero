# `evaluateOnTarget2`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/credential-provider/onepassword-broker-bridge.ts` · [README do módulo](../../../../../../modules/host/extensions/credential-provider/onepassword-broker-bridge-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:549435-549473](../../../../../../../reference/runtime/host-main.cjs#L549435-L549473) | `FunctionDeclaration` | sim | `webSocketDebuggerUrl, expression, timeoutMs, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:549435-549473](../../../../../../../reference/runtime/host-main.cjs#L549435-L549473) | 4 | 0 | 1 | 1 | 3 | 0 |

### host:549435

Chamadas escritas diretamente neste corpo: `new BrokerCdpError`, `options2.log`, `workerContextPolling.start`.

Alvos de lançamento explícito: `BrokerCdpError`, `outcome.error`, `stop.cause`.

SHA-256 do trecho: `e527ba96d3cd711f7b4e51b58d978c98193c77f319cea273af9def4186012320`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
