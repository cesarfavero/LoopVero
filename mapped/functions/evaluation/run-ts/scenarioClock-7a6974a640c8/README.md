# `scenarioClock`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `evaluation/run.ts` · [README do módulo](../../../../modules/evaluation/run-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:630235-630239](../../../../../reference/runtime/sand-eval-runner.cjs#L630235-L630239) | `FunctionDeclaration` | não | `simulatedTime` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:630235-630239](../../../../../reference/runtime/sand-eval-runner.cjs#L630235-L630239) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:630235

Chamadas escritas diretamente neste corpo: `Date.now`, `Date.parse`.

SHA-256 do trecho: `a0847832d3f3e340114cf21b2880610602ad0eef56c7d911bdd1ec272b186501`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
