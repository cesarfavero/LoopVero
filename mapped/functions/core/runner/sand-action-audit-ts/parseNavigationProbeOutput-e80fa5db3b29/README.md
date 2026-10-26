# `parseNavigationProbeOutput`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/sand-action-audit.ts` · [README do módulo](../../../../../modules/core/runner/sand-action-audit-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:699077-699125](../../../../../../reference/runtime/host-main.cjs#L699077-L699125) | `FunctionDeclaration` | não | `stdout` |
| [evaluation:512436-512484](../../../../../../reference/runtime/sand-eval-runner.cjs#L512436-L512484) | `FunctionDeclaration` | não | `stdout` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:699077-699125](../../../../../../reference/runtime/host-main.cjs#L699077-L699125) | 12 | 2 | 0 | 1 | 0 | 1 |
| [evaluation:512436-512484](../../../../../../reference/runtime/sand-eval-runner.cjs#L512436-L512484) | 12 | 2 | 0 | 1 | 0 | 1 |

### host:699077

Chamadas escritas diretamente neste corpo: `Array.isArray`, `JSON.parse`, `errorLogTag`, `process.stderr.write`, `stdout.slice`, `targets.push`.

Alvos de atribuição ou incremento: `depth`, `escaped`, `i`, `inString`, `start`.

SHA-256 do trecho: `9a9b9590388b16fd75ee612db592d9701605b6e75d459e2c1b3cd845d836dd95`.

### evaluation:512436

Chamadas escritas diretamente neste corpo: `Array.isArray`, `JSON.parse`, `errorLogTag`, `process.stderr.write`, `stdout.slice`, `targets.push`.

Alvos de atribuição ou incremento: `depth`, `escaped`, `i`, `inString`, `start`.

SHA-256 do trecho: `f3244cbcbb1ad0462e455f845a04ad307f4c8a97ceef28f46ba6ed79e114a04d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
