# `createCredentialProviderStatusTool/execute`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/sand-credential-provider-status-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-credential-provider-status-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:751750-751762](../../../../../../../reference/runtime/host-main.cjs#L751750-L751762) | `ArrowFunctionExpression` | sim | `_ctx, _args, deps` |
| [evaluation:524816-524828](../../../../../../../reference/runtime/sand-eval-runner.cjs#L524816-L524828) | `ArrowFunctionExpression` | sim | `_ctx, _args, deps` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:751750-751762](../../../../../../../reference/runtime/host-main.cjs#L751750-L751762) | 3 | 0 | 3 | 4 | 0 | 1 |
| [evaluation:524816-524828](../../../../../../../reference/runtime/sand-eval-runner.cjs#L524816-L524828) | 3 | 0 | 3 | 4 | 0 | 1 |

### host:751750

Chamadas escritas diretamente neste corpo: `deps.getStatus`, `errorLogTag`, `loginRoute.route`, `renderConnectedStatus`, `renderNotConnectedRoute`.

SHA-256 do trecho: `27a5696cb5a4d53ce0e033916fa47d5421b30071c5863142973476480ff84cf9`.

### evaluation:524816

Chamadas escritas diretamente neste corpo: `deps.getStatus`, `errorLogTag`, `loginRoute.route`, `renderConnectedStatus`, `renderNotConnectedRoute`.

SHA-256 do trecho: `4f5e7c632736f3bcdc3f35eac30afe6ca153aa2896a02ea420e7e999767e1ab1`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
