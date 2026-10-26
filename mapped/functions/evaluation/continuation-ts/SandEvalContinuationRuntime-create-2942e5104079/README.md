# `_SandEvalContinuationRuntime.create`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `evaluation/continuation.ts` · [README do módulo](../../../../modules/evaluation/continuation-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:628769-628775](../../../../../reference/runtime/sand-eval-runner.cjs#L628769-L628775) | `method` | sim | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:628769-628775](../../../../../reference/runtime/sand-eval-runner.cjs#L628769-L628775) | 0 | 0 | 2 | 1 | 0 | 0 |

### evaluation:628769

Chamadas escritas diretamente neste corpo: `new FileAutomationStore`, `new _SandEvalContinuationRuntime`, `runtime.status`.

SHA-256 do trecho: `ec06586ab564d952f7704559adcbfd0d17c5c4d0fe3aa0f8d6728fd22c968021`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
