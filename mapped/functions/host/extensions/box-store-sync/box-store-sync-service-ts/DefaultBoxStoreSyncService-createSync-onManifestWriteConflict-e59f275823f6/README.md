# `DefaultBoxStoreSyncService.createSync/onManifestWriteConflict`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/box-store-sync/box-store-sync-service.ts` · [README do módulo](../../../../../../modules/host/extensions/box-store-sync/box-store-sync-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:482577-482577](../../../../../../../reference/runtime/host-main.cjs#L482577-L482577) | `ArrowFunctionExpression` | não | `info2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:482577-482577](../../../../../../../reference/runtime/host-main.cjs#L482577-L482577) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em host:482577 usa retorno implícito de arrow function.

### host:482577

Chamadas escritas diretamente neste corpo: `this.deps.telemetry.reportBoxStoreManifestConflict`.

SHA-256 do trecho: `d1ded1f9706614c19dce33a5682916af9070f3d0bc9dc3e00f3ae4a5a7bc601f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
