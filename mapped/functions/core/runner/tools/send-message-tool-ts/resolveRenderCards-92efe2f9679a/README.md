# `resolveRenderCards`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/send-message-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/send-message-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:760794-760811](../../../../../../../reference/runtime/host-main.cjs#L760794-L760811) | `FunctionDeclaration` | sim | `ctx, rawArgs, renderCards` |
| [evaluation:551609-551626](../../../../../../../reference/runtime/sand-eval-runner.cjs#L551609-L551626) | `FunctionDeclaration` | sim | `ctx, rawArgs, renderCards` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:760794-760811](../../../../../../../reference/runtime/host-main.cjs#L760794-L760811) | 6 | 1 | 1 | 2 | 3 | 0 |
| [evaluation:551609-551626](../../../../../../../reference/runtime/sand-eval-runner.cjs#L551609-L551626) | 6 | 1 | 1 | 2 | 3 | 0 |

### host:760794

Chamadas escritas diretamente neste corpo: `entries.push`, `logShimFiring`, `new SandToolInputError`, `renderCardIdLeniency.applied`, `renderCardShownError`, `renderCards.offered`, `renderCards.registry.isShown`, `renderCards.registry.lookup`, `unknownRenderCardError`.

Alvos de lançamento explícito: `SandToolInputError`.

SHA-256 do trecho: `5571e352d4ee7f6f213d300b8cc4518a69f091a3930a7370cc8ccf7a3953ea59`.

### evaluation:551609

Chamadas escritas diretamente neste corpo: `entries.push`, `logShimFiring`, `new SandToolInputError`, `renderCardIdLeniency.applied`, `renderCardShownError`, `renderCards.offered`, `renderCards.registry.isShown`, `renderCards.registry.lookup`, `unknownRenderCardError`.

Alvos de lançamento explícito: `SandToolInputError`.

SHA-256 do trecho: `5571e352d4ee7f6f213d300b8cc4518a69f091a3930a7370cc8ccf7a3953ea59`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
