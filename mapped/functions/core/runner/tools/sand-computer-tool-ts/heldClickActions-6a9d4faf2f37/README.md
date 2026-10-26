# `heldClickActions`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/sand-computer-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-computer-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:777094-777113](../../../../../../../reference/runtime/host-main.cjs#L777094-L777113) | `FunctionDeclaration` | não | `args, holdDurationMs` |
| [evaluation:576739-576758](../../../../../../../reference/runtime/sand-eval-runner.cjs#L576739-L576758) | `FunctionDeclaration` | não | `args, holdDurationMs` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:777094-777113](../../../../../../../reference/runtime/host-main.cjs#L777094-L777113) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:576739-576758](../../../../../../../reference/runtime/sand-eval-runner.cjs#L576739-L576758) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:777094

Chamadas escritas diretamente neste corpo: `coordinate`, `new ComputerUseAction`, `new MouseDownAction`, `new MouseMoveAction`, `new MouseUpAction`, `new WaitAction`.

SHA-256 do trecho: `d5f4dc8904aa065680cf97c4831bb727d6224b002889eb6c2177990b43aa02b1`.

### evaluation:576739

Chamadas escritas diretamente neste corpo: `coordinate`, `new ComputerUseAction`, `new MouseDownAction`, `new MouseMoveAction`, `new MouseUpAction`, `new WaitAction`.

SHA-256 do trecho: `d5f4dc8904aa065680cf97c4831bb727d6224b002889eb6c2177990b43aa02b1`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
