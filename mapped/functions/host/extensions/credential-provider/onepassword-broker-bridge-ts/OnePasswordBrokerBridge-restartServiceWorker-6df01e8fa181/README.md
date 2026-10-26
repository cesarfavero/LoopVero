# `OnePasswordBrokerBridge.restartServiceWorker`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/credential-provider/onepassword-broker-bridge.ts` · [README do módulo](../../../../../../modules/host/extensions/credential-provider/onepassword-broker-bridge-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:549664-549717](../../../../../../../reference/runtime/host-main.cjs#L549664-L549717) | `method` | sim | `cdpPort, workerUrl, afterStop` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:549664-549717](../../../../../../../reference/runtime/host-main.cjs#L549664-L549717) | 5 | 0 | 4 | 4 | 0 | 1 |

### host:549664

Chamadas escritas diretamente neste corpo: `.pathname.replace`, `afterStop`, `createDeadlinePolicy`, `deadline.run`, `errorLogTag`, `new URL`, `this.options.log`, `this.readExtensionId`, `this.wakePolling.start`.

SHA-256 do trecho: `618c03de8c95b25382f4990e8ce4557491a3b6fd5fbb320e3726ae0774c1cf0e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
