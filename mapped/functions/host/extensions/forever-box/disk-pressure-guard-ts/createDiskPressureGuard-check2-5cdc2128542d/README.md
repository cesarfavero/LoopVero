# `createDiskPressureGuard/check2`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/forever-box/disk-pressure-guard.ts` · [README do módulo](../../../../../../modules/host/extensions/forever-box/disk-pressure-guard-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:679724-679771](../../../../../../../reference/runtime/host-main.cjs#L679724-L679771) | `ArrowFunctionExpression` | sim | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:679724-679771](../../../../../../../reference/runtime/host-main.cjs#L679724-L679771) | 10 | 2 | 1 | 2 | 0 | 2 |

### host:679724

Chamadas escritas diretamente neste corpo: `aggregateDiskPressureLevel`, `classifyDiskPressure`, `clock.monotonicNow`, `errorLogTag`, `new Set`, `options2.log`, `options2.onPressureChange`, `options2.onSuccessfulSample`, `options2.readVolumes`, `options2.report`, `sampledDeviceIds.add`, `sampledDeviceIds.has`, `states.delete`, `states.get`, `states.keys`, `states.set`.

Alvos de atribuição ou incremento: `aggregateLevel`, `sample`.

SHA-256 do trecho: `69bd57885586122d5ef70650c227dd20811de1d8282164086a4b4146ebdd0f4d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
