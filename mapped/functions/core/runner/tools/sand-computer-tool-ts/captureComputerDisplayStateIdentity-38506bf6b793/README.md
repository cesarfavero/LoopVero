# `captureComputerDisplayStateIdentity`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/sand-computer-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-computer-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:777352-777397](../../../../../../../reference/runtime/host-main.cjs#L777352-L777397) | `FunctionDeclaration` | sim | `ctx, resourceAccessor, toolCallId, resolveDisplayNumber` |
| [evaluation:576997-577042](../../../../../../../reference/runtime/sand-eval-runner.cjs#L576997-L577042) | `FunctionDeclaration` | sim | `ctx, resourceAccessor, toolCallId, resolveDisplayNumber` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:777352-777397](../../../../../../../reference/runtime/host-main.cjs#L777352-L777397) | 4 | 0 | 2 | 2 | 4 | 2 |
| [evaluation:576997-577042](../../../../../../../reference/runtime/sand-eval-runner.cjs#L576997-L577042) | 4 | 0 | 2 | 2 | 4 | 2 |

### host:777352

Chamadas escritas diretamente neste corpo: `.execute`, `buildHostShellArgs`, `classifyNavigationProbeResult`, `computeSandComputerPageStateIdentity`, `navigationProbeCommand`, `new SandComputerAutoReviewBlockedError`, `resolveDisplayNumber`, `resourceAccessor.get`.

Alvos de atribuição ou incremento: `displayNumber`, `result`.

Alvos de lançamento explícito: `SandComputerAutoReviewBlockedError`.

SHA-256 do trecho: `e56f6113caf41ef4ac1a15c4585170471a3ccd629cb44d426b3f64da0fbff393`.

### evaluation:576997

Chamadas escritas diretamente neste corpo: `.execute`, `buildHostShellArgs`, `classifyNavigationProbeResult`, `computeSandComputerPageStateIdentity`, `navigationProbeCommand`, `new SandComputerAutoReviewBlockedError`, `resolveDisplayNumber`, `resourceAccessor.get`.

Alvos de atribuição ou incremento: `displayNumber`, `result`.

Alvos de lançamento explícito: `SandComputerAutoReviewBlockedError`.

SHA-256 do trecho: `e56f6113caf41ef4ac1a15c4585170471a3ccd629cb44d426b3f64da0fbff393`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
