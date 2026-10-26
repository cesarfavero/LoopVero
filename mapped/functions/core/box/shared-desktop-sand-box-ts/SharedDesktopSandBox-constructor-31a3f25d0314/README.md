# `SharedDesktopSandBox.constructor`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/box/shared-desktop-sand-box.ts` · [README do módulo](../../../../../modules/core/box/shared-desktop-sand-box-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:554365-554375](../../../../../../reference/runtime/host-main.cjs#L554365-L554375) | `method` | não | `inner, options2 = {}` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:554365-554375](../../../../../../reference/runtime/host-main.cjs#L554365-L554375) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:554365

Chamadas escritas diretamente neste corpo: `Math.max`, `boxMaxWindows`, `createRetryPolicy`, `resolveSharedBoxId`.

Alvos de atribuição ou incremento: `this.assignmentsLoadRetry`, `this.findDeletedAgents`, `this.inner`, `this.maxWindowCount`, `this.mayReapUnstartedSeats`, `this.now`, `this.persistAssignments`, `this.sharedBoxId`, `this.unstartedSeatReapAfterMs`.

SHA-256 do trecho: `aa439ba53c0153bc2353ce3eeed385d93dcf9002221d01a9f0985e04f289c50e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
