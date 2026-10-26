# `readSandEvalRunnerLaunchInputs`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `evaluation/secrets.ts` · [README do módulo](../../../../modules/evaluation/secrets-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:630701-630708](../../../../../reference/runtime/sand-eval-runner.cjs#L630701-L630708) | `FunctionDeclaration` | sim | `argv, env` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:630701-630708](../../../../../reference/runtime/sand-eval-runner.cjs#L630701-L630708) | 0 | 0 | 2 | 1 | 0 | 0 |

### evaluation:630701

Chamadas escritas diretamente neste corpo: `JSON.parse`, `loadSandEvalRunnerSecrets`, `readRequiredNamedArgument`, `sandEvalRunnerRequestSchema.parse`.

SHA-256 do trecho: `7108671b20bedbd272ced61079a717a7d5229d3d5f97bc4d14b692b3d58c7086`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
