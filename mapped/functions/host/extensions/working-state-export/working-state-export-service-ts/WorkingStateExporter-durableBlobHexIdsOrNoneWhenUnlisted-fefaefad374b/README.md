# `WorkingStateExporter.durableBlobHexIdsOrNoneWhenUnlisted`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/working-state-export/working-state-export-service.ts` · [README do módulo](../../../../../../modules/host/extensions/working-state-export/working-state-export-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:785535-785576](../../../../../../../reference/runtime/host-main.cjs#L785535-L785576) | `method` | sim | `progress, control` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:785535-785576](../../../../../../../reference/runtime/host-main.cjs#L785535-L785576) | 3 | 0 | 1 | 3 | 1 | 1 |

### host:785535

Chamadas escritas diretamente neste corpo: `Math.max`, `errorLogTag`, `listing.pageSubscribers.add`, `listing.pageSubscribers.delete`, `new Set`, `this.deps.log`, `this.deps.now`, `this.durableBlobListing`, `waitForWorkingStateOperation`.

Alvos de atribuição ou incremento: `progress.listedBlobs`, `progress.listingDurationMs`, `progress.listingKnownBlobs`, `progress.listingOutcome`, `progress.listingPages`.

Alvos de lançamento explícito: `error64`.

SHA-256 do trecho: `36425183f624c48b977704e0567210b8bdfeab77335e2060224fef3098cad239`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
