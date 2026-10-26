# `isMissingPathError`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/errors/system-errno.ts` · [README do módulo](../../../../../modules/shared/errors/system-errno-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:787-790](../../../../../../reference/runtime/host-main.cjs#L787-L790) | `FunctionDeclaration` | não | `error64` |
| [evaluation:474678-474681](../../../../../../reference/runtime/sand-eval-runner.cjs#L474678-L474681) | `FunctionDeclaration` | não | `error63` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:787-790](../../../../../../reference/runtime/host-main.cjs#L787-L790) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:474678-474681](../../../../../../reference/runtime/sand-eval-runner.cjs#L474678-L474681) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:787

Chamadas escritas diretamente neste corpo: `findSystemErrno`.

SHA-256 do trecho: `5f15e8fccd55e1f7b60443d84e29d02de7a21ecc342bea9755ad5273b34c7528`.

### evaluation:474678

Chamadas escritas diretamente neste corpo: `findSystemErrno`.

SHA-256 do trecho: `63edd3f4f98caa0b77386de64abffebeed5ced3197c06bbd8c9fe99dab0bd6fc`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
