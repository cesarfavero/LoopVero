# `assertBoxReady`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/sand-file-transfer-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-file-transfer-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:777632-777636](../../../../../../../reference/runtime/host-main.cjs#L777632-L777636) | `FunctionDeclaration` | não | `controller` |
| [evaluation:577327-577331](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577327-L577331) | `FunctionDeclaration` | não | `controller` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:777632-777636](../../../../../../../reference/runtime/host-main.cjs#L777632-L777636) | 1 | 0 | 0 | 0 | 1 | 0 |
| [evaluation:577327-577331](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577327-L577331) | 1 | 0 | 0 | 0 | 1 | 0 |

### host:777632

Chamadas escritas diretamente neste corpo: `controller.isBoxPreparing`, `new BoxTransferError`.

Alvos de lançamento explícito: `BoxTransferError`.

SHA-256 do trecho: `60503ecc06858660f78deb0abc99fa833ca13d68225f26e00bb7a52e2b447124`.

### evaluation:577327

Chamadas escritas diretamente neste corpo: `controller.isBoxPreparing`, `new BoxTransferError`.

Alvos de lançamento explícito: `BoxTransferError`.

SHA-256 do trecho: `60503ecc06858660f78deb0abc99fa833ca13d68225f26e00bb7a52e2b447124`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
