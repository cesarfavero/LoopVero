# `untilDrainedOrStopped`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/evals/run-to-pause.ts` · [README do módulo](../../../../../modules/core/evals/run-to-pause-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:627122-627130](../../../../../../reference/runtime/sand-eval-runner.cjs#L627122-L627130) | `FunctionDeclaration` | não | `drained, stops` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:627122-627130](../../../../../../reference/runtime/sand-eval-runner.cjs#L627122-L627130) | 2 | 0 | 0 | 3 | 0 | 0 |

### evaluation:627122

Chamadas escritas diretamente neste corpo: `Promise.resolve`, `new Promise`, `signals.some`, `stops.filter`.

SHA-256 do trecho: `df84e9acae96cd8c5f9a715230754b8be2130c131dfa9b69cf5c58ae721e0d69`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
