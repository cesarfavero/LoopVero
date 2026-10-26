# `checkFolderTargets`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/upload-file-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/upload-file-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:774635-774641](../../../../../../../reference/runtime/host-main.cjs#L774635-L774641) | `FunctionDeclaration` | não | `destination, service` |
| [evaluation:574238-574244](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574238-L574244) | `FunctionDeclaration` | não | `destination, service` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:774635-774641](../../../../../../../reference/runtime/host-main.cjs#L774635-L774641) | 1 | 0 | 0 | 0 | 1 | 0 |
| [evaluation:574238-574244](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574238-L574244) | 1 | 0 | 0 | 0 | 1 | 0 |

### host:774635

Chamadas escritas diretamente neste corpo: `isSharepointConnectorService`, `new SandToolInputError`.

Alvos de lançamento explícito: `SandToolInputError`.

SHA-256 do trecho: `1c6da4548c652e34377eec6673309d8f5f1b3e91e324cc1d478f34055e6b6f97`.

### evaluation:574238

Chamadas escritas diretamente neste corpo: `isSharepointConnectorService`, `new SandToolInputError`.

Alvos de lançamento explícito: `SandToolInputError`.

SHA-256 do trecho: `1c6da4548c652e34377eec6673309d8f5f1b3e91e324cc1d478f34055e6b6f97`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
