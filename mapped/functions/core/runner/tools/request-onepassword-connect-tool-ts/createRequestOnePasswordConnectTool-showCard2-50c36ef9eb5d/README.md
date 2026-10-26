# `createRequestOnePasswordConnectTool/showCard2`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/request-onepassword-connect-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/request-onepassword-connect-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:751656-751668](../../../../../../../reference/runtime/host-main.cjs#L751656-L751668) | `ArrowFunctionExpression` | não | `ctx, taskId` |
| [evaluation:524723-524735](../../../../../../../reference/runtime/sand-eval-runner.cjs#L524723-L524735) | `ArrowFunctionExpression` | não | `ctx, taskId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:751656-751668](../../../../../../../reference/runtime/host-main.cjs#L751656-L751668) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:524723-524735](../../../../../../../reference/runtime/sand-eval-runner.cjs#L524723-L524735) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:751656

Chamadas escritas diretamente neste corpo: `Date.now`, `cardOffered.increment`, `deps.onSendMessage`.

Alvos de atribuição ou incremento: `cardSent`.

SHA-256 do trecho: `42323ecc2cff051b28297a536d1f217f2d95af0f5b7be7703db4fdaf465a729b`.

### evaluation:524723

Chamadas escritas diretamente neste corpo: `Date.now`, `cardOffered.increment`, `deps.onSendMessage`.

Alvos de atribuição ou incremento: `cardSent`.

SHA-256 do trecho: `42323ecc2cff051b28297a536d1f217f2d95af0f5b7be7703db4fdaf465a729b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
