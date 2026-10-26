# `toolsWithheldBy`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tool-policy/agent-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tool-policy/agent-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:756663-756670](../../../../../../../reference/runtime/host-main.cjs#L756663-L756670) | `FunctionDeclaration` | não | `keepList` |
| [evaluation:542583-542590](../../../../../../../reference/runtime/sand-eval-runner.cjs#L542583-L542590) | `FunctionDeclaration` | não | `keepList` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:756663-756670](../../../../../../../reference/runtime/host-main.cjs#L756663-L756670) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:542583-542590](../../../../../../../reference/runtime/sand-eval-runner.cjs#L542583-L542590) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:756663

Chamadas escritas diretamente neste corpo: `.map`, `GROK_BOT_TOOL_IDS.filter`, `new Map`, `toolStrings`.

SHA-256 do trecho: `e7fd28517bbf5c434a1bccc1f134d43188fca5e1ad93b4bb135729cd6190eed0`.

### evaluation:542583

Chamadas escritas diretamente neste corpo: `.map`, `GROK_BOT_TOOL_IDS.filter`, `new Map`, `toolStrings`.

SHA-256 do trecho: `e7fd28517bbf5c434a1bccc1f134d43188fca5e1ad93b4bb135729cd6190eed0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
