# `SandExperimentServiceCore.persistAndBroadcastOverrides`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `shared/node/experiments/cursor-experiments.ts` · [README do módulo](../../../../../../modules/shared/node/experiments/cursor-experiments-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:552821-552827](../../../../../../../reference/runtime/host-main.cjs#L552821-L552827) | `method` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:552821-552827](../../../../../../../reference/runtime/host-main.cjs#L552821-L552827) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:552821

Chamadas escritas diretamente neste corpo: `Promise.all`, `this.overrideStore.persist`, `this.refreshSnapshot`.

Alvos de atribuição ou incremento: `this.pendingOverrideWrites`.

SHA-256 do trecho: `1de029dba1df8f49bdbe16a8e3a01b751ab57ec4d5cfb77304049195f6d0b92f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
