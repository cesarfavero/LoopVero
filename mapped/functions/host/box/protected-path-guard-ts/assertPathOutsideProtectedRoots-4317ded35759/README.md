# `assertPathOutsideProtectedRoots`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `host/box/protected-path-guard.ts` · [README do módulo](../../../../../modules/host/box/protected-path-guard-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:679114-679129](../../../../../../reference/runtime/host-main.cjs#L679114-L679129) | `FunctionDeclaration` | sim | `protectedRoots, candidatePath, baseDir` |
| [evaluation:626979-626994](../../../../../../reference/runtime/sand-eval-runner.cjs#L626979-L626994) | `FunctionDeclaration` | sim | `protectedRoots, candidatePath, baseDir` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:679114-679129](../../../../../../reference/runtime/host-main.cjs#L679114-L679129) | 4 | 2 | 2 | 1 | 2 | 0 |
| [evaluation:626979-626994](../../../../../../reference/runtime/sand-eval-runner.cjs#L626979-L626994) | 4 | 2 | 2 | 1 | 2 | 0 |

### host:679114

Chamadas escritas diretamente neste corpo: `isModelReadableStorePath`, `isPathWithin`, `new SandProtectedPathError`, `realpathNearestExisting`, `refusalMessage2`.

Alvos de lançamento explícito: `SandProtectedPathError`.

SHA-256 do trecho: `ce945eeccf4940fae7cc26d76514105a006071785b75d01a7a0efc11afe44d47`.

### evaluation:626979

Chamadas escritas diretamente neste corpo: `isModelReadableStorePath`, `isPathWithin2`, `new SandProtectedPathError`, `realpathNearestExisting`, `refusalMessage`.

Alvos de lançamento explícito: `SandProtectedPathError`.

SHA-256 do trecho: `1af73f0e21fd9eabbb70fb003900f775905d3b1da30b443473770022580057ec`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
