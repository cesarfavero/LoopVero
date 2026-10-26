# `createFileTransferTools`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/sand-file-transfer-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-file-transfer-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:777716-777767](../../../../../../../reference/runtime/host-main.cjs#L777716-L777767) | `FunctionDeclaration` | não | `controller, machineIds` |
| [evaluation:577411-577462](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577411-L577462) | `FunctionDeclaration` | não | `controller, machineIds` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:777716-777767](../../../../../../../reference/runtime/host-main.cjs#L777716-L777767) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:577411-577462](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577411-L577462) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:777716

Chamadas escritas diretamente neste corpo: `defineCommunicateTool`, `extendRequiredMachineIdParameter`, `withGatedArgumentAlias`.

SHA-256 do trecho: `9b5bba5ca8664e33d9a09175154f1ad45d6d234ca517c65108858aa10c0ad296`.

### evaluation:577411

Chamadas escritas diretamente neste corpo: `defineCommunicateTool`, `extendRequiredMachineIdParameter`, `withGatedArgumentAlias`.

SHA-256 do trecho: `ce90940a70dec9446353bf303e96632a7a79384798a57d5ee9577f60dea612b8`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
