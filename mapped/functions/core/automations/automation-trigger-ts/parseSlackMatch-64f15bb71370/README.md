# `parseSlackMatch`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/automations/README.md).

**Módulo:** `core/automations/automation-trigger.ts` · [README do módulo](../../../../../modules/core/automations/automation-trigger-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:716036-716066](../../../../../../reference/runtime/host-main.cjs#L716036-L716066) | `FunctionDeclaration` | não | `value` |
| [evaluation:527719-527749](../../../../../../reference/runtime/sand-eval-runner.cjs#L527719-L527749) | `FunctionDeclaration` | não | `value` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:716036-716066](../../../../../../reference/runtime/host-main.cjs#L716036-L716066) | 9 | 0 | 0 | 6 | 0 | 0 |
| [evaluation:527719-527749](../../../../../../reference/runtime/sand-eval-runner.cjs#L527719-L527749) | 9 | 0 | 0 | 6 | 0 | 0 |

### host:716036

Chamadas escritas diretamente neste corpo: `isUnknownRecord2`, `normalizeScopeToken`, `parseReactionEmoji`, `triggerParseFailure`.

SHA-256 do trecho: `933ccf9d9946f9a942d2e59b5c15acba448a89e359c72bd9f3f2fd836e9cc128`.

### evaluation:527719

Chamadas escritas diretamente neste corpo: `isUnknownRecord2`, `normalizeScopeToken`, `parseReactionEmoji`, `triggerParseFailure`.

SHA-256 do trecho: `933ccf9d9946f9a942d2e59b5c15acba448a89e359c72bd9f3f2fd836e9cc128`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
