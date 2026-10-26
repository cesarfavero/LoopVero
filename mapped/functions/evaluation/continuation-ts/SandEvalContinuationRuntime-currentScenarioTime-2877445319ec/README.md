# `_SandEvalContinuationRuntime.currentScenarioTime`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `evaluation/continuation.ts` · [README do módulo](../../../../modules/evaluation/continuation-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:628790-628792](../../../../../reference/runtime/sand-eval-runner.cjs#L628790-L628792) | `method` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:628790-628792](../../../../../reference/runtime/sand-eval-runner.cjs#L628790-L628792) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:628790

Chamadas escritas diretamente neste corpo: `.toISOString`, `new Date`.

SHA-256 do trecho: `9d40ca2e1f16b4c4a2d4a4da25ca11d3fe54302f31399f66462e34c9fd642ee3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
