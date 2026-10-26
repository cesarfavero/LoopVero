# `readNamedArgument`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `evaluation/main.ts` · [README do módulo](../../../../modules/evaluation/main-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:630734-630741](../../../../../reference/runtime/sand-eval-runner.cjs#L630734-L630741) | `FunctionDeclaration` | não | `name18` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:630734-630741](../../../../../reference/runtime/sand-eval-runner.cjs#L630734-L630741) | 2 | 0 | 0 | 1 | 1 | 0 |

### evaluation:630734

Chamadas escritas diretamente neste corpo: `new SandEvalRunnerConfigurationError`, `process.argv.indexOf`.

Alvos de lançamento explícito: `SandEvalRunnerConfigurationError`.

SHA-256 do trecho: `fe1bac10edf07b7e46e3028058e3ea1e1983714577f18f973bec0346a16468f1`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
