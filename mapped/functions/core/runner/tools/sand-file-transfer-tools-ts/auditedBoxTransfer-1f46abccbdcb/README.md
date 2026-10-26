# `auditedBoxTransfer`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/sand-file-transfer-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-file-transfer-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:777595-777608](../../../../../../../reference/runtime/host-main.cjs#L777595-L777608) | `FunctionDeclaration` | sim | `ctx, controller, call, transfer` |
| [evaluation:577290-577303](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577290-L577303) | `FunctionDeclaration` | sim | `ctx, controller, call, transfer` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:777595-777608](../../../../../../../reference/runtime/host-main.cjs#L777595-L777608) | 0 | 0 | 1 | 1 | 1 | 1 |
| [evaluation:577290-577303](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577290-L577303) | 0 | 0 | 1 | 1 | 1 | 1 |

### host:777595

Chamadas escritas diretamente neste corpo: `bindFileTransferAudit`, `failedFileTransferResult`, `record3`, `transferFileBetweenBoxes`.

Alvos de lançamento explícito: `error64`.

SHA-256 do trecho: `2ff1f66c41eb05a6dd804ef4bf9241c3e9bedf5b0f47c63129825ba894d1e49e`.

### evaluation:577290

Chamadas escritas diretamente neste corpo: `bindFileTransferAudit`, `failedFileTransferResult`, `record4`, `transferFileBetweenBoxes`.

Alvos de lançamento explícito: `error63`.

SHA-256 do trecho: `91374f74f302857083891f067fae23685192817099f0af863ec0e457f71127cb`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
