# `renderRemoteBoxSection`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/prompt-sections/box-prompt.ts` · [README do módulo](../../../../../../modules/core/runner/prompt-sections/box-prompt-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:529007-529038](../../../../../../../reference/runtime/sand-eval-runner.cjs#L529007-L529038) | `FunctionDeclaration` | não | `host, canUseUserComputer` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:529007-529038](../../../../../../../reference/runtime/sand-eval-runner.cjs#L529007-L529038) | 6 | 0 | 0 | 2 | 0 | 0 |

### evaluation:529007

Chamadas escritas diretamente neste corpo: `.join`, `offersShellUserComputer`, `renderComputerUseRemoteBoxSection`.

Alvos de atribuição ou incremento: `boxIntro`, `fileTransferLines`, `toolTargetLines`.

SHA-256 do trecho: `60f31566fb94b3452b75501fc94fb82bc0c55b5c9467f99ce74e78acec316b43`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
