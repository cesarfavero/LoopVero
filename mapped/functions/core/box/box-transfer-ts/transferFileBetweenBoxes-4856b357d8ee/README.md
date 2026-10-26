# `transferFileBetweenBoxes`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/box/box-transfer.ts` · [README do módulo](../../../../../modules/core/box/box-transfer-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:476478-476516](../../../../../../reference/runtime/host-main.cjs#L476478-L476516) | `FunctionDeclaration` | sim | `ctx, args` |
| [evaluation:515616-515654](../../../../../../reference/runtime/sand-eval-runner.cjs#L515616-L515654) | `FunctionDeclaration` | sim | `ctx, args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:476478-476516](../../../../../../reference/runtime/host-main.cjs#L476478-L476516) | 4 | 0 | 2 | 1 | 6 | 2 |
| [evaluation:515616-515654](../../../../../../reference/runtime/sand-eval-runner.cjs#L515616-L515654) | 4 | 0 | 2 | 1 | 6 | 2 |

### host:476478

Chamadas escritas diretamente neste corpo: `dest.box.uploadFile`, `errorMessage`, `isBoxFileMissingError`, `new BoxTransferError`, `source.box.downloadFile`.

Alvos de atribuição ou incremento: `data2`.

Alvos de lançamento explícito: `BoxTransferError`, `error64`.

SHA-256 do trecho: `869b523d322e284838ad34bf92ce317015299cbfac51319ad9cb93ea7f763f8a`.

### evaluation:515616

Chamadas escritas diretamente neste corpo: `dest.box.uploadFile`, `errorMessage2`, `isBoxFileMissingError`, `new BoxTransferError`, `source.box.downloadFile`.

Alvos de atribuição ou incremento: `data2`.

Alvos de lançamento explícito: `BoxTransferError`, `error63`.

SHA-256 do trecho: `667a3c83f2ab024cfd9c617a4863cf28eaf7ddc311134fea72a96ad5d8a1d13e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
