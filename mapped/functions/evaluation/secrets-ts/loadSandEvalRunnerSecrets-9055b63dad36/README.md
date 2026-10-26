# `loadSandEvalRunnerSecrets`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `evaluation/secrets.ts` · [README do módulo](../../../../modules/evaluation/secrets-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:630709-630729](../../../../../reference/runtime/sand-eval-runner.cjs#L630709-L630729) | `FunctionDeclaration` | sim | `argv, env` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:630709-630729](../../../../../reference/runtime/sand-eval-runner.cjs#L630709-L630729) | 1 | 0 | 2 | 1 | 1 | 0 |

### evaluation:630709

Chamadas escritas diretamente neste corpo: `consumeEnvironmentVariable`, `new SandEvalRunnerConfigurationError`, `readLaunchCredentials`, `readOptionalMachineFile`, `readOptionalNamedArgument`, `resolveMachineId`.

Alvos de lançamento explícito: `SandEvalRunnerConfigurationError`.

SHA-256 do trecho: `c427a0955597c0da25877b540990d75b43495a7f27a398b64dc53f0e56f6e6a4`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
