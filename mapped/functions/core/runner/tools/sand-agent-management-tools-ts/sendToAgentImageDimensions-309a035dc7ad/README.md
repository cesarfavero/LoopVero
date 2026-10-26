# `sendToAgentImageDimensions`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/sand-agent-management-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-agent-management-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:757380-757385](../../../../../../../reference/runtime/host-main.cjs#L757380-L757385) | `FunctionDeclaration` | sim | `source, readMediaDimensions2` |
| [evaluation:543403-543408](../../../../../../../reference/runtime/sand-eval-runner.cjs#L543403-L543408) | `FunctionDeclaration` | sim | `source, readMediaDimensions` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:757380-757385](../../../../../../../reference/runtime/host-main.cjs#L757380-L757385) | 2 | 0 | 1 | 3 | 0 | 0 |
| [evaluation:543403-543408](../../../../../../../reference/runtime/sand-eval-runner.cjs#L543403-L543408) | 2 | 0 | 1 | 3 | 0 | 0 |

### host:757380

Chamadas escritas diretamente neste corpo: `filePathFromFileUrl`, `readMediaDimensions2`.

SHA-256 do trecho: `b85151bc8b6342cfdcebdbdf1283ba8e341476ee56ddbf2eb1c879c59dabcbe9`.

### evaluation:543403

Chamadas escritas diretamente neste corpo: `filePathFromFileUrl`, `readMediaDimensions`.

SHA-256 do trecho: `60bfd9bceb7afef48425b3352e85ac20682041a7d4b9e1e411ac4042f0d0fd47`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
