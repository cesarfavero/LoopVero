# `ownerVoiceWakeText`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/voice-call/owner-voice-wake.ts` · [README do módulo](../../../../../../modules/core/runner/voice-call/owner-voice-wake-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:752185-752203](../../../../../../../reference/runtime/host-main.cjs#L752185-L752203) | `FunctionDeclaration` | não | `text3` |
| [evaluation:529883-529901](../../../../../../../reference/runtime/sand-eval-runner.cjs#L529883-L529901) | `FunctionDeclaration` | não | `text3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:752185-752203](../../../../../../../reference/runtime/host-main.cjs#L752185-L752203) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:529883-529901](../../../../../../../reference/runtime/sand-eval-runner.cjs#L529883-L529901) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:752185

Chamadas escritas diretamente neste corpo: `.replace`, `.trim`, `WAKE_OPENINGS.includes`, `addresses.map`, `lines2.flatMap`, `new Set`, `said.join`, `text3.split`.

SHA-256 do trecho: `33b3affd06202bc3b29cafe278351e17095caca703caf6ade83f8cea55caf3ef`.

### evaluation:529883

Chamadas escritas diretamente neste corpo: `.replace`, `.trim`, `WAKE_OPENINGS.includes`, `addresses.map`, `lines2.flatMap`, `new Set`, `said.join`, `text3.split`.

SHA-256 do trecho: `33b3affd06202bc3b29cafe278351e17095caca703caf6ade83f8cea55caf3ef`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
