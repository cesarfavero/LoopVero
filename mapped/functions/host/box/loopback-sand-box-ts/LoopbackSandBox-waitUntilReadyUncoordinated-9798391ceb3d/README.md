# `LoopbackSandBox.waitUntilReadyUncoordinated`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `host/box/loopback-sand-box.ts` · [README do módulo](../../../../../modules/host/box/loopback-sand-box-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:679476-679533](../../../../../../reference/runtime/host-main.cjs#L679476-L679533) | `method` | sim | `ctx, endpoint, timeoutMs` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:679476-679533](../../../../../../reference/runtime/host-main.cjs#L679476-L679533) | 10 | 1 | 2 | 1 | 1 | 0 |

### host:679476

Chamadas escritas diretamente neste corpo: `Date.now`, `daemonPingReadinessState`, `new SandBoxDaemonUnreachableError`, `this.pingBoxClassified`, `this.startDaemonWatchdog`, `this.telemetry.reportDaemonPing`.

Alvos de atribuição ou incremento: `attempts2`, `last`, `this.daemonWatchdogState`, `this.daemonWatchdogUnreadyAttempts`, `this.daemonWatchdogUnreadySince`, `unreadySince`.

Alvos de lançamento explícito: `SandBoxDaemonUnreachableError`.

SHA-256 do trecho: `8c32966afad8b3399ebdbe526f947bc06f3c01b178e6520daafa722999bda1fe`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
