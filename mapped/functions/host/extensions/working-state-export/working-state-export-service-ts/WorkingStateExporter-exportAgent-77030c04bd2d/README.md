# `WorkingStateExporter.exportAgent`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/working-state-export/working-state-export-service.ts` · [README do módulo](../../../../../../modules/host/extensions/working-state-export/working-state-export-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:785457-785490](../../../../../../../reference/runtime/host-main.cjs#L785457-L785490) | `method` | sim | `agentId, limits = {}` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:785457-785490](../../../../../../../reference/runtime/host-main.cjs#L785457-L785490) | 6 | 0 | 1 | 1 | 0 | 2 |

### host:785457

Chamadas escritas diretamente neste corpo: `Math.max`, `errorLogTag`, `reportFields`, `this.deps.log`, `this.deps.now`, `this.deps.report`, `this.uploadClosure`, `workingStateExportErrorClass`.

Alvos de atribuição ou incremento: `outcome`.

SHA-256 do trecho: `42b1dc51436a8b625caba724f7fbb70eae0481d0a55c987d125c5adcb18a63b8`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
