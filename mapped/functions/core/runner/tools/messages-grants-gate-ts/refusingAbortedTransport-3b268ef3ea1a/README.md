# `refusingAbortedTransport`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/messages-grants-gate.ts` · [README do módulo](../../../../../../modules/core/runner/tools/messages-grants-gate-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:777834-777843](../../../../../../../reference/runtime/host-main.cjs#L777834-L777843) | `FunctionDeclaration` | sim | `ctx, run` |
| [evaluation:577569-577578](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577569-L577578) | `FunctionDeclaration` | sim | `ctx, run` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:777834-777843](../../../../../../../reference/runtime/host-main.cjs#L777834-L777843) | 1 | 0 | 1 | 1 | 2 | 1 |
| [evaluation:577569-577578](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577569-L577578) | 1 | 0 | 1 | 1 | 2 | 1 |

### host:777834

Chamadas escritas diretamente neste corpo: `new SandLocalToolPermissionDeniedError`, `run`.

Alvos de lançamento explícito: `SandLocalToolPermissionDeniedError`, `error64`.

SHA-256 do trecho: `51317620c30a4393acc079be93a02a382ff9e1a5a51cc414fd1e11d67fedaa79`.

### evaluation:577569

Chamadas escritas diretamente neste corpo: `new SandLocalToolPermissionDeniedError`, `run`.

Alvos de lançamento explícito: `SandLocalToolPermissionDeniedError`, `error63`.

SHA-256 do trecho: `6885892b1259e368d24e72169bdc0f199aafa4a4ac9b61c30106248e49e0fe19`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
