# `noteCaptchaHandOff`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/observability/README.md).

**Módulo:** `core/runner/captcha/captcha-telemetry.ts` · [README do módulo](../../../../../../modules/core/runner/captcha/captcha-telemetry-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:699009-699011](../../../../../../../reference/runtime/host-main.cjs#L699009-L699011) | `FunctionDeclaration` | não | `ctx, handoff2` |
| [evaluation:489597-489599](../../../../../../../reference/runtime/sand-eval-runner.cjs#L489597-L489599) | `FunctionDeclaration` | não | `ctx, handoff2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:699009-699011](../../../../../../../reference/runtime/host-main.cjs#L699009-L699011) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:489597-489599](../../../../../../../reference/runtime/sand-eval-runner.cjs#L489597-L489599) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:699009

Chamadas escritas diretamente neste corpo: `.handOff`, `ctx.get`.

SHA-256 do trecho: `d1bfe277abf94a011b5b996f3dcad7d40dee506ff714a71b2a66711eb1cb105e`.

### evaluation:489597

Chamadas escritas diretamente neste corpo: `.handOff`, `ctx.get`.

SHA-256 do trecho: `d1bfe277abf94a011b5b996f3dcad7d40dee506ff714a71b2a66711eb1cb105e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
