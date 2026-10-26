# `noteCaptchaAttempt`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/observability/README.md).

**Módulo:** `core/runner/captcha/captcha-telemetry.ts` · [README do módulo](../../../../../../modules/core/runner/captcha/captcha-telemetry-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:699006-699008](../../../../../../../reference/runtime/host-main.cjs#L699006-L699008) | `FunctionDeclaration` | não | `ctx, attempt` |
| [evaluation:489594-489596](../../../../../../../reference/runtime/sand-eval-runner.cjs#L489594-L489596) | `FunctionDeclaration` | não | `ctx, attempt` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:699006-699008](../../../../../../../reference/runtime/host-main.cjs#L699006-L699008) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:489594-489596](../../../../../../../reference/runtime/sand-eval-runner.cjs#L489594-L489596) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:699006

Chamadas escritas diretamente neste corpo: `.noteAttempt`, `ctx.get`.

SHA-256 do trecho: `9713ef0479b2dab08ec2743a83e915db4375a2b9a10cb7c08298a41f18de4629`.

### evaluation:489594

Chamadas escritas diretamente neste corpo: `.noteAttempt`, `ctx.get`.

SHA-256 do trecho: `9713ef0479b2dab08ec2743a83e915db4375a2b9a10cb7c08298a41f18de4629`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
