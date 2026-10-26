# `createListMachinesTool`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/sand-user-computer-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-user-computer-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:778310-778333](../../../../../../../reference/runtime/host-main.cjs#L778310-L778333) | `FunctionDeclaration` | não | `userComputers` |
| [evaluation:578045-578068](../../../../../../../reference/runtime/sand-eval-runner.cjs#L578045-L578068) | `FunctionDeclaration` | não | `userComputers` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:778310-778333](../../../../../../../reference/runtime/host-main.cjs#L778310-L778333) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:578045-578068](../../../../../../../reference/runtime/sand-eval-runner.cjs#L578045-L578068) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:778310

Chamadas escritas diretamente neste corpo: `defineCommunicateTool`, `external_exports2.object`.

SHA-256 do trecho: `a95e5f614761db0ebccf4e9c3af50db33a0980fd345027915864ba53f149f83c`.

### evaluation:578045

Chamadas escritas diretamente neste corpo: `defineCommunicateTool`, `external_exports3.object`.

SHA-256 do trecho: `462d7f54b4f5b9361243b62ec0f7d5e697eea5a6f2b364ea8dda4d1f78ed0a30`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
