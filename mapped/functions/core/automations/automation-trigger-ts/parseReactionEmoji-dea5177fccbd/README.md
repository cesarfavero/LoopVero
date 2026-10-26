# `parseReactionEmoji`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/automations/README.md).

**Módulo:** `core/automations/automation-trigger.ts` · [README do módulo](../../../../../modules/core/automations/automation-trigger-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:716024-716035](../../../../../../reference/runtime/host-main.cjs#L716024-L716035) | `FunctionDeclaration` | não | `raw` |
| [evaluation:527707-527718](../../../../../../reference/runtime/sand-eval-runner.cjs#L527707-L527718) | `FunctionDeclaration` | não | `raw` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:716024-716035](../../../../../../reference/runtime/host-main.cjs#L716024-L716035) | 4 | 1 | 0 | 2 | 0 | 0 |
| [evaluation:527707-527718](../../../../../../reference/runtime/sand-eval-runner.cjs#L527707-L527718) | 4 | 1 | 0 | 2 | 0 | 0 |

### host:716024

Chamadas escritas diretamente neste corpo: `Array.isArray`, `REACTION_EMOJI_PATTERN.test`, `names3.includes`, `names3.push`, `normalizeReactionEmoji`.

SHA-256 do trecho: `b1296e4211dcf9dead2dbe353f189dabe3b8aa0314bb76214ac080bdf620bc6f`.

### evaluation:527707

Chamadas escritas diretamente neste corpo: `Array.isArray`, `REACTION_EMOJI_PATTERN.test`, `names3.includes`, `names3.push`, `normalizeReactionEmoji`.

SHA-256 do trecho: `b1296e4211dcf9dead2dbe353f189dabe3b8aa0314bb76214ac080bdf620bc6f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
