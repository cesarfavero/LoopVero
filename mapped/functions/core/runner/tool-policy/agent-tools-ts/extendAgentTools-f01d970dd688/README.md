# `extendAgentTools`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tool-policy/agent-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tool-policy/agent-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:756632-756662](../../../../../../../reference/runtime/host-main.cjs#L756632-L756662) | `FunctionDeclaration` | não | `base, delta` |
| [evaluation:542552-542582](../../../../../../../reference/runtime/sand-eval-runner.cjs#L542552-L542582) | `FunctionDeclaration` | não | `base, delta` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:756632-756662](../../../../../../../reference/runtime/host-main.cjs#L756632-L756662) | 1 | 3 | 0 | 1 | 1 | 0 |
| [evaluation:542552-542582](../../../../../../../reference/runtime/sand-eval-runner.cjs#L542552-L542582) | 1 | 3 | 0 | 1 | 1 | 0 |

### host:756632

Chamadas escritas diretamente neste corpo: `agentTools`, `deltaHints.keys`, `groupReasons`, `new Error`, `new Map`, `new Set`, `offered.add`, `omit2`, `omitted.delete`, `requireOffered`, `toolStrings`.

Alvos de lançamento explícito: `Error`.

SHA-256 do trecho: `f64933d505956cf99022ec2075ecd4fedbf73577f51f15fddcee1dfd7bd60c61`.

### evaluation:542552

Chamadas escritas diretamente neste corpo: `agentTools`, `deltaHints.keys`, `groupReasons`, `new Error`, `new Map`, `new Set`, `offered.add`, `omit2`, `omitted.delete`, `requireOffered`, `toolStrings`.

Alvos de lançamento explícito: `Error`.

SHA-256 do trecho: `f64933d505956cf99022ec2075ecd4fedbf73577f51f15fddcee1dfd7bd60c61`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
