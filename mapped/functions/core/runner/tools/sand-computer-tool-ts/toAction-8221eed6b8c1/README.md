# `toAction`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/sand-computer-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-computer-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:777120-777191](../../../../../../../reference/runtime/host-main.cjs#L777120-L777191) | `FunctionDeclaration` | não | `args` |
| [evaluation:576765-576836](../../../../../../../reference/runtime/sand-eval-runner.cjs#L576765-L576836) | `FunctionDeclaration` | não | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:777120-777191](../../../../../../../reference/runtime/host-main.cjs#L777120-L777191) | 9 | 0 | 0 | 8 | 1 | 0 |
| [evaluation:576765-576836](../../../../../../../reference/runtime/sand-eval-runner.cjs#L576765-L576836) | 9 | 0 | 0 | 8 | 1 | 0 |

### host:777120

Chamadas escritas diretamente neste corpo: `coordinate`, `dragPath`, `new ClickAction`, `new ComputerUseAction`, `new DragAction`, `new KeyAction`, `new MouseMoveAction`, `new SandToolInputError`, `new ScreenshotAction`, `new ScrollAction`, `new TypeAction`, `new WaitAction`, `path33.map`.

Alvos de lançamento explícito: `SandToolInputError`.

SHA-256 do trecho: `efa57bc6580df185ea9ae1ac220fc59fba037dc9c240002fef1eb8cecea93414`.

### evaluation:576765

Chamadas escritas diretamente neste corpo: `coordinate`, `dragPath`, `new ClickAction`, `new ComputerUseAction`, `new DragAction`, `new KeyAction`, `new MouseMoveAction`, `new SandToolInputError`, `new ScreenshotAction`, `new ScrollAction`, `new TypeAction`, `new WaitAction`, `path33.map`.

Alvos de lançamento explícito: `SandToolInputError`.

SHA-256 do trecho: `efa57bc6580df185ea9ae1ac220fc59fba037dc9c240002fef1eb8cecea93414`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
