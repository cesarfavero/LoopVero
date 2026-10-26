# `SharedDesktopSandBox.loadPersistedAssignments`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/box/shared-desktop-sand-box.ts` · [README do módulo](../../../../../modules/core/box/shared-desktop-sand-box-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:554399-554429](../../../../../../reference/runtime/host-main.cjs#L554399-L554429) | `method` | sim | `ctx` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:554399-554429](../../../../../../reference/runtime/host-main.cjs#L554399-L554429) | 4 | 0 | 1 | 1 | 2 | 1 |

### host:554399

Chamadas escritas diretamente neste corpo: `this.adoptUnseatedAssignments`, `this.assignmentsLoadRetry.runWithRetry`.

Alvos de atribuição ou incremento: `loaded`.

Alvos de lançamento explícito: `error64`, `failure3.retryOutcome.error`.

SHA-256 do trecho: `c52df6dead9a499235f0fabc425255dd172633e6de38bfa22cc5a317f8d09e68`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
