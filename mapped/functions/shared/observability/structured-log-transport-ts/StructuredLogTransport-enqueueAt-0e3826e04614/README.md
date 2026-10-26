# `StructuredLogTransport.enqueueAt`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/observability/structured-log-transport.ts` · [README do módulo](../../../../../modules/shared/observability/structured-log-transport-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:453007-453025](../../../../../../reference/runtime/host-main.cjs#L453007-L453025) | `method` | não | `level, message, metadata2, timestamp3, onSettled` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:453007-453025](../../../../../../reference/runtime/host-main.cjs#L453007-L453025) | 4 | 0 | 0 | 1 | 0 | 0 |

### host:453007

Chamadas escritas diretamente neste corpo: `onSettled`, `this.buffer.push`, `this.dropBufferOverflow`, `this.queueEagerDrain`, `this.shipSchedule.shipNext`.

Alvos de atribuição ou incremento: `this.eagerDrainRequested`.

SHA-256 do trecho: `3f895d3169100d5169c820b593ae8076dafd5d098dc4e8a0d629e92c4109ad07`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
