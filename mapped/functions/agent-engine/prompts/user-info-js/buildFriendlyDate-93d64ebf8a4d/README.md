# `buildFriendlyDate`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-engine/prompts/user-info.js` · [README do módulo](../../../../../modules/agent-engine/prompts/user-info-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:639918-639946](../../../../../../reference/runtime/host-main.cjs#L639918-L639946) | `FunctionDeclaration` | não | `date6, timeZone` |
| [evaluation:430532-430560](../../../../../../reference/runtime/sand-eval-runner.cjs#L430532-L430560) | `FunctionDeclaration` | não | `date6, timeZone` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:639918-639946](../../../../../../reference/runtime/host-main.cjs#L639918-L639946) | 2 | 1 | 0 | 2 | 0 | 1 |
| [evaluation:430532-430560](../../../../../../reference/runtime/sand-eval-runner.cjs#L430532-L430560) | 2 | 1 | 0 | 2 | 0 | 1 |

### host:639918

Chamadas escritas diretamente neste corpo: `.toString`, `Number.parseInt`, `formatter.formatToParts`, `new Intl.DateTimeFormat`.

Alvos de atribuição ou incremento: `partLookup[computed]`.

SHA-256 do trecho: `b3f4278b16e0e8e555f3d5c8631e48daa3231e135969c757c3d6d2a37a832d0f`.

### evaluation:430532

Chamadas escritas diretamente neste corpo: `.toString`, `Number.parseInt`, `formatter.formatToParts`, `new Intl.DateTimeFormat`.

Alvos de atribuição ou incremento: `partLookup[computed]`.

SHA-256 do trecho: `b3f4278b16e0e8e555f3d5c8631e48daa3231e135969c757c3d6d2a37a832d0f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
