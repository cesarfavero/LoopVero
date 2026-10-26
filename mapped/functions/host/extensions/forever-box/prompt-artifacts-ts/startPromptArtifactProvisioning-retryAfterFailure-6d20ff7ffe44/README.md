# `startPromptArtifactProvisioning/retryAfterFailure`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/prompts/README.md).

**Módulo:** `host/extensions/forever-box/prompt-artifacts.ts` · [README do módulo](../../../../../../modules/host/extensions/forever-box/prompt-artifacts-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:680812-680836](../../../../../../../reference/runtime/host-main.cjs#L680812-L680836) | `ArrowFunctionExpression` | não | `error64` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:680812-680836](../../../../../../../reference/runtime/host-main.cjs#L680812-L680836) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:680812

Chamadas escritas diretamente neste corpo: `Math.round`, `clearRetry`, `delay5.elapsed.then`, `deps.log`, `errorMessage`, `retry2.schedule`.

Alvos de atribuição ou incremento: `failures2`, `pendingRetry`.

SHA-256 do trecho: `8d53d9e670e65abca494c86397ed937b08ce9633904a85daa07e1808f29b06d7`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
