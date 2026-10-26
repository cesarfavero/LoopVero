# `BoxLogShipper.start`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/observability/README.md).

**Módulo:** `host/extensions/telemetry/box-log-shipper.ts` · [README do módulo](../../../../../../modules/host/extensions/telemetry/box-log-shipper-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:730836-730858](../../../../../../../reference/runtime/host-main.cjs#L730836-L730858) | `method` | sim | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:730836-730858](../../../../../../../reference/runtime/host-main.cjs#L730836-L730858) | 0 | 0 | 2 | 0 | 0 | 0 |

### host:730836

Chamadas escritas diretamente neste corpo: `new Promise`, `this.loadOffsets`, `this.polling.start`.

Alvos de atribuição ou incremento: `this.hasLoadedOffsets`, `this.pollingHandle`.

SHA-256 do trecho: `aefd4088180f4b1395c8a9f929d83515510aa92e5326a83e3da0dfac7282a68d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
