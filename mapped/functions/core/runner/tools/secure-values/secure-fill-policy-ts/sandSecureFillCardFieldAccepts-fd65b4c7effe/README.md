# `sandSecureFillCardFieldAccepts`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/secure-values/secure-fill-policy.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/secure-values/secure-fill-policy-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:766726-766733](../../../../../../../../reference/runtime/host-main.cjs#L766726-L766733) | `FunctionDeclaration` | não | `field, target` |
| [evaluation:562239-562246](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L562239-L562246) | `FunctionDeclaration` | não | `field, target` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:766726-766733](../../../../../../../../reference/runtime/host-main.cjs#L766726-L766733) | 3 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:562239-562246](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L562239-L562246) | 3 | 0 | 0 | 4 | 0 | 0 |

### host:766726

Chamadas escritas diretamente neste corpo: `.includes`, `.replace`, `.split`, `CARD_SECURITY_CODE_DESCRIPTOR.test`, `control.autoComplete.toLowerCase`, `userFormControlLooksLikeCardNumber`.

SHA-256 do trecho: `45294b0b2e628a8360df7067de796d9d3ff4c34557807cdf3b4bdeba0c88691b`.

### evaluation:562239

Chamadas escritas diretamente neste corpo: `.includes`, `.replace`, `.split`, `CARD_SECURITY_CODE_DESCRIPTOR.test`, `control.autoComplete.toLowerCase`, `userFormControlLooksLikeCardNumber`.

SHA-256 do trecho: `45294b0b2e628a8360df7067de796d9d3ff4c34557807cdf3b4bdeba0c88691b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
