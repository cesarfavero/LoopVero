# `ForeverBoxService.autoUpdateNow`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/forever-box/forever-box-service.ts` · [README do módulo](../../../../../../modules/host/extensions/forever-box/forever-box-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:680191-680236](../../../../../../../reference/runtime/host-main.cjs#L680191-L680236) | `method` | sim | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:680191-680236](../../../../../../../reference/runtime/host-main.cjs#L680191-L680236) | 8 | 0 | 2 | 9 | 0 | 1 |

### host:680191

Chamadas escritas diretamente neste corpo: `errorLogTag`, `logFields`, `this.isAutoUpdateCoolingDown`, `this.now`, `this.options.isInBox`, `this.options.log`, `this.options.telemetry.reportBoxRecreateDecided`, `this.refreshImageUpdateAvailable`, `this.requestRecreate`.

Alvos de atribuição ou incremento: `this.lastAutoUpdateAttemptAt`, `this.updateInFlight`.

SHA-256 do trecho: `5c244b04db8b2ac5ecb46bccf963ce7c9fd68e6d2c514d1d9b24f1cd240e7959`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
