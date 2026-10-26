# `measureReviewPhase`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/approvals/README.md).

**Módulo:** `core/runner/sand-browser-auto-review.ts` · [README do módulo](../../../../../modules/core/runner/sand-browser-auto-review-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:699813-699831](../../../../../../reference/runtime/host-main.cjs#L699813-L699831) | `FunctionDeclaration` | sim | `options2, phase, execution, run, outcomeOf2 = () => "ok"` |
| [evaluation:513569-513587](../../../../../../reference/runtime/sand-eval-runner.cjs#L513569-L513587) | `FunctionDeclaration` | sim | `options2, phase, execution, run, outcomeOf2 = () => "ok"` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:699813-699831](../../../../../../reference/runtime/host-main.cjs#L699813-L699831) | 0 | 0 | 1 | 1 | 1 | 1 |
| [evaluation:513569-513587](../../../../../../reference/runtime/sand-eval-runner.cjs#L513569-L513587) | 0 | 0 | 1 | 1 | 1 | 1 |

### host:699813

Chamadas escritas diretamente neste corpo: `notifyReviewPhase`, `outcomeOf2`, `performance.now`, `reviewPhaseOutcome`, `run`.

Alvos de atribuição ou incremento: `outcome`.

Alvos de lançamento explícito: `error64`.

SHA-256 do trecho: `b835baee008ec453a8d925d3170ec0216deb4f8ff5be5c1c408424d45c5e66ea`.

### evaluation:513569

Chamadas escritas diretamente neste corpo: `notifyReviewPhase`, `outcomeOf2`, `performance.now`, `reviewPhaseOutcome`, `run`.

Alvos de atribuição ou incremento: `outcome`.

Alvos de lançamento explícito: `error63`.

SHA-256 do trecho: `0375a20475f16c512ef8cda15e56ff75671256738cd02aab13f125fca0d9c4d6`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
