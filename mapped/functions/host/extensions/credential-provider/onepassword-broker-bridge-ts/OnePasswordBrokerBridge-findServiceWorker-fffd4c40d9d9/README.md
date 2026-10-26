# `OnePasswordBrokerBridge.findServiceWorker`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/credential-provider/onepassword-broker-bridge.ts` · [README do módulo](../../../../../../modules/host/extensions/credential-provider/onepassword-broker-bridge-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:549625-549658](../../../../../../../reference/runtime/host-main.cjs#L549625-L549658) | `method` | sim | `cdpPort` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:549625-549658](../../../../../../../reference/runtime/host-main.cjs#L549625-L549658) | 6 | 0 | 4 | 4 | 0 | 0 |

### host:549625

Chamadas escritas diretamente neste corpo: `errorLogTag`, `this.listServiceWorker`, `this.options.log`, `this.readExtensionId`, `this.wakePolling.start`, `this.wakeServiceWorker`.

SHA-256 do trecho: `2f4ebde568e90eae63a3da2688df78e6f5b704672a16311981607c34d1d3a9d4`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
