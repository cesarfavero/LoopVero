# `WorkingStateWarmer.schedule`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/working-state-export/working-state-warmer.ts` · [README do módulo](../../../../../../modules/host/extensions/working-state-export/working-state-warmer-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:785917-785921](../../../../../../../reference/runtime/host-main.cjs#L785917-L785921) | `method` | não | `agentId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:785917-785921](../../../../../../../reference/runtime/host-main.cjs#L785917-L785921) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:785917

Chamadas escritas diretamente neste corpo: `this.enqueue`, `this.startBackfill`, `this.warmed.delete`.

SHA-256 do trecho: `d707f0b060a5476cb653e6c47c49b9456ccdca86118de94b35a4d56c53080a6b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
