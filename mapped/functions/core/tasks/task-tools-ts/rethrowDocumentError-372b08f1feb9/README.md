# `rethrowDocumentError`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/tasks/README.md).

**Módulo:** `core/tasks/task-tools.ts` · [README do módulo](../../../../../modules/core/tasks/task-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:739478-739483](../../../../../../reference/runtime/host-main.cjs#L739478-L739483) | `FunctionDeclaration` | não | `error64` |
| [evaluation:538781-538786](../../../../../../reference/runtime/sand-eval-runner.cjs#L538781-L538786) | `FunctionDeclaration` | não | `error63` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:739478-739483](../../../../../../reference/runtime/host-main.cjs#L739478-L739483) | 1 | 0 | 0 | 0 | 2 | 0 |
| [evaluation:538781-538786](../../../../../../reference/runtime/sand-eval-runner.cjs#L538781-L538786) | 1 | 0 | 0 | 0 | 2 | 0 |

### host:739478

Chamadas escritas diretamente neste corpo: `new SandToolInputError`.

Alvos de lançamento explícito: `SandToolInputError`, `error64`.

SHA-256 do trecho: `66e6a9f99a18b1cd797bfcf771dec8ed8e2e9e2769572a8605c9f3c76f8ec571`.

### evaluation:538781

Chamadas escritas diretamente neste corpo: `new SandToolInputError`.

Alvos de lançamento explícito: `SandToolInputError`, `error63`.

SHA-256 do trecho: `5288b8ddccd5856e181834c3fee0d2be5334d618769dbac77799f334fe0f990d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
