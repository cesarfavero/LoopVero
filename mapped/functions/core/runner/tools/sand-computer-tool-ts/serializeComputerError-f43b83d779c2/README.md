# `serializeComputerError`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/sand-computer-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-computer-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:777269-777279](../../../../../../../reference/runtime/host-main.cjs#L777269-L777279) | `FunctionDeclaration` | não | `error64, args` |
| [evaluation:576914-576924](../../../../../../../reference/runtime/sand-eval-runner.cjs#L576914-L576924) | `FunctionDeclaration` | não | `error63, args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:777269-777279](../../../../../../../reference/runtime/host-main.cjs#L777269-L777279) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:576914-576924](../../../../../../../reference/runtime/sand-eval-runner.cjs#L576914-L576924) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:777269

Chamadas escritas diretamente neste corpo: `new ComputerUseError`, `new ComputerUseResult`, `new ComputerUseToolCall`, `wrapToolCall`.

SHA-256 do trecho: `fcff9e30bd730e435de1244c612cc4bb70bcde7400e4bbc3c7d11d11814f5fdc`.

### evaluation:576914

Chamadas escritas diretamente neste corpo: `new ComputerUseError`, `new ComputerUseResult`, `new ComputerUseToolCall`, `wrapToolCall`.

SHA-256 do trecho: `4306a72dbdd29322b089de1186c9cb99e41fb415f08ad572826ced62add7c026`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
