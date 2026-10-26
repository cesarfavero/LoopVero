# `normalizeSource`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/download-file-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/download-file-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:773792-773805](../../../../../../../reference/runtime/host-main.cjs#L773792-L773805) | `FunctionDeclaration` | não | `source` |
| [evaluation:573013-573026](../../../../../../../reference/runtime/sand-eval-runner.cjs#L573013-L573026) | `FunctionDeclaration` | não | `source` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:773792-773805](../../../../../../../reference/runtime/host-main.cjs#L773792-L773805) | 3 | 0 | 0 | 2 | 2 | 0 |
| [evaluation:573013-573026](../../../../../../../reference/runtime/sand-eval-runner.cjs#L573013-L573026) | 3 | 0 | 0 | 2 | 2 | 0 |

### host:773792

Chamadas escritas diretamente neste corpo: `new SandToolInputError`, `nonEmpty5`.

Alvos de lançamento explícito: `SandToolInputError`.

SHA-256 do trecho: `0417a3227fcb22557bc38414e0bb0e22f0a6423a4bc78d6bc10fd7c59e86fe2b`.

### evaluation:573013

Chamadas escritas diretamente neste corpo: `new SandToolInputError`, `nonEmpty4`.

Alvos de lançamento explícito: `SandToolInputError`.

SHA-256 do trecho: `d94b9f531a5bf8a3ce05145a01a0f16839ae69c71374604a49874845006b03d5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
