# `hostMatchesConsentedUserFormHost`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/sand-browser-fill.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-browser-fill-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:727276-727287](../../../../../../../reference/runtime/host-main.cjs#L727276-L727287) | `FunctionDeclaration` | não | `host, consentedHost` |
| [evaluation:561782-561793](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561782-L561793) | `FunctionDeclaration` | não | `host, consentedHost` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:727276-727287](../../../../../../../reference/runtime/host-main.cjs#L727276-L727287) | 3 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:561782-561793](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561782-L561793) | 3 | 0 | 0 | 4 | 0 | 0 |

### host:727276

Chamadas escritas diretamente neste corpo: `consentedHost.toLowerCase`, `consentedRaw.replace`, `host.toLowerCase`, `isLoopbackUserFormHost`, `liveRaw.replace`.

SHA-256 do trecho: `c85c578bc9efd6b23ac2fd51abc183a1b2d4fff04688296c8390bb8cb7774b62`.

### evaluation:561782

Chamadas escritas diretamente neste corpo: `consentedHost.toLowerCase`, `consentedRaw.replace`, `host.toLowerCase`, `isLoopbackUserFormHost`, `liveRaw.replace`.

SHA-256 do trecho: `c1d49b1d6c05d75e2a63c706bc18d422a4a1b9cf1f9430be10a8549754c443e0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
