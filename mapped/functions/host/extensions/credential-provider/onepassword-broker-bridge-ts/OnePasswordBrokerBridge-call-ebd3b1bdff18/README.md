# `OnePasswordBrokerBridge.call`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/credential-provider/onepassword-broker-bridge.ts` · [README do módulo](../../../../../../modules/host/extensions/credential-provider/onepassword-broker-bridge-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:549996-550035](../../../../../../../reference/runtime/host-main.cjs#L549996-L550035) | `method` | sim | `cdpPort, method, params, resultSchema, timeoutMs, agenticModeParams` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:549996-550035](../../../../../../../reference/runtime/host-main.cjs#L549996-L550035) | 9 | 0 | 5 | 8 | 0 | 0 |

### host:549996

Chamadas escritas diretamente neste corpo: `call`, `flagWatch.current.close`, `flagWatch.current.settle`, `missing`, `this.findServiceWorker`, `this.noteApiState`, `this.options.log`, `this.restartServiceWorker`, `this.restartedPorts.add`, `this.restartedPorts.has`, `unavailable`.

SHA-256 do trecho: `6d94c38fce4ebacff804fea1c8c83ba68cbabcfd3ca09999d9b4dfe040e528eb`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
