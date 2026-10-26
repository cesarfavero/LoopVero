# `defineAgentTools`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tool-policy/agent-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tool-policy/agent-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:756590-756631](../../../../../../../reference/runtime/host-main.cjs#L756590-L756631) | `FunctionDeclaration` | não | `spec` |
| [evaluation:542510-542551](../../../../../../../reference/runtime/sand-eval-runner.cjs#L542510-L542551) | `FunctionDeclaration` | não | `spec` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:756590-756631](../../../../../../../reference/runtime/host-main.cjs#L756590-L756631) | 6 | 1 | 0 | 1 | 3 | 0 |
| [evaluation:542510-542551](../../../../../../../reference/runtime/sand-eval-runner.cjs#L542510-L542551) | 6 | 1 | 0 | 1 | 3 | 0 |

### host:756590

Chamadas escritas diretamente neste corpo: `.flatMap`, `agentTools`, `groupReasons`, `hints.keys`, `includedByGroup.has`, `named2.has`, `namedOmissions.get`, `new Error`, `new Map`, `new Set`, `offered.add`, `omitted.set`, `omittedByGroup.get`, `omittedByGroup.has`, `requireOffered`, `toolStrings`.

Alvos de lançamento explícito: `Error`.

SHA-256 do trecho: `e63eba75da8c2b12472df91e1ce1dd6b7df8e4561b289486489c81ba42c743e6`.

### evaluation:542510

Chamadas escritas diretamente neste corpo: `.flatMap`, `agentTools`, `groupReasons`, `hints.keys`, `includedByGroup.has`, `named2.has`, `namedOmissions.get`, `new Error`, `new Map`, `new Set`, `offered.add`, `omitted.set`, `omittedByGroup.get`, `omittedByGroup.has`, `requireOffered`, `toolStrings`.

Alvos de lançamento explícito: `Error`.

SHA-256 do trecho: `e63eba75da8c2b12472df91e1ce1dd6b7df8e4561b289486489c81ba42c743e6`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
