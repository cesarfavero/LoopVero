# `measurePlaywrightPhase`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/mcp/playwright-telemetry.ts` · [README do módulo](../../../../../modules/core/mcp/playwright-telemetry-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:700619-700630](../../../../../../reference/runtime/host-main.cjs#L700619-L700630) | `FunctionDeclaration` | sim | `observe, run` |
| [evaluation:514411-514422](../../../../../../reference/runtime/sand-eval-runner.cjs#L514411-L514422) | `FunctionDeclaration` | sim | `observe, run` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:700619-700630](../../../../../../reference/runtime/host-main.cjs#L700619-L700630) | 0 | 0 | 1 | 1 | 1 | 1 |
| [evaluation:514411-514422](../../../../../../reference/runtime/sand-eval-runner.cjs#L514411-L514422) | 0 | 0 | 1 | 1 | 1 | 1 |

### host:700619

Chamadas escritas diretamente neste corpo: `observePlaywrightPhaseSafely`, `performance.now`, `playwrightPhaseOutcome`, `run`.

Alvos de atribuição ou incremento: `outcome`.

Alvos de lançamento explícito: `error64`.

SHA-256 do trecho: `c3590d1b58a60be61fea1d6cab11e1a1378ccaca09bbacd8c9217dc9e7c083f4`.

### evaluation:514411

Chamadas escritas diretamente neste corpo: `observePlaywrightPhaseSafely`, `performance.now`, `playwrightPhaseOutcome`, `run`.

Alvos de atribuição ou incremento: `outcome`.

Alvos de lançamento explícito: `error63`.

SHA-256 do trecho: `3354f73313a2d478fd0b4666fa4258b555559186bfc6518b5ba326c837c0e51c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
