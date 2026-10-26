# `findErrorCode`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/errors/system-errno.ts` · [README do módulo](../../../../../modules/shared/errors/system-errno-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:773-783](../../../../../../reference/runtime/host-main.cjs#L773-L783) | `FunctionDeclaration` | não | `error64, pattern` |
| [evaluation:474664-474674](../../../../../../reference/runtime/sand-eval-runner.cjs#L474664-L474674) | `FunctionDeclaration` | não | `error63, pattern` |
| [state-worker:342-352](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L342-L352) | `FunctionDeclaration` | não | `error, pattern` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:773-783](../../../../../../reference/runtime/host-main.cjs#L773-L783) | 1 | 1 | 0 | 2 | 0 | 0 |
| [evaluation:474664-474674](../../../../../../reference/runtime/sand-eval-runner.cjs#L474664-L474674) | 1 | 1 | 0 | 2 | 0 | 0 |
| [state-worker:342-352](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L342-L352) | 1 | 1 | 0 | 2 | 0 | 0 |

### host:773

Chamadas escritas diretamente neste corpo: `new Set`, `pattern.test`, `seen.add`, `seen.has`.

Alvos de atribuição ou incremento: `current2`.

SHA-256 do trecho: `99eb192114bb2544057fb76785be6a88ca6b34fa92ac0fc36df4d959e6b55ed3`.

### evaluation:474664

Chamadas escritas diretamente neste corpo: `new Set`, `pattern.test`, `seen.add`, `seen.has`.

Alvos de atribuição ou incremento: `current2`.

SHA-256 do trecho: `50149e06bfccfb4b7bc1d2cfd58021ed5a0d93bee26011c9cee0de0e5ff46d67`.

### state-worker:342

Chamadas escritas diretamente neste corpo: `new Set`, `pattern.test`, `seen.add`, `seen.has`.

Alvos de atribuição ou incremento: `current`.

SHA-256 do trecho: `c0d1249650f750843272f0d96b8dec6466d8f88ae3d2cbebba753ff823d1ff13`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
