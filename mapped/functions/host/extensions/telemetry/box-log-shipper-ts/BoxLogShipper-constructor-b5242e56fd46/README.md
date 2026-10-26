# `BoxLogShipper.constructor`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/observability/README.md).

**Módulo:** `host/extensions/telemetry/box-log-shipper.ts` · [README do módulo](../../../../../../modules/host/extensions/telemetry/box-log-shipper-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:730817-730835](../../../../../../../reference/runtime/host-main.cjs#L730817-L730835) | `method` | não | `deps` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:730817-730835](../../../../../../../reference/runtime/host-main.cjs#L730817-L730835) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:730817

Chamadas escritas diretamente neste corpo: `new Set`.

Alvos de atribuição ou incremento: `this.clock`, `this.excludeSourcePrefixes`, `this.logDir`, `this.maxBytesPerReadPerFile`, `this.maxLagBytes`, `this.maxLineBytes`, `this.maxLinesPerPoll`, `this.offsetsPath`, `this.openFile`, `this.polling`, `this.reportBatch`, `this.reportBoxLogShip`, `this.reportHostLog`, `this.skip`, `this.statFile`, `this.subdirPattern`, `this.writeOffsets`.

SHA-256 do trecho: `6d2999e498b400464a6f3dcc5a39e8084bf1c4a4685acdbe716e421fd6ec83cb`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
