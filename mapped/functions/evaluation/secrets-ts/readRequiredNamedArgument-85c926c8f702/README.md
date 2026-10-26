# `readRequiredNamedArgument`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `evaluation/secrets.ts` · [README do módulo](../../../../modules/evaluation/secrets-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:630693-630700](../../../../../reference/runtime/sand-eval-runner.cjs#L630693-L630700) | `FunctionDeclaration` | não | `argv, name18` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:630693-630700](../../../../../reference/runtime/sand-eval-runner.cjs#L630693-L630700) | 2 | 0 | 0 | 1 | 1 | 0 |

### evaluation:630693

Chamadas escritas diretamente neste corpo: `argv.indexOf`, `new SandEvalRunnerConfigurationError`, `value.startsWith`.

Alvos de lançamento explícito: `SandEvalRunnerConfigurationError`.

SHA-256 do trecho: `5454cc19673184718e03058d161848bad0859dff36de837c0ba91b40d02d3c9b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
